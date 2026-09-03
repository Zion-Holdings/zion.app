# Zion Tech Group — Immediate Action Checklist

## Priority 1: Revenue Infrastructure (This Week)
- [ ] Create Stripe account and products
- [ ] Create Calendly account and event types
- [ ] Connect Stripe + Calendly in Composio dashboard
- [ ] Add `COMPOSIO_STRIPE_CONNECTION_ID` and `COMPOSIO_CALENDLY_CONNECTION_ID` to GitHub Secrets
- [ ] Run `composio-stripe-create-payment-links.yml` with real Price IDs
- [ ] Update /pricing/ page with real Stripe links
- [ ] Test payment flow end-to-end

## Priority 2: Lead Automation (This Week)
- [ ] Create HubSpot account
- [ ] Create Notion workspace with revenue/leads databases
- [ ] Create Slack workspace and channel
- [ ] Connect HubSpot + Notion + Slack in Composio
- [ ] Run `composio-hubspot-lead-monetization.yml` manually
- [ ] Add lead capture forms to site pages

## Priority 3: Notifications (Next Week)
- [ ] Create Resend account and verify domain
- [ ] Create WhatsApp Business account
- [ ] Connect Resend + WhatsApp in Composio
- [ ] Run `composio-resend-billing.yml` manually
- [ ] Test invoice delivery flow

## Priority 4: Full Stack (Next Week)
- [ ] Connect remaining apps in Composio: Gmail, SendGrid, Brevo, ActiveCampaign, Firecrawl, SerpApi, Tavily
- [ ] Add all Connection IDs to GitHub Secrets
- [ ] Run `composio-full-stack.yml` and verify all connections
- [ ] Enable schedules for all workflows

## Priority 5: Site Deployment (Ongoing)
- [ ] Change Pages source to `main` in GitHub UI
- [ ] Verify all new pages return 200
- [ ] Update internal links to point to new pages
- [ ] Add JSON-LD schemas to all service pages
- [ ] Submit sitemap to Google Search Console

## Priority 6: Partner Program (Month 2)
- [ ] Choose affiliate platform: Partnero, FirstPromoter, or Rewardful
- [ ] Create partner onboarding flow in Notion
- [ ] Set up Stripe payouts for partners
- [ ] Create partner portal page
- [ ] Launch partner recruitment campaign

## Revenue Targets
- Month 1: $20,000
- Month 3: $72,000
- Month 6: $201,000

## Support
- Docs: `docs/composio-integration-guide.md`
- Strategy: `docs/composio-mastery-strategy.md`
- Execution: `docs/execution-pack.md`
- Workflows: `.github/workflows/composio*.yml`
- Site: https://ziontechgroup.com
