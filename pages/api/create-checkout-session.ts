import Stripe from 'stripe';

// Generic types for adapter use
interface Req {
  method?: string;
  body?: any;
  headers: Record<string, string | undefined>;
}
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

const secretKey = process.env.STRIPE_SECRET_KEY || process.env.NEXT_PUBLIC_STRIPE_TEST_SECRET_KEY || '';
const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' });

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  try {
    const { priceId, email, shipping } = req.body || {};
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: `${req.headers.origin}/orders/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/product/${priceId}`,
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
    });

    res.status(200).json({ sessionId: session.id, orderId: session.id });
  } catch (err: any) {
    console.error('Stripe session error:', err);
    res.status(500).json({ error: 'Unable to create session' });
  }
}
