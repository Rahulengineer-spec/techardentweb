'use client' // Add this for client-side interactivity

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Check } from 'lucide-react'
import { useState } from 'react' // Import useState
import { EnterpriseContactForm } from '@/components/EnterpriseContactForm' // Import the form

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams and startups',
    price: '$29',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '24/7 support',
      '1GB storage',
      'Basic integrations',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$79',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Advanced integrations',
      'Custom branding',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Unlimited storage',
      'Custom integrations',
      'White-label solution',
      'SLA guarantee',
      'Custom development',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPage() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactFormSubject, setContactFormSubject] = useState('Pricing Inquiry')

  const handleContactSalesClick = (subject?: string) => {
    setContactFormSubject(subject || 'Pricing Inquiry')
    setShowContactForm(true)
  }

  return (
    <>
      <Container>
        <Section className="py-20">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Choose the plan that&apos;s right for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-purple-600 to-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-white text-purple-600 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className={plan.popular ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}>/month</span>}                  
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className={`w-5 h-5 mr-2 ${plan.popular ? 'text-white' : 'text-purple-600'}`} />
                        <span className={plan.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {plan.name === 'Enterprise' ? (
                    <button
                      onClick={() => handleContactSalesClick('Enterprise Plan Inquiry')}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-white text-purple-600 hover:bg-gray-100'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  ) : (
                    <button
                      // Potentially link to a checkout or other action for non-enterprise plans
                      // For example: onClick={() => router.push('/checkout?plan=' + plan.name.toLowerCase())}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-white text-purple-600 hover:bg-gray-100'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Contact our sales team for a tailored plan that meets your specific needs
              </p>
              <button 
                onClick={() => handleContactSalesClick('Custom Solution Inquiry')}
                className="bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </FadeIn>
        </Section>
      </Container>
      {showContactForm && (
        <EnterpriseContactForm
          onClose={() => setShowContactForm(false)}
          subject={contactFormSubject}
        />
      )}
    </>
  )
}