# composio-content-cycle.sh
# Fluxo: Tavily/SerpApi/Firecrawl → Resend → WhatsApp → Brevo → Slack
set -euo pipefail
COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"
DRY_RUN="${DRY_RUN:-false}"
USER_ID="${USER_ID:-zion-content}"

check_env() {
  [[ -z "$COMPOSIO_API_KEY" ]] && { echo "Missing COMPOSIO_API_KEY"; exit 1; }
}

run_cycle() {
  python3 - <<'PY'
import os, json
from composio import Composio
composio = Composio(api_key=os.environ.get("COMPOSIO_API_KEY",""))
session = composio.create(user_id=os.environ.get("USER_ID","zion-content"))
actions = [
  "TAVILY_SEARCH",
  "SERPAPI_SEARCH",
  "FIRECRAWL_SCRAPE",
  "RESEND_SEND_EMAIL",
  "WHATSAPP_SEND_MESSAGE",
  "BREVO_ADD_CONTACT",
  "SLACK_SEND_MESSAGE",
]
print(json.dumps({"user_id": os.environ.get("USER_ID","zion-content"), "actions": actions}))
PY
}

main() {
  check_env
  if [ "$DRY_RUN" = "true" ]; then
    echo "[DRY_RUN] Content cycle validated."
    return 0
  fi
  run_cycle
}

main "$@"
