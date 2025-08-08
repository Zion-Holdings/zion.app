#!/usr/bin/env bash
set -euo pipefail

CMD=${1:-status}
PID_FILE=".git/.merge-conflict-watch.pid"
LOG_FILE=".git/merge-conflict-watch.log"

start() {
  if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "Watcher already running with PID $(cat "$PID_FILE")"
    exit 0
  fi
  echo "Starting merge-conflict watcher in background..."
  nohup bash -c 'while true; do date "+%F %T"; bash scripts/check-merge-conflicts.sh || echo "Conflict check failed"; sleep 300; done' \
    >> "$LOG_FILE" 2>&1 &
  echo $! > "$PID_FILE"
  echo "Started with PID $(cat "$PID_FILE")"
}

stop() {
  if [ -f "$PID_FILE" ]; then
    pid=$(cat "$PID_FILE")
    if kill -0 "$pid" 2>/dev/null; then
      kill "$pid" || true
      rm -f "$PID_FILE"
      echo "Stopped watcher (PID $pid)"
    else
      rm -f "$PID_FILE"
      echo "Stale PID file removed"
    fi
  else
    echo "Watcher not running"
  fi
}

status() {
  if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "Watcher running (PID $(cat "$PID_FILE"))"
  else
    echo "Watcher not running"
  fi
}

case "$CMD" in
  start) start ;;
  stop) stop ;;
  status) status ;;
  *) echo "Usage: $0 {start|stop|status}"; exit 2 ;;
esac