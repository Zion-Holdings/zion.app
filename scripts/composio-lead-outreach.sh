#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use

RESULT_FILE="/tmp/hunter-domain-search.json"
if [ ! -s "$RESULT_FILE" ]; then
  echo "Lead file missing"
  exit 1
fi

DOMAIN_FILTER="ziontechgroup.com"
EMAILS=$(jq -r --arg domain "$DOMAIN_FILTER" '.data.data.emails[]? | select(.value | test("^[^@]+@" + $domain + "$") | not) | .value' "$RESULT_FILE" | head -20)
TEAM_ID="a92e1670-db71-4cec-bb71-b3c647ca164b"

for email in $EMAILS; do
  echo "=== Outreach: $email ==="
  
  # Enviar e-mail
  composio execute GMAIL_SEND_EMAIL -d '{
    "to": "'"${email}"'",
    "subject": "Zion Tech Group — AI/IT automation for your team",
    "body": "Hi,\n\nWe automate IT operations, outreach, and SEO with AI/Composio-driven workflows.\n\nIf that is relevant, reply and I will send a tailored 1-page proposal.",
    "is_html": false
  }' >/tmp/outreach-${email}.json 2>&1 || true
  
  # Criar issue no Linear
  composio execute LINEAR_CREATE_LINEAR_ISSUE -d '{
    "team_id": "'"${TEAM_ID}"'",
    "title": "Outreach: '"${email}"'",
    "description": "Hunter-sourced lead.\nCheck /tmp/outreach-'"${email}"'.json for send result.",
    "priority": 3
  }' >/tmp/linear-${email}.json 2>&1 || true
done

echo "Outreach completed"
