# Composio Connected Accounts Setup Guide

## Current Status
✅ **Composio API key**: working
✅ **1Password connection**: ACTIVE (`ca_o33DKzYQ3qt1`) — usable via Composio, vault inventory currently returns empty
✅ **GitHub Actions**: validated via `composio-onepassword-master` workflow

## Created Connections
- **Stripe**: `ca_JPLfah993JGX` — OAuth link created, account status currently EXPIRED
- **Calendly**: `ca_ghd4GeXSjlLe` — OAuth link created, account status currently EXPIRED
- **WhatsApp**: `ca_5Nk9L3KbupLA` — OAuth link created, account status currently EXPIRED

## Still Needed: API Keys
These toolkits require manual account creation because no browser/headless path is available here:

| Toolkit | What is needed |
|---------|----------------|
| Brevo | API key starting with `xkeysib-` |
| Resend | API key starting with `re_` |
| SerpApi | 64-character API key |
| Firecrawl | API key starting with `fc-` |
| Tavily | API key starting with `tvly-` |

**Provide keys in this format:**
```
BREVO_API_KEY=***
RESEND_API_KEY=***
SERPAPI_API_KEY=***
FIRECRAWL_API_KEY=***
TAVILY_API_KEY=***
```

## Constraints
- Browser path is unavailable in this environment (`android-arm64` unsupported).
- After receiving keys, I can create connected accounts via API, set GitHub secrets, update workflows, and trigger validation runs.
