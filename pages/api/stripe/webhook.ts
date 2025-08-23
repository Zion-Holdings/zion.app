import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import {logErrorToProduction} from '@/utils/productionLogger';

export const config = { api: { bodyParser: false } };


const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const sig = (req.headers as Record<string, string | string[] | undefined>)['stripe-signature'] as string;
  let event: any;
  try {
    const buf = await buffer(req as any);
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
  } catch (err: any) {
    logErrorToProduction('Webhook signature verification failed.', { data: err });
    return res.status(400).end(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const orderId = session.metadata?.orderId;
    if (orderId) {
      try {
        const file = path.join(process.cwd(), 'data', 'orders.json');
        const orders = JSON.parse(fs.readFileSync(file, 'utf8')) as any[];
        const idx = orders.findIndex(o => o.id === orderId);
        if (idx !== -1) {
          orders[idx].status = 'paid';
          fs.writeFileSync(file, JSON.stringify(orders, null, 2));
        }
      } catch (err) {
        logErrorToProduction('Failed to update order', { data: err });
      }
    }
    const userId = session.metadata?.userId;
    if (userId) {
      const points = Math.floor(((session.amount_total || 0) / 10000)) * 10;
      if (points > 0) {
        const file = path.join(process.cwd(), 'data', 'points.json');
        let ledger: any[] = [];
        try {
          ledger = JSON.parse(fs.readFileSync(file, 'utf8'));
        } catch (readError) {
          // Log the error for debugging but continue with empty ledger
          logErrorToProduction('Failed to read points file:', { data: readError });
        }
        ledger.push({
          id: randomUUID(),
          user_id: userId,
          delta: points,
          reason: 'purchase',
          order_id: orderId ?? null,
          created_at: new Date().toISOString(),
        });
        fs.writeFileSync(file, JSON.stringify(ledger, null, 2));
      }
    }
  }

  return res.status(200).json({ received: true });
}
