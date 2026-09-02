#!/bin/bash
set -euo pipefail
cd /data/data/com.termux/files/home/ztg/repo

# Load secrets from .composio/secrets.env
if [ -f .composio/secrets.env ]; then
  set -a
  source .composio/secrets.env
  set +a
fi

: "${BREVO_API_KEY:?Set BREVO_API_KEY in .composio/secrets.env}"
: "${RESEND_API_KEY:?Set RESEND_API_KEY in .composio/secrets.env}"
: "${SERPAPI_API_KEY:?Set SERPAPI_API_KEY in .composio/secrets.env}"
: "${FIRECRAWL_API_KEY:?Set FIRECRAWL_API_KEY in .composio/secrets.env}"
: "${TAVILY_API_KEY:?Set TAVILY_API_KEY in .composio/secrets.env}"

COMPOSIO_API_KEY="ak_EbwU3_9eFhvnlpQHN7Ny"
ENTITY_ID="kleber@ziontechgroup.com"

create_account() {
  local toolkit="$1"
  local auth_config_id="$2"
  local api_key="$3"
  local name="$4"

  echo "Creating $name connected account..."
  local payload
  if [[ "$toolkit" == "stripe" || "$toolkit" == "calendly" || "$toolkit" == "whatsapp" ]]; then
    payload=$(cat <<EOF
{
  "auth_config_id": "$auth_config_id",
  "user_id": "$ENTITY_ID"
}
EOF
)
    local resp
    resp=$(curl -sS -X POST "https://backend.composio.dev/api/v3.1/connected_accounts/link" \
      -H "x-api-key: $COMPOSIO_API_KEY" \
      -H "Content-Type: application/json" \
      -d "$payload")
    local connection_id
    connection_id=$(echo "$resp" | python3 -c "import sys,json; print(json.load(sys.stdin).get('connected_account_id',''))" 2>/dev/null || echo "")
    if [ -n "$connection_id" ]; then
      echo "  -> connection_id: $connection_id"
      gh secret set "COMPOSIO_${name^^}_CONNECTION_ID" --body "$connection_id"
    else
      echo "  -> FAILED: $resp"
    fi
  else
    payload=$(cat <<EOF
{
  "auth_config": {"id": "$auth_config_id"},
  "connection": {
    "user_id": "$ENTITY_ID",
    "api_key": "$api_key"
  }
}
EOF
)
    local resp
    resp=$(curl -sS -X POST "https://backend.composio.dev/api/v3.1/connected_accounts" \
      -H "x-api-key: $COMPOSIO_API_KEY" \
      -H "Content-Type: application/json" \
      -d "$payload")
    local connection_id
    connection_id=$(echo "$resp" | python3 -c "import sys,json; print(json.load(sys.stdin).get('id',''))" 2>/dev/null || echo "")
    if [ -n "$connection_id" ]; then
      echo "  -> connection_id: $connection_id"
      gh secret set "COMPOSIO_${name^^}_CONNECTION_ID" --body "$connection_id"
    else
      echo "  -> FAILED: $resp"
    fi
  fi
}

create_account "brevo" "ac_Ic2gvJvWfAe7" "$BREVO_API_KEY" "brevo"
create_account "resend" "ac_b-NbAjEvBDpi" "$RESEND_API_KEY" "resend"
create_account "serpapi" "ac_Ir4bPIPK7mSq" "$SERPAPI_API_KEY" "serpapi"
create_account "firecrawl" "ac_p8nZuksI03Ff" "$FIRECRAWL_API_KEY" "firecrawl"
create_account "tavily" "ac_dGa0hofDjNJ4" "$TAVILY_API_KEY" "tavily"

echo "Done. Run gh secret list to verify."
