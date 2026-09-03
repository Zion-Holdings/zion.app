# Zion Composio Live Inventory

Verified 2026-09-03 against Composio REST API v3.1 (`GET /connected_accounts`). Re-applied onto rewritten `origin/main` (root static export). Public pages: `/book/`, `/heritage/`, `/paid-consultation/`, `/plans/`, `/composio/`, `/composio-vs-zapier/`, `/privacy/`, `/terms/`, `/cookies/`, `/partners/`, `/affiliate/`, `/growth/`, `/press/`.

**2026-09-03 apex + money pages (live):** Pages API `cname=ziontechgroup.com` (cert approved, domain verified). **Source must stay `legacy` / `gh-pages` / `/`.** Also: GitHub Pages is serving the **`public/`** subtree when it exists. A stale `public/index.html` (“Measurable Growth”) overrode the root Discovery homepage even though root `index.html` was correct. Always upsert honest pages into **both** `/` and `public/`. `.nojekyll` + `CNAME` belong in both places.

Previous docs claimed Gmail, Notion, Slack, Linear, Airtable, and GitHub were missing. Live data contradicts that. Orchestrators that read `COMPOSIO_*_CONNECTION_ID` GitHub secrets were skipping healthy accounts.

## Active toolkits (31)

| Toolkit | Verified live call | Zion use |
|---|---|---|
| GitHub | Authenticated as `Zion-support` | Repo automation, issues, Telegram worker repos |
| Gmail | Inbox fetch (CI failure mail from gh-pages mirror) | Lead + ops triage |
| Notion | Search returns Growth Loop pages | Internal wiki / status |
| Slack | `#support` (C9375BEBA) + `#commercial` | Ops alerts |
| Linear | Team `Ziontechgroup` (`ZIO-*`) | Delivery backlog |
| Stripe | Live products + customers (incl. kleber@), **$0 charges** as of 2026-09-02. Payment links live. | Billing |
| Calendly | Only **one active** event type: [AI/IT Discovery `-1`](https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1). Public embed: `/book/`. Alias: `/paid-consultation/`. Older `30min`, `/consultation`, and non-`-1` Discovery are inactive. Scheduled collection is June 2026 “30 Minute Meeting” leftovers (status=active means not canceled). **0 Calendly webhooks.** | Paid consult funnel |
| Resend | Domain `ziontechgroup.com` **verified** | Transactional email |
| Tavily | Researcher plan, 29/1000 searches | Competitive research |
| SerpAPI | Google Light + Search | SEO / SERP monitoring |
| Hunter | Free plan **quota exhausted** (0/50 searches) | Lead enrichment |
| LinkedIn | Kleber Alcatrao, CEO Zion Holdings | Thought leadership |
| Instagram | `@zion.tech.group` · 2,946 followers · website still `ziontechgroup.com.br` | Social proof |
| YouTube | `@ziontechgroup` · 13 subs · 11 videos · 5,888 views | Video SEO |
| Discord | `kleberalcatrao` | Community (personal guilds, no Zion server yet) |
| Telegram | Bot `@Composio_Kleber_bot` in **Zion Agents** `@ziontechgroup_agents` | Ops + agent replies |
| Cursor | `kleber@ziontechgroup.com` | Cloud agents |
| Hugging Face | `kleberalcatrao` | Models / Spaces |
| OpenRouter | Credits **exhausted** (45.20 / 45.00) | LLM routing |
| Sentry | Project `javascript-nextjs` | Error monitoring |
| Supabase | Project `Zion App` is **INACTIVE** | App backend |
| Airtable | Sales CRM (`appsO95N9PqNEuwUX`) is a **2017 demo** (Payless Cashways). A real Zion account + Discovery $99 opportunity was added 2026-09-02. Do not sync demo rows. | Lightweight CRM while HubSpot is dark |
| Google Calendar | Owner calendars for Zion domain — no upcoming **client** bookings; events are internal CI/deploy meets | Scheduling |
| Google Sheets | `Zion Leads` (`1RE4UUTu9AOTvH_gZPECjIhT3ye561Z01NF2QEzgd_cY`) was empty; seeded 2026-09-02 with funnel URLs | Lead ops |
| Ninox | Team present | Structured ops DB |
| Cloudflare | Auth header format invalid / 0 zones | DNS — needs API token repair |
| Firecrawl | **402 insufficient credits** | Site crawl |
| Browserless | Invalid API key | Headless browse |
| Brevo | IP allowlist block | Marketing email |
| WhatsApp | Graph permission error on WABA id | Customer messaging |
| 1Password | 0 vaults visible | Secrets |
| YouTube / Instagram / LinkedIn | See above | Brand |

## Expired or failed (reconnect required)

| Toolkit | Notes |
|---|---|
| HubSpot | 7 accounts, all EXPIRED — CRM pipeline is dark |
| Perplexity AI | 4 expired |
| noCRM.io | 3 expired |
| Jira | 1 expired |
| Cloudflare MCP | 1 expired |
| SendGrid / ActiveCampaign | Auth configs exist in older docs, no live account |

`kleber@ziontechgroup.com` user_id has **29 connected accounts and every one is EXPIRED**. Live work is running on the playground user. Re-link production apps onto `kleber@ziontechgroup.com` (or set `ZION_USER_ID` to the working user) so CI and MCP share the same identity.

## CI: `Workers Builds: ziontechgroup`

Cloudflare’s GitHub app posts this check on **every push**, including `main` (still red there). It fails in ~0s with no annotations. Dashboard: account `f634328cf2b380daee7d928c1c4acad2`, production worker **`ziontechgroup`**.

This **Pages** repo is the wrong source. The live Telegram worker lives in private `Zion-support/telegram-ai-reply-worker` (`wrangler.toml` name `telegram-ai-reply-worker`, `src/index.ts`, Durable Object `STATE`, model `openai/gpt-4o-mini` via OpenRouter). OpenRouter credits are **exhausted**, so generated replies will fail until topped up. `ALLOWED_CHAT_IDS` is empty (every accessible chat). The worker is Telegram-webhook-only — do not point Calendly or Composio project webhooks at it. Issue: `Zion-support/telegram-ai-reply-worker#1`. `telegram-agent-listener` is a separate Python webhook service, not a Worker.

Confirmed again on `238e16f1` (`23:57:13Z`) and CNAME hotfix `ea0ac09f` (`23:56:14Z`): check `Workers Builds: ziontechgroup` started and finished in the **same second**, app `cloudflare-workers-and-pages`. Same-second fails also on `main`. That is not a build of this site.

## Production: custom domain (2026-09-03)

`https://ziontechgroup.com/` is **200** (Discovery $99 homepage). `https://www.ziontechgroup.com/` **301 → apex**. Pages API `cname=ziontechgroup.com`, cert approved (includes www), `build_type=legacy` / `gh-pages`. Do **not** send `https_enforced: true` before the cert exists.

Do **not** add a stub `wrangler.toml` here — that would deploy over production worker `ziontechgroup`. Fix: Cloudflare dashboard → disconnect Workers Builds from `zion-support.github.io`, or retarget it at `telegram-ai-reply-worker`.

Sitemap is now the money/ops set only. The previous 7,000-URL export listed ghost Next.js routes. Legal pages: `/privacy/`, `/terms/`, `/cookies/`. Honest partner/affiliate copy (no 20% commission).

## Brand / social (2026-09-02)

- Instagram last media **2025-06-07** (marketplace reels, 1–5 likes). Reach last week ≈ 0. Website still `.com.br`. New canonical page: `/marketplace/`.
- LinkedIn personal headline is split by locale: en “CEO at Zion Holdings”, es “President at Zion Technologies”, pt “President at Zion Tech Group”. Company ACL tools need `r_organization_admin` (current token is Forbidden).
- Discord guilds are personal DeFi/crypto rooms. There is **no Zion Discord server**.
- Hugging Face `kleberalcatrao` has no `zion` model repo.
- Calendar from now: internal Growth Loop / SEO / CI meets only — **no client Discovery bookings**.

## Triggers and webhooks

`GET /trigger_instances/active` = 0. `GET /webhook_subscriptions` = 0. 396 trigger types exist in the catalog. Calendly has **none**. First paid-event slugs: `STRIPE_CHECKOUT_SESSION_COMPLETED`, `STRIPE_CHARGE_SUCCEEDED`, `GMAIL_NEW_GMAIL_MESSAGE`. Blocked on a public HTTPS receiver.

Discovery payment link `plink_1UBJGaJRA2AketBhDU8zycYb` now redirects to `/success-stories/` after pay (same as Starter/Growth).

Gmail last 21 days (excluding GitHub): only our own Resend briefs, promotions, and delivery-delay DSNs. **No inbound sales threads.**

## Credit / quota blockers

- Hunter: 0 searches remaining until 2026-09-23
- OpenRouter: over usage
- Firecrawl: no scrape credits
- Brevo: authorize Composio egress IP
- Cloudflare: replace key with a valid Global API Key or Token

## SEO evidence (SerpAPI)

For `Zion Tech Group`, Google currently surfaces LinkedIn, Facebook, a 2019 Reddit MSP thread, ConnectAmericas, and Crunchbase **before or beside** ziontechgroup.com. Name-collision sites (`ziontech.biz`, `ziontechnologies.org`) also appear for adjacent queries. The site must keep a clear legal-entity + 26-year-history + .com canonical story on every money page.

Query `"Zion Tech Group" AI automation` ranks **ziontechgroup.com #1**. Generic brand query `Zion Tech Group` still ranks LinkedIn, Facebook `ziontechgroupbr`, a 2019 Reddit MSP thread, and ConnectAmericas **above** the apex (re-checked 2026-09-03). Homepage JSON-LD now includes the Delaware PostalAddress. Instagram website field is still `https://ziontechgroup.com.br/` (no Graph tool to change it).

YouTube `@ziontechgroup` videos are 2009–2019 hardware (UPS / Dell / green IT) pointing at `.com.br`. Use them as legitimacy, not as the AI CTA. Instagram `@zion.tech.group` website field is still `https://ziontechgroup.com.br/`. Daily **reach** 2026-08-26→09-01 was 0,0,0,0,0,0,2 — 2.9k followers, almost no recent distribution.

Ninox team `wxqWQrgFhMysSM99M` (“My Team 1”) has **zero databases**. Toolkit is authenticated but empty until a human creates a base in Ninox.

Notion deeper-intel page: https://app.notion.com/p/Composio-Maximize-deeper-intel-2026-09-02-3cfb94b0eaf781798bc2f78a5b7a1706
