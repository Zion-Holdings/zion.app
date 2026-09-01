# Composio Connected Accounts Setup Guide

## Current Status
✅ **Composio API key**: working
✅ **1Password connection**: ACTIVE (`ca_o33DKzYQ3qt1`)

## New Connections Created
OAuth connections are ready for authorization. Visit these links:

| Toolkit | Connection ID | Authorize Link |
|---------|---------------|----------------|
| **Stripe** | `ca_ETsNUa_-X-u4` | https://connect.composio.dev/link/lk_7P1AOPGd-i-c |
| **Calendly** | `ca_nCAb79c3MOV7` | https://connect.composio.dev/link/lk_r0L4db3D2wk5 |
| **WhatsApp** | `ca_iOaEyWj9GQOh` | https://connect.composio.dev/link/lk_F_GHneZYWDkh |

> ⚠️ These links expire at **2026-09-01T15:31:39Z**. Authorize them before then.

## Still Needed: API Keys
For these API-key-based toolkits, I need the real keys from you:

| Toolkit | What I Need |
|---------|-------------|
| **Brevo** | Brevo API key (starts with `xkeysib-`) |
| **Resend** | Resend API key (starts with `re_`) |
| **SerpApi** | SerpApi API key (64-char string) |
| **Firecrawl** | Firecrawl API key (starts with `fc-`) |
| **Tavily** | Tavily API key (starts with `tvly-`) |

**Send me the keys in this format:**
```
BREVO_API_KEY=xkeysib-...
RESEND_API_KEY=re_...
SERPAPI_API_KEY=...
FIRECRAWL_API_KEY=fc-...
TAVILY_API_KEY=tvly-...
```

## After You Share Keys
1. I'll create the connected accounts via Composio API
2. Add all new `connection_id`s as GitHub secrets
3. Update all 8 workflow files
4. Trigger validation runs
5. Enable Telegram alerts if you provide bot token + chat ID

## Security Note
I will use these keys only to create Composio connected accounts and will not store them in plain text in the repo or memory. They will be sent via GitHub secrets.
