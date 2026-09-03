# Zion Tech Group — Monetization Activation Guide

## Payments
1. Create Stripe account at https://dashboard.stripe.com/register
2. Create products and prices:
   - Starter AI Project: $499 one-time
   - Growth AI Plan: $1,499/month recurring
   - Enterprise SOCaaS: custom recurring
3. Copy Price IDs and paste into:
   - `public/pricing/index.html` → replace `/contact/?subject=Starter%20AI%20Project` with `https://buy.stripe.com/REPLACE_STARTER`
   - `public/pricing/index.html` → replace `/contact/?subject=Growth%20AI%20Plan` with `https://buy.stripe.com/REPLACE_GROWTH`
   - `public/pricing/index.html` → replace `/contact/?subject=Enterprise%20AI` with `https://buy.stripe.com/REPLACE_ENTERPRISE`
4. Optional: create Lemon Squeezy store and replace links with `https://app.lemonsqueezy.com/REPLACE_LEMON`

## Newsletter
1. Create beehiiv or Resend account
2. Get webhook URL or API endpoint
3. Paste into `public/newsletter/index.html`:
   - Replace `https://ziontechgroup.com/contact/` with `https://REPLACE_WEBHOOK`
   - Or add API key: `REPLACE_API_KEY` in form handler

## Affiliates
1. Create Partnero or FirstPromoter account
2. Get referral program link
3. Paste into `public/affiliate/index.html` and `public/affiliates/index.html`:
   - Replace `/contact/` apply link with `https://REPLACE_AFFILIATE_SIGNUP`

## Composio Workflows
1. Run `composio-zion-master.yml` to verify connections
2. Run `composio-stripe-create-payment-links.yml` after adding Price IDs to GitHub Secrets
3. Run `composio-calendly-whatsapp-stripe-revenue.yml` for revenue sync
