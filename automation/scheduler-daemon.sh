#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="$ROOT_DIR/automation/logs"
PID_DIR="$ROOT_DIR/automation/pids"
RUNNER="$ROOT_DIR/automation/scheduler-runner.cjs"
NODE_BIN="$(command -v node)"
LOG_FILE="$LOG_DIR/scheduler.log"
PID_FILE="$PID_DIR/scheduler.pid"

mkdir -p "$LOG_DIR" "$PID_DIR"

is_running() {
  if [[ -f "$PID_FILE" ]]; then
    local pid
    pid="$(cat "$PID_FILE" || true)"
    if [[ -n "$pid" && -d "/proc/$pid" ]]; then
      return 0
    fi
  fi
  return 1
}

start() {
  if is_running; then
    echo "Scheduler already running with PID $(cat "$PID_FILE")"; return 0
  fi
  echo "Starting scheduler..."
  nohup "$NODE_BIN" "$RUNNER" >> "$LOG_FILE" 2>&1 &
  echo $! > "$PID_FILE"
  sleep 1
  if is_running; then
    echo "Scheduler started with PID $(cat "$PID_FILE")"
  else
    echo "Failed to start scheduler" >&2; exit 1
  fi
}

stop() {
  if ! is_running; then
    echo "Scheduler is not running"; return 0
  fi
  local pid
  pid="$(cat "$PID_FILE")"
  echo "Stopping scheduler PID $pid..."
  kill "$pid" || true
  sleep 1
  if is_running; then
    echo "Force killing scheduler PID $pid..."
    kill -9 "$pid" || true
  fi
  rm -f "$PID_FILE"
  echo "Scheduler stopped"
}

status() {
  if is_running; then
    echo "Scheduler is running with PID $(cat "$PID_FILE")"
    exit 0
  else
    echo "Scheduler is not running"
    exit 1
  fi
}

case "${1:-}" in
  start) start ;;
  stop) stop ;;
  status) status ;;
  restart) stop || true; start ;;
  *) echo "Usage: $0 {start|stop|status|restart}"; exit 2 ;;
 esac