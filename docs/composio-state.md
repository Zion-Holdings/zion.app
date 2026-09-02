# Zion Composio Master — Estado Real e Próximos Passos

Atualizado 2026-09-02 a partir de `GET /api/v3.1/connected_accounts` (107 contas).

## Conexões ACTIVE (31 toolkits)

GitHub, Gmail, Notion, Slack, Linear, Stripe, Calendly, Resend, Tavily, SerpAPI, Hunter, LinkedIn, Instagram, YouTube, Discord, Telegram, Cursor, Hugging Face, OpenRouter, Sentry, Supabase, Airtable, Google Calendar, Google Sheets, Ninox, Cloudflare (auth broken), Firecrawl (no credits), Browserless (bad key), Brevo (IP allowlist), WhatsApp (Graph permissions), 1Password (empty vaults).

## Conexões expiradas / ausentes

- **HubSpot** — 7 contas, todas EXPIRED (CRM pipeline off)
- Perplexity AI, noCRM.io, Jira, Cloudflare MCP
- SendGrid, ActiveCampaign — sem conta ACTIVE
- Identidade `kleber@ziontechgroup.com` — 29 contas, **todas EXPIRED**

## Melhorias aplicadas

- Orchestrators v3 deixam de depender de `COMPOSIO_*_CONNECTION_ID` e descobrem contas ACTIVE via API.
- Novo job `composio-zion-maximize.yml` + engine `zion-composio-engine.mjs`.
- Inventário e playbook especialista em `docs/composio-live-inventory.md` e `docs/composio-specialist-playbook.md`.
- Página pública `/integrations/composio/` e stack `/composio-automation-stack/` alinhadas aos 31 apps reais.
- Calendly de discovery apontando para o event type real.

## Próximos passos

1. Reconectar HubSpot, WhatsApp WABA, Brevo IP, Cloudflare token, Firecrawl credits.
2. Migrar contas ACTIVE para `kleber@ziontechgroup.com`.
3. Ligar triggers (Calendly booking, Stripe payment, Gmail) em vez de só cron.
4. Trocar o website do Instagram de `.com.br` para `ziontechgroup.com`.
5. Reativar o projeto Supabase `Zion App`.
