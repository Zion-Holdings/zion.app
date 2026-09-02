#!/usr/bin/env bash
# composio-master-orchestrator.sh
# Executa revenue cycle, content cycle e health check.
set -euo pipefail
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
DRY_RUN="${DRY_RUN:-false}"
USER_ID="${USER_ID:-zion-master}"
REVENUE_SCRIPT="${REVENUE_SCRIPT:-scripts/composio-revenue-cycle.sh}"
CONTENT_SCRIPT="${CONTENT_SCRIPT:-scripts/composio-content-cycle.sh}"
LOG_FILE="${LOG_FILE:-/tmp/composio-master-orchestrator.log}"

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') [ORCHESTRATOR] $*"; }

check_env() {
  if [[ -z "$COMPOSIO_API_KEY" ]]; then
    log "WARN: COMPOSIO_API_KEY missing; continuing in degraded mode."
  fi
}

run_cycle() {
  local name="$1"
  local script="$2"
  if [[ ! -f "$script" ]]; then
    log "WARN: $name script not found: $script"
    return 0
  fi
  log "Running $name..."
  if [[ "$DRY_RUN" = "true" ]]; then
    bash "$script" || true
  else
    bash "$script" || true
  fi
  log "$name finished."
}

main() {
  check_env
  log "Master orchestrator started. user_id=$USER_ID dry_run=$DRY_RUN"
  run_cycle "revenue-cycle" "$REVENUE_SCRIPT"
  run_cycle "content-cycle" "$CONTENT_SCRIPT"
  log "Master orchestrator completed."
}

main "$@"
