#!/usr/bin/env bash
set -euo pipefail

declare -r REPO_DIR="/workspace"
declare -r TAG="# NEXTGEN_AUTOMATION_CRON"
declare -r NODE_BIN="/usr/bin/env node"
declare -r CMD="cd ${REPO_DIR} && NODE_OPTIONS=--openssl-legacy-provider ${NODE_BIN} automation/nextgen-orchestrator.cjs run >> automation/logs/nextgen-cron.out 2>&1 ${TAG}"

action="$1" || action="status"

start_cron() {
  local tmpfile
  tmpfile=$(mktemp)
  crontab -l 2>/dev/null | grep -v "${TAG}" >"${tmpfile}" || true
  echo "*/10 * * * * ${CMD}" >>"${tmpfile}"
  crontab "${tmpfile}"
  rm -f "${tmpfile}"
  echo "Nextgen cron installed (every 10 minutes)."
}

stop_cron() {
  local tmpfile
  tmpfile=$(mktemp)
  crontab -l 2>/dev/null | grep -v "${TAG}" >"${tmpfile}" || true
  crontab "${tmpfile}"
  rm -f "${tmpfile}"
  echo "Nextgen cron removed."
}

status_cron() {
  echo "Current crontab entries containing NEXTGEN:"
  crontab -l 2>/dev/null | grep -n "${TAG}" || echo "(none)"
}

run_once() {
  cd "${REPO_DIR}"
  NODE_OPTIONS=--openssl-legacy-provider ${NODE_BIN} automation/nextgen-orchestrator.cjs run | cat
}

case "${action}" in
  start) start_cron ;;
  stop) stop_cron ;;
  status) status_cron ;;
  run) run_once ;;
  *) echo "Usage: bash automation/nextgen-cron.sh [start|stop|status|run]" ; exit 1 ;;
esac