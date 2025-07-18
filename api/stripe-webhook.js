import Stripe from 'stripe';';
import { buffer } from 'micro';';
import fs from 'fs';';
import path from 'path';';
import { sendEmailWithSendGrid } from '../src/lib/email';'

// This route uses the official Stripe Node.js SDK for server-to-server communication.
// The getStripe() client-side helper (from src/utils/getStripe.ts) and its
// advancedFraudSignals option are not applicable to this server-side implementation.;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {'
  apiVersion: '2025-06-30.basil','
});
;
export const config = { api: { bodyParser: false } };
;
export default async function handler(req, res) {
  if (req.method !== 'POST') {'
    res.status(405).end('Method Not Allowed');'
    return;
  }
  const sig = req.headers['stripe-signature'];'
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';'
  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed.', error);'
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {'
    const session = event.data.object;
    const orderId = session.metadata?.orderId;
    if (orderId) {
      try {
        const file = path.join(process.cwd(), 'data', 'orders.json');'
        const orders = JSON.parse(fs.readFileSync(file, 'utf8'));'
        const idx = orders.findIndex((o) => o.id === orderId);
        if (idx !== -1) {
          orders[idx].status = 'paid';'
          fs.writeFileSync(file, JSON.stringify(orders, null, 2));
        }
      } catch (error) {
        console.error('Failed to update order', error);'
      }
      if (session.customer_details?.email && process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID) {
        try {
          await sendEmailWithSendGrid({
            to: session.customer_details.email,
            templateId: process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID,
            dynamicTemplateData: { orderId },
          });
        } catch (error) {
          console.error('Failed to send receipt email', error);'
        }
      }
    }
  }

  res.status(200).json({ received: true });
}
