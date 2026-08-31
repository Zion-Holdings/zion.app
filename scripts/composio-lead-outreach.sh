#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use || true

COMPOSIO_BIN="composio"
if ! command -v "$COMPOSIO_BIN" >/dev/null 2>&1; then
  echo "composio not available; skip outreach"
  exit 0
fi

TEAM_ID="${LINEAR_TEAM_ID:-a92e1670-db71-4cec-bb71-b3c647ca164b}"
HUNTER_FILE="${HUNTER_FILE:-/tmp/composio-lead-hunter.json}"
MAX_EMAILS="${MAX_EMAILS:-10}"
DOMAIN_FILTER="${DOMAIN_FILTER:-ziontechgroup.com}"

if [ ! -s "$HUNTER_FILE" ]; then
  echo "Lead file missing: $HUNTER_FILE"
  exit 0
fi

EMAILS=$(jq -r --arg domain "$DOMAIN_FILTER" '.data.data.emails[]? | select(.value | test("^[^@]+@" + $domain + "$") | not) | .value' "$HUNTER_FILE" | head -"$MAX_EMAILS" || true)
if [ -z "$EMAILS" ]; then
  echo "No external emails found in Hunter result"
  exit 0
fi

for email in $EMAILS; do
  echo "=== Outreach: $email ==="
  $COMPOSIO_BIN execute GMAIL_SEND_EMAIL -d "{\"to\":\"${email}\",\"subject\":\"Zion Tech Group — AI/IT automation for your team\",\"body\":\"Hi,\\n\\nWe automate IT operations, outreach, and SEO with AI/Composio-driven workflows.\\n\\nIf that is relevant, reply and I will send a tailored 1-page proposal.\",\"is_html\":false}" >/tmp/outreach-${email}.json 2>&1 || true

  $COMPOSIO_BIN execute LINEAR_CREATE_LINEAR_ISSUE -d "{\"team_id\":\"${TEAM_ID}\",\"title\":\"Outreach: ${email}\",\"description\":\"Hunter-sourced lead.\\nCheck /tmp/outreach-${email}.json for send result.\",\"priority\":3}" >/tmp/linear-${email}.json 2>&1 || true

  $COMPOSIO_BIN execute RESEND_CREATE_CONTACT -d "{\"email\":\"${email}\",\"firstName\":\"\",\"lastName\":\"\",\"audienceId\":\"36bc979f-6357-4916-afd3-e4b6e9bdf873\"}" >/tmp/resend-${email}.json 2>&1 || true
done

echo "Outreach completed for $(echo "$EMAILS" | wc -l) contacts"
