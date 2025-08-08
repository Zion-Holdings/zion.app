#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/variation-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting variation cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] ♻️ Variation cycle" | tee -a "$LOG_FILE"
  node "$DIR/variation-orchestrator.cjs" || true
  sleep 1200
done ) & echo $! > "$LOG_DIR/variation-cron.pid"

