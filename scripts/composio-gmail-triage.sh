#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use

TEAM_ID="a92e1670-db71-4cec-bb71-b3c647ca164b"
TMP_FILE="/tmp/gmail-triage.json"
MAX_RESULTS=20

echo "=== Fetching Gmail inbox ==="
composio execute GMAIL_FETCH_EMAILS -d '{
  "max_results": '"${MAX_RESULTS}"',
  "query": "in:inbox"
}' 2>&1 | tee "$TMP_FILE" >/dev/null || true

OUTPUT_FILE=$(jq -r '.outputFilePath // empty' "$TMP_FILE")
if [ -n "$OUTPUT_FILE" ] && [ -f "$OUTPUT_FILE" ]; then
  EMAIL_DATA=$(cat "$OUTPUT_FILE")
else
  EMAIL_DATA=$(cat "$TMP_FILE")
fi

if [ -z "$EMAIL_DATA" ] || [ "$EMAIL_DATA" = "null" ]; then
  echo "Gmail fetch failed"
  exit 1
fi

echo "$EMAIL_DATA" > "$TMP_FILE"
COUNT=$(jq -r '.data.messages | length' "$TMP_FILE")
echo "Fetched $COUNT emails"

for i in $(seq 0 $((COUNT - 1))); do
  SUBJECT=$(jq -r ".data.messages[$i].subject // \"(no subject)\"" "$TMP_FILE")
  FROM=$(jq -r ".data.messages[$i].sender // \"(no from)\"" "$TMP_FILE")
  THREAD_ID=$(jq -r ".data.messages[$i].threadId // empty" "$TMP_FILE")

  if [ -n "$THREAD_ID" ]; then
    echo "=== Creating Linear issue for: $SUBJECT ==="
    composio execute LINEAR_CREATE_LINEAR_ISSUE -d '{
      "team_id": "'"${TEAM_ID}"'",
      "title": "Gmail: '"${SUBJECT}"'",
      "description": "From: '"${FROM}"'\nThread ID: '"${THREAD_ID}"'\n\nReview in Gmail inbox.",
      "priority": 3
    }' >/tmp/linear-gmail-${i}.json 2>&1 || true
  fi
done

echo "Gmail triage completed"
