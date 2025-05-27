"use client";

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { Heart, Code, Lightbulb, Users } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react'; // Added useEffect
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation'; // Added useSearchParams

// Initialize Stripe.js with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const initiatives = [
  {
    title: 'Open Source Development',
    description: 'Support our open source projects and contribute to the tech community.',
    icon: Code,
  },
  {
    title: 'Research & Innovation',
    description: 'Help us push the boundaries of technology and create innovative solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Community Growth',
    description: 'Enable us to build and nurture a thriving tech community.',
    icon: Users,
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const searchParams = useSearchParams(); // For reading URL parameters

  const predefinedAmounts = [10, 25, 50, 100];

  useEffect(() => {
    // Check for query parameters from Stripe redirect
    const status = searchParams.get('status');
    const sessionId = searchParams.get('session_id');

    if (status === 'success' && sessionId) {
      setMessage({ type: 'success', text: 'Thank you for your generous donation! Your contribution is greatly appreciated.' });
      // Optionally, you could verify the session server-side here for extra security
      // and then clear the cart/form or perform other success actions.
      setSelectedAmount(null);
      setCustomAmount("");
      setFullName("");
      setEmail("");
    } else if (status === 'cancelled') {
      setMessage({ type: 'error', text: 'Your donation was cancelled. You can try again or contact us if you faced any issues.' });
    }
  }, [searchParams]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom amount if a predefined one is selected
    setMessage(null);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null); // Clear predefined amount if custom is entered
    if (parseFloat(value) < 1 && value !== "") {
        setMessage({ type: 'error', text: 'Custom amount must be at least $1.' });
    } else {
        setMessage(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setIsLoading(true);

    const finalAmount = selectedAmount || parseFloat(customAmount);

    if (!finalAmount || finalAmount < 1) {
      setMessage({ type: 'error', text: 'Please enter or select a valid donation amount of at least $1.' });
      setIsLoading(false);
      return;
    }
    if (!fullName.trim()) {
      setMessage({ type: 'error', text: 'Please enter your full name.' });
      setIsLoading(false);
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      setIsLoading(false);
      return;
    }

    try {
      // 1. Create a Checkout Session on your server
      const response = await fetch('/api/donate/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount,
          name: fullName,
          email: email,
          description: `Donation of $${finalAmount} by ${fullName}`
        }),
      });

      const sessionData = await response.json();

      if (!response.ok || !sessionData.sessionId) {
        setMessage({ type: 'error', text: sessionData.error || 'Could not create payment session. Please try again.' });
        setIsLoading(false);
        return;
      }

      // 2. Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) {
        setMessage({ type: 'error', text: 'Stripe.js failed to load. Please check your internet connection and try again.' });
        setIsLoading(false);
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionData.sessionId,
      });

      if (error) {
        // If `redirectToCheckout` fails due to a browser issue or network error,
        // display the localized error message to your customer.
        setMessage({ type: 'error', text: error.message || 'An unexpected error occurred during redirect. Please try again.'});
        setIsLoading(false);
      }
      // If redirectToCheckout is successful, the user will be redirected to Stripe and will not see this part.
      // The setIsLoading(false) will effectively be handled by the page reload after redirect or if an error occurs above.

    } catch (error: unknown) {
      console.error("Donation submission error:", error);
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Section className="py-12 md:py-20">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl font-bold mb-4">Support TechArdent</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your donation helps us continue our mission of empowering innovation through accessible technology
            </p>
          </div>

          {/* Donation Form */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Donation Amount ($)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`px-4 py-2.5 border rounded-lg text-center transition-colors text-sm font-medium
                          ${selectedAmount === amount
                            ? 'bg-purple-600 text-white border-purple-600 dark:bg-purple-500 dark:border-purple-500'
                            : 'border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 focus:ring-2 focus:ring-purple-500 focus:outline-none'
                          }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    id="customAmount"
                    name="customAmount"
                    placeholder="Or enter custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    min="1"
                    step="any"
                    className="mt-4 w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>

                {message && (
                  <div className={`p-3 rounded-md text-sm ${message.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'}`}>
                    {message.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || (parseFloat(customAmount) < 1 && customAmount !== "" && selectedAmount === null)}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Donate Now'}
                </button>
              </form>
            </div>
          </div>

          {/* Initiatives */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <initiative.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{initiative.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Why Donate?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Your support enables us to continue developing innovative solutions, maintain our open source projects,
              and build a stronger tech community. Every contribution, no matter the size, makes a difference.
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-600">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Thank you for your support!</span>
            </div>
          </div>
        </FadeIn>
      </Section>
    </Container>
  );
}