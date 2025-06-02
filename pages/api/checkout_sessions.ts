import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  const errorMessage = 'CRITICAL: STRIPE_SECRET_KEY is missing. Service cannot start.';
  console.error(errorMessage);
  // This will prevent the API route from being available if not configured.
  // In a real app, you might have a more graceful way to handle this at startup.
  throw new Error(errorMessage);
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16', // Use a fixed API version
  typescript: true, // Enable TypeScript support in the Stripe library
});

interface CheckoutRequestBody {
  productId?: string;
  userId?: string; // Assuming userId might also be part of the body
}

interface CheckoutSuccessResponse {
  sessionId: string;
}

interface ErrorResponse {
  error: string;
  details?: string; // Optional for more detailed error messages
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<CheckoutSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { productId, userId } = req.body as CheckoutRequestBody;

  if (!productId) {
    return res.status(400).json({ error: 'Missing productId' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: productId, quantity: 1 }], // price here refers to a Price ID from Stripe
      mode: 'payment',
      success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/checkout/cancel`,
      metadata: { 
        userId: userId || '', // Ensure metadata values are strings, numbers, or null
        productId: productId 
      },
    });

    if (!session.id) {
        // This case should ideally not happen if session creation is successful
        console.error('Stripe session created but missing ID.');
        return res.status(500).json({ error: 'Failed to create checkout session: No session ID returned.'});
    }

    return res.status(200).json({ sessionId: session.id });

  } catch (err: unknown) {
    console.error('Checkout session error:', err);
    let errorMessage = 'An unknown error occurred during checkout.';
    let errorDetails: string | undefined;

    if (err instanceof Stripe.errors.StripeError) {
      // Handle Stripe-specific errors
      errorMessage = err.message;
      if (err.code) errorDetails = `Stripe Error Code: ${err.code}`;
      // Set status based on Stripe error type if appropriate, otherwise default to 500
      switch (err.type) {
        case 'StripeCardError':
          return res.status(400).json({ error: errorMessage, details: errorDetails });
        case 'StripeInvalidRequestError':
          return res.status(400).json({ error: errorMessage, details: errorDetails });
        // Add other Stripe error types as needed
        default:
          return res.status(500).json({ error: errorMessage, details: errorDetails });
      }
    } else if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }
    
    return res.status(500).json({ error: errorMessage, details: errorDetails });
  }
}
