# Stripe Test Payments

The demo checkout flow uses Stripe in test mode. Configure these environment variables before running the app:

- `NEXT_PUBLIC_STRIPE_TEST_KEY` – publishable test key loaded by the client.
- `STRIPE_SECRET_KEY` – secret API key used by `/api/create-payment-intent` and `/api/checkout_sessions`.
- `STRIPE_WEBHOOK_SECRET` – signing secret used by the Stripe webhook handler.
- `SERVERLESS_FUNCTION_SECRET` – shared secret for authenticated serverless requests.
- `VITE_STRIPE_PUBLISHABLE_KEY` – optional publishable key for production builds.

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
