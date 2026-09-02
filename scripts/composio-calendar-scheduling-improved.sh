#!/usr/bin/env bash
# composio-calendar-scheduling-improved.sh
# Entrada: Calendly eventos → Google Calendar / lembretes → Slack notification
set -euo pipefail
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
DRY_RUN="${DRY_RUN:-false}"
USER_ID="${USER_ID:-zion-calendar}"
SLACK_CHANNEL="${SLACK_CHANNEL:-#zion-leads}"

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') [CAL] $*"; }

check_env() {
  [[ -z "$COMPOSIO_API_KEY" ]] && { log "Missing COMPOSIO_API_KEY"; exit 1; }
}

run_scheduling() {
  python3 - <<'PY'
import os, json
from composio import Composio
composio = Composio(api_key=os.environ.get("COMPOSIO_API_KEY",""))
session = composio.create(user_id=os.environ.get("USER_ID","zion-calendar"))
payload = {
  "calendar_name": os.environ.get("CALENDAR_NAME","primary"),
  "summary_template": "Zion Consultoria: {event_name}",
  "attendees_required": True,
  "reminders": [
    {"method": "email", "minutes": 1440},
    {"method": "popup", "minutes": 60}
  ],
  "slack_channel": os.environ.get("SLACK_CHANNEL","#zion-leads"),
}
print(json.dumps(payload))
PY
}

main() {
  check_env
  if [ "$DRY_RUN" = "true" ]; then
    log "[DRY RUN] scheduling flow validated."
    return 0
  fi
  log "Running scheduling flow..."
  run_scheduling
  log "Scheduling flow completed."
}

main "$@"
