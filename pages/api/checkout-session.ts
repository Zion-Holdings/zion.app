import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';


// Note: Stripe instance will be created dynamically with the correct key

// Helper to determine if the current environment is production-like
function isProductionEnvironment(req: NextApiRequest): boolean {
  // Check common environment variables that indicate production
  if (process.env.NODE_ENV === 'production') return true;
  if (process.env.VERCEL_ENV === 'production') return true; // Vercel
  if (process.env.CONTEXT === 'production') return true; // Netlify

  // Fallback: check host if available (less reliable for API routes)
  const hostHeader = req.headers.host || process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL || process.env.URL;
  if (hostHeader) {
    try {
      // Convert to string if it's an array
      const host = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader;
      if (host) {
        const hostname = host.startsWith('http') ? new URL(host).hostname : host;
        // Add your actual production domain here
        return hostname === 'app.ziontechgroup.com' || hostname === 'zion.app';
      }
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

  // For development/test environments, always use test keys
  if (process.env.NODE_ENV !== 'production' || forceTestMode) {
    if (!testSecretKey) {
      logWarn('No STRIPE_TEST_SECRET_KEY configured, using dummy key for development');
      return 'sk_test_dummy_key_for_development_only';
    }
    logInfo('Stripe API: Using test mode');
    return testSecretKey;
  }

  if (isProdEnv) {
    if (!liveSecretKey || !liveSecretKey.startsWith('sk_live_')) {
      logErrorToProduction('Stripe API: Production environment, but STRIPE_SECRET_KEY is missing or not a live key.');
      if (testSecretKey && testSecretKey.startsWith('sk_test_')) {
         logWarn('Stripe API: Production environment, but live key issue. Falling back to TEST key for safety.');
         return testSecretKey;
      }
      throw new Error('STRIPE_SECRET_KEY is missing or invalid for production environment.');
    }
    logInfo('Stripe API: Production environment. Using live secret key.');
    return liveSecretKey;
  }

  // Default to test key for non-production environments
  const key = testSecretKey || 'sk_test_dummy_key_for_development_only';
  logInfo('Stripe API: Non-production environment. Using test secret key.');
  return key;
}

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
    // Initialize Stripe with the correct key for the environment
    const isProdEnv = isProductionEnvironment(req);
    const stripeKey = getStripeSecretKey(isProdEnv);
    
    // Handle dummy/development keys
    if (stripeKey === 'sk_test_dummy_key_for_development_only') {
      logInfo('Using dummy Stripe key - returning mock checkout session');
      return res.status(200).json({
        sessionId: 'cs_test_mock_session_id_' + Date.now(),
        url: `${req.headers.origin}/checkout-test?mock=true`,
        message: 'Mock checkout session created for development'
      });
    }
    
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2024-06-20',
    });

    const { cartItems, customer_email, shipping_address }: CheckoutRequest = req.body as CheckoutRequest;

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
    const lineItems = cartItems.map((item) => ({
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
    
    // Check if any items require physical shipping
    const hasPhysicalItems = cartItems.some((item: any) => 
      !item.type || item.type === 'physical' // Default to physical if type not specified
    );
    const needsShipping = hasPhysicalItems && subtotal <= 100;

    // Add shipping if applicable (only for physical items)
    if (needsShipping) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
                      name: 'Shipping',
          description: 'Standard shipping for physical items (Free on orders over $100)',
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
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/order-confirmation/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/cart`,
      metadata: {
        customer_email,
        shipping_address: shipping_address || '',
        item_count: cartItems.length.toString(),
        subtotal: subtotal.toString(),
      },
      // Only collect shipping address if we have physical items
      ...(hasPhysicalItems && {
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'], // Adjust as needed
        },
      }),
      billing_address_collection: 'required',
      payment_intent_data: {
        metadata: {
          customer_email,
          order_type: 'equipment_purchase',
        },
      },
    });

    logInfo('Checkout session created:', {
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
    logErrorToProduction('Checkout session creation error:', { data: error });
    
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
