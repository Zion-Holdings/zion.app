#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/ui-evolution-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting UI evolution cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] ✨ UI evolution cycle" | tee -a "$LOG_FILE"
  node "$DIR/ui-evolution-orchestrator.cjs" once || true
  sleep 1800
done ) & echo $! > "$LOG_DIR/ui-evolution-cron.pid"