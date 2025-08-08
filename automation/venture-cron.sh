#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="$ROOT_DIR/automation/logs"
PID_FILE="$LOG_DIR/venture-orchestrator.pid"
LOG_FILE="$LOG_DIR/venture-cron.out"

mkdir -p "$LOG_DIR"

do_start() {
  if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "Venture orchestrator already running (pid $(cat "$PID_FILE"))"
    exit 0
  fi
  echo "Starting venture orchestrator (continuous)"
  nohup node "$ROOT_DIR/automation/venture-orchestrator.cjs" continuous >> "$LOG_FILE" 2>&1 &
  echo $! > "$PID_FILE"
  echo "Started with pid $(cat "$PID_FILE")"
}

do_stop() {
  if [[ -f "$PID_FILE" ]]; then
    PID=$(cat "$PID_FILE")
    if kill -0 "$PID" 2>/dev/null; then
      kill "$PID" || true
      sleep 1
      if kill -0 "$PID" 2>/dev/null; then kill -9 "$PID" || true; fi
      echo "Stopped $PID"
    fi
    rm -f "$PID_FILE"
  else
    echo "No PID file; not running"
  fi
}

case "${1:-}" in
  start) do_start ;;
  stop) do_stop ;;
  status)
    if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
      echo "Running (pid $(cat "$PID_FILE"))"
    else
      echo "Not running"
    fi
    ;;
  run)
    node "$ROOT_DIR/automation/venture-orchestrator.cjs" once | cat
    ;;
  *)
    echo "Usage: $0 {start|stop|status|run}";
    exit 1;
    ;;
 esac