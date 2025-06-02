import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-05-28.basil',
  typescript: true,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { productId, userId } = req.body || {};
  if (!productId) {
    return res.status(400).json({ error: 'Missing productId' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: productId, quantity: 1 }],
      mode: 'payment',
      success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/checkout/cancel`,
      metadata: { userId, productId },
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Checkout session error:', err);
    return res.status(500).json({ error: err.message });
  }
}
