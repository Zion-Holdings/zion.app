# Zion — Autonomous Cloud Automations

This repository runs a fleet of autonomous, cloud‑native automations via Netlify Scheduled Functions. Changes are committed back to the repo automatically.

## New cloud automations

- Knowledge Pack Runner: `/.netlify/functions/knowledge-pack-runner` — generates `public/automation/knowledge-pack.json` every 10 minutes.
- Adaptive Orchestrator: `/.netlify/functions/adaptive-orchestrator` — selectively triggers relevant functions based on recent changes, then syncs.

See the homepage for links and live triggers.

## Added automations

- UX Friction Scanner: `/.netlify/functions/ux-friction-runner` — scans UI code for missing alts/dimensions and bad anchors; writes reports and commits.
- Route Map Builder: `/.netlify/functions/route-map-runner` — generates a live route map (JSON/MD) for all pages.
- OpenGraph Coverage Auditor: `/.netlify/functions/opengraph-coverage-runner` — audits OG/Twitter meta coverage and publishes reports.