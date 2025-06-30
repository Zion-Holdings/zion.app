# Self-Maintenance Automation

This document describes the automations that allow the Zion app to keep itself healthy and up to date.

## Watchdog Self-Healing
- **Script:** `scripts/watchdog.js`
- Monitors log files and system resources.
- When repeated errors or high CPU/memory usage are detected it runs a self‑heal command:
  ```bash
  git pull && npm install && npm run build && pm2 restart all
  ```
- Actions are logged to `logs/self-heal.log` and optional alerts can be sent via `DISCORD_WEBHOOK_URL`.
- The behaviour can be tuned via environment variables like `WATCHDOG_MEMORY_THRESHOLD` and `WATCHDOG_COOLDOWN`.

Start it in production with:
```bash
npm run watchdog:start
```
Use a process manager such as PM2 so the script keeps running.

## Automated Code Fixes with Codex
- Failing tests are collected by `.github/workflows/auto-report-codex.yml` which opens issues labeled `autofix`.
- `.github/workflows/codex-fix.yml` responds to those issues by running `scripts/codex-bug-fix.js`.
- The script sends context to OpenAI and applies any patch it returns on a new branch, creating a pull request automatically.

## Scheduled Maintenance
- The repository includes workflows like `weekly-audit.yml` and `scheduled-audits.yml` that run dependency audits, performance checks and other health tasks on a schedule.
- These jobs help keep dependencies current and surface security issues without manual effort.

## Benefits
- **Reduced Downtime:** The watchdog can restart services when problems occur.
- **Automated Fixes:** Codex generates patches for test failures so bugs are addressed quickly.
- **Continuous Audits:** Scheduled jobs catch outdated packages and performance regressions.

Together these automations make the Zion app largely self‑maintaining once properly configured.
