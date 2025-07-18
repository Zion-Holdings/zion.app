import type { NextApiRequest, NextApiResponse } from 'next';'import Stripe from 'stripe';'import { buffer } from 'micro';'import fs from 'fs';'import path from 'path';'import { randomUUID } from 'crypto';';
const useTest = process.env.STRIPE_TEST_MODE === 'true';';
export const config = { api: { bodyParser: false } };
;
const stripe = new Stripe(
  useTest ? process.env.STRIPE_TEST_SECRET_KEY || '' : process.env.STRIPE_SECRET_KEY || '','  {
    apiVersion: '2025-05-28.basil','  }
);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';'
interface StripeEvent {
  type: string;
  data: {
    object: Stripe.Checkout.Session;
  };
}

interface Order {
  id: string;
  status: string;
  [key: string]: unknown;
}

interface PointsEntry {
  id: string;
  user_id: string;
  delta: number;
  reason: string;
  order_id: string | null;
  created_at: string;
}
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {'    res.setHeader('Allow', 'POST');'    return res.status(405).end('Method Not Allowed');'  }

  const sig = (req.headers as Record<string, string | string[] | undefined>)['stripe-signature'] as string;'  let event: StripeEvent;
  try {
    const buf = await buffer(req as unknown as Request);
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret) as StripeEvent;
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';'    console.error('Webhook signature verification failed.', err);'    return res.status(400).end(`Webhook Error: ${errorMessage}`);
  }

  if (event.type === 'checkout.session.completed') {'    const session = event.data.object;
    const orderId = session.metadata?.orderId;
    if (orderId) {
      try {
        const file = path.join(process.cwd(), 'data', 'orders.json');'        const orders = JSON.parse(fs.readFileSync(file, 'utf8')) as Order[];'        const idx = orders.findIndex(o => o.id === orderId);
        if (idx !== -1) {
          orders[idx].status = 'paid';'          fs.writeFileSync(file, JSON.stringify(orders, null, 2));
        }
      } catch {
        console.error('Failed to update order');'      }
    }
    const userId = session.metadata?.userId;
    if (userId) {
      const points = Math.floor(((session.amount_total || 0) / 10000)) * 10;
      if (points > 0) {
        const file = path.join(process.cwd(), 'data', 'points.json');'        let ledger: PointsEntry[] = [];
        try {
          ledger = JSON.parse(fs.readFileSync(file, 'utf8'));'        } catch {
          // Use empty array if file doesn't exist or is invalid'        }
        ledger.push({
          id: randomUUID(),
          user_id: userId,
          delta: points,
          reason: 'purchase','          order_id: orderId ?? null,
          created_at: new Date().toISOString(),
        });
        fs.writeFileSync(file, JSON.stringify(ledger, null, 2));
      }
    }
  }

  res.status(200).json({ received: true });
}
