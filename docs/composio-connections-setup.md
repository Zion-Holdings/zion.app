# Composio Connected Accounts Setup Guide

## Current Status
✅ **Composio API key**: working
✅ **1Password connection**: ACTIVE (`ca_o33DKzYQ3qt1`) with `user_id: pg-test-b311dcc6-03f6-4077-8774-c90cfd6fcf29`

❌ **Other connections**: All EXPIRED. Need fresh accounts for `kleber@ziontechgroup.com`.

## Why Manual Setup?
Composio requires OAuth/API-key authentication per service provider. The initial connection must be authorized by you directly with each provider. After that, I can fully automate monitoring and usage.

## Setup Steps

### 1. Open Composio Dashboard
Go to: https://app.composio.dev

Login with your account and ensure you're using **email `kleber@ziontechgroup.com`** as the user ID for all connections.

### 2. Create Connected Accounts
For each toolkit below, create a new connected account in the dashboard:

| Toolkit | Connection Name | Notes |
|---------|-----------------|-------|
| **Brevo** | `brevo-kleber` | Use Brevo API key |
| **Resend** | `resend-kleber` | Use Resend API key |
| **SerpApi** | `serpapi-kleber` | Use SerpApi API key |
| **Firecrawl** | `firecrawl-kleber` | Use Firecrawl API key |
| **Stripe** | `stripe-kleber` | Use Stripe secret key |
| **Calendly** | `calendly-kleber` | OAuth or API token |
| **WhatsApp** | `whatsapp-kleber` | WhatsApp Business API |
| **Tavily** | `tavily-kleber` | Use Tavily API key |

### 3. Copy Connection IDs
After creating each connection, copy the `connection_id` (format: `ca_XXXXX`).

### 4. Send Me the IDs
Share them in this format:
```
BREVO_CONNECTION_ID=ca_XXXXX
RESEND_CONNECTION_ID=ca_XXXXX
SERPAPI_CONNECTION_ID=ca_XXXXX
FIRECRAWL_CONNECTION_ID=ca_XXXXX
STRIPE_CONNECTION_ID=ca_XXXXX
CALENDLY_CONNECTION_ID=ca_XXXXX
WHATSAPP_CONNECTION_ID=ca_XXXXX
TAVILY_CONNECTION_ID=ca_XXXXX
```

## What I'll Do After Receiving IDs
1. Update all 8 workflow files with the new `connection_id`s and `user_id`
2. Add/update GitHub secrets:
   - `COMPOSIO_BREVO_CONNECTION_ID`
   - `COMPOSIO_RESEND_CONNECTION_ID`
   - `COMPOSIO_SERPAPI_CONNECTION_ID`
   - `COMPOSIO_FIRECRAWL_CONNECTION_ID`
   - `COMPOSIO_STRIPE_CONNECTION_ID`
   - `COMPOSIO_CALENDLY_CONNECTION_ID`
   - `COMPOSIO_WHATSAPP_CONNECTION_ID`
   - `COMPOSIO_TAVILY_CONNECTION_ID`
3. Trigger validation runs for all workflows
4. Update `composio-connection-monitor.yml` to track all connections
5. Enable Telegram alerts if you provide `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID`

## Estimated Time
15-20 minutes to create all connections in the dashboard.

## Reference
- Composio Docs: https://docs.composio.dev/docs/auth-configuration/connected-accounts
- API Reference: https://docs.composio.dev/reference/api-reference/connected-accounts
