#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/frontend-sync-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting frontend sync cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 🔄 Frontend sync cycle" | tee -a "$LOG_FILE"
  node "$DIR/frontend-sync-orchestrator.cjs" || true
  sleep 300
done ) & echo $! > "$LOG_DIR/frontend-sync-cron.pid"

