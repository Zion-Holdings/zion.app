#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/instagram-marketing-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting Instagram marketing cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 📣 Instagram marketing cycle" | tee -a "$LOG_FILE"
  node "$DIR/instagram-marketing-orchestrator.cjs" || true
  sleep 21600
done ) & echo $! > "$LOG_DIR/instagram-marketing-cron.pid"


