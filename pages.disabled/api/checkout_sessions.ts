import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_TEST_KEY || '', {
  apiVersion: '2023-08-16',
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { productId, customerEmail } = req.body || {};
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: productId, quantity: 1 }],
      mode: 'payment',
      customer_email: customerEmail || undefined,
      success_url: `${req.headers.origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Checkout error:', err);
    res.status(500).json({ error: err.message || 'Checkout failed' });
  }
}
