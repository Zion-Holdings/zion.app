#!/usr/bin/env bash
set -euo pipefail

# Lightweight cron to ensure footers exist across static pages

run_once() {
  node automation/footer-injector.cjs || true
}

case "${1:-start}" in
  start)
    echo "[footer-cron] starting loop (every 30 min)";
    while true; do
      run_once
      sleep $((30*60))
    done
    ;;
  run)
    run_once
    ;;
  *)
    echo "Usage: $0 {start|run}";
    exit 1
    ;;
esac


