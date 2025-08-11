#!/usr/bin/env bash
set -euo pipefail

INTERVAL_SECONDS="${LINK_CRON_INTERVAL_SECONDS:-900}" # default 15 minutes
RUNS="${CRON_RUNS:-0}" # 0 = infinite

run_once() {
  echo "[site-link-cron] running at $(date -Is)"
  node automation/site-link-orchestrator.cjs || true
}

if [[ "$RUNS" -gt 0 ]]; then
  for ((i=1; i<=RUNS; i++)); do
    run_once
    if [[ "$i" -lt "$RUNS" ]]; then sleep "$INTERVAL_SECONDS"; fi
  done
else
  while true; do
    run_once
    sleep "$INTERVAL_SECONDS"
  done
fi