# Zion Composio Specialist Playbook

Research-backed operating manual for extracting maximum value from Composio on Zion.

## Platform model (2026)

Composio is not a pile of per-app MCP tools. Production use has three layers:

1. **Connect MCP** (`https://connect.composio.dev/mcp`) — 7 meta-tools: search, schemas, multi-execute (up to 50), manage/wait connections, remote workbench, remote bash.
2. **Sessions** (`composio.create(user_id)`) — agent-time discovery + managed OAuth. Execute through the session, never through a raw user_id helper, or meta-tools fail with `can only be called inside a tool-router session`.
3. **Direct REST v3.1** (`https://backend.composio.dev/api/v3.1`) — deterministic scripts. `POST /tools/execute/{slug}` with `connected_account_id` + `user_id` + `arguments`. On v3.1, omitting `version` selects **latest**. On v3 it selects the frozen `00000000_00` pin and looks "empty."

Terminology (never use the old words in new code):

| Old | Current |
|---|---|
| entity ID | `user_id` |
| actions | tools (`GITHUB_CREATE_AN_ISSUE`) |
| apps | toolkits (`github`) |
| integration | auth config |
| connection | connected account |

## Specialist rules for Zion

1. **Discover, do not hardcode.** `GET /connected_accounts` and pick the newest `ACTIVE` row per toolkit. GitHub secrets named `COMPOSIO_HUBSPOT_CONNECTION_ID` went stale while 31 other toolkits stayed live.
2. **Verify the slug** with `GET /tools/{slug}` before execute. Catalog search ranking is noisy (it will happily return `STRIPE_ATTACH_PAYMENT_METHOD` for "list").
3. **Read-only first.** Mutation tools (create price, send Slack, create Linear issue) only after a verified schema.
4. **Pin versions in scheduled jobs** when you parse structured fields (`charges.data[].amount`). Use `latest` only when an LLM consumes the payload.
5. **Triggers beat cron** for Calendly bookings, Stripe payments, Gmail, and GitHub. Register one project webhook; Composio signs and retries. Gmail/Calendar are polling (~15 min); Slack/Notion are realtime.
6. **Per-user isolation.** Do not mix `kleber@ziontechgroup.com` (all expired) with the playground user. Production identity should own the ACTIVE accounts.

```
POST /api/v3.1/connected_accounts/link
{ "auth_config_id": "ac_…", "user_id": "kleber@ziontechgroup.com" }
```

201 → `redirect_url` on `connect.composio.dev/link/lk_…` plus `expires_at` (about **10 minutes**). Open immediately; do not commit the URL to git. HubSpot auth config `ac_RfR0aCEDSDbE`. After authorize, `GET /connected_accounts` must show ACTIVE on kleber@ — not another playground row. `POST /connected_accounts/{id}/refresh` on an EXPIRED HubSpot row returns INITIATED + a short redirect; prefer `link()` for a new kleber@ account.
7. **Never log tokens.** Connection IDs can live in internal reports; API keys cannot.
8. **Quota-aware playbooks.** Skip Firecrawl/Hunter/OpenRouter when the previous call returned 402/429 instead of looping.

## Maximum-value playbooks per live toolkit

### Revenue
- **Calendly** → list event types with the user URI (`Exactly one of user or organization`). Only `.../zion-tech-group-ai-it-discovery-1` is **active**. `CALENDLY_LIST_EVENTS` “active” includes past uncanceled June 2026 30-min leftovers. **0 webhook subscriptions** — Composio also has no Calendly trigger type. Use cron + `min_start_time`.
- **Stripe** → list products/prices/payment links; create missing Growth/Starter prices; do not invent HubSpot deals when HubSpot is expired.
- **Resend** → verified domain `ziontechgroup.com`. Send only to Zion inboxes from automations unless a human approved outreach.
- **WhatsApp** → repair WABA permissions before sending. Current Graph id `780439071624836` is unauthorized.

### Pipeline
- **Gmail** → query `newer_than:7d` / `label:INBOX`. Current signal: gh-pages mirror job failing for 5h+.
- **Linear** → team `a92e1670-db71-4cec-bb71-b3c647ca164b`. Stop creating duplicate `Outreach: Kleber` tickets.
- **Notion** → search + create under the existing Zion parent page. Growth Loop status pages already exist.
- **Airtable** → `Sales CRM` (`appsO95N9PqNEuwUX`) is the live lightweight CRM while HubSpot is dark.
- **Google Sheets** → `Zion Leads` (`1RE4UUTu9AOTvH_gZPECjIhT3ye561Z01NF2QEzgd_cY`).
- **Hunter** → wait for monthly reset; do not burn 429s.

### Intelligence
- **Tavily** `TAVILY_SEARCH` with `include_answer` for competitor briefs (Goodish, Alice Labs, n8n/Make shops).
- **SerpAPI** `SERPAPI_GOOGLE_LIGHT_SEARCH` (`q`) for brand SERP. `SERPAPI_SEARCH` is the generic alias.
- **Sentry** `javascript-nextjs` for Next.js errors.
- **Cursor** `CURSOR_LIST_AGENTS` to de-dupe parallel cloud agents rewriting the same repo.

### Brand
- **Instagram** `@zion.tech.group` (2.9k) — change website from `.com.br` to `https://ziontechgroup.com`. Last media 2025-06-07 (marketplace reels). Canonical page `/marketplace/`. `INSTAGRAM_GET_IG_USER_MEDIA` + insights.
- **LinkedIn** personal works. Org ACL (`LINKEDIN_GET_COMPANY_INFO`, `LINKEDIN_GET_ORG_PAGE_STATS`) needs `r_organization_admin`. Headline locales currently disagree (Holdings / Technologies / Tech Group) — fix in LinkedIn UI, do not auto-post.
- **Discord** `DISCORD_LIST_MY_GUILDS` is personal DeFi rooms. Do not market a Zion Discord.
- **GitHub** authenticated user has 3 repos: public `zion-support.github.io`, private `telegram-ai-reply-worker` (real Wrangler worker), private `telegram-agent-listener` (Python webhook). Workers Builds on the Pages repo is the wrong hook.
- **YouTube** `UCKrJNz3OqQ6Im9bQbJko7Ug` — do not publish from the unrelated "Surf Family" OAuth channel.
- **LinkedIn** personal + company page `ziontechgroup`.
- **Telegram** bot `@Composio_Kleber_bot` is in **Zion Agents** (`@ziontechgroup_agents`, chat `-1003886112318`). Keep replies in-originating-chat via `telegram-agent-listener`. Set bot commands (`discovery`, `plans`, `about`, `status`). Do not put the ops group on public marketing pages.
- **YouTube** list with `channelId=UCKrJNz3OqQ6Im9bQbJko7Ug`, never `mine` (that OAuth is the unrelated Surf Family channel).
- **Instagram insights** allowed metrics include `reach`, `profile_views`, `website_clicks` — not `impressions`. `ig_user_id` `27786273507741648`. Graph **silently omits** metrics with no data for the window (2026-08-26→09-02 returned `reach` only).
- **Google Sheets** write with `GOOGLESHEETS_VALUES_UPDATE` (`spreadsheet_id`, `range`, `value_input_option=USER_ENTERED`, `values`).
- **Airtable** `AIRTABLE_CREATE_RECORD` needs `baseId` + `tableIdOrName`. Typecast select fields. Never import the 2017 template contacts.

## Recommended architecture

```
Composio v3.1
 ├─ discover-connections.mjs   (source of truth)
 ├─ zion-composio-engine.mjs   (weekday 08:20 / 16:20 UTC)
 ├─ revenue-pipeline-v2.mjs    (Stripe + Calendly + Resend)
 ├─ lead-to-revenue-v2.mjs     (Gmail + Notion + Linear + Slack)
 └─ connection-monitor-v2.mjs  (health score from live accounts)
```

## Triggers (verified 2026-09-02)

Catalog: `GET /api/v3.1/triggers_types` (396 types). Active instances: `GET /api/v3.1/trigger_instances/active` — **empty**. Project webhooks: `GET /api/v3.1/webhook_subscriptions` — **empty**. Event types: `composio.trigger.message`, `composio.connected_account.expired`, `composio.trigger.disabled`.

**Calendly has no Composio trigger types.** Booking detection stays cron (`CALENDLY_LIST_EVENTS`) or a native Calendly webhook until Composio adds a type.

Do **not** `POST /webhook_subscriptions` until Zion has a public HTTPS receiver (e.g. `telegram-agent-listener`). Creating a subscription without a live URL drops the one-per-project slot and returns a signing secret that must go in 1Password, never git.

First instances to upsert after the webhook exists:

| Slug | Why |
|---|---|
| `STRIPE_CHECKOUT_SESSION_COMPLETED` | Discovery $99 / Starter / Growth paid |
| `STRIPE_CHARGE_SUCCEEDED` | Confirm cash |
| `GMAIL_NEW_GMAIL_MESSAGE` | Inbound lead (poll ~15 min) |
| `GITHUB_ISSUE_CREATED_TRIGGER` | Delivery intake |
| `SLACK_RECEIVE_MESSAGE` | `#support` |
| `AIRTABLE_BASE_SCHEMA_CHANGED_TRIGGER` | Guard against more demo-schema drift |

Upsert: `POST /api/v3.1/trigger_instances/{slug}/upsert` with `connected_account_id` from auto-discover (playground user until kleber@ is re-linked).

Event-driven revenue path once webhook + Stripe/Gmail triggers exist:

`Stripe checkout completed → Resend confirmation → Airtable/Sheets lead row → Slack #support` (Calendly remains polled).

## Security note

A 2026 Composio incident involved leaked GitHub OAuth tokens from an employee mailbox. Zion policy: rotate any key that appears in chat logs, keep 1Password as the only secret store, and treat playground connections as non-production until they are owned by `kleber@ziontechgroup.com`.
