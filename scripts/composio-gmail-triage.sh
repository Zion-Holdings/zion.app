#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use || true

COMPOSIO_BIN="composio"
if ! command -v "$COMPOSIO_BIN" >/dev/null 2>&1; then
  echo "composio not available; skip gmail triage"
  exit 0
fi

TEAM_ID="${LINEAR_TEAM_ID:-a92e1670-db71-4cec-bb71-b3c647ca164b}"
TMP_FILE="/tmp/composio-gmail-triage.json"
MAX_RESULTS="${MAX_RESULTS:-20}"
QUERY="${GMAIL_QUERY:-in:inbox}"

$COMPOSIO_BIN execute GMAIL_FETCH_EMAILS -d "{\"max_results\":${MAX_RESULTS},\"query\":\"${QUERY}\"}" > "$TMP_FILE" 2>&1 || true

if [ ! -s "$TMP_FILE" ]; then
  echo "Gmail fetch failed"
  exit 1
fi

EMAIL_DATA=$(cat "$TMP_FILE")
if [ -z "$EMAIL_DATA" ] || [ "$EMAIL_DATA" = "null" ]; then
  echo "Gmail fetch returned empty"
  exit 1
fi

echo "$EMAIL_DATA" > "$TMP_FILE"
COUNT=$(jq -r '.data.messages // [] | length' "$TMP_FILE")
echo "Fetched $COUNT emails"

for i in $(seq 0 $((COUNT - 1))); do
  SUBJECT=$(jq -r ".data.messages[$i].subject // \"(no subject)\"" "$TMP_FILE")
  FROM=$(jq -r ".data.messages[$i].sender // \"(no from)\"" "$TMP_FILE")
  THREAD_ID=$(jq -r ".data.messages[$i].threadId // empty" "$TMP_FILE")

  if [ -n "$THREAD_ID" ]; then
    echo "=== Creating Linear issue for: $SUBJECT ==="
    $COMPOSIO_BIN execute LINEAR_CREATE_LINEAR_ISSUE -d "{\"team_id\":\"${TEAM_ID}\",\"title\":\"Gmail: ${SUBJECT}\",\"description\":\"From: ${FROM}\\nThread ID: ${THREAD_ID}\\n\\nReview in Gmail inbox.\",\"priority\":3}" >/tmp/linear-gmail-${i}.json 2>&1 || true
  fi
done

echo "Gmail triage completed"
