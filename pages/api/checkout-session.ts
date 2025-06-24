import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

// Helper to determine if the current environment is production-like
function isProductionEnvironment(req: NextApiRequest): boolean {
  // Check common environment variables that indicate production
  if (process.env.NODE_ENV === 'production') return true;
  if (process.env.VERCEL_ENV === 'production') return true; // Vercel
  if (process.env.CONTEXT === 'production') return true; // Netlify

  // Fallback: check host if available (less reliable for API routes)
  const host = req.headers.host || process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL || process.env.URL;
  if (host) {
    try {
      const hostname = host.startsWith('http') ? new URL(host).hostname : host;
      // Add your actual production domain here
      return hostname === 'app.ziontechgroup.com' || hostname === 'zion.app';
    } catch {
      // ignore parse errors
    }
  }
  return false;
}

function getStripeSecretKey(isProdEnv: boolean): string {
  const liveSecretKey = process.env.STRIPE_SECRET_KEY;
  const testSecretKey = process.env.STRIPE_TEST_SECRET_KEY;
  const forceTestMode = process.env.STRIPE_TEST_MODE === 'true';

  if (forceTestMode) {
    if (!testSecretKey) {
      throw new Error('STRIPE_TEST_MODE is true, but STRIPE_TEST_SECRET_KEY is not set.');
    }
    console.log('Stripe API: Forced test mode. Using test secret key.');
    return testSecretKey;
  }

  if (isProdEnv) {
    if (!liveSecretKey || !liveSecretKey.startsWith('sk_live_')) {
      // In a real production environment, you might want to throw an error if a live key isn't set or is invalid.
      // Or, for safety during setup/testing on a "production-like" env, fall back to test if live is missing.
      // However, the problem asks to ensure test mode works, so being strict about live key in prod is good.
      console.error('Stripe API: Production environment, but STRIPE_SECRET_KEY is missing or not a live key.');
      if (testSecretKey) {
         console.warn('Stripe API: Production environment, but live key issue. Falling back to TEST key for safety. THIS SHOULD BE FIXED FOR ACTUAL PRODUCTION.');
         return testSecretKey;
      }
      throw new Error('STRIPE_SECRET_KEY is missing or invalid for production environment.');
    }
    console.log('Stripe API: Production environment. Using live secret key.');
    return liveSecretKey;
  }

  // Default to test key for non-production environments
  if (!testSecretKey) {
    // If even test key is missing in non-prod, it's an issue.
    throw new Error('STRIPE_TEST_SECRET_KEY is not set for non-production environment.');
  }
  console.log('Stripe API: Non-production environment. Using test secret key.');
  return testSecretKey;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutRequest {
  cartItems: CartItem[];
  customer_email?: string;
  shipping_address?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { cartItems, customer_email, shipping_address }: CheckoutRequest = req.body;

    // Validate required fields
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ 
        error: 'Cart items are required and must be a non-empty array' 
      });
    }

    if (!customer_email) {
      return res.status(400).json({ 
        error: 'Customer email is required' 
      });
    }

    // Convert cart items to Stripe line items
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = cartItems.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: `Professional datacenter equipment - ${item.name}`,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Calculate totals for reference
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const hasShipping = subtotal <= 100; // Free shipping over $100

    // Add shipping if applicable
    if (hasShipping) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Shipping',
            description: 'Standard shipping (Free on orders over $100)',
          },
          unit_amount: 1500, // $15.00 in cents
        },
        quantity: 1,
      });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email,
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/cart`,
      metadata: {
        customer_email,
        shipping_address: shipping_address || '',
        item_count: cartItems.length.toString(),
        subtotal: subtotal.toString(),
      },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'], // Adjust as needed
      },
      billing_address_collection: 'required',
      payment_intent_data: {
        metadata: {
          customer_email,
          order_type: 'equipment_purchase',
        },
      },
    });

    console.log('Checkout session created:', {
      sessionId: session.id,
      customerEmail: customer_email,
      itemCount: cartItems.length,
      subtotal,
    });

    return res.status(200).json({
      sessionId: session.id,
      url: session.url,
    });

  } catch (error: any) {
    console.error('Checkout session creation error:', error);
    
    // Handle specific Stripe errors
    if (error.type === 'StripeCardError') {
      return res.status(400).json({
        error: 'Payment processing error',
        details: error.message,
      });
    }

    if (error.type === 'StripeInvalidRequestError') {
      return res.status(400).json({
        error: 'Invalid checkout request',
        details: error.message,
      });
    }

    // Handle missing Stripe key
    if (error.message?.includes('No API key provided')) {
      return res.status(500).json({
        error: 'Payment system configuration error',
        details: process.env.NODE_ENV === 'development' 
          ? 'Stripe secret key not configured' 
          : 'Payment system temporarily unavailable',
      });
    }

    // Generic error response
    return res.status(500).json({
      error: 'Failed to create checkout session',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
}
