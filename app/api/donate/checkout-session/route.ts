// app/api/donate/checkout-session/route.ts
import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil', // Use the latest API version
  typescript: true,
});

export async function POST(req: NextRequest) {
  try {
    const { amount, name, email, description } = await req.json();

    if (!amount || amount < 1 || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields or invalid amount.' }, { status: 400 });
    }

    // Ensure amount is in cents
    const amountInCents = Math.round(amount * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal', 'link'], // Add more payment methods as needed
      line_items: [
        {
          price_data: {
            currency: 'usd', // Change currency as needed
            product_data: {
              name: description || 'Donation to TechArdent',
              images: [/* Add a URL to your logo if desired */],
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email, // Pre-fill customer email
      metadata: {
        donorName: name, // Store donor's name in metadata
      },
      success_url: `${req.nextUrl.origin}/donate?session_id={CHECKOUT_SESSION_ID}&status=success`,
      cancel_url: `${req.nextUrl.origin}/donate?status=cancelled`,
      // automatic_tax: { enabled: true }, // Enable automatic tax calculation if needed
    });

    if (session.id) {
      return NextResponse.json({ sessionId: session.id });
    } else {
      return NextResponse.json({ error: 'Could not create Stripe session.' }, { status: 500 });
    }

  } catch (error: unknown) {
    console.error('Stripe Checkout Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
