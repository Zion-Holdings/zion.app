#!/bin/bash
# Runs npm audit and fixes critical vulnerabilities.
# Logs actions and optionally sends a webhook notification.

set -euo pipefail

LOG_DIR="$(dirname "$0")/../logs/security"
LOG_FILE="$LOG_DIR/hourly-fix.log"
WEBHOOK_URL="${WEBHOOK_URL:-}"

mkdir -p "$LOG_DIR"

echo "[$(date)] Running npm audit" >> "$LOG_FILE"
AUDIT_OUTPUT=$(npm audit --json 2>&1)
# Save JSON for reference
echo "$AUDIT_OUTPUT" > "$LOG_DIR/audit-result.json"

echo "$AUDIT_OUTPUT" >> "$LOG_FILE"

TOTAL=$(echo "$AUDIT_OUTPUT" | jq '.metadata.vulnerabilities.total // 0')
CRITICAL=$(echo "$AUDIT_OUTPUT" | jq '.metadata.vulnerabilities.critical // 0')

MESSAGE="No vulnerabilities found."

if [ "$TOTAL" -gt 0 ]; then
    if [ "$CRITICAL" -gt 0 ]; then
        echo "[$(date)] Critical vulnerabilities detected: $CRITICAL" >> "$LOG_FILE"
        echo "[$(date)] Running npm audit fix --force" >> "$LOG_FILE"
        FIX_OUTPUT=$(npm audit fix --force 2>&1)
        echo "$FIX_OUTPUT" >> "$LOG_FILE"
        MESSAGE="Fixed $CRITICAL critical vulnerabilities."
    else
        MESSAGE="Vulnerabilities found ($TOTAL total, none critical)."
        echo "[$(date)] $MESSAGE" >> "$LOG_FILE"
    fi
else
    echo "[$(date)] $MESSAGE" >> "$LOG_FILE"
fi

if [ -n "$WEBHOOK_URL" ]; then
    PAYLOAD=$(jq -n --arg msg "$MESSAGE" --argjson total "$TOTAL" --argjson critical "$CRITICAL" '{message:$msg,total:$total,critical:$critical}')
    curl -fsS -X POST -H "Content-Type: application/json" -d "$PAYLOAD" "$WEBHOOK_URL" >> "$LOG_FILE" 2>&1 || true
fi
