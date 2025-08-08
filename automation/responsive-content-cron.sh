#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/responsive-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting responsive content cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 📱 Responsive cycle" | tee -a "$LOG_FILE"
  node "$DIR/responsive-content-orchestrator.cjs" || true
  sleep 900
done ) & echo $! > "$LOG_DIR/responsive-cron.pid"

