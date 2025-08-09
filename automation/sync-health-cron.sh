#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CMD="cd \"$REPO_DIR\" && /usr/bin/env NODE_ENV=production node automation/sync-health-check.cjs --fix >> \"$REPO_DIR\"/.git/sync-health.log 2>&1"
BG_DIR="$REPO_DIR/.git/.bg"
PID_FILE="$BG_DIR/sync-health.pid"

mkdir -p "$BG_DIR" "$REPO_DIR/.git" || true

start() {
  if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "Already running (PID $(cat "$PID_FILE"))"
    exit 0
  fi
  nohup bash -lc "while true; do $CMD; sleep 60; done" >/dev/null 2>&1 & echo $! > "$PID_FILE"
  echo "✅ sync-health background loop started"
}

stop() {
  if [ -f "$PID_FILE" ]; then
    kill "$(cat "$PID_FILE")" 2>/dev/null || true
    rm -f "$PID_FILE"
    echo "🛑 sync-health loop stopped"
  else
    echo "No sync-health PID file."
  fi
}

status() {
  if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "sync-health running (PID $(cat "$PID_FILE"))"
  else
    echo "sync-health not running"
  fi
}

case "${1:-status}" in
  start) start ;;
  stop) stop ;;
  status) status ;;
  *) echo "Usage: $0 {start|stop|status}"; exit 1 ;;
esac