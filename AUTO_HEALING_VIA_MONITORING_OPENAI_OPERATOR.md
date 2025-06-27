# Auto-Healing via Monitoring and OpenAI Operator

## Overview
This document explains how the Zion platform automatically detects issues and attempts to heal itself. The monitoring services watch for failing endpoints, high resource usage and repeated log errors. When thresholds are breached, a self‑healing script runs and triggers the **openai-operator** Codex pipeline to suggest and apply fixes.

## Key Components
- **`scripts/watchdog.js`** – Monitors performance logs, security logs and system resources. If three errors occur in a row or CPU/memory usage stays high, it executes the self‑healing command.
- **`monitoring/src`** – Cron based latency tests for Django, Next.js and custom endpoints. Results are logged and alerts are sent via webhook.
- **`server/app.js`** – Exposes `/api/codex/suggest-fix` which calls `openai-operator run ./codex-pipeline.yaml` to generate patches with Codex.
- **`codex-pipeline.yaml`** – Defines the steps to lint, extract failing code and request a patch from Codex before running tests and deploying if they pass.

## How Auto‑Healing Works
1. **Detect Issues** – The watchdog tails `logs/perf/hourly.log` and `logs/security/hourly-fix.log` while also watching CPU and memory usage.
2. **Trigger Self‑Heal** – After multiple errors or sustained high usage, `triggerSelfHeal()` runs. The default `HEAL_COMMAND` pulls the latest code, installs dependencies, runs the build and restarts services.
3. **OpenAI Operator** – As part of the healing process, or manually via `/api/codex/suggest-fix`, the openai-operator pipeline analyzes failing code with Codex and attempts to apply a patch.
4. **Logs and Alerts** – All actions are recorded in `logs/self-heal.log`. Optional Discord or Slack webhooks inform the team when a heal starts and finishes.

## Usage Tips
- Start monitoring in production with:
  ```bash
  npm run watchdog:start
  ```
- Configure alert webhooks and thresholds via environment variables in `.env.local` as described in `docs/MONITORING_IMPROVEMENTS.md`.
- To manually request an AI fix for a specific route, send a POST request to `/api/codex/suggest-fix`.

## Benefits
- **Reduced Downtime** – Services restart automatically after issues are detected.
- **AI Assisted Fixes** – Codex suggestions can resolve common bugs without manual intervention.
- **Actionable Alerts** – Developers receive detailed logs and webhook notifications for each heal event.

