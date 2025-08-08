#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/autonomous-frontend-sync-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting autonomous frontend sync cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] ♻️ Autonomous frontend sync cycle" | tee -a "$LOG_FILE"
  node "$DIR/autonomous-frontend-sync-orchestrator.cjs" once || true
  sleep 300
done ) & echo $! > "$LOG_DIR/autonomous-frontend-sync-cron.pid"