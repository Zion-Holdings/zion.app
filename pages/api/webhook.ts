import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  const errorMessage = 'CRITICAL: STRIPE_SECRET_KEY is missing. Webhook cannot function.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  typescript: true,
});

interface WebhookRequestBody {
  sessionId?: string;
  // Add other potential webhook body structures if this endpoint becomes more generic
  // e.g., type?: 'stripe' | 'otherProvider'; payload?: unknown;
}

interface WebhookSuccessResponse {
  session: Stripe.Checkout.Session; // Specific to current Stripe usage
  message?: string; // Optional success message
}

interface ErrorResponse {
  error: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<WebhookSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // For a truly generic webhook, you might inspect a 'type' field in the body
  // or use different paths for different webhook providers.
  // This implementation is specific to retrieving a Stripe session.
  const { sessionId } = req.body as WebhookRequestBody;

  if (!sessionId || typeof sessionId !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid sessionId in request body' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      // TODO: Update your database to mark order paid using session.metadata.orderId or similar
      console.log(`Order for session ${session.id} (metadata: ${JSON.stringify(session.metadata)}) marked as paid.`);
      // Example: await updateOrderStatus(session.metadata.orderId, 'paid');
    } else {
      console.log(`Session ${session.id} payment_status is ${session.payment_status}.`);
    }

    return res.status(200).json({ session });

  } catch (err: unknown) {
    console.error('Webhook error:', err);
    let errorMessage = 'An unexpected error occurred.';
    let errorDetails: string | undefined;

    if (err instanceof Stripe.errors.StripeError) {
      errorMessage = `Stripe Error: ${err.message}`;
      errorDetails = err.code ? `Code: ${err.code}` : undefined;
      // Use err.statusCode if appropriate for the response, otherwise default
      return res.status(err.statusCode || 500).json({ error: errorMessage, details: errorDetails });
    } else if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }
    
    return res.status(500).json({ error: errorMessage, details: errorDetails });
  }
}
