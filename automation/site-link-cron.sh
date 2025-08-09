#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/site-link-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting site link cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 🔗 Site link cycle" | tee -a "$LOG_FILE"
  node "$DIR/site-link-orchestrator.cjs" || true
  # Generate advertiser agents from latest crawl outputs
  node "$DIR/site-content-advertiser-factory.cjs" || true
  sleep 1800
done ) & echo $! > "$LOG_DIR/site-link-cron.pid"

