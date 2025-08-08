#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/linkedin-marketing-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting LinkedIn marketing cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 📣 LinkedIn marketing cycle" | tee -a "$LOG_FILE"
  node "$DIR/linkedin-marketing-orchestrator.cjs" || true
  sleep 21600
done ) & echo $! > "$LOG_DIR/linkedin-marketing-cron.pid"

