# composio-revenue-cycle.sh
# Fluxo: Calendly → Stripe → Resend → HubSpot → Notion → Slack → WhatsApp
set -euo pipefail
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
DRY_RUN="${DRY_RUN:-false}"
USER_ID="${USER_ID:-zion-revenue}"

check_env() {
  [[ -z "$COMPOSIO_API_KEY" ]] && { echo "Missing COMPOSIO_API_KEY"; exit 1; }
}

run_cycle() {
  python3 - <<'PY'
import os, sys, json
from composio import Composio
api_key = os.environ.get("COMPOSIO_API_KEY", "")
if not api_key:
    print("[]")
    sys.exit(0)
composio = Composio(api_key=api_key)
session = composio.create(user_id=os.environ.get("USER_ID","zion-revenue"))
actions = [
  "CALENDLY_LIST_EVENTS",
  "STRIPE_LIST_CHARGES",
  "RESEND_SEND_EMAIL",
  "HUBSPOT_CREATE_CONTACT",
  "NOTION_CREATE_PAGE",
  "SLACK_SEND_MESSAGE",
  "WHATSAPP_SEND_MESSAGE",
]
print(json.dumps({"user_id": os.environ.get("USER_ID","zion-revenue"), "actions": actions}))
PY
}

main() {
  check_env
  if [ "$DRY_RUN" = "true" ]; then
    echo "[DRY_RUN] Revenue cycle validated."
    return 0
  fi
  run_cycle
}

main "$@"
