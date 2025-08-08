#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/design-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting design cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 🎨 Design cycle" | tee -a "$LOG_FILE"
  node "$DIR/design-orchestrator.cjs" || true
  sleep 1800
done ) & echo $! > "$LOG_DIR/design-cron.pid"

