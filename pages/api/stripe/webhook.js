import Stripe from 'stripe';
import { buffer } from 'micro';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
export const config = { api: { bodyParser: false } };
const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY || '', {
    apiVersion: '2023-10-16',
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }
    const sig = req.headers['stripe-signature'];
    // TODO: Use proper Stripe types when available
    let event;
    try {
        const buf = await buffer(req);
        event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
    }
    catch (err) {
        console.error('Webhook signature verification failed.', err);
        return res.status(400).end(`Webhook Error: ${err.message}`);
    }
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;
        if (orderId) {
            try {
                const file = path.join(process.cwd(), 'data', 'orders.json');
                const orders = JSON.parse(fs.readFileSync(file, 'utf8'));
                const idx = orders.findIndex(o => o.id === orderId);
                if (idx !== -1) {
                    orders[idx].status = 'paid';
                    fs.writeFileSync(file, JSON.stringify(orders, null, 2));
                }
            }
            catch (err) {
                console.error('Failed to update order', err);
            }
        }
        const userId = session.metadata?.userId;
        if (userId) {
            const points = Math.floor(((session.amount_total || 0) / 10000)) * 10;
            if (points > 0) {
                const file = path.join(process.cwd(), 'data', 'points.json');
                let ledger = [];
                try {
                    ledger = JSON.parse(fs.readFileSync(file, 'utf8'));
                }
                catch { }
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
    res.status(200).json({ received: true });
}
