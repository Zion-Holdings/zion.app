import Stripe from 'stripe';
import { buffer } from 'micro';
import fs from 'fs';
import path from 'path';
import { sendEmailWithSendGrid } from '../src/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-06-30.basil',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

  try {
    const event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      webhookSecret
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      try {
        const file = path.join(process.cwd(), 'data', 'orders.json');
        const orders = JSON.parse(fs.readFileSync(file, 'utf8'));
        
        const idx = orders.findIndex(order => order.id === session.id);
        if (idx !== -1) {
          orders[idx].status = 'paid';
          fs.writeFileSync(file, JSON.stringify(orders, null, 2));
        }
      } catch (error) {
        console.error('Failed to update order', error);
      }

      try {
        await sendEmailWithSendGrid({
          to: session.customer_details.email,
          subject: 'Payment Confirmation',
          text: `Thank you for your payment of $${session.amount_total / 100}`,
        });
      } catch (error) {
        console.error('Failed to send receipt email', error);
      }
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook signature verification failed.', error);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
}