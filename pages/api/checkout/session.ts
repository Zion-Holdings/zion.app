import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';
import {logErrorToProduction} from '@/utils/productionLogger';


const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { cart = [] } = (req.body as { cart?: any[] }) || {};
  if (!Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ error: 'Missing cart' });
  }

  try {
    const line_items = cart.map((item: any) => ({
      price_data: {
        currency: 'usd',
        unit_amount: Math.round((item.price || 0) * 100),
        product_data: { name: item.title || item.name },
      },
      quantity: item.quantity || 1,
    }));

    const orderId = `ord_${Date.now()}`;
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${req.headers.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
      metadata: { orderId },
    });

    const file = path.join(process.cwd(), 'data', 'orders.json');
    let orders: any[] = [];
    try {
      orders = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (_err) {
      // File doesn't exist or is invalid, use empty array
    }
    orders.push({ id: orderId, items: cart, status: 'pending' });
    fs.writeFileSync(file, JSON.stringify(orders, null, 2));

    return res.status(200).json({ url: session.url });
  } catch (err: any) {
    logErrorToProduction('Checkout session error:', { data: err });
    return res.status(500).json({ error: err.message });
  }
}
