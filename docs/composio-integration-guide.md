# Zion Tech Group — Composio Integration Guide

## Connected Apps

### Revenue & Billing
- **Stripe** — Payment links, subscriptions, charges, customers
- **Calendly** — Event types, bookings, webhooks
- **Chargebee** — Subscriptions, invoices, customers
- **Paddle** — Payments, subscriptions, licenses

### Notifications & Email
- **Resend** — Transactional emails
- **SendGrid** — Email campaigns and delivery
- **Brevo** — CRM and email automation
- **ActiveCampaign** — Lead nurturing and campaigns
- **WhatsApp Business** — AI support and notifications
- **Gmail** — Inbox monitoring and sending

### CRM & Productivity
- **HubSpot** — Deals, contacts, companies
- **Notion** — Revenue docs, lead tracking, playbooks
- **Slack** — Alerts and notifications
- **1Password** — Secrets management

### Search & Intelligence
- **Firecrawl** — Web crawling and content extraction
- **SerpApi** — Search engine results and SEO data
- **Tavily** — AI-powered search and research

## Active Workflows

### Revenue Engine
`composio-calendly-whatsapp-stripe-revenue.yml`
- Schedule: Mon-Fri 9am/2pm
- Flow: Calendly events → WhatsApp notifications → Stripe payment links → Resend emails
- Dashboard: `docs/revenue-dashboard.md`

### Lead Monetization
`composio-hubspot-lead-monetization.yml`
- Schedule: Daily 9am
- Flow: HubSpot deals → Notion sync → Slack alerts

### Billing Emails
`composio-resend-billing.yml`
- Schedule: Mon/Thu 9am
- Flow: Stripe invoices → Resend delivery

### Full Stack Health Check
`composio-full-stack.yml`
- Schedule: Mon-Fri 8am/1pm/6pm
- Checks all 15 connections
- Lists available tools per connection
- Attempts Stripe charges and Calendly events listing

## Setup Instructions

### 1. Create Accounts
- [ ] Stripe: https://dashboard.stripe.com/register
- [ ] Calendly: https://calendly.com/signup
- [ ] WhatsApp Business: https://business.whatsapp.com/
- [ ] Resend: https://resend.com/signup
- [ ] HubSpot: https://hubspot.com/signup
- [ ] Notion: https://notion.so/signup
- [ ] Slack: https://slack.com/signup
- [ ] 1Password: https://1password.com/signup
- [ ] SendGrid: https://signup.sendgrid.com/
- [ ] Brevo: https://brevo.com/signup
- [ ] ActiveCampaign: https://activecampaign.com/signup
- [ ] Firecrawl: https://firecrawl.dev/signup
- [ ] SerpApi: https://serpapi.com/signup
- [ ] Tavily: https://tavily.com/signup

### 2. Get Connection IDs
1. Go to https://app.composio.dev
2. Connect each app
3. Copy the Connection ID
4. Add to GitHub Secrets as `COMPOSIO_<APP>_CONNECTION_ID`

### 3. Configure Stripe
1. Create products in Stripe Dashboard
2. Get Price IDs
3. Add secrets: `STRIPE_STARTER_PRICE_ID`, `STRIPE_GROWTH_PRICE_ID`, `STRIPE_ENTERPRISE_PRICE_ID`
4. Run `composio-stripe-create-payment-links.yml` workflow

### 4. Configure Calendly
1. Create event types: "AI Discovery Call", "SOC Readiness Review"
2. Enable Stripe payments in event settings
3. Copy booking links to site pages

### 5. Verify Connections
Run `composio-full-stack.yml` workflow manually and check:
- All connections show `status: ok`
- Tool counts are > 0
- No errors in the summary

## Revenue Models

### 1. Subscription SaaS
- Stripe subscriptions with metered billing
- Calendly for onboarding calls
- Resend for invoicing and receipts
- HubSpot for customer tracking

### 2. Managed Services Retainer
- Fixed monthly fee per client
- Stripe recurring payments
- WhatsApp AI support channel
- Notion for service logs

### 3. Usage-Based API
- Stripe usage records per API call
- Developer portal with API keys
- Resend alerts for quota limits
- Firecrawl for usage analytics

### 4. Partner/Reseller
- PartnerStack or FirstPromoter for affiliate tracking
- Stripe for partner payouts
- Calendly for partner onboarding
- Notion for partner playbooks

## Monitoring & Alerts

### Daily Health Check
`zion-daily-health-check.yml`
- Probes all live routes
- Checks email deliverability
- Validates CI status
- Sends alerts on failure

### Revenue Dashboard
`docs/revenue-dashboard/`
- Leads count from HubSpot
- Bookings from Calendly
- Revenue from Stripe
- Messages from WhatsApp/Resend

## Next Steps

1. **Create accounts** on all connected apps
2. **Get Connection IDs** from Composio dashboard
3. **Add GitHub Secrets** for all connections
4. **Run full-stack check** to verify connections
5. **Create Stripe products** and Price IDs
6. **Run payment link workflow** to generate links
7. **Update site pages** with real booking/payment links
8. **Enable schedules** for all workflows

## Support

For issues:
- Check `docs/ops/full-stack-log.md` for recent runs
- Check GitHub Actions for workflow failures
- Verify Composio connections at https://app.composio.dev
