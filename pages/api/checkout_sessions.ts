import Stripe from 'stripe';

// Basic request/response types so this handler works without Next.js
type Req = {
  method?: string;
  body?: any;
  headers: Record<string, any>;
};

interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

const stripe = new Stripe(process.env.STRIPE_TEST_KEY || '', {
  apiVersion: '2023-10-16',
});

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { productId, customerEmail } = req.body || {};
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: productId, quantity: 1 }],
      mode: 'payment',
      customer_email: customerEmail || undefined,
      success_url: `${req.headers.origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Checkout error:', err);
    res.status(500).json({ error: err.message || 'Checkout failed' });
  }
}
