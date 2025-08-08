#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/homepage-promo-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting homepage promo cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 🏠 Homepage promo cycle" | tee -a "$LOG_FILE"
  node "$DIR/homepage-promo-orchestrator.cjs" || true
  sleep 900
done ) & echo $! > "$LOG_DIR/homepage-promo-cron.pid"

