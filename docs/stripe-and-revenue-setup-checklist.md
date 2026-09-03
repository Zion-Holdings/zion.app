# Zion Tech Group — Stripe & Revenue Setup Checklist

## Create Stripe account
- [ ] Register at https://dashboard.stripe.com/register
- [ ] Complete business verification
- [ ] Create products:
  - `Starter AI Project` — one-time price $499
  - `Growth AI Plan` — recurring price $1,499/month
  - `Enterprise SOCaaS` — custom recurring price
- [ ] Copy Price IDs and add to GitHub Secrets:
  - `STRIPE_STARTER_PRICE_ID`
  - `STRIPE_GROWTH_PRICE_ID`
  - `STRIPE_ENTERPRISE_PRICE_ID`

## Create Calendly event types
- [ ] Create `AI Discovery Call` event type
- [ ] Create `SOC Readiness Review` event type
- [ ] Copy booking links and add to `/contact/` and service pages

## Connect WhatsApp
- [ ] Verify WhatsApp Business number
- [ ] Add `COMPOSIO_WHATSAPP_CONNECTION_ID` workflow secret

## Connect Resend
- [ ] Add and verify domain in Resend
- [ ] Create `COMPOSIO_RESEND_CONNECTION_ID`
- [ ] Set `RESEND_TO_EMAIL`

## Run Composio workflows
- [ ] Run `.github/workflows/composio-stripe-create-payment-links.yml`
- [ ] Run `.github/workflows/composio-calendly-whatsapp-stripe-revenue.yml`

## Verify live pages
- [ ] `/pricing/`
- [ ] `/payment-success/`
- [ ] `/payment-cancelled/`
- [ ] `/partner-portal/`
- [ ] `/ai-whatsapp-billing/`
