# Autonomous Cloud Automations

These workflows run in GitHub-hosted runners, require no servers or human interaction, and sync changes back to this repository automatically.

## Workflows

- Autonomous Cloud Automation (`.github/workflows/autonomous-cloud-automation.yml`)
  - Runs every 30 minutes and on demand
  - Sitemap, spec-dev scan, alignment scan, responsive analyze, UI-evolution analyze, venture analyze, links/promo scans, sync-health and git-health fixes
- Autonomous Cloud Orchestrator (`.github/workflows/autonomous-cloud-orchestrator.yml`)
  - Hourly offset and on demand
  - Self-healing fixes, linting fixes, UI beautification
- Autonomous Release (`.github/workflows/autonomous-release.yml`)
  - Tags prereleases when changes are detected after orchestrations
- Dependencies Patch Bump (`.github/workflows/deps-patch-bump.yml`)
  - Daily patch-level bumps with auto-commit
- Dependencies Minor Weekly (`.github/workflows/deps-minor-weekly.yml`)
  - Weekly minor-level bumps via PR
- Image Optimizer (`.github/workflows/image-optimizer.yml`)
  - Optimizes assets on push and nightly
- Stabilize Build (`.github/workflows/stabilize-build.yml`)
  - Repairs empty files/pages and TS issues daily using existing scripts

## Links

- View all workflows: https://github.com/Zion-Holdings/zion.app/actions
- Run specific workflow (needs permission): Actions → select workflow → "Run workflow"

## Notes

- Commits include `[skip ci]` to avoid infinite loops
- Ensure repo Actions permissions are set to "Read and write"
- Branch protections may need to allow GitHub Actions to push directly or require PRs