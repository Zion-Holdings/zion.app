# Enhanced Auto-Healing via Monitoring, OpenAI Operator, and AI Summarization

## Overview
This document explains how the Zion platform automatically detects issues, attempts to heal itself using targeted actions and AI-powered code correction, and leverages AI for error summarization. The system monitors logs and system resources, triggering specific healing actions or the **openai-operator** Codex pipeline for code fixes.

## Key Components

- **`scripts/watchdog.js` (Enhanced)**:
    - Monitors performance (`logs/perf/hourly.log`) and security (`logs/security/hourly-fix.log`) logs, plus system CPU/memory.
    - Uses a detailed `ERROR_PATTERNS_CONFIG` for contextual log parsing.
    - Triggers targeted healing actions based on error type:
        - `GENERAL_RESTART`: Full system update and restart.
        - `CODEX_FIX_FILE`: Calls `/api/codex/suggest-fix` with file path and error details.
        - `RESTART_SERVICE <name>`: Restarts a specific PM2 service.
        - `CHECK_DB_HEALTH`: Runs a database health check script.
    - Implements heal loop prevention: detects repeated ineffective heals for the same issue, temporarily disables that specific auto-heal, and sends a critical alert.

- **`monitoring/src`**:
    - Provides cron-based latency tests for critical endpoints. Results are logged and can feed into the watchdog's monitored logs or trigger alerts.

- **`server/app.js` (Enhanced)**:
    - **`/api/codex/suggest-fix`**: Now accepts `filePath` and `errorLog` in the request body. It passes these as environment variables (`CODEX_TARGET_FILE_PATH`, `CODEX_ERROR_LOG_SNIPPET`) when executing `openai-operator run ./codex-pipeline.yaml`. This allows for more targeted code analysis and patching by Codex.
    - **`/api/ai/summarize-error` (New)**: Accepts a `logSnippet`. Uses the OpenAI API (e.g., GPT-3.5/4) directly to provide a concise summary of the error, suggest potential root causes, and recommend files/modules for investigation. This summary can be integrated into developer alerts.

- **`codex-pipeline.yaml` (Enhanced)**:
    - Utilizes `CODEX_TARGET_FILE_PATH` and `CODEX_ERROR_LOG_SNIPPET` environment variables.
    - If `CODEX_TARGET_FILE_PATH` is provided, it reads code from this file.
    - The `CODEX_ERROR_LOG_SNIPPET` is included in the prompt to give Codex more context about the runtime error.
    - The AI-generated patch is applied directly to the `CODEX_TARGET_FILE_PATH`.
    - Retains fallback to ESLint-based analysis if no specific file/error context is given.

## How Auto‑Healing and AI Assistance Work

1.  **Detect Issues**:
    *   `watchdog.js` tails log files, matching lines against `ERROR_PATTERNS_CONFIG`.
    *   It also monitors system CPU and memory usage.

2.  **Trigger Self‑Heal / AI Action**:
    *   **Log-based:** If a configured error pattern's streak count exceeds its `maxStreak`, `watchdog.js` initiates the corresponding healing action (e.g., restart service, request Codex fix).
    *   **Resource-based:** Sustained high CPU/memory usage triggers a general system restart.
    *   **Heal Loop Prevention:** If a specific error pattern triggers repeated, unsuccessful healing attempts, that auto-heal action is temporarily paused, and a critical alert is issued for manual review.

3.  **AI-Powered Code Correction**:
    *   When `watchdog.js` determines a `CODEX_FIX_FILE` action is needed, it calls `/api/codex/suggest-fix` with the path to the problematic file and the relevant error log snippet.
    *   The `server/app.js` endpoint invokes `codex-pipeline.yaml` with this context.
    *   The pipeline uses Codex to analyze the specific file and error, generate a patch, and apply it.
    *   The pipeline then runs tests (`npm test`). If tests pass, it can optionally trigger a deployment.

4.  **AI-Powered Error Summarization**:
    *   Monitoring systems (like an enhanced `watchdog.js` or other alerting tools) can send raw error log snippets to the `/api/ai/summarize-error` endpoint.
    *   This endpoint returns an AI-generated summary, potential root causes, and investigation pointers. This information can be included in developer notifications (e.g., Discord/Slack alerts) to expedite triage and debugging.

5.  **Logs and Alerts**:
    *   All watchdog actions, heal attempts (including parameters sent to Codex), and outcomes are logged in `logs/self-heal.log`.
    *   Alerts (configurable via Discord/Slack webhooks) are sent for:
        *   Initiation of heal actions, detailing the reason and type of action.
        *   Success or failure of heal commands.
        *   Critical alerts for detected heal loops requiring manual intervention.
        *   Optionally, alerts can include AI-generated error summaries.

## How Auto‑Healing Works
1. **Detect Issues** – The watchdog tails `logs/perf/hourly.log` and `logs/security/hourly-fix.log` while also watching CPU and memory usage.
2. **Trigger Self‑Heal** – After multiple errors or sustained high usage, `triggerSelfHeal()` runs. The default `HEAL_COMMAND` pulls the latest code, installs dependencies, runs the build and restarts services.
3. **OpenAI Operator** – As part of the healing process, or manually via `/api/codex/suggest-fix`, the openai-operator pipeline analyzes failing code with Codex and attempts to apply a patch. The watchdog triggers this endpoint automatically when a self-heal completes.
4. **Logs and Alerts** – All actions are recorded in `logs/self-heal.log`. Optional Discord or Slack webhooks inform the team when a heal starts and finishes.

## Usage Tips
- Start the enhanced monitoring in production with:
  ```bash
  npm run watchdog:start
  # (Ensure watchdog.js is managed by a process manager like PM2 for continuous operation)
  ```
- Configure alert webhooks (`DISCORD_WEBHOOK_URL`), `CODEX_API_URL` (if watchdog calls it directly, or ensure `server/app.js` is reachable), and `OPENAI_API_KEY` (for `server/app.js`'s summarization endpoint) via environment variables (e.g., in `.env.local` or your production environment).
- The `ERROR_PATTERNS_CONFIG` within `scripts/watchdog.js` is crucial and should be tuned based on common errors observed in your application logs.
- To manually request an AI fix for a specific file and error, send a POST request to `/api/codex/suggest-fix` with JSON body:
  ```json
  {
    "filePath": "src/components/problematicComponent.tsx",
    "errorLog": "TypeError: Cannot read property 'name' of undefined\n    at problematicComponent ..."
  }
  ```
- To manually get an AI summary of an error, send a POST request to `/api/ai/summarize-error` with JSON body:
  ```json
  {
    "logSnippet": "Long and complex error log here..."
  }
  ```
- Configure alert webhooks and thresholds via environment variables in `.env.local` as described in `docs/MONITORING_IMPROVEMENTS.md`.
- Set `CODEX_TRIGGER_URL` if the Codex endpoint is hosted elsewhere. Defaults to `http://localhost:3001/api/codex/suggest-fix`.
- To manually request an AI fix for a specific route, send a POST request to `/api/codex/suggest-fix`.

## Benefits
- **More Targeted Resiliency**: Reduces downtime with more specific healing actions rather than just full restarts.
- **Smarter AI-Assisted Fixes**: Provides Codex with better context (specific file and error logs) for higher quality patches.
- **Reduced Alert Fatigue**: AI-summarized errors help developers quickly grasp issues.
- **Proactive Loop Detection**: Prevents resource wastage from continuous failed heal attempts and prompts manual review for persistent problems.
- **Actionable Alerts**: Developers receive detailed logs and context-rich webhook notifications.

