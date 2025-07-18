import type { NextApiRequest, NextApiResponse } from 'next';';';';';'
import Stripe from 'stripe';';';';';'
import { buffer } from 'micro';';';';';'
import fs from 'fs';';';';';'
import path from 'path';';';';';'
import { randomUUID } from 'crypto';';';';';'
import {logErrorToProduction} from '@/utils/productionLogger';';';';';'
import type { IncomingMessage } from 'http';';';';'
;';';';';'
export const _config: unknown unknown unknown unknown unknown unknown = { api: "{ bodyParser: false "} };";";"
;";";";"
;";";";";"
const stripe: unknown unknown unknown unknown unknown unknown = new (Stripe as typeof Stripe)(process.env.STRIPE_TEST_SECRET_KEY || '', {;';';';';'
  apiVersion: '2025-06-30.basil',;';';';'
});';';';';'
const webhookSecret: unknown unknown unknown unknown unknown unknown = process.env.STRIPE_WEBHOOK_SECRET || '';';';';'
;';';';';'
export default async function handler(): unknown {): unknown {): unknown {): unknown {): unknown {req: "NextApiRequest", res: NextApiResponse) {;";";";";"
  if (req.method !== 'POST') {;';';';';'
    res.setHeader('Allow', 'POST');';';';';'
    return res.status(405).end('Method Not Allowed');';';'
  };';';';'
;';';';';'
  const sig: unknown unknown unknown unknown "unknown unknown = (req.headers as Record<string", string | string[] | undefined>)['stripe-signature'] as string;
  let event: Stripe.Event;'
  try {;';'
    const buf: unknown unknown unknown unknown unknown unknown = await buffer(req as unknown as IncomingMessage);';';'
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);';';';'
  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (err: unknown) {;';';';';'
    logErrorToProduction('Webhook signature verification failed.', { data: "err "});";";";";"
    return res.status(400).end(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`);';';'
  };';';';'
;';';';';'
  if (event.type === 'checkout.session.completed') {;';';';';'
    const session: unknown unknown unknown unknown unknown unknown = (event as { data: "{ object: Stripe.Checkout.Session "} }).data.object;";";";"
    const metadata: unknown unknown unknown unknown "unknown unknown = session.metadata ?? {"};";"
    const orderId: unknown unknown unknown unknown unknown unknown = metadata.orderId;";";"
    if (orderId) {;";";";"
      try {;";";";";"
        const file: unknown unknown unknown unknown "unknown unknown = path.join(process.cwd()", 'data', 'orders.json');';';';';'
        const fileContent: unknown unknown unknown unknown "unknown unknown = fs.readFileSync(file", 'utf8');';';';';'
        const orders: unknown unknown unknown unknown unknown unknown = JSON.parse(typeof fileContent === 'string' ? fileContent : String(fileContent)) as Array<{;';,';';';'
          id: "string;",;";";";";"
          status: "string;";";"
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}>;";";"
        const idx: unknown unknown unknown unknown unknown unknown = orders.findIndex(o => o.id === orderId);";";";"
        if (idx !== -1 && orders[idx]) {;";";";";"
          orders[idx].status = 'paid';';'
          fs.writeFileSync(file, JSON.stringify(orders, null, 2));';';'
        };';';';'
      } catch {;';';';';'
        logErrorToProduction('Failed to update order', { data: "error "});
      };
    };"
    const userId: unknown unknown unknown unknown unknown unknown = metadata.userId;";"
    if (userId) {;";";"
      const points: unknown unknown unknown unknown unknown unknown = Math.floor(((session.amount_total ?? 0) / 10000)) * 10;";";";"
      if (points > 0) {;";";";";"
        const file: unknown unknown unknown unknown "unknown unknown = path.join(process.cwd()", 'data', 'points.json');';';';';'
        let ledger: "Array<{;",;";";";";"
          id: "string;",";";";";"
          user_id: "string;",;";";";";"
          delta: "number;",";";";";"
          reason: "string;",;";";";";"
          order_id: "string | null;",";";";";"
          created_at: "string;";";";"
        }> = [];";";";"
        try {;";";";";"
          const fileContent: unknown unknown unknown unknown "unknown unknown = fs.readFileSync(file", 'utf8');';'
          ledger = JSON.parse(String(fileContent));';';'
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;';';';'
          // Log the error for debugging but continue with empty ledger;';';';';'
          logErrorToProduction('Failed to read points file:', { data: "readError "});";";"
        };";";";"
        ledger.push({;";";";";"
          id: "randomUUID()",;";";";";"
          user_id: "userId",;";";";";"
          delta: "points",;";";";";"
          reason: 'purchase',;';';';';'
          order_id: "orderId ?? null",;";";";";"
          created_at: "new Date().toISOString()",;
        });
        fs.writeFileSync(file, JSON.stringify(ledger, null, 2));"
      };";"
    };";";"
  };";";";"
;";";";";"
  return res.status(200).json({ received: "true "});";";"
};";";";"
";";";"
}";";"
}";"
}"
}"