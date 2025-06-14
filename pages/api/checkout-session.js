import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';
function getStripeKey() {
    const live = process.env.STRIPE_SECRET_KEY || '';
    const test = process.env.STRIPE_TEST_SECRET_KEY || live;
    if (process.env.NODE_ENV !== 'production' && live.startsWith('sk_live')) {
        return test;
    }
    return live || test;
}
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }
    const { cartItems = [], customer_email } = req.body || {};
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        return res.status(400).json({ error: 'Missing cartItems' });
    }
    try {
        const stripe = new Stripe(getStripeKey(), { apiVersion: '2023-10-16' });
        const line_items = cartItems.map((item) => {
            if (item.priceId) {
                return { price: item.priceId, quantity: item.quantity || 1 };
            }
            return {
                price_data: {
                    currency: 'usd',
                    unit_amount: Math.round((item.price || 0) * 100),
                    product_data: { name: item.title || item.name },
                },
                quantity: item.quantity || 1,
            };
        });
        const orderId = `ord_${Date.now()}`;
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            customer_email,
            success_url: `${req.headers.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/cart`,
            metadata: { orderId },
        });
        const file = path.join(process.cwd(), 'data', 'orders.json');
        let orders = [];
        try {
            orders = JSON.parse(fs.readFileSync(file, 'utf8'));
        }
        catch { }
        orders.push({ id: orderId, items: cartItems, status: 'pending' });
        fs.writeFileSync(file, JSON.stringify(orders, null, 2));
        res.status(200).json({ sessionId: session.id });
    }
    catch (err) {
        console.error('Checkout session error:', err);
        res.status(500).json({ error: err.message });
    }
}
