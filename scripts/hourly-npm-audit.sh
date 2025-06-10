#!/bin/bash
set -euo pipefail

LOG_DIR="$(dirname "$0")/../logs/security"
LOG_FILE="$LOG_DIR/hourly-fix.log"
TEMP_DATA_DIR="${GITHUB_WORKSPACE:-/tmp}/notification_data"
PATCHED_PACKAGES_FILE="$TEMP_DATA_DIR/patched_packages.json"

mkdir -p "$LOG_DIR"
mkdir -p "$TEMP_DATA_DIR"

# Initialize patched packages file with an empty JSON array
echo "[]" > "$PATCHED_PACKAGES_FILE"

echo "[$(date)] Running npm audit" >> "$LOG_FILE"
# Capture the JSON output for processing.
AUDIT_JSON_OUTPUT=$(npm audit --json 2>&1) || true # Allow failure, process what we get
echo "$AUDIT_JSON_OUTPUT" > "$LOG_DIR/audit-result-$(date +%s).json" # Save full audit for records

# Log the audit output to the main log file as well
echo "$AUDIT_JSON_OUTPUT" >> "$LOG_FILE"

# Check if AUDIT_JSON_OUTPUT is valid JSON before parsing
if ! echo "$AUDIT_JSON_OUTPUT" | jq empty 2>/dev/null; then
  echo "[$(date)] npm audit did not return valid JSON. Output was: $AUDIT_JSON_OUTPUT" >> "$LOG_FILE"
  # Decide on default values or exit if this is critical
  TOTAL_VULNS=0
  CRITICAL_VULNS=0
  # Potentially write an error to PATCHED_PACKAGES_FILE or leave it as []
  echo '{ "error": "npm audit failed to produce valid JSON" }' > "$PATCHED_PACKAGES_FILE"
else
  TOTAL_VULNS=$(echo "$AUDIT_JSON_OUTPUT" | jq '.metadata.vulnerabilities.total // 0')
  CRITICAL_VULNS=$(echo "$AUDIT_JSON_OUTPUT" | jq '.metadata.vulnerabilities.critical // 0')
fi


MESSAGE="npm audit: No vulnerabilities found."

if [ "$TOTAL_VULNS" -gt 0 ]; then
    if [ "$CRITICAL_VULNS" -gt 0 ]; then
        echo "[$(date)] Critical vulnerabilities detected: $CRITICAL_VULNS (Total: $TOTAL_VULNS)" >> "$LOG_FILE"
        echo "[$(date)] Attempting to fix critical vulnerabilities with 'npm audit fix --force --json'" >> "$LOG_FILE"

        # Attempt to fix and capture JSON output
        FIX_JSON_OUTPUT=$(npm audit fix --force --json 2>&1) || true # Allow command to fail without exiting script
        echo "$FIX_JSON_OUTPUT" >> "$LOG_FILE"
        echo "$FIX_JSON_OUTPUT" > "$LOG_DIR/audit-fix-result-$(date +%s).json"

        # Extract patched package information
        # The JSON structure for `npm audit fix --json` has an "actions" array.
        # Each action has a "type" ("update", "remove", "add") and "module", "version", "oldVersion" (for updates).
        # We need to filter for "update" actions.
        # Ensure FIX_JSON_OUTPUT is valid JSON before parsing
        if echo "$FIX_JSON_OUTPUT" | jq empty 2>/dev/null; then
            echo "$FIX_JSON_OUTPUT" | jq '[.actions[]? | select(.action=="update") | {name: .module, version: .version, previousVersion: .oldVersion?}] // []' > "$PATCHED_PACKAGES_FILE"
        else
            echo "[$(date)] 'npm audit fix --force --json' did not return valid JSON. Output: $FIX_JSON_OUTPUT" >> "$LOG_FILE"
            # Write error or keep as empty array
             echo '{ "error": "npm audit fix failed to produce valid JSON" }' > "$PATCHED_PACKAGES_FILE"
        fi

        NEW_CRITICAL_VULNS_MSG_PART="Could not determine new critical count from fix output."
        if echo "$FIX_JSON_OUTPUT" | jq empty 2>/dev/null; then
            NEW_AUDIT_METADATA=$(echo "$FIX_JSON_OUTPUT" | jq '.audit // {}') # Check if 'audit' key exists
            if echo "$NEW_AUDIT_METADATA" | jq empty 2>/dev/null && [ "$(echo "$NEW_AUDIT_METADATA" | jq 'keys | length')" -gt 0 ]; then
                 NEW_CRITICAL_VULNS=$(echo "$NEW_AUDIT_METADATA" | jq '.metadata.vulnerabilities.critical // -1') # -1 if not found
                 NEW_CRITICAL_VULNS_MSG_PART="New critical count: $NEW_CRITICAL_VULNS."
            fi
        fi

        MESSAGE="npm audit: $CRITICAL_VULNS critical vulnerabilities found. Fix attempt made. Patched info in $PATCHED_PACKAGES_FILE. $NEW_CRITICAL_VULNS_MSG_PART"

        if [ "$(jq 'length' "$PATCHED_PACKAGES_FILE")" -gt 0 ] && ! jq 'any(.[]; .error)' "$PATCHED_PACKAGES_FILE" > /dev/null ; then
            echo "[$(date)] Packages patched. Details in $PATCHED_PACKAGES_FILE" >> "$LOG_FILE"
        elif jq 'any(.[]; .error)' "$PATCHED_PACKAGES_FILE" > /dev/null; then
            echo "[$(date)] Error occurred during patch information extraction. Check $PATCHED_PACKAGES_FILE and logs." >> "$LOG_FILE"
        else
            echo "[$(date)] No packages were reported as patched by 'npm audit fix --json'." >> "$LOG_FILE"
        fi
    else
        MESSAGE="npm audit: $TOTAL_VULNS vulnerabilities found, none critical."
        echo "[$(date)] $MESSAGE" >> "$LOG_FILE"
    fi
else
    echo "[$(date)] $MESSAGE" >> "$LOG_FILE"
fi

# The direct webhook call is removed. gather-notification-data.sh will handle notifications.
echo "[$(date)] hourly-npm-audit.sh finished. Message: $MESSAGE" >> "$LOG_FILE"
