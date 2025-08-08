#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/app-growth-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting app growth cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 🌱 App growth cycle" | tee -a "$LOG_FILE"
  node "$DIR/app-growth-orchestrator.cjs" once || true
  sleep 900
done ) & echo $! > "$LOG_DIR/app-growth-cron.pid"