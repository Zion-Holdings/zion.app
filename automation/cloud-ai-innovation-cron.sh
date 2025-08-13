#!/usr/bin/env bash
set -euo pipefail

# Local cron helper (optional) to run orchestrator continuously.

CMD="node automation/cloud-ai-innovation-orchestrator.cjs"

case "${1:-run}" in
  start)
    while true; do
      $CMD || true
      sleep 300
    done
    ;;
  run)
    $CMD
    ;;
  *)
    echo "Usage: $0 [start|run]" && exit 1
    ;;
esac


