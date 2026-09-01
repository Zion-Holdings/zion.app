# Composio Connected Accounts Setup Guide

## Current Status
✅ **Composio API key**: working
✅ **1Password connection**: ACTIVE (`ca_o33DKzYQ3qt1`) with `user_id: pg-test-b311dcc6-03f6-4077-8774-c90cfd6fcf29`

❌ **Other connections**: All EXPIRED or using old `user_id` formats. Need fresh accounts for `kleber@ziontechgroup.com`.

## What You Need to Do

### Step 1: Create Connected Accounts
Go to https://app.composio.dev and create new connected accounts for each toolkit below using **email `kleber@ziontechgroup.com`**:

- **Brevo** → get new `connection_id`
- **Resend** → get new `connection_id`
- **SerpApi** → get new `connection_id`
- **Firecrawl** → get new `connection_id`
- **Stripe** → get new `connection_id`
- **Calendly** → get new `connection_id`
- **WhatsApp** → get new `connection_id`
- **Tavily** → get new `connection_id`

### Step 2: Share the New Connection IDs
Once you have the fresh connection IDs, send them to me in this format:
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

### Step 3: Telegram Alerts (Optional)
If you want Telegram alerts for inactive connections, add these secrets to your GitHub repo:
- `TELEGRAM_BOT_TOKEN` — from @BotFather
- `TELEGRAM_CHAT_ID` — your Telegram chat ID

## What I'll Do Once You Share IDs
1. Update all 8 workflow files with the new `connection_id`s
2. Add new GitHub secrets
3. Trigger validation runs for all workflows
4. Update `composio-connection-monitor.yml` to track all connections

## Why This Manual Step?
Composio's API requires OAuth/API-key flows per account. While I can automate the *testing* and *monitoring*, the initial account creation requires you to authenticate with each service provider directly.

**Estimated time**: 15-20 minutes
