# Zion — Composio Setup Runbook

## Status
- `COMPOSIO_API_KEY`: OK
- 1Password workflow: fix aplicada e executada com sucesso no workflow `composio-onepassword-master`
- OAuth accounts created but pending authorization: Gmail, WhatsApp, Calendly, Stripe, 1Password
- API_KEY accounts ready to be activated: Brevo, Resend, SerpApi, Firecrawl, Tavily, Jira, Nocrm, Ninox, NTFY, npm

## Required human actions
1. Authorize OAuth apps in Composio dashboard for `kleber@ziontechgroup.com`
2. Provide API keys for API_KEY accounts if you want them active

## Next automation
After OAuth completion, use connection IDs from Composio connected accounts API to enable tool execution.
