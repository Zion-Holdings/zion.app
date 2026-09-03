# Zion Tech Group — Execution Pack
## Last updated: 2026-09-02

## Live Site Links (verified 200)
- https://ziontechgroup.com/monetization/
- https://ziontechgroup.com/digital-transformation/
- https://ziontechgroup.com/pricing/
- https://ziontechgroup.com/payment-success/
- https://ziontechgroup.com/payment-cancelled/
- https://ziontechgroup.com/managed-soc-pricing/
- https://ziontechgroup.com/ai-voice-customer-service/
- https://ziontechgroup.com/paid-consultation/
- https://ziontechgroup.com/ai-agents/

## Blocked (Pages source = gh-pages)
All new docs/ pages return 404 until Settings → Pages → Source → main.

## Step 1: GitHub Pages (2 min)
1. Open https://github.com/Zion-support/zion-support.github.io/settings/pages
2. Change Source from `gh-pages` to `main`
3. Click Save
4. Wait 1-2 minutes for rebuild
5. All new pages become live

## Step 2: Create Accounts (20 min)
Create accounts on these platforms:
1. https://dashboard.stripe.com/register → Stripe
2. https://calendly.com/signup → Calendly
3. https://business.whatsapp.com/ → WhatsApp Business
4. https://resend.com/signup → Resend
5. https://hubspot.com/signup → HubSpot
6. https://notion.so/signup → Notion
7. https://slack.com/signup → Slack
8. https://1password.com/signup → 1Password
9. https://signup.sendgrid.com/ → SendGrid
10. https://brevo.com/signup → Brevo
11. https://activecampaign.com/signup → ActiveCampaign
12. https://firecrawl.dev/signup → Firecrawl
13. https://serpapi.com/signup → SerpApi
14. https://tavily.com/signup → Tavily
15. https://composio.dev → Composio

## Step 3: Composio Connections (15 min)
1. Go to https://app.composio.dev
2. Click "Add Connection" for each app
3. Copy the Connection ID for each
4. Go to https://github.com/Zion-support/zion-support.github.io/settings/secrets/actions
5. Add each as a secret:
   - COMPOSIO_API_KEY
   - COMPOSIO_CALENDLY_CONNECTION_ID
   - COMPOSIO_WHATSAPP_CONNECTION_ID
   - COMPOSIO_STRIPE_CONNECTION_ID
   - COMPOSIO_RESEND_CONNECTION_ID
   - COMPOSIO_GMAIL_CONNECTION_ID
   - COMPOSIO_HUBSPOT_CONNECTION_ID
   - COMPOSIO_NOTION_CONNECTION_ID
   - COMPOSIO_SLACK_CONNECTION_ID
   - COMPOSIO_1PASSWORD_CONNECTION_ID
   - COMPOSIO_BREVO_CONNECTION_ID
   - COMPOSIO_SENDGRID_CONNECTION_ID
   - COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID
   - COMPOSIO_FIRECRAWL_CONNECTION_ID
   - COMPOSIO_SERPAPI_CONNECTION_ID
   - COMPOSIO_TAVILY_CONNECTION_ID

## Step 4: Stripe Configuration (10 min)
1. Log into Stripe Dashboard
2. Create Products:
   - Starter: $499 one-time
   - Growth: $1,499/month recurring
   - Enterprise: custom pricing
3. Copy Price IDs (format: price_xxxxx)
4. Add secrets:
   - STRIPE_STARTER_PRICE_ID
   - STRIPE_GROWTH_PRICE_ID
   - STRIPE_ENTERPRISE_PRICE_ID

## Step 5: Calendly Configuration (5 min)
1. Create event types:
   - "AI Discovery Call" (free)
   - "SOC Readiness Review" ($500)
2. Enable Stripe payments for paid events
3. Copy booking links

## Step 6: Run Workflows (5 min)
1. Go to https://github.com/Zion-support/zion-support.github.io/actions
2. Run `composio-stripe-create-payment-links.yml` with Price IDs
3. Run `composio-full-stack.yml` to verify all connections
4. Enable schedules for:
   - composio-calendly-whatsapp-stripe-revenue.yml
   - composio-hubspot-lead-monetization.yml
   - composio-resend-billing.yml
   - composio-full-stack.yml
   - zion-daily-health-check.yml

## Step 7: Update Site (10 min)
1. Edit site pages with real Stripe/Calendly links
2. Test payment flow: /pricing/ → Stripe → /payment-success/
3. Test Calendly booking flow
4. Verify WhatsApp number and Resend domain

## Revenue Models Ready
1. Subscription SaaS: Stripe subscriptions + Calendly onboarding + Resend emails
2. Managed Services Retainer: $3,000-$15,000/mo
3. Usage-Based API: Stripe usage records per API call
4. Partner/Reseller: FirstPromoter/PartnerStack + Stripe payouts + Calendly onboarding
5. Paid Consultation: $500-$5,000/project

## Composio Workflows Ready
- composio-calendly-whatsapp-stripe-revenue.yml: Revenue engine
- composio-hubspot-lead-monetization.yml: Lead sync
- composio-resend-billing.yml: Billing emails
- composio-full-stack.yml: Health check
- composio-stripe-create-payment-links.yml: Payment links
- zion-daily-health-check.yml: Uptime monitoring

## Conservative Revenue Projection
- Month 1-3: ~$20,000
- Month 4-6: ~$72,000
- Month 7-12: ~$201,000

## Investment Required
- Time: ~4 hours
- Money: <$50/mo

## Support
- Docs: docs/composio-integration-guide.md
- Runbook: docs/ops-runbook/
- Checklist: docs/verification-checklist/
- Workflows: .github/workflows/
- Site: https://ziontechgroup.com
