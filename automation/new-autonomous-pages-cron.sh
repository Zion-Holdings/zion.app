#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$DIR/.." && pwd)"

LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/new-autonomous-pages-cron.log"

run_once() {
  echo "[$(date -Is)] Running new-autonomous-pages-factory.cjs" | tee -a "$LOG_FILE"
  node "$DIR/new-autonomous-pages-factory.cjs" | tee -a "$LOG_FILE" || true
  echo "[$(date -Is)] Updating app-pages index" | tee -a "$LOG_FILE"
  node "$DIR/site-map-generator.cjs" | tee -a "$LOG_FILE" || true
}

case "${1:-start}" in
  start)
    echo "Starting loop: run every 6 hours (local dev loop)"
    while true; do
      run_once
      sleep $((6 * 60 * 60))
    done
    ;;
  once)
    run_once
    ;;
  *)
    echo "Usage: $(basename "$0") [start|once]" >&2
    exit 1
    ;;
 esac