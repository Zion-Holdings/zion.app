# Composio × Zion Tech Group — Max Automation Action Plan

## 1) What Composio Is
- **Agent-native integration layer**, not an agent brain. It gives AI agents the "body" to act on real SaaS tools.
- **500+ LLM-ready tools** (1,000+ in some counts), managed auth, framework-agnostic (LangChain, CrewAI, OpenAI, Claude, Cursor, etc.).
- Handles **OAuth, API keys, token refresh, retries, and schema drift** so you don't have to maintain per-app plumbing.
- Delivers tools via **MCP server** or direct SDK/CLI (`composio execute <TOOL_SLUG>`).

## 2) Best Use Cases for AI/IT Service Businesses
- **Autonomous outreach**: research → enrich → draft/send → log in CRM/Linear.
- **Site ops & SEO**: crawl pages, pull GSC/GA data, write findings to Notion/Sheets, auto-create GitHub issues.
- **Project & ticket triage**: GitHub issues/PRs → Linear tickets → Slack alerts.
- **Lead pipeline**: Apollo enrichment → Hunter verification → Gmail/Resend/Brevo sequences → Supabase logging.
- **Support & monitoring**: Sentry/GSC errors → Linear tickets → Gmail drafts for follow-up.
- **Content & reporting**: Firecrawl snapshots → Notion docs → LinkedIn/Twitter posts.

## 3) Max Value by Tool (Zion-relevant)

### Gmail (61 tools)
- Use `GMAIL_FETCH_EMAILS` + `GMAIL_SEARCH_EMAILS` for inbound triage.
- `GMAIL_CREATE_EMAIL_DRAFT` / `GMAIL_SEND_EMAIL` for personalized outreach.
- `GMAIL_BATCH_MODIFY_MESSAGES` to label leads automatically.
- **Max value**: filter outreach replies, auto-create Linear tickets from hot leads, attach Calendly links.

### Linear (32 tools)
- `LINEAR_CREATE_LINEAR_ISSUE` from any trigger (Gmail, GitHub, GSC).
- `LINEAR_CREATE_PROJECT_MILESTONE` for campaign sprints.
- `LINEAR_LIST_COMMENTS` to ingest client feedback.
- **Max value**: single workspace for leads, content, SEO, and infra tasks.

### GitHub (846 tools)
- `GITHUB_CREATE_AN_ISSUE` for site/SEO/outreach incidents.
- `GITHUB_ADD_LABELS_TO_AN_ISSUE` to auto-triage.
- `GITHUB_CREATE_DISPATCH_WORKFLOW` to trigger CI/content pipelines.
- **Max value**: every Composio failure or SEO drop gets a ticket + optional auto-fix workflow.

### Apollo (48 tools)
- `APOLLO_PEOPLE_SEARCH` / `APOLLO_ENRICH_PERSON` for lead discovery.
- `APOLLO_CREATE_CONTACT` + `APOLLO_ADD_CONTACTS_TO_SEQUENCE`.
- `APOLLO_BULK_ORGANIZATION_ENRICHMENT`.
- **Max value**: enrich Hunter-sourced leads before first touch; sync stages back to Linear.

### Google Search Console
- `GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY` for keyword/CTR drops.
- `GOOGLE_SEARCH_CONSOLE_INSPECT_URL` before publishing new landing pages.
- `GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP` after deployments.
- **Max value**: weekly SEO delta + auto-issues for pages dropping out of top 20.

### Supabase (116 tools)
- `SUPABASE_BETA_RUN_SQL_QUERY` / `SUPABASE_APPLY_A_MIGRATION` for lead/CRM tables.
- `SUPABASE_BETA_RUN_SQL_QUERY` to aggregate outreach metrics.
- **Max value**: replace/backfill Google Sheets CRM with a live Postgres backend for faster agent reads.

### Resend (62 tools)
- `RESEND_CREATE_CONTACT` + `RESEND_SEND_EMAIL` for transactional outreach.
- `RESEND_CREATE_TEMPLATE` + `RESEND_SEND_BATCH_EMAILS`.
- `RESEND_CREATE_WEBHOOK` to catch bounces/unsubscribes → update Supabase/Linear.
- **Max value**: primary bulk mailer; Brevo fallback only if Resend limits hit.

### Brevo (21 tools)
- `BREVO_CREATE_CONTACT` / `BREVO_GET_CONTACT_DETAILS`.
- `BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE`.
- `BREVO_CREATE_SMS_CAMPAIGN` for high-intent leads.
- **Max value**: SMS follow-up for warm leads; email CRM backup. Note: `BREVO_CREATE_CONTACT` can fail in some envs → use Resend fallback.

## 4) Recommended Automation Recipes

### A. Lead-to-Meeting Pipeline
1. Apollo/Hunter finds lead.
2. Firecrawl scrapes company site.
3. Agent drafts personalized Gmail/Resend email.
4. Linear ticket created with lead metadata.
5. Google Calendar follow-up scheduled.
6. Supabase row inserted.

### B. Site Health Watchdog
1. Firecrawl crawls ziontechgroup.com.
2. GSC search analytics pulled.
3. Errors → GitHub issue + Linear ticket.
4. Weekly SEO report emailed via Resend.
5. Notion database updated with rankings.

### C. Content Deploy Loop
1. New service page generated.
2. GSC `INSPECT_URL` + `SUBMIT_SITEMAP`.
3. GitHub Actions dispatch.
4. Resend/Brevo announcement to list.
5. Linear milestone updated.

## 5) Implementation Priorities
- **Week 1**: Verify active connections (`composio connections list`). Fix Apollo auth if 401; validate Resend audience ID.
- **Week 2**: Build `composio-growth-cycle.mjs` wrappers for Gmail → Linear → Resend.
- **Week 3**: Add GSC + Firecrawl weekly watchdog.
- **Week 4**: Migrate lead CRM from Sheets to Supabase for agent-speed reads.
- **Ongoing**: Use `composio execute --dry-run` before destructive actions; add circuit-breaker + jitter backoff.

## 6) Key Rules from Current Harness
- `COMPOSIO(slug, data)` wrapper; check `res._error`, not `res.error`.
- Skip optional integrations on failure (Apollo 401, GSC 403, missing Resend audience).
- Linear requires `team_id` UUID, not key. GitHub issue slug is `GITHUB_CREATE_AN_ISSUE`.
- Gmail `recipient_email` not `to`; Resend/Brevo fallback for contact creation.
