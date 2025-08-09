#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

# Start background git sync (cron or fallback)
npm run --silent git:cron:start || true

# Start all automation systems (non-blocking)
nohup npm run --silent automation:all >/dev/null 2>&1 &

# Brief status
npm run --silent automation:status || true

echo "✅ Cursor automations started. Logs: .git/auto-sync.log, .git/auto-pull.log"