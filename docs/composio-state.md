# Zion Composio Master — Estado Real e Próximos Passos

Atualizado 2026-09-03T04:31Z. Apex drifted to leftover Next.js (`_next/static`) around 04:29Z; restored Discovery $99 + `/plans/` + honest 404 via targeted gh-pages dual-write of money pages. This turn closed 108 leftover 404s. SERP catalog 317.

Atualizado 2026-09-03T04:29Z. Apex is Discovery $99. This turn closed 108 leftover 404s. SERP catalog 317. Connect Links reminted 04:19Z still INITIALIZING/INITIATED past TTL — do not remint until EXPIRED. Workers Builds CI is the Cloudflare hook — not a site build; do not add wrangler.toml.

Atualizado 2026-09-03T04:27Z. Apex is Discovery $99. This turn closed 96 leftover 404s. SERP catalog 305. Connect Links reminted 04:19Z still INITIALIZING/INITIATED (expire ~04:29Z). Workers Builds CI is the Cloudflare hook on this Pages repo — not a site build; do not add wrangler.toml.

Atualizado 2026-09-03T04:24Z. Apex is Discovery $99. This turn closed 84 leftover 404s. SERP catalog 293. Connect Links reminted 04:19Z still INITIALIZING/INITIATED (expire ~04:29Z).

Atualizado 2026-09-03T04:22Z. Apex is Discovery $99. This turn closed 72 leftover 404s. SERP catalog 281. Connect Links reminted 04:19Z still INITIALIZING/INITIATED (expire ~04:29Z).

Atualizado 2026-09-03T04:21Z. Apex is Discovery $99. This turn closed 60 leftover 404s. SERP catalog 269. Connect Links reminted 04:19Z expire ~04:29Z.

Atualizado 2026-09-03T04:19Z. Apex is Discovery $99. This turn closed 48 leftover 404s (identity/DLP, SRE/MSP, AI studio, HR/legal/warehouse). SERP catalog 257. Connect Links reminted 04:19Z expire ~04:29Z.

Atualizado 2026-09-03T04:08Z. Apex is Discovery $99. This turn closed 36 leftover 404s (identity/DLP, SRE/MSP, AI studio/micro-SaaS). SERP catalog 245. Connect Links reminted 04:03Z expire ~04:13Z.

Atualizado 2026-09-03T04:06Z. Apex is Discovery $99. Identity/DLP/zero-trust leftover closers live 200. This turn also dual-writes 12 SRE/sovereignty/MSP leftover closers (SERP catalog 233). Connect Links reminted 04:03Z (expire ~04:13Z). Stripe $0; Calendly 0 upcoming; Gmail 12h sales 0.

Atualizado 2026-09-03T04:02Z. Apex is Discovery $99 (`data-built=2026-09-03T02:55Z`). IAM/on-call/data-mesh leftover closers are live 200. This turn dual-writes 12 identity/DLP/zero-trust leftover closers (SERP catalog 221). Stripe $0; Calendly 0 upcoming; Gmail 12h sales 0; Sentry unresolved none; Cloudflare 0 zones. Kleber HubSpot/Jira/noCRM/Perplexity still INITIALIZING/INITIATED from 03:50Z — remint only after EXPIRED. Identity `kleber@` is 0 ACTIVE. 31 playground toolkits remain ACTIVE.

Atualizado 2026-09-03T03:06Z. Apex is Discovery $99 (`data-built=2026-09-03T02:55Z`, ~6026 bytes). Pages source is `legacy` / `gh-pages` / `/`, `custom_404: true`, `https_enforced: true`. Stripe charges still $0; Gmail 12h sales query 0; Sentry unresolved none. SerpAPI still ranks leftover SKUs with stale titles (invoice generator, bookkeeping, Keycloak, Zscaler, box-shadow tools, free-consult blogs). This turn dual-writes 20 more ranking 404 closers (SERP catalog now 94). Kleber reconnect reminted 2026-09-03T03:05Z (~10 min TTL); do not remint while INITIALIZING/INITIATED. Identity `kleber@` is 0 ACTIVE. 31 playground toolkits remain ACTIVE.

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
