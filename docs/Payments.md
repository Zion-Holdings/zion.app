# Stripe Test Payments

The checkout flow uses Stripe. To ensure payments are processed in test mode for QA and development, specific environment variables must be configured.

## Environment Variables for Test Mode

Set them in `.env` or your hosting provider's environment configuration.

## Example Checkout Flow

To redirect customers to Stripe Checkout in test mode:

```ts
import { loadStripe } from '@stripe/stripe-js';

// Use the publishable test key so no live charges occur
const stripe = await loadStripe(import.meta.env.NEXT_PUBLIC_STRIPE_TEST_KEY);

// Request a Checkout Session from your backend
const session = await axios.post('/payments/create-session', { priceId });

// Redirect the browser to the hosted Checkout page
await stripe?.redirectToCheckout({ sessionId: session.data.id });
```
