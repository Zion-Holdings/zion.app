# Zion Composio Live Inventory

Verified 2026-09-03 against Composio REST API v3.1 (`GET /connected_accounts`). Re-applied onto rewritten `origin/main` (root static export). Public pages: `/book/`, `/heritage/`, `/paid-consultation/`, `/plans/`, `/composio/`, `/composio-vs-zapier/`, `/privacy/`, `/terms/`, `/cookies/`, `/partners/`, `/affiliate/`, `/growth/`, `/press/`.

**2026-09-03T07:07Z:** Catalogued and dual-wrote **175 root leftover Next.js routes** (ai-chatbot-builder, cloud-services, zion-ai-*, etc.) — live 200 “No packaged SKU”. SERP catalog **614**. Homepage still Discovery $99. Connect Links reminted 07:06Z expire ~07:17Z. Workers Builds CI is the Cloudflare hook — ignore; do not add wrangler.toml.

**2026-09-03T06:52Z:** Full live hunt: **0 of 439** catalogued leftover closer URLs 404. Homepage Discovery $99. Connect Links reminted 06:43Z expire ~06:53Z.

**2026-09-03T06:44Z:** Live `/` still Discovery $99. Connect Links reminted 06:43Z (expire ~06:53Z) — Slack/Telegram/Resend notified. Leftover closer batches 19–27 live (w174 AI SKUs, extras, CX/claims, RAG/SOC, FinOps/stage). Browser-verified homepage Discovery $99, `/plans/` paid intro, content-moderation closer, honest 404. Catalog 439 in `public/`. kleber@ still 0 ACTIVE. First-250 SERP hunt still has ~104 live 404s to republish. Do not remint until EXPIRED.

**2026-09-03T06:29Z:** Live `/` still Discovery $99. Republished wiped leftover closers: w174 AI SKUs (drug/emotion/financial/image/supply/voice/apidocs/credrisk/CS/ERP/marketing/teampulse) + property/sales/DevSecOps/asset/FinOps/edge/capacity/change/supplier/ad-copy/agents. Catalogued 49 extra honest leftover `services/*` that were on disk but missing from `public/` (SERP catalog = 439) so a `pages.yml` merge with `keep_files: false` cannot drop them. Disabled leftover `agent-agent-*` + `ci-deploy.yml` + `deploy-health.yml` (files already gone from `main`). Stripe $0; Calendly 0 upcoming; Sentry unresolved none; IG reach 2 then 0; HF `kleberalcatrao`; Ninox 0 DBs; 1Password 0 vaults; Cloudflare 0 zones. Connect Links still INITIATED/INITIALIZING for kleber@ (expire ~06:31Z) — do not remint until EXPIRED.

**2026-09-03T05:32Z:** Root cause of the gh-pages wipe is `.github/workflows/mirror-to-gh-pages.yml` on `main` (actor **Zion CI**, `keep_files: false`, copies leftover `public/` + root HTML). Disabled that workflow plus `static-deploy.yml`, `deploy-to-github-pages.yml`, `deploy-static.yml`, `minimal-pages.yml`, `build_and_deploy.yml`, `ci-cd.yml`. Cancelled in-flight mirror run 33717423493. Restored Discovery (`38527243ac`). This PR replaces those workflow files with `workflow_dispatch` + `if: false` no-ops so a merge cannot turn the wipe back on. Connect Links reminted 05:31Z (expire ~05:41Z).

**2026-09-03T05:19Z:** kleber/ziggy mirror had wiped leftover closers after the 05:15Z Discovery restore. Pages **built** on `3b6e3175` (18s). Live `/` is Discovery $99. Republished 12 wiped leftover closers (identity governance/IAM, zero-trust, Hermes, RPA, edge, n8n, EDR) — all live 200 “No packaged SKU”. Unknown slug honest 404. Connect Links reminted 05:18Z (expire ~05:28Z). Stripe/Calendly/Gmail still $0 / 0 bookings / 0 inbound sales. SerpAPI still 429.

**2026-09-03T04:40Z:** Thirteenth leftover batch: leftover industry-hash SKUs (hospitality/media/auto/transport), construction/insurance predictive engines, rack-and-stack, review platform, RPA, serverless (SERP catalog = 365). Homepage still Discovery $99.

**2026-09-03T04:38Z:** Twelfth leftover batch: workspace analytics, knowledge base, low-code, seven micro-SaaS SKUs, energy management, IAM (SERP catalog = 353). Homepage still Discovery $99.

**2026-09-03T04:36Z:** Eleventh leftover batch: healthcare trial/telehealth, Hermes A2A/bot/guide/plugin, IoT, IT API/capacity/infra/ITSM (SERP catalog = 341). Homepage still Discovery $99.

**2026-09-03T04:34Z:** Tenth leftover batch: cloud cost/DB/native, edge computing, employee engagement, EDR, enterprise automation, IT DR/endpoint/MDR, n8n alternative (SERP catalog = 329). Homepage pinned Discovery $99 in the same gh-pages upsert.

**2026-09-03T04:31Z:** Apex briefly served leftover Next.js (`_next/static`) around 04:29Z. Restored Discovery $99 homepage, `/plans/`, and honest 404 via targeted gh-pages dual-write. Connect Links reminted 04:31Z (expire ~04:41Z). Workers Builds CI is the Cloudflare hook — not a site build.

**2026-09-03T04:29Z:** Ninth leftover batch: supply-chain optimizer, video/voice, workflow, DPA/RPA/orchestration, container platform, cloud cost/DR/FinOps/multi-cloud (SERP catalog = 317). Connect Links still INITIATED past 04:29Z TTL — do not remint until EXPIRED.

**2026-09-03T04:27Z:** Eighth leftover batch: legal summarizer/research, meeting assistant/minutes, multimodal search, predictive maintenance, prompt eng, RAG, ransomware BCDR, SOC, speech analytics, supply-chain (SERP catalog = 305). Workers Builds CI remains the Cloudflare hook — ignore.

**2026-09-03T04:24Z:** Seventh leftover batch: chronic disease, LATAM consulting, crop yield, support pro, employee engagement, energy grid, feedback, digital twin, insurance claims, enterprise hub, inventory (SERP catalog = 293).

**2026-09-03T04:22Z:** Sixth leftover batch: supplier risk, asset lifecycle, ad copy, autonomous agents, claims, code reviewer, computer vision, content moderation, CX/CLV/segmentation/churn (SERP catalog = 281).

**2026-09-03T04:21Z:** Fifth leftover batch: endpoint/patch, asset discovery, fraud, FinOps, code review, document understanding, edge CDN, email deliverability, BCDR, capacity/chargeback, change mgmt, SaaS license (SERP catalog = 269).

**2026-09-03T04:19Z:** Fourth leftover batch: Fileforge, HR/legal/marketing/property/sales automation, Schedflow, Taxflow, Teampulse, Translatix, warehouse, DevSecOps pipeline (SERP catalog = 257). Connect Links reminted 04:19Z (expire ~04:29Z).

**2026-09-03T04:08Z:** Third leftover batch this turn: AI curriculum/drug/emotion/financial/image/supply-chain/voice studios + API docs, Changelogify, Credrisk, customer-success AI, ERP automation (SERP catalog = 245). All verified live 200.

**2026-09-03T04:06Z:** Second leftover batch this turn: SRE platform, cloud data sovereignty, MSP, Envault, accessibility, knowledge mgmt, LLM eval, green cloud, collaboration, finance automation (SERP catalog = 233). Browser-verified homepage Discovery $99, identity/zero-trust closers, honest 404, `/plans/` $99. Connect Links reminted 04:03Z.

**2026-09-03T04:02Z:** Pages still `legacy` / `gh-pages` / `/`. Live `/` is Discovery $99. IAM leftover closers (compliance/on-call/data-mesh) verified 200. Next 12 leftover 404s (identity governance, MFA, DLP, zero-trust, WAF, SD-WAN, ransomware, endpoint, audit, observability) dual-written to `gh-pages` + `public/` (SERP catalog = 221). Stripe $0; Calendly 0 upcoming; Gmail 12h sales 0. SerpAPI still 429. Kleber HubSpot/Jira/noCRM/Perplexity not yet ACTIVE.

**2026-09-03T03:06Z:** Pages still `legacy` / `gh-pages` / `/`. Live `/` is Discovery $99. SerpAPI leftover hunt found 20 more ranking 404s (invoice/bookkeeping/IAM/Keycloak/Zscaler/micro-SaaS tools + three “free consultation” blogs). Those are now honest closers in both `/` and `public/` (SERP catalog = 94). Google still snippets stale titles until recrawl. Kleber HubSpot/Jira/noCRM/Perplexity reminted 03:05Z; human must finish OAuth.

**2026-09-03T02:16Z:** Pages API still `legacy` / `gh-pages` / `/`, cert approved, `https_enforced: true`. Live `/` is Discovery $99. Google Light still snippets the old “measurable outcomes” title. `site:ziontechgroup.com` still lists ghost SKUs (`/services/postgresql/`, `/services/prometheus/`, 2026-hash catalogs) that **404** on Pages. This PR: (1) `public/` in git so Pages and `pages.yml` share the honest tree, (2) `pages.yml` rsyncs **only** `public/` (refuses leftover Next.js homepage), (3) honest closers for those ranking 404s plus `/solutions/` and `404.html`, (4) 743 leftover Next.js HTML files in the working tree replaced so an accidental full rsync cannot republish fiction. Dual-write `/` + `public/` remains mandatory until `public/` is removed from `gh-pages`.

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
| Cloudflare | Token authenticates; **0 zones** | DNS — token has no zone access |
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
