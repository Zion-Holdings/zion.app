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

  const {
    priceId,
    quantity = 1,
    customer_email,
    successUrl,
    cancelUrl,
  } = req.body || {};
  if (!priceId) {
    res.statusCode = 400;
    res.json({ error: 'Missing priceId' });
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

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity }],
      mode: 'payment',
      customer_email,
      success_url:
        successUrl || `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.origin}/cancel`,
    });

    res.statusCode = 200;
    res.json({ sessionId: session.id });
  } catch (err) {
    console.error('Create checkout session error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

export default withErrorLogging(handler);
