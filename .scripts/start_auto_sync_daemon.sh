#!/usr/bin/env bash
set -euo pipefail
LOG_DIR="/workspace/logs"
PID_FILE="$LOG_DIR/auto_sync_daemon.pid"
mkdir -p "$LOG_DIR"

# If already running, exit
if [ -f "$PID_FILE" ] && ps -p "$(cat "$PID_FILE" 2>/dev/null)" > /dev/null 2>&1; then
  echo "Daemon already running with PID $(cat "$PID_FILE")"
  exit 0
fi

nohup bash -c '
  while true; do
    /workspace/.scripts/auto_commit_push.sh || true
    /workspace/.scripts/auto_merge_to_main.sh || true
    sleep 60
  done
' >> "$LOG_DIR/auto_sync_daemon.out" 2>&1 &
DAEMON_PID=$!
echo $DAEMON_PID > "$PID_FILE"
echo "Started auto sync daemon with PID $DAEMON_PID"
