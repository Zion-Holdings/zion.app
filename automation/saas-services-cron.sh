#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/saas-services-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting SaaS services cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] ⚙️ SaaS cycle" | tee -a "$LOG_FILE"
  node "$DIR/saas-services-orchestrator.cjs" || true
  sleep 600
done ) & echo $! > "$LOG_DIR/saas-services-cron.pid"

