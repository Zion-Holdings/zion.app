# Zion Tech Group — Payment Setup Instructions

## Stripe account setup

1. Create a Stripe account at https://dashboard.stripe.com/register
2. Complete business verification
3. Go to **Products** → **Add product** and create:
   - `Starter AI Project` — one-time price: $499
   - `Growth AI Plan` — recurring price: $1,499/month
4. Copy the Price IDs (`price_...`)
5. Add the Price IDs to GitHub Secrets:
   - `STRIPE_STARTER_PRICE_ID`
   - `STRIPE_GROWTH_PRICE_ID`

## Create Payment Links manually

1. In Stripe Dashboard, open **Payment Links**
2. Select the product/price
3. Copy the generated `buy.stripe.com` link
4. Share it on the site or send it to clients

## Create Payment Links via Composio workflow

Workflow file: `.github/workflows/composio-stripe-create-payment-links.yml`

Required secrets:
- `COMPOSIO_API_KEY`
- `COMPOSIO_STRIPE_CONNECTION_ID`
- `STRIPE_STARTER_PRICE_ID`
- `STRIPE_GROWTH_PRICE_ID`

Run the workflow manually from GitHub Actions.

## Notes

- Test mode uses `sk_test_...` keys; live mode uses `sk_live_...`
- Payment success/cancel pages already exist at `/payment-success/` and `/payment-cancelled/`
