# Zion Composio Live Inventory

Verified 2026-09-02 against Composio REST API v3.1 (`GET /connected_accounts`).

Previous docs claimed Gmail, Notion, Slack, Linear, Airtable, and GitHub were missing. Live data contradicts that. Orchestrators that read `COMPOSIO_*_CONNECTION_ID` GitHub secrets were skipping healthy accounts.

## Active toolkits (31)

| Toolkit | Verified live call | Zion use |
|---|---|---|
| GitHub | Authenticated as `Zion-support` | Repo automation, issues, Telegram worker repos |
| Gmail | Inbox fetch (CI failure mail from gh-pages mirror) | Lead + ops triage |
| Notion | Search returns Growth Loop pages | Internal wiki / status |
| Slack | `#support` (C9375BEBA) + `#commercial` | Ops alerts |
| Linear | Team `Ziontechgroup` (`ZIO-*`) | Delivery backlog |
| Stripe | Live products + customers, **$0 charges** | Billing |
| Calendly | `kleber@ziontechgroup.com` / [AI/IT Discovery](https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1) | Paid consult funnel |
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

Cloudflare’s GitHub app posts this check on **every push**, including `main`. It fails in ~0s with no annotations because this repo has no `wrangler.toml` / worker entrypoint and no root `package.json`. The check targets the **production** worker `ziontechgroup`. Do **not** add a stub worker — that would deploy over production. Fix is in the Cloudflare dashboard: disconnect Workers Builds from this Pages repo, or point it at a real worker project.

## Credit / quota blockers

- Hunter: 0 searches remaining until 2026-09-23
- OpenRouter: over usage
- Firecrawl: no scrape credits
- Brevo: authorize Composio egress IP
- Cloudflare: replace key with a valid Global API Key or Token

## SEO evidence (SerpAPI)

For `Zion Tech Group`, Google currently surfaces LinkedIn, Facebook, a 2019 Reddit MSP thread, ConnectAmericas, and Crunchbase **before or beside** ziontechgroup.com. Name-collision sites (`ziontech.biz`, `ziontechnologies.org`) also appear for adjacent queries. The site must keep a clear legal-entity + 26-year-history + .com canonical story on every money page.

Query `"Zion Tech Group" AI automation` ranks **ziontechgroup.com #1** (verified 2026-09-02 via SerpAPI). Keep `/about/` and the Discovery CTA on the homepage so the branded AI query stays owned.

YouTube `@ziontechgroup` videos are 2009–2019 hardware (UPS / Dell / green IT) pointing at `.com.br`. Use them as legitimacy, not as the AI CTA. Instagram `@zion.tech.group` website field is still `https://ziontechgroup.com.br/`. Daily **reach** 2026-08-26→09-01 was 0,0,0,0,0,0,2 — 2.9k followers, almost no recent distribution.

Ninox team `wxqWQrgFhMysSM99M` (“My Team 1”) has **zero databases**. Toolkit is authenticated but empty until a human creates a base in Ninox.

Notion deeper-intel page: https://app.notion.com/p/Composio-Maximize-deeper-intel-2026-09-02-3cfb94b0eaf781798bc2f78a5b7a1706
