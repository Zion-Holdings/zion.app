# Zion Monetization — Research Backed Playbook (2026)

## Billing & Metering
- **Stripe** — still the default: payment links, subscriptions, metered usage, invoices.
- **Paddle** — strong when you want tax/vat handled for you.
- **Chargebee** — best when subscriptions + enterprise contracts + usage pricing coexist.
- **Metronome** — best for high-volume AI usage/event billing; often paired with Stripe checkout.
- **Orb / Stigg** — alternative usage/credit-meter stacks; sales-gated or developer-first.

## Affiliate / Partner / Reseller
- **Partnero** — top pick 2026: affiliate + referral in one, native Stripe/Paddle/Shopify/WooCommerce, automated payouts.
- **FirstPromower** — strongest for subscription billing awareness across Stripe, Paddle, Chargebee, Recurly, Braintree.
- **PartnerStack** — enterprise partner marketplace; higher minimum fit.
- **Rewardful** — fastest setup for small SaaS, Stripe/Paddle, ~15 min, no developer needed.
- **Tapfiliate** — good if you mix SaaS + e-commerce.
- **Tolt** — cheapest paid entry; Stripe-native.
- **Reditus** — useful for B2B SaaS marketplace motion.

## Booking
- **Calendly** — still the practical default for discovery calls and paid bookings.

## Notifications / Email / Chat
- **Resend** — transactional email with modern DX.
- **SendGrid** — broader campaign + delivery.
- **Brevo** — CRM + email automation.
- **ActiveCampaign** — lead nurturing.
- **WhatsApp Business** — support and notifications.

## CRM / Knowledge / Alerts
- **HubSpot**, **Notion**, **Slack**, **1Password**

## Intelligence / Research
- **Firecrawl** — crawling and extraction.
- **SerpApi** — search/SEO data.
- **Tavily** — AI search/research.

## Composio Critical Update (2026)
- `initiate()` for OAuth connections is being retired for managed OAuth orgs: 2026-05-08 new orgs, 2026-07-03 all orgs.
- Migrate now to **Hosted Authentication / Connect Link**:
  - SDK: `composio.connected_accounts.link(...)`
  - CLI: `composio connected-accounts link ...`
- CLI install/login docs: https://docs.composio.dev/docs/cli
- First connection typically under 30 minutes; free tier includes 100,000 tool calls/month.

## Recommended Revenue Stack
1. **Subscription SaaS** — Stripe or Chargebee + Calendly + Resend.
2. **AI usage/API** — Stripe usage records OR Metronome/Orb + developer portal.
3. **Partner/affiliate** — Partnero or FirstPromoter + Stripe payouts + Calendly onboarding.
4. **Managed services** — fixed retainers + Stripe recurring + WhatsApp support + Notion logs.
5. **Consulting** — Calendly paid events + Stripe + Resend confirmation.
