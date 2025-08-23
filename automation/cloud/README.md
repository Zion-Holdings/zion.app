# Cloud Autonomy

This repo includes autonomous cloud automations that run on GitHub Actions without human interaction:

- Autonomous Orchestrator (`.github/workflows/autonomous-orchestrator.yml`):
  - Runs every 30 minutes
  - Executes content sync and trends aggregation, writes into `data/reports/*`
  - Generates sitemap, lints, type-checks, builds
  - Opens a PR with changes

- Link Check (`.github/workflows/link-check.yml`):
  - Runs every 30 minutes against `SITE_URL` (repository variables)
  - Saves `data/reports/broken-links.json`, opens issue if failures are found

- Lighthouse Audit (`.github/workflows/lighthouse.yml`):
  - Periodic performance/SEO audits for `SITE_URL`
  - Stores a summary and uploads artifacts

- NPM Audit (`.github/workflows/npm-audit.yml`):
  - Alerts on critical vulnerabilities via issues

- Auto Dependency Bump (`.github/workflows/auto-dependency-bump.yml`):
  - Daily dependency updates via PR

- Auto Release (`.github/workflows/auto-release.yml`):
  - Tags a release for changes pushed to `auto/**`

- Auto Merge (`.github/workflows/auto-merge.yml`):
  - Merges open PRs with `automation` label once orchestrator/deps workflows succeed

Required:
- GitHub repository variable `SITE_URL` used by link check and Lighthouse
- Actions: `GITHUB_TOKEN` provided automatically
- Optional tokens for higher rate limits (trends): `GITHUB_TOKEN`