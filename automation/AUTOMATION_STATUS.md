# Zion Tech Group — Operations & Automation Status
Last updated: immediate manual audit

## Live site
- URL: https://ziontechgroup.com
- Status: up and returning real content on `/`, `/contact`, etc.
- Deep-crawl result: reviewed ~160 pages/links; no widespread internal breakage observed beyond external endpoints

## External/anchor link findings
- `https://calendly.com/ziontechgroup/free-consultation` → 404
  - Fixed in code by updating Calendly canonical to `https://calendly.com/kleber-ziontechgroup`
  - Files changed:
    - `app/contact/page.tsx`
    - `app/components/ContactFunnel.tsx`
    - `app/components/Footer.tsx`
  - The 404 remains live on `main` until the fix branch lands on default branch and deploys via Pages.
- `https://www.googletagmanager.com` → 404 expected for bare domain; live site uses preconnect+dns-prefetch in `layout.tsx`. No container ID/script dependence observed.
- `https://www.linkedin.com/company/zion-tech-group/` → stale historic finding; current link is `https://www.linkedin.com/company/ziontechgroup` and returns 200.
- `https://twitter.com/ziontechgroup` → stale historic finding; current link is `https://x.com/ziontechgroup` and returns 200.

## GitHub Actions / deployment status
- Latest verified workflow run states from GitHub API show active site/outreach/lighthouse/test runs as `success` in the most recent run slice.
- Earlier stale failures listed in this file are no longer supported by current run metadata; canonical cloud-cost link fix was committed to `main` and deployed July 15.
- Live verification: canonical path `/services/cloud-cost-optimization-platform/` returns 200 with expected title.

## Repo branch note
- Calendly/social links were already corrected on `main`; no unreleased fix branch remains pending for canonical route/canocial Calendly updates.

## Monitoring intent
- Keep continuous verification of:
  - deploy health after every `main` push
  - external links: LinkedIn/Twitter/GTM
  - GitHub Actions regressions in recent run set

## Follow-up actions
1. Retain current rather than repeating verification unless run state changes.
2. Enable a valid LLM/OpenAI API key if LLM-tailored hot-follow-up replies are required.
3. Re-enable live outreach sends under `ZTG_SEND_ALLOWED=1`; otherwise default to draft-only mode.
