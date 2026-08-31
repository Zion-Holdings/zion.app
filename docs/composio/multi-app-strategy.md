# Composio Multi-App Strategy — Zion Tech Group

## Objective
Maximize the connected Composio apps across GitHub, Gmail, Linear, Notion, Resend, Brevo, Stripe, Telegram, WhatsApp, Sentry, Firecrawl, Hunter, Apollo, SerpApi, and Canva.

## Current connected apps
- GitHub
- Gmail
- Linear
- Notion
- Resend
- Brevo
- Stripe
- Telegram
- WhatsApp
- Sentry
- Firecrawl
- Hunter
- Apollo
- SerpApi
- Canva

## Verified tool slugs
- GitHub: `GITHUB_CREATE_AN_ISSUE`
- Gmail: `GMAIL_FETCH_EMAILS`, `GMAIL_SEND_EMAIL`, `GMAIL_CREATE_EMAIL_DRAFT`
- Linear: `LINEAR_CREATE_LINEAR_ISSUE`, `LINEAR_LIST_LINEAR_ISSUES`
- Notion: `NOTION_CREATE_NOTION_PAGE`, `NOTION_FETCH_PAGE`
- Resend: `RESEND_CREATE_CONTACT`
- Brevo: `BREVO_SEND_EMAIL`
- Stripe: `STRIPE_LIST_EVENTS`, `STRIPE_CREATE_CUSTOMER`
- Telegram: `COMPOSIO_SEND_TELEGRAM_MESSAGE` via `composio-send-telegram-message@v1`
- WhatsApp: `WHATSAPP_SEND_MESSAGE`
- Sentry: `SENTRY_GET_ORGANIZATION_DETAILS`, `SENTRY_LIST_AN_ORGANIZATIONS_ISSUES`, `SENTRY_CREATE_ISSUE`
- Firecrawl: `FIRECRAWL_SCRAPE`, `FIRECRAWL_CRAWL_V2`
- Hunter: `HUNTER_DOMAIN_SEARCH`, `HUNTER_EMAIL_VERIFIER`
- Apollo: `APOLLO_PEOPLE_ENRICHMENT`
- SerpApi: `SERPAPI_SEARCH`
- Canva: `CANVA_CREATE_DESIGN`

## Workflow map
1. Lead enrichment -> Linear/Notion/Telegram
2. Gmail triage -> Linear issues
3. Stripe payments -> Telegram summary
4. Sentry errors -> GitHub issues/Linear
5. SEO watchdog -> Notion/Telegram
6. WhatsApp lead follow-up
7. Brevo/Resend broadcast
8. Canva assets -> Telegram
9. GitHub/PR events -> Telegram
10. Production health -> Telegram/Email

## Usage rules
- Use one `composio execute ...` wrapper or GitHub Actions `composio-sdk-action@v1`
- Always retry with exponential backoff up to 3 attempts
- Skip unstable integrations on error instead of aborting
- Never expose raw API keys in workflow YAML
- Keep secrets in repo secrets: `COMPOSIO_<APP>_CONNECTION_ID`
