import Stripe from 'stripe';
import { withSentry } from './withSentry.cjs';

const PROD_DOMAIN = 'app.ziontechgroup.com';

function isProdDomain() {
  const context = process.env.CONTEXT;
  if (context && context !== 'production') {
    return false;
  }
  const url = process.env.URL || '';
  try {
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {
    return false;
  }
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { cartItems = [], customer_email } = req.body || {};
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    res.statusCode = 400;
    res.json({ error: 'Missing cartItems' });
    return;
  }

  try {
    const liveKey = process.env.STRIPE_SECRET_KEY || '';
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    const useTest =
      process.env.STRIPE_TEST_MODE === 'true' ||
      (!isProdDomain() && liveKey.startsWith('sk_live'));

    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env.STRIPE_TEST_SECRET_KEY) {
      throw new Error('Refusing to use live Stripe key on non-production domain');
    }

    // This route uses the official Stripe Node.js SDK for server-to-server communication.
    // The getStripe() client-side helper (from src/utils/getStripe.ts) and its
    // advancedFraudSignals option are not applicable to this server-side implementation.
    const stripe = new Stripe(useTest ? testKey : liveKey, {
      apiVersion: '2023-10-16',
    });

    const line_items = cartItems.map((item) => {
      if (item.priceId) {
        return { price: item.priceId, quantity: item.quantity || 1 };
      }
      return {
        price_data: {
          currency: 'usd',
          unit_amount: Math.round((item.price || 0) * 100),
          product_data: { name: item.title || item.name },
        },
        quantity: item.quantity || 1,
      };
    });
    const orderId = `ord_${Date.now()}`;
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email,
      success_url: `${req.headers.origin}/orders/${orderId}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: { orderId },
    });

    // Save order with pending status
    const fs = await import('fs');
    const path = await import('path');
    const file = path.join(process.cwd(), 'data', 'orders.json');
    let orders = [];
    try {
      orders = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch {
      // File doesn't exist or is invalid, use empty array
    }
    orders.push({ id: orderId, items: cartItems, status: 'pending', sandbox: useTest });
    fs.writeFileSync(file, JSON.stringify(orders, null, 2));

    res.statusCode = 200;
    res.json({ sessionId: session.id, orderId });
  } catch (err) {
    console.error('Create checkout session error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

export default withSentry(handler);
