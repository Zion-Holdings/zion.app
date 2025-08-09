# Cloud Autonomy

This repo includes autonomous cloud automations that run on GitHub Actions without human interaction:

- Autonomous Orchestrator (`.github/workflows/autonomous-orchestrator.yml`):
  - Runs every 30 minutes
  - Executes `automation/cloud/content-sync.mjs` to fetch trending repos and writes `data/reports/top-repos.json`
  - Generates sitemap, lints, type-checks, builds
  - Opens a PR with changes

- Auto Dependency Bump (`.github/workflows/auto-dependency-bump.yml`):
  - Runs daily to bump dependencies and open a PR

- Auto Release (`.github/workflows/auto-release.yml`):
  - Tags a release for changes pushed to `auto/**`

Required secrets:
- `GITHUB_TOKEN` (provided automatically)
- For Sentry/Slack/Telegram/Netlify/Vercel rollback monitor, set ENV in Netlify/Vercel dashboard (see `automation/deployment-monitor.cjs`).