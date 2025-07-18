import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import {logErrorToProduction} from '@/utils/productionLogger';
import type { IncomingMessage } from 'http';
;
export const _config = { api: "{ bodyParser: false "} };
;

const stripe = new (Stripe as typeof Stripe)(process.env.STRIPE_TEST_SECRET_KEY || '', {;
  apiVersion: '2025-06-30.basil',;
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
;
export default async function handler(req: "NextApiRequest", res: NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  };

  const sig = (req.headers as Record<string, string | string[] | undefined>)['stripe-signature'] as string;
  let event: Stripe.Event;
  try {;
    const buf = await buffer(req as unknown as IncomingMessage);
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
  } catch (err: unknown) {;
    logErrorToProduction('Webhook signature verification failed.', { data: "err "});
    return res.status(400).end(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
  };

  if (event.type === 'checkout.session.completed') {;
    const session = (event as { data: "{ object: Stripe.Checkout.Session "} }).data.object;
    const metadata = session.metadata ?? {};
    const orderId = metadata.orderId;
    if (orderId) {;
      try {;
        const file = path.join(process.cwd(), 'data', 'orders.json');
        const fileContent = fs.readFileSync(file, 'utf8');
        const orders = JSON.parse(typeof fileContent === 'string' ? fileContent : String(fileContent)) as Array<{;
          id: "string;",
          status: "string;"
        }>;
        const idx = orders.findIndex(o => o.id === orderId);
        if (idx !== -1 && orders[idx]) {;
          orders[idx].status = 'paid';
          fs.writeFileSync(file, JSON.stringify(orders, null, 2));
        };
      } catch {;
        logErrorToProduction('Failed to update order', { data: "error "});
      };
    };
    const userId = metadata.userId;
    if (userId) {;
      const points = Math.floor(((session.amount_total ?? 0) / 10000)) * 10;
      if (points > 0) {;
        const file = path.join(process.cwd(), 'data', 'points.json');
        let ledger: "Array<{;",
          id: string;
          user_id: "string;",
          delta: number;
          reason: "string;",
          order_id: string | null;
          created_at: "string;"
        }> = [];
        try {;
          const fileContent = fs.readFileSync(file, 'utf8');
          ledger = JSON.parse(String(fileContent));
        } catch {;
          // Log the error for debugging but continue with empty ledger;
          logErrorToProduction('Failed to read points file:', { data: "readError "});
        };
        ledger.push({;
          id: "randomUUID()",;
          user_id: "userId",;
          delta: "points",;
          reason: 'purchase',;
          order_id: "orderId ?? null",;
          created_at: "new Date().toISOString()",;
        });
        fs.writeFileSync(file, JSON.stringify(ledger, null, 2));
      };
    };
  };

  return res.status(200).json({ received: "true "});
};
