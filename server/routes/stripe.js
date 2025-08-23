const express = require('express');
const router = express.Router();
const stripe = require('stripe'); // Import the stripe library
const User = require('../models/User'); // Assuming you have a User model
const Subscription = require('../models/Subscription'); // Assuming you have a Subscription model

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
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object;
      console.log(`Invoice payment succeeded for invoice ID: ${invoice.id}, Customer: ${invoice.customer}, Subscription: ${invoice.subscription}`);

      if (invoice.billing_reason === 'subscription_create' || invoice.billing_reason === 'subscription_cycle' || invoice.billing_reason === 'subscription_update') {
        if (invoice.subscription) {
          try {
            const subscription = await stripeInstance.subscriptions.retrieve(invoice.subscription);
            if (!subscription) {
              console.error(`Webhook Error: Subscription ${invoice.subscription} not found in Stripe for invoice ${invoice.id}`);
              // Still return 200 to Stripe to acknowledge receipt, but log the error
              return res.status(200).json({ received: true, error: "Subscription not found in Stripe" });
            }

            const user = await User.findOne({ stripeCustomerId: subscription.customer });
            if (!user) {
              console.error(`Webhook Error: User not found for Stripe customer ID ${subscription.customer}`);
              return res.status(200).json({ received: true, error: "User not found" });
            }

            const updatedSubscription = await Subscription.findOneAndUpdate(
              { stripeSubscriptionId: subscription.id },
              {
                stripePriceId: subscription.items.data[0].price.id,
                stripeProductId: subscription.items.data[0].price.product,
                status: subscription.status,
                currentPeriodStart: new Date(subscription.current_period_start * 1000),
                currentPeriodEnd: new Date(subscription.current_period_end * 1000),
                cancelAtPeriodEnd: subscription.cancel_at_period_end,
                userId: user._id, // Ensure userId is linked
              },
              { upsert: true, new: true, setDefaultsOnInsert: true }
            );
            console.log(`Subscription ${updatedSubscription.stripeSubscriptionId} updated/created from invoice.payment_succeeded.`);

            // Update user's plan status
            user.planStatus = subscription.status;
            user.stripeSubscriptionId = subscription.id; // Ensure this is linked on the user
            await user.save();
            console.log(`User ${user.email} plan status updated to ${subscription.status}.`);

          } catch (err) {
            console.error(`Error processing invoice.payment_succeeded for subscription: ${err.message}`);
            // Don't send 500 to Stripe, as it will retry. Log error and investigate.
            return res.status(200).json({ received: true, error: `Error processing: ${err.message}` });
          }
        } else {
          console.log(`Invoice ${invoice.id} is not related to a subscription. Skipping subscription update.`);
          // Handle non-subscription payments if necessary
        }
      } else {
        console.log(`Invoice ${invoice.id} with reason ${invoice.billing_reason} not handled for subscription update.`);
        // Handle other invoice reasons if necessary
      }
      break;
    }
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object;
      console.log(`${event.type} event for subscription ID: ${subscription.id}`);
      try {
        const user = await User.findOne({ stripeCustomerId: subscription.customer });
        if (!user) {
          console.error(`Webhook Error: User not found for Stripe customer ID ${subscription.customer}`);
          // If the user isn't found, it might be an issue with your user creation flow
          // or the webhook arrived before the user was fully set up with a stripeCustomerId.
          // Depending on your app's logic, you might retry later or create the user.
          // For now, we'll log and acknowledge.
          return res.status(200).json({ received: true, error: "User not found for customer ID" });
        }

        const subscriptionData = {
          userId: user._id,
          stripeCustomerId: subscription.customer,
          stripeSubscriptionId: subscription.id,
          stripePriceId: subscription.items.data[0].price.id,
          stripeProductId: subscription.items.data[0].price.product,
          status: subscription.status,
          currentPeriodStart: new Date(subscription.current_period_start * 1000),
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
          trialStart: subscription.trial_start ? new Date(subscription.trial_start * 1000) : null,
          trialEnd: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null,
        };

        const updatedSubscription = await Subscription.findOneAndUpdate(
          { stripeSubscriptionId: subscription.id },
          subscriptionData,
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        console.log(`Subscription ${updatedSubscription.stripeSubscriptionId} created/updated.`);

        // Update user's plan status
        user.planStatus = subscription.status;
        user.stripeSubscriptionId = subscription.id; // Link current subscription to user
        await user.save();
        console.log(`User ${user.email} plan status updated to ${subscription.status}.`);

      } catch (err) {
        console.error(`Error processing ${event.type}: ${err.message}`);
        return res.status(200).json({ received: true, error: `Error processing: ${err.message}` });
      }
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object; // This is the Stripe Subscription object
      console.log(`customer.subscription.deleted event for subscription ID: ${subscription.id}`);
      try {
        const subInDb = await Subscription.findOne({ stripeSubscriptionId: subscription.id });
        if (!subInDb) {
          console.warn(`Webhook Warning: Subscription ${subscription.id} not found in DB for deletion.`);
          return res.status(200).json({ received: true, warning: "Subscription not found in DB" });
        }

        // Update the subscription status in your database
        // Stripe sends 'canceled' status when a subscription is deleted.
        // The 'ended_at' field indicates when the subscription actually ended.
        subInDb.status = subscription.status; // should be 'canceled'
        subInDb.canceledAt = subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : new Date();
        subInDb.endedAt = subscription.ended_at ? new Date(subscription.ended_at * 1000) : new Date(); // if not present, means ended now
        await subInDb.save();
        console.log(`Subscription ${subInDb.stripeSubscriptionId} status updated to ${subscription.status}.`);

        // Update the corresponding user's planStatus
        const user = await User.findById(subInDb.userId);
        if (user) {
          // Only clear planStatus if this was their active subscription
          if (user.stripeSubscriptionId === subscription.id) {
            user.planStatus = null; // Or 'canceled', depending on desired state
            user.stripeSubscriptionId = null; // Remove link to this subscription
            await user.save();
            console.log(`User ${user.email} plan status updated due to subscription deletion.`);
          }
        } else {
            console.warn(`Webhook Warning: User ${subInDb.userId} not found for deleted subscription ${subscription.id}`);
        }

      } catch (err) {
        console.error(`Error processing customer.subscription.deleted: ${err.message}`);
        return res.status(200).json({ received: true, error: `Error processing: ${err.message}` });
      }
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Acknowledge receipt of the event to Stripe
  res.status(200).json({ received: true });
});

module.exports = router;
