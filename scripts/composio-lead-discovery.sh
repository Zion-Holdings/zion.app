#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use

DOMAIN="ziontechgroup.com"
LIMIT=10
TEAM_ID="a92e1670-db71-4cec-bb71-b3c647ca164b"

echo "=== Hunter domain search: $DOMAIN ==="
composio execute HUNTER_DOMAIN_SEARCH -d '{
  "domain": "'"${DOMAIN}"'",
  "limit": '"${LIMIT}"',
  "type": "personal"
}' > /tmp/hunter-domain-search.json 2>&1 || true

echo "=== Create Linear issue for lead review ==="
composio execute LINEAR_CREATE_LINEAR_ISSUE -d '{
  "team_id": "'"${TEAM_ID}"'",
  "title": "Lead review: Hunter domain search for '"${DOMAIN}"'",
  "description": "Run Hunter domain search for '"${DOMAIN}"' and review contacts for outreach.\n\nCheck /tmp/hunter-domain-search.json for raw results.",
  "priority": 2,
  "label_ids": []
}' > /tmp/linear-lead-review.json 2>&1 || true

echo 'Lead discovery finished'
