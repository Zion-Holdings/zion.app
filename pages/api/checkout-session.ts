import type { NextApiRequest, NextApiResponse } from 'next';
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { cartItems = [], customer_email } = req.body || {};
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ error: 'Missing cartItems' });
  }

  let stripeKey: string;
  let isSandboxOrder = true; // Default to true, will be updated based on key selection
  try {
    const isProd = isProductionEnvironment(req);
    stripeKey = getStripeSecretKey(isProd);
    isSandboxOrder = stripeKey === process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_TEST_MODE === 'true';

    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' });

    const line_items = cartItems.map((item: any) => {
      if (item.priceId) { // For items with a pre-defined Stripe Price ID
        return { price: item.priceId, quantity: item.quantity || 1 };
      }
      // For items without a Price ID, create price data on the fly
      return {
        price_data: {
          currency: 'usd',
          unit_amount: Math.round((item.price || 0) * 100), // Price in cents
          product_data: { name: item.title || item.name || 'Unnamed Product' },
        },
        quantity: item.quantity || 1,
      };
    });

    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email: customer_email || undefined, // Pass email if available
      success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}&order_id=${orderId}`,
      cancel_url: `${req.headers.origin}/cart`,
      metadata: { orderId },
    });

    // Save order to a local JSON file (for demo/simplicity)
    // In a real app, this would be a database operation.
    const dataDir = path.join(process.cwd(), 'data');
    const file = path.join(dataDir, 'orders.json');
    let orders: any[] = [];
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      if (fs.existsSync(file)) {
        orders = JSON.parse(fs.readFileSync(file, 'utf8'));
      }
    } catch (e) {
      console.warn('Could not read existing orders.json, starting new.', e);
      orders = []; // Initialize if file is corrupt or unreadable
    }
    orders.push({
      id: orderId,
      sessionId: session.id,
      items: cartItems,
      customer_email: customer_email,
      status: 'pending', // Initial status
      created_at: new Date().toISOString(),
      sandbox: isSandboxOrder
    });
    fs.writeFileSync(file, JSON.stringify(orders, null, 2));

    res.status(200).json({ sessionId: session.id, orderId: orderId });
  } catch (err: any) {
    console.error('Checkout session error:', err.message);
    // Log which key was attempted if possible, but be careful not to log the key itself.
    console.error(`Error occurred. Sandbox mode determined: ${isSandboxOrder}. Details: ${err.type || 'N/A'} - ${err.code || 'N/A'}`);
    res.status(500).json({ error: err.message || 'Failed to create checkout session.' });
  }
}
