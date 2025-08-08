#!/usr/bin/env bash
set -euo pipefail

# Resolve repo root relative to this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$REPO_DIR/automation/logs"
PID_DIR="$LOG_DIR/pids"

mkdir -p "$LOG_DIR" "$PID_DIR"

LINTING_CMD="node $REPO_DIR/automation/linting-cron-automation.js"
LINTING_OUT="$LOG_DIR/linting-cron.out"
LINTING_PID="$PID_DIR/linting-cron.pid"

CONTENT_CMD="node $REPO_DIR/automation/content-autogen-orchestrator.cjs start"
CONTENT_OUT="$LOG_DIR/content-autogen.out"
CONTENT_PID="$PID_DIR/content-autogen.pid"

# Helpers
is_alive() {
  local pid="$1"
  if [[ -z "$pid" || ! -e "/proc/$pid" ]]; then
    return 1
  fi
  return 0
}

start_if_needed() {
  local name="$1" cmd="$2" out="$3" pidfile="$4"
  if [[ -f "$pidfile" ]]; then
    local pid
    pid=$(cat "$pidfile" || true)
    if is_alive "$pid"; then
      echo "✅ $name already running (pid=$pid)"
      return 0
    fi
  fi
  echo "🚀 Starting $name..."
  nohup bash -lc "$cmd" >>"$out" 2>&1 & echo $! >"$pidfile"
  sleep 0.2
  local npid
  npid=$(cat "$pidfile" || true)
  if is_alive "$npid"; then
    echo "✅ $name started (pid=$npid)"
  else
    echo "❌ Failed to start $name"
    return 1
  fi
}

stop_if_running() {
  local name="$1" pidfile="$2"
  if [[ -f "$pidfile" ]]; then
    local pid
    pid=$(cat "$pidfile" || true)
    if is_alive "$pid"; then
      echo "🛑 Stopping $name (pid=$pid)"
      kill "$pid" 2>/dev/null || true
      sleep 0.2 || true
      if is_alive "$pid"; then
        kill -9 "$pid" 2>/dev/null || true
      fi
    fi
    rm -f "$pidfile"
  else
    echo "ℹ️  $name is not running"
  fi
}

cmd_start() {
  echo "==> Ensuring Git auto-sync loops (cron fallback)"
  bash "$REPO_DIR/automation/git-sync-cron.sh" start || true

  echo "==> Starting node-cron services"
  start_if_needed "linting-cron" "$LINTING_CMD" "$LINTING_OUT" "$LINTING_PID" || true
  start_if_needed "content-autogen" "$CONTENT_CMD" "$CONTENT_OUT" "$CONTENT_PID" || true
}

cmd_stop() {
  echo "==> Stopping node-cron services"
  stop_if_running "content-autogen" "$CONTENT_PID"
  stop_if_running "linting-cron" "$LINTING_PID"

  echo "==> Stopping Git auto-sync loops"
  bash "$REPO_DIR/automation/git-sync-cron.sh" stop || true
}

cmd_status() {
  echo "==> Cron supervisor status"
  # Git sync bg PIDs
  local bgdir="$REPO_DIR/.git/.bg"
  echo "Git sync PID: $(cat "$bgdir/sync.pid" 2>/dev/null || echo '-')"
  echo "Git pull PID: $(cat "$bgdir/pull.pid" 2>/dev/null || echo '-')"

  # Linting
  local lpid
  lpid=$(cat "$LINTING_PID" 2>/dev/null || true)
  if is_alive "$lpid"; then echo "linting-cron: running (pid=$lpid)"; else echo "linting-cron: not running"; fi

  # Content
  local cpid
  cpid=$(cat "$CONTENT_PID" 2>/dev/null || true)
  if is_alive "$cpid"; then echo "content-autogen: running (pid=$cpid)"; else echo "content-autogen: not running"; fi

  echo "==> Recent logs (tails)"
  for f in "$LINTING_OUT" "$CONTENT_OUT" "$REPO_DIR/.git/auto-sync.log" "$REPO_DIR/.git/auto-pull.log"; do
    if [[ -f "$f" ]]; then
      echo "----- $f (last 20) -----"
      tail -n 20 "$f" || true
    fi
  done
}

case "${1:-status}" in
  start) cmd_start ;;
  stop) cmd_stop ;;
  status) cmd_status ;;
  restart) cmd_stop; cmd_start ;;
  *) echo "Usage: $0 {start|stop|status|restart}"; exit 1 ;;
 esac