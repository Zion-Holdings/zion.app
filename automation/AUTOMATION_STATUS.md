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
- `https://www.googletagmanager.com` → 404
  - This is suspicious. If GTM is referenced in production, the container ID or script URL should be reviewed. It looks like the base URL alone is hit without a container path in one place.
- `https://www.linkedin.com/company/zion-tech-group/` → 404
  - Likely needs exact handle correction to `zion-tech-group` or the correct LinkedIn slug.
- `https://twitter.com/ziontechgroup` → 503
  - Legacy Twitter permalink is unstable under current X/Twitter redirects; use the canonical profile link.

## GitHub Actions / deployment status
- Manual status via GitHub API shows failing workflows:
  - `build_and_deploy.yml`
  - `enhanced-link-health-guardian.yml`
  - `navigation-intelligence.yml`
  - `content-freshness.yml`
- Observed root causes / likely causes:
  - **GitHub account billing/limit issue**: runs attached to customer account are not executing useful jobs; workflows show as failure instead of queued completion.
  - Workflow files present in local repo do not match the remote defaults branch for every filename queried; remote workflow names sometimes differ from local search targets.
- Local verification:
  - `npm run build` is not runnable in this Windows session because `next` is not available. Validation must occur in CI on ubuntu-latest or in an environment with Node deps installed.

## Repo branch note
- Calendly fixes were committed to `pr/outreach-llm-tailoring-and-seo`
- That push was accepted by GitHub, but this is not `main`. Pages deployment requires default-branch or Pages build config alignment.

## Monitoring intent
- Keep continuous verification of:
  - deploy health after Calendly fix lands on `main`
  - external links: LinkedIn/Twitter/GTM
  - GitHub Actions billing unblock/account condition

## Immediate recommended manual actions
1. Merge or rebase the Calendly fix into `main` so GitHub Pages deploys the new links.
2. Fix LinkedIn/Twitter social URLs if they are hardcoded anywhere.
3. Resolve GitHub account billing/limit issue so dependent workflows can run.
4. After step 1, verify `/contact` and footer Calendly buttons resolve to `https://calendly.com/kleber-ziontechgroup`.
