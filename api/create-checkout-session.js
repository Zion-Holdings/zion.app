import Stripe from 'stripe';
import { withErrorLogging } from './withErrorLogging.cjs';

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

    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env.STRIPE_TEST_SECRET_KEY) {
      throw new Error('Refusing to use live Stripe key on non-production domain');
    }

    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {
      apiVersion: '2023-10-16',
    });

    const line_items = cartItems.map((item) => ({
      price: item.priceId,
      quantity: item.quantity || 1,
    }));
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
    } catch {}
    orders.push({ id: orderId, items: cartItems, status: 'pending' });
    fs.writeFileSync(file, JSON.stringify(orders, null, 2));

    res.statusCode = 200;
    res.json({ sessionId: session.id, orderId });
  } catch (err) {
    console.error('Create checkout session error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

export default withErrorLogging(handler);
