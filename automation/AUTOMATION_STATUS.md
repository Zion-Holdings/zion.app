# Zion Tech Group — Operations & Automation Status
Last updated: 2026-07-16 via manual audit + live API checks

## Current Status
- Outreach monitor is generating reports and drafts, but LLM tailoring is not producing content.
- We have a valid Nous auth/config path, the provider endpoint responds, and the model catalog is reachable.
- Current model attempt `stepfun/step-3.7-flash:free` returns an empty completion, so contact-tailor count stays at 0 and outreach falls back to template text.
- Site is healthy: deployed core routes and canonical paths verified 200.
- GitHub Actions recent runs are mostly success; `gh-pages.yml` is cancelled in the sampled slice.
- Cron jobs exist in Hermes schedule, but some scheduled tasks show failure/not-run states.

## Verified Details
- Live site: https://ziontechgroup.com
- Canonical service path: https://ziontechgroup.com/services/cloud-cost-optimization-platform/
- Contact path: https://ziontechgroup.com/contact
- Auth/provider: Nous auth.json present with valid access_token/inference_base_url
- Model catalog count: 280 models listed through Nous inference API
- Free model check: `stepfun/step-3.7-flash:free` available in catalog but completion content returns empty

## External links verified
- Calendly: https://calendly.com/kleber-ziontechgroup
- LinkedIn: https://www.linkedin.com/company/ziontechgroup
- X/Twitter: https://x.com/ziontechgroup
- Google Meet backup: https://meet.google.com/ouu-khao-kuy

## Outstanding issue
- LLM email tailoring is blocked by the model returning no completion content.
  This is config/availability, not code.
- Manual review path is still safe: drafts are created with fallback text.
- Live send policy: draft-only unless `ZTG_SEND_ALLOWED=1` is set.
