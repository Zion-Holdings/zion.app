# bolt.new.zion.app

![Automations: 46](https://img.shields.io/badge/Automations-46-informational) ![Pages: 7](https://img.shields.io/badge/Pages-7-success) ![Components: 1](https://img.shields.io/badge/Components-1-blue)

Autonomous, cloud‑native app with self‑running automations.

Home: https://github.com/Zion-Holdings/zion.app#readme

### Highlights
- **Autonomous cloud automations**: GitHub Actions run on schedules to maintain, audit, and improve the repo without human intervention.
- **Rapid sync**: A 1-minute cadence keeps branches synchronized.
- **Self-healing CI**: Automatic detection and PRs for fixes after failures.

### Key Directories
- `automation/`: Cloud automation scripts (content, SEO, security, sync).
- `scripts/`: Utility scripts (sitemap, SEO, radar, README generator).
- `pages/`: Next.js pages.
- `components/`: Reusable UI components.

### Routes
- /
- /_app
- /automation
- /front
- /main/front
- /newsroom
- /site-health

### Automations
- accessibility-audit.yml
- ai-changelog.yml
- auto-media-release.yml
- automation-guardian-10min.yml
- automations.yml
- autonomous-auto-discovery.yml
- autonomous-auto-merge-to-main.yml
- autonomous-cloud-automations.yml
- autonomous-cloud-runner.yml
- autonomous-cloud.yml
- autonomous-content-curation.yml
- autonomous-deep-maintenance.yml
- autonomous-deps-upgrade.yml
- autonomous-external-links.yml
- autonomous-image-optimizer.yml
- autonomous-intelligence.yml
- autonomous-lighthouse.yml
- autonomous-marketing-seo.yml
- autonomous-quick-fixes.yml
- ci-auto-heal.yml
- codeql-analysis.yml
- dependabot-auto-approve.yml
- docs-autogen.yml
- fast-auto-push-to-main.yml
- fast-lint-sync.yml
- homepage-auto-advertiser.yml
- homepage-auto-update.yml
- labeler.yml
- link-auto-fix.yml
- link-scan-hourly.yml
- netlify-auto-healer.yml
- og-image-update.yml
- optimize-images.yml
- performance-audit.yml
- rapid-git-sync.yml
- readme-autogen.yml
- repo-knowledge-graph.yml
- repo-radar.yml
- search-index-autogen.yml
- security-audit.yml
- security-weekly.yml
- self-healing-build.yml
- sitemap-auto-commit.yml
- sitemap-daily.yml
- stale.yml
- unused-deps-cleaner.yml

### Local Development
1. Install Node 20+ and npm 10+.
2. Install deps: `npm ci`.
3. Run dev: `npm run dev`.

### Maintenance Commands
- `npm run git:sync` – Advanced git sync
- `npm run automation:cloud` – Run cloud orchestrator locally
- `npm run sitemap` – Regenerate sitemap
- `npm run readme:generate` – Refresh this README

---
This README is auto-generated. Do not edit manually.

# Cloud Automations

Autonomous, intelligent, and useful automations that run on a schedule in the cloud via GitHub Actions. Outputs are versioned in this repository and visualized on the front page.

## What it does

- Trending GitHub repositories (last 7 days)
- Tech news RSS aggregation
- Public website uptime checks

Data is written to JSON files under `data/`:

- `data/trending/latest.json`
- `data/feeds/latest.json`
- `data/uptime/latest.json`

The `index.html` page renders the latest data dynamically.

## How it runs

- A scheduled workflow (`.github/workflows/automations.yml`) executes every 6 hours and on demand.
- Python scripts in `scripts/` fetch and generate the data.
- If there are changes, the workflow commits them back to the repository using the `GITHUB_TOKEN`.
- A Pages workflow (`.github/workflows/pages.yml`) publishes the site so it is accessible as a public dashboard.

## Local development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python scripts/fetch_trending.py
python scripts/aggregate_feeds.py
python scripts/uptime_check.py
open index.html
```

## Customize

- Edit `scripts/aggregate_feeds.py` to add or remove feeds.
- Edit `scripts/uptime_check.py` to change the monitored URLs.
- Adjust the schedule in `.github/workflows/automations.yml` as needed.