#!/usr/bin/env bash
set -euo pipefail

REPO="${REPO:-/data/data/com.termux/files/home/ztg/repo}"
DELEGATOR="$REPO/scripts/agent-task-delegator.py"
REPORT="${AGENT_TASK_DELEGATOR_OUT:-/data/data/com.termux/files/home/ztg/repo/tmp/agent_task_delegator_report.json}"
BROADCAST_FILE="${AGENT_TASK_DELEGATOR_BROADCAST:-/data/data/com.termux/files/home/ztg/repo/tmp/swarm_coordinator_broadcast.txt}"

TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-}"

log() { echo "[swarm-coordinator] $*"; }
die() { log "FATAL: $*"; exit 1; }

# Ensure dependencies
command -v python3 >/dev/null 2>&1 || die "python3 not found"
[[ -f "$DELEGATOR" ]] || die "delegator not found at $DELEGATOR"

# Run delegator scan
log "Running delegator scan..."
python3 "$DELEGATOR" >/dev/null 2>&1 || die "delegator failed"
[[ -s "$REPORT" ]] || die "delegator report missing or empty: $REPORT"

gaps_count=$(python3 -c "import json; r=json.load(open('$REPORT')); print(len(r.get('gaps',[])))")
bottleneck_count=$(python3 -c "import json; r=json.load(open('$REPORT')); print(len(r.get('bottlenecks',[])))")
scripts_found=$(python3 -c "import json; r=json.load(open('$REPORT')); print(r.get('scripts_found',0))")

# Build broadcast message
TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
MSG=$(cat <<EOF
⚙️ Zion Swarm Coordinator
🕒 $TS
🔎 Gaps: $gaps_count | Bottlenecks: $bottleneck_count | Scripts: $scripts_found
EOF
)

# Add detail if any gap/bottleneck exists
if (( gaps_count > 0 || bottleneck_count > 0 )); then
  MSG+=$'\n📋 Detalhes:'
  python3 - "$REPORT" - <<'PY' >> "$BROADCAST_FILE" 2>/dev/null || true
import json, sys
with open(sys.argv[1]) as f:
    r=json.load(f)
print("GAPS:")
for g in r.get("gaps", []):
    print(f" - {g['type']}: {g.get('count', '?')}")
print("BOTTLENECKS:")
for b in r.get("bottlenecks", []):
    print(f" - {b['type']}: {b.get('count', '?')}")
PY
  if [[ -s "$BROADCAST_FILE" ]]; then
    MSG+=$'\n'
    MSG+=$(cat "$BROADCAST_FILE")
  fi
else
  MSG+=$'\n✅ Sem gaps ou bottlenecks detectados.'
fi

# Send to Telegram if configured
if [[ -n "${TELEGRAM_BOT_TOKEN}" && -n "${TELEGRAM_CHAT_ID}" ]]; then
  log "Sending Telegram broadcast..."
  curl -sS -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -d chat_id="${TELEGRAM_CHAT_ID}" \
    -d parse_mode="HTML" \
    --data-urlencode text="$MSG" >/dev/null 2>&1 || log "Telegram send failed"
else
  log "Telegram not configured; printing broadcast to stdout."
  printf "%s\n" "$MSG"
fi

# Cleanup
rm -f "$BROADCAST_FILE"
log "Coordinator cycle complete."
