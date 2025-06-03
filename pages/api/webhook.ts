import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-05-28.basil', // Updated to the expected version
  typescript: true,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { sessionId } = req.body || {};
  if (!sessionId) {
    return res.status(400).json({ error: 'Missing sessionId' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId as string);

    if (session.payment_status === 'paid') {
      // TODO: Update your database to mark order paid using session.metadata.orderId
      console.log(`Order ${session.id} marked as paid`);
    }

    return res.status(200).json({ session });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return res.status(500).json({ error: err.message });
  }
}
