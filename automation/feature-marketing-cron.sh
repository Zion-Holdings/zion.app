#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/feature-marketing-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting feature marketing cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 📣 Feature marketing cycle" | tee -a "$LOG_FILE"
  node "$DIR/feature-marketing-orchestrator.cjs" || true
  sleep 900
done ) & echo $! > "$LOG_DIR/feature-marketing-cron.pid"

