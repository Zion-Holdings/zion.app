const express = require('express');
const router = express.Router();
const stripe = require('stripe'); // Import the stripe library

const PROD_DOMAIN = 'app.ziontechgroup.com';
function isProdDomain() {
  const context = process.env.CONTEXT;
  if (context && context !== 'production') {
    return false;
  }
  const url = process.env.URL || '';
  try {
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {
    return false;
  }
}

const liveKey = process.env.STRIPE_SECRET_KEY || '';
const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
const useTest = process.env.STRIPE_TEST_MODE === 'true' || (!isProdDomain() && liveKey.startsWith('sk_live'));

const stripeInstance = liveKey || testKey ? stripe(useTest ? testKey : liveKey) : null;

// Webhook secret - THIS MUST BE SET IN YOUR ENVIRONMENT VARIABLES
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Middleware to specifically handle raw body for Stripe webhooks
// Stripe requires the raw request body for signature verification.
// This needs to be BEFORE any other middleware that might parse the body (like express.json()).
// However, since this router is specific and /webhook is the first route using it,
// placing it here is fine. If other routes in this router didn't need raw body,
// you would apply it only to the /webhook route:
// router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => { ... });
// For simplicity, as this file grows, this router-level .use() might be too broad.
// Let's make it specific to the webhook route.
// router.use('/webhook', express.raw({ type: 'application/json' })); // Moving this to be route-specific for clarity

/**
 * @route POST /api/stripe/webhook
 * @desc Handle Stripe webhook events
 * @access Public (secured with Stripe signature verification)
 */
router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  if (!stripeInstance) {
    console.error('Stripe SDK not initialized. STRIPE_SECRET_KEY might be missing.');
    return res.status(500).send('Internal Server Error: Stripe SDK not initialized.');
  }

  if (!webhookSecret) {
    console.error('Stripe webhook secret is not configured. Set STRIPE_WEBHOOK_SECRET.');
    return res.status(500).send('Internal Server Error: Webhook secret not configured.');
  }

  const sig = req.headers['stripe-signature'];

  let event;

  try {
    // req.body is the raw Buffer from express.raw()
    event = stripeInstance.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Successfully verified webhook
  console.log('Stripe webhook event verified:', event.id, event.type);

  // Handle the event
  switch (event.type) {
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      // Logic for successful payment:
      // 1. Retrieve customer information (if needed, e.g., invoice.customer).
      // 2. Check if you've already processed this event (idempotency).
      // 3. Update your database (e.g., mark order as paid, provision service).
      // 4. Send a confirmation email to the customer.
      console.log(`Invoice payment succeeded for invoice ID: ${invoice.id}, Customer: ${invoice.customer}`);
      // Example: TODO: Replace with actual business logic
      // db.orders.update({ stripeInvoiceId: invoice.id }, { status: 'paid', paidAt: new Date() });
      // emailService.sendPaymentConfirmation(invoice.customer_email, invoice.id);
      break;
    // Example: Handling another event type
    // case 'customer.subscription.created':
    //   const subscription = event.data.object;
    //   console.log('Subscription created:', subscription.id);
    //   // TODO: Store subscription details, update user's plan
    //   break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Acknowledge receipt of the event to Stripe
  res.status(200).json({ received: true });
});

module.exports = router;
