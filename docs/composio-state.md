# Zion Composio Master — Estado Real e Próximos Passos

Atualizado 2026-09-03T01:42Z. Apex drifted again to stale `public/index.html` (“Measurable Growth”, 5318 bytes) while workspace root is Discovery $99 (5944 bytes). Dual-write `/` + `public/` is mandatory until `public/` is removed from `gh-pages`. Kleber reconnect still HubSpot INITIALIZING + Jira/noCRM/Perplexity INITIATED (`2026-09-03T01:32Z`); do not remint until those rows are EXPIRED. Identity `kleber@` is 81 rows, 0 ACTIVE. 31 playground toolkits remain ACTIVE.

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
- Calendly de discovery apontando para o event type real. Páginas `/book/` (embed) e `/paid-consultation/` (alias).
- `/about/` (legitimidade 26 anos + sameAs) e `/composio-vs-n8n-make/` (camada de tools vs canvas).
- Planilha Zion Leads populada; oportunidade real no Airtable Sales CRM (ignorar demo 2017).
- Telegram Zion Agents (`@ziontechgroup_agents`) identificado e bot commands definidos.

## Próximos passos

1. Reconectar HubSpot, WhatsApp WABA, Brevo IP, Cloudflare token, Firecrawl credits.
2. Migrar contas ACTIVE para `kleber@ziontechgroup.com`.
3. Ligar triggers (Calendly booking, Stripe payment, Gmail) em vez de só cron.
4. Trocar o website do Instagram de `.com.br` para `ziontechgroup.com`.
5. Reativar o projeto Supabase `Zion App`.
6. Criar webhook HTTPS + trigger instances (`STRIPE_CHECKOUT_SESSION_COMPLETED`, `GMAIL_NEW_GMAIL_MESSAGE`). Calendly não tem trigger no catálogo Composio.
7. Desconectar Workers Builds deste repo Pages (worker `ziontechgroup`). O worker real é `telegram-ai-reply-worker`.
8. Religar LinkedIn com `r_organization_admin` e alinhar headlines. Postar de novo no Instagram (último reel 2025-06-07) apontando para `/marketplace/`.
