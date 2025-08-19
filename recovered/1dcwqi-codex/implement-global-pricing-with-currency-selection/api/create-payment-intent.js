import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { amount, currency } = req.body || {};
  if (typeof amount !== 'number') {
    res.statusCode = 400;
    res.json({ error: 'Invalid amount' });
    return;
  }

  let selected = currency;
  if (!selected) {
    const cookie = req.headers.cookie || '';
    const match = cookie.match(/zion_currency=([^;]+)/);
    if (match) selected = decodeURIComponent(match[1]);
  }
  if (!selected) selected = 'USD';

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2023-10-16',
    });
    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: selected.toLowerCase(),
      automatic_payment_methods: { enabled: true },
    });
    res.statusCode = 200;
    res.json({ clientSecret: intent.client_secret, id: intent.id });
  } catch (err) {
    console.error('Create payment intent error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}
