#!/usr/bin/env bash
set -euo pipefail
LOG_DIR="/workspace/logs"
PID_FILE="$LOG_DIR/auto_sync_daemon.pid"
if [ -f "$PID_FILE" ]; then
  PID=$(cat "$PID_FILE")
  if ps -p "$PID" > /dev/null 2>&1; then
    kill "$PID" || true
    sleep 1
  fi
  rm -f "$PID_FILE"
  echo "Stopped auto sync daemon"
else
  echo "No daemon PID file found"
fi
