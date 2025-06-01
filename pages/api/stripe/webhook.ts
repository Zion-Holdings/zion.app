import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Buffer } from 'buffer';
import { sendEmailWithSendGrid } from '../../../../src/lib/email';

// Initialize Stripe. It's good practice to use a different key for testing if available.
// Ensure STRIPE_SECRET_KEY (or STRIPE_TEST_SECRET_KEY for testing) is set in your .env.local or environment variables.
const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16', // Use your desired API version or the latest
  typescript: true, // Enable TypeScript if you are using it, for better type checking
});

// Stripe webhook secret for verifying the signature.
// Ensure STRIPE_WEBHOOK_SECRET is set in your .env.local or environment variables.
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

// Helper function to get the raw body from the request.
// Next.js with bodyParser: false means req is a stream.
async function getRawBody(req: NextApiRequest): Promise<Buffer> {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// Disable Next.js body parsing for this route to access the raw body for signature verification.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  if (!endpointSecret) {
    console.error('Stripe webhook secret is not configured. Ensure STRIPE_WEBHOOK_SECRET is set.');
    // Return 500 for server configuration errors, but be cautious in production
    // as this might reveal too much. A generic error might be better.
    return res.status(500).send('Webhook Error: Server configuration error (missing webhook secret).');
  }

  const sig = req.headers['stripe-signature'] as string;

  if (!sig) {
    console.warn('Webhook received without stripe-signature header. This is suspicious.');
    return res.status(400).send('Webhook Error: Missing stripe-signature header.');
  }

  let event: Stripe.Event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    // It's important to return a 400 error for signature verification failures.
    return res.status(400).send(`Webhook Error: Signature verification failed. ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`[Stripe Webhook] Checkout session completed: ${session.id}`);
      console.log(`[Stripe Webhook] Payment status: ${session.payment_status}`);
      console.log(`[Stripe Webhook] User ID (from metadata): ${session.metadata?.userId}`);
      console.log(`[Stripe Webhook] Product ID (from metadata): ${session.metadata?.productId}`); // Assuming you add this to metadata during session creation

      // Check if the payment was successful
      if (session.payment_status === 'paid') {
        // Placeholder: Mark order as paid in your database
        // This is where you would typically update your database to reflect the successful payment.
        // Example: await db.orders.update({ where: { id: session.metadata.orderId }, data: { status: 'paid', paidAt: new Date() } });
        console.log(`[Stripe Webhook] Order for session ${session.id} (User: ${session.metadata?.userId}) to be marked as paid.`);

        // Send order confirmation email
        const customerEmail = session.customer_details?.email;
        const orderId = session.metadata?.orderId; // Assuming orderId is in metadata

        if (customerEmail && orderId) {
          // TODO: Replace with actual download links and support contact
          const downloadLinks = ['https://example.com/download/item1', 'https://example.com/download/item2'];
          const supportContact = 'support@example.com';
          const sendGridTemplateId = process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID || 'order_confirmation';


          await sendEmailWithSendGrid({
            to: customerEmail,
            templateId: sendGridTemplateId, // Use the template ID from env or the one specified in the issue
            dynamicTemplateData: {
              orderId: orderId,
              downloadLinks: downloadLinks,
              supportContact: supportContact,
              // You can add other relevant data from the session or your database here
              customerName: session.customer_details?.name || '',
              totalAmount: session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A', // Stripe amounts are in cents
              currency: session.currency?.toUpperCase() || '',
            },
          });
          console.log(`[Stripe Webhook] Order confirmation email initiated for ${customerEmail} for order ${orderId}.`);
        } else {
          let missingInfo = [];
          if (!customerEmail) missingInfo.push("customer email");
          if (!orderId) missingInfo.push("orderId in session metadata");
          console.log(`[Stripe Webhook] Order confirmation email not sent for session ${session.id} due to missing: ${missingInfo.join(', ')}.`);
        }
      } else {
        console.log(`[Stripe Webhook] Checkout session ${session.id} completed but payment status is ${session.payment_status}. No email action taken.`);
      }
      break;
    // Add other event types you want to handle
    // case 'payment_intent.succeeded':
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   console.log('[Stripe Webhook] PaymentIntent was successful!', paymentIntent.id);
    //   // Handle successful payment intent if using Payment Intents directly for other flows
    //   break;
    // case 'payment_intent.payment_failed':
    //   const paymentIntentFailed = event.data.object as Stripe.PaymentIntent;
    //   console.log('[Stripe Webhook] PaymentIntent failed.', paymentIntentFailed.id, paymentIntentFailed.last_payment_error?.message);
    //   // Handle failed payment intent
    //   break;
    default:
      console.log(`[Stripe Webhook] Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event to Stripe
  res.status(200).json({ received: true });
}
