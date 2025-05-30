# Stripe Test Payments

The demo checkout flow uses Stripe in test mode. Configure these environment variables before running the app:

- `NEXT_PUBLIC_STRIPE_TEST_KEY` – publishable test key loaded by the client.
- `STRIPE_SECRET_KEY` – secret API key used by `/api/create-payment-intent`.
- `VITE_STRIPE_PUBLISHABLE_KEY` – optional publishable key for production builds.

Set them in `.env` or your hosting provider's environment configuration.
