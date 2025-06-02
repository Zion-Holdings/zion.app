import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Buffer } from 'buffer';
import { sendEmailWithSendGrid } from '../../../../src/lib/email';

const stripeSecretKey = process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  const errorMessage = 'CRITICAL: STRIPE_SECRET_KEY is missing. Stripe webhook cannot function.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  typescript: true,
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

async function getRawBody(req: NextApiRequest): Promise<Buffer> {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

interface SuccessResponse {
  received: boolean;
}
interface ErrorResponse { 
  error: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<SuccessResponse | ErrorResponse | string> 
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!endpointSecret) {
    console.error('Stripe webhook secret is not configured. Ensure STRIPE_WEBHOOK_SECRET is set.');
    return res.status(500).json({ error: 'Webhook Error: Server configuration error (missing webhook secret).' });
  }

  const sig = req.headers['stripe-signature'] as string; 

  if (!sig) {
    console.warn('Webhook received without stripe-signature header.');
    return res.status(400).send('Webhook Error: Missing stripe-signature header.');
  }

  let event: Stripe.Event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: unknown) {
    let message = 'Signature verification failed.';
    if (err instanceof Stripe.errors.StripeSignatureVerificationError) {
      message = `Webhook signature verification failed: ${err.message}`;
    } else if (err instanceof Error) {
      message = `Webhook error: ${err.message}`;
    } else if (typeof err === 'string') {
      message = err;
    }
    console.error(message, err);
    return res.status(400).send(`Webhook Error: ${message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': { // Added block scope
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`[Stripe Webhook] Checkout session completed: ${session.id}, Payment status: ${session.payment_status}`);
      console.log(`[Stripe Webhook] Metadata: User ID: ${session.metadata?.userId}, Product ID: ${session.metadata?.productId}, Order ID: ${session.metadata?.orderId}`);

      if (session.payment_status === 'paid') {
        console.log(`[Stripe Webhook] Order for session ${session.id} (User: ${session.metadata?.userId}) to be marked as paid.`);
        // TODO: Actual database update to mark order as paid using session.metadata.orderId or similar

        const customerEmail = session.customer_details?.email;
        const orderId = session.metadata?.orderId; 

        if (customerEmail && orderId && process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID && process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
          const downloadLinks = ['https://example.com/download/item1', 'https://example.com/download/item2']; 
          const supportContact = 'support@example.com'; 
          
          try {
            await sendEmailWithSendGrid({
              to: customerEmail,
              templateId: process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID,
              dynamicTemplateData: {
                orderId: orderId,
                downloadLinks: downloadLinks,
                supportContact: supportContact,
                customerName: session.customer_details?.name || '',
                totalAmount: session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A',
                currency: session.currency?.toUpperCase() || '',
              },
            });
            console.log(`[Stripe Webhook] Order confirmation email initiated for ${customerEmail} for order ${orderId}.`);
          } catch (emailError) {
            console.error(`[Stripe Webhook] Failed to send order confirmation email for order ${orderId}:`, emailError);
          }
        } else {
          const missingInfo = [];
          if (!customerEmail) missingInfo.push("customer email");
          if (!orderId) missingInfo.push("orderId in session metadata");
          if (!process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID) missingInfo.push("SendGrid template ID");
          console.log(`[Stripe Webhook] Order confirmation email not sent for session ${session.id} due to missing: ${missingInfo.join(', ')}.`);
        }
      } else {
        console.log(`[Stripe Webhook] Checkout session ${session.id} completed but payment status is ${session.payment_status}.`);
      }
      break;
    }
    // Add other event types as needed, ensuring to use block scopes if declaring variables:
    // case 'payment_intent.succeeded': {
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   console.log('[Stripe Webhook] PaymentIntent was successful!', paymentIntent.id);
    //   break;
    // }
    // case 'payment_intent.payment_failed': {
    //   const paymentIntentFailed = event.data.object as Stripe.PaymentIntent;
    //   console.log('[Stripe Webhook] PaymentIntent failed.', paymentIntentFailed.id, paymentIntentFailed.last_payment_error?.message);
    //   break;
    // }
    default:
      console.log(`[Stripe Webhook] Unhandled event type ${event.type}`);
  }

  return res.status(200).json({ received: true });
}
