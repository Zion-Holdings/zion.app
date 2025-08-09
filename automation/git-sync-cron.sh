#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SYNC_CMD="cd \"$REPO_DIR\" && /usr/bin/env NODE_ENV=production node automation/advanced-git-sync.cjs >> \"$REPO_DIR\"/.git/auto-sync.log 2>&1"
PULL_CMD="cd \"$REPO_DIR\" && /usr/bin/env NODE_ENV=production node automation/git-pull-rebase.cjs >> \"$REPO_DIR\"/.git/auto-pull.log 2>&1"
BLOCK_BEGIN="# BEGIN ZION GIT AUTO SYNC"
BLOCK_END="# END ZION GIT AUTO SYNC"
BG_DIR="$REPO_DIR/.git/.bg"

ensure_bg_dir() { mkdir -p "$BG_DIR" "$REPO_DIR/.git" || true; }

start_background_loops() {
  ensure_bg_dir
  # Create or restart background loops using nohup
  nohup bash -lc "while true; do $SYNC_CMD; sleep 120; done" >/dev/null 2>&1 & echo $! > "$BG_DIR/sync.pid"
  nohup bash -lc "while true; do $PULL_CMD; sleep 300; done" >/dev/null 2>&1 & echo $! > "$BG_DIR/pull.pid"
  echo "✅ Background loops started (no crontab available)."
}

stop_background_loops() {
  if [ -f "$BG_DIR/sync.pid" ]; then kill "$(cat "$BG_DIR/sync.pid")" 2>/dev/null || true; rm -f "$BG_DIR/sync.pid"; fi
  if [ -f "$BG_DIR/pull.pid" ]; then kill "$(cat "$BG_DIR/pull.pid")" 2>/dev/null || true; rm -f "$BG_DIR/pull.pid"; fi
  echo "🛑 Background loops stopped."
}

bg_status() {
  echo "Background sync PID: $(cat "$BG_DIR/sync.pid" 2>/dev/null || echo '-')"
  echo "Background pull PID: $(cat "$BG_DIR/pull.pid" 2>/dev/null || echo '-')"
}

cmd_start() {
  # Try to use crontab if available; otherwise use background loops
  if command -v crontab >/dev/null 2>&1; then
    mkdir -p "$REPO_DIR/.git" || true
    local current
    current=$(crontab -l 2>/dev/null || true)

    local cleaned
    cleaned=$(printf "%s\n" "$current" | awk "/$BLOCK_BEGIN/{flag=1;next}/$BLOCK_END/{flag=0;next}!flag{print}")

    local block
    block=$(cat <<EOF
$BLOCK_BEGIN
*/2 * * * * $SYNC_CMD
*/5 * * * * $PULL_CMD
$BLOCK_END
EOF
)

    printf "%s\n%s\n" "$cleaned" "$block" | crontab -
    echo "✅ Cron jobs installed:"
    echo "- Every 2 min: advanced git sync"
    echo "- Every 5 min: auto pull/rebase"
  else
    start_background_loops
  fi
}

cmd_stop() {
  if command -v crontab >/dev/null 2>&1; then
    local current
    current=$(crontab -l 2>/dev/null || true)
    local cleaned
    cleaned=$(printf "%s\n" "$current" | awk "/$BLOCK_BEGIN/{flag=1;next}/$BLOCK_END/{flag=0;next}!flag{print}")
    printf "%s\n" "$cleaned" | crontab -
    echo "🛑 Cron jobs removed."
  fi
  stop_background_loops
}

cmd_status() {
  if command -v crontab >/dev/null 2>&1; then
    echo "Current crontab:" && echo "-----------------"
    crontab -l 2>/dev/null || echo "(no crontab)"
  fi
  bg_status
}

case "${1:-status}" in
  start) cmd_start ;;
  stop) cmd_stop ;;
  status) cmd_status ;;
  *) echo "Usage: $0 {start|stop|status}"; exit 1 ;;
 esac