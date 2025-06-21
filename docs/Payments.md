# Stripe Test Payments

The demo checkout flow uses Stripe in test mode. Configure these environment variables before running the app:

- `NEXT_PUBLIC_STRIPE_PK` – publishable test key loaded by the client.
- `NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY` – optional separate test key when `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is reserved for live charges.
- `STRIPE_SECRET_KEY` – secret API key used by `/api/create-payment-intent` and `/api/checkout_sessions`.
- `STRIPE_TEST_SECRET_KEY` – secret test key used when the app isn't on the production domain.
- `STRIPE_TEST_MODE` – set to `true` to force test keys and create sandbox orders.
- `STRIPE_WEBHOOK_SECRET` – signing secret used by the Stripe webhook handler.
- `SERVERLESS_FUNCTION_SECRET` – shared secret for authenticated serverless requests.
- `VITE_STRIPE_PUBLISHABLE_KEY` – optional publishable key for production builds.

When testing payments, use the demo card number `4242 4242 4242 4242` with any future expiration date and CVC.

Set them in `.env` or your hosting provider's environment configuration.

## Example Checkout Flow

To redirect customers to Stripe Checkout in test mode:

```ts
import { getStripe } from '@/utils/getStripe';

// getStripe disables Stripe's advanced fraud signals which can
// try to access localStorage. This avoids "Access to storage is not
// allowed" errors in browsers with strict privacy settings.
const stripe = await getStripe();

// Request a Checkout Session from your backend
const session = await axios.post('/payments/create-session', { priceId });

// Redirect the browser to the hosted Checkout page
await stripe?.redirectToCheckout({ sessionId: session.data.id });
```

## Guest Checkout and Sandbox Login

During development you can test payments without authenticating a user. Navigate
to `/marketplace/checkout` to open the guest checkout page. For flows that
require authentication, define development credentials in `.env.local` (see
[SECURITY_CREDENTIALS.md](SECURITY_CREDENTIALS.md) for details):

```bash
DEV_USER_1_EMAIL=guest@example.com
DEV_USER_1_PASSWORD=pass1234
```

These credentials are loaded only in development and allow you to sign in to the
app without creating a real account.

### Staging Test Payments

When the app runs in a staging environment it also uses Stripe test mode. The
guest checkout modal displays a banner reminding testers to pay with the demo
card `4242 4242 4242 4242` and any future expiration date and CVC.

### Demo Products

If no products appear in your marketplace view, seed the local database with
sample listings:

```bash
npm run seed
```

This executes the Prisma seeding script (`prisma/seed.ts`) so you can fully walk
through the checkout process with populated data.

## Sandbox Sample SKUs

If your environment has no products available, the application falls back to a
set of demo listings defined in `src/data/marketplaceData.ts`. These sample
items let QA walk through the Add‑to‑Cart and payment screens without needing a
live catalog. The fallback is automatic whenever the marketplace API returns an
error or an empty array.
