#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status.

# --- Configuration ---
TEMP_DIR="${GITHUB_WORKSPACE:-/tmp}/notification_data"
SLOW_ENDPOINTS_FILE="$TEMP_DIR/slow_endpoints.json"
PATCHED_PACKAGES_FILE="$TEMP_DIR/patched_packages.json"
TEST_STATUS_FILE="$TEMP_DIR/test_status.json"
# COMMIT_INFO_FILE is not strictly needed as we inject commitLink directly with jq

# Ensure temp directory exists
mkdir -p "$TEMP_DIR"
echo "Temp directory for notification data: $TEMP_DIR"

# --- Data Gathering ---
# 1. Slow Endpoints (Data populated by other processes into $SLOW_ENDPOINTS_FILE)
# 2. Patched Packages (Data populated by hourly-npm-audit.sh into $PATCHED_PACKAGES_FILE)
# 3. Test Status (Data populated by check_coverage_and_notify.js into $TEST_STATUS_FILE)

# 4. Commit Link
COMMIT_HASH=$(git log -1 --pretty=format:"%H" || echo "unknown")
REPO_URL_BASE="${GITHUB_SERVER_URL:-https://github.com}/${GITHUB_REPOSITORY}" # GITHUB_REPOSITORY should ideally be set
COMMIT_LINK="N/A"

if [ "$COMMIT_HASH" != "unknown" ] && [ -n "${GITHUB_REPOSITORY}" ]; then
  COMMIT_LINK="$REPO_URL_BASE/commit/$COMMIT_HASH"
elif [ "$COMMIT_HASH" != "unknown" ]; then
  # Fallback if GITHUB_REPOSITORY is not set but we have a hash
  COMMIT_LINK="Commit: $COMMIT_HASH (Repo URL not configured)"
fi
echo "Commit link determined: $COMMIT_LINK"

# --- Payload Construction ---
# Start with commit link.
jq -n --arg commitLink "$COMMIT_LINK" '{commitLink: $commitLink}' > "$TEMP_DIR/payload.json"

# Merge slow endpoints if file exists and is not empty
if [ -f "$SLOW_ENDPOINTS_FILE" ] && [ -s "$SLOW_ENDPOINTS_FILE" ]; then
  echo "Merging slow endpoints data from $SLOW_ENDPOINTS_FILE"
  jq --argfile data "$SLOW_ENDPOINTS_FILE" '. + {slowEndpoints: $data}' "$TEMP_DIR/payload.json" > "$TEMP_DIR/payload_merged.json" && mv "$TEMP_DIR/payload_merged.json" "$TEMP_DIR/payload.json"
else
  echo "Slow endpoints file not found or empty. Defaulting to empty array."
  jq '. + {slowEndpoints: []}' "$TEMP_DIR/payload.json" > "$TEMP_DIR/payload_merged.json" && mv "$TEMP_DIR/payload_merged.json" "$TEMP_DIR/payload.json"
fi

# Merge patched packages if file exists and is not empty
if [ -f "$PATCHED_PACKAGES_FILE" ] && [ -s "$PATCHED_PACKAGES_FILE" ]; then
  echo "Merging patched packages data from $PATCHED_PACKAGES_FILE"
  jq --argfile data "$PATCHED_PACKAGES_FILE" '. + {patchedPackages: $data}' "$TEMP_DIR/payload.json" > "$TEMP_DIR/payload_merged.json" && mv "$TEMP_DIR/payload_merged.json" "$TEMP_DIR/payload.json"
else
  echo "Patched packages file not found or empty. Defaulting to empty array."
  jq '. + {patchedPackages: []}' "$TEMP_DIR/payload.json" > "$TEMP_DIR/payload_merged.json" && mv "$TEMP_DIR/payload_merged.json" "$TEMP_DIR/payload.json"
fi

# Merge test status if file exists and is not empty
if [ -f "$TEST_STATUS_FILE" ] && [ -s "$TEST_STATUS_FILE" ]; then
  echo "Merging test status data from $TEST_STATUS_FILE"
  jq --argfile data "$TEST_STATUS_FILE" '. + {testStatus: $data}' "$TEMP_DIR/payload.json" > "$TEMP_DIR/payload_merged.json" && mv "$TEMP_DIR/payload_merged.json" "$TEMP_DIR/payload.json"
else
  echo "Test status file not found or empty. Defaulting to null."
  jq '. + {testStatus: null}' "$TEMP_DIR/payload.json" > "$TEMP_DIR/payload_merged.json" && mv "$TEMP_DIR/payload_merged.json" "$TEMP_DIR/payload.json"
fi

PAYLOAD_JSON=$(cat "$TEMP_DIR/payload.json")

echo "Constructed Notification Payload:"
echo "$PAYLOAD_JSON" | jq . # Pretty print JSON

# --- Call Alerter ---
# Determine if the payload is effectively empty (only contains default/N/A values and empty arrays/nulls)
IS_EMPTY_PAYLOAD=true
# Check if any of the key data arrays/objects are non-empty/non-null
# Custom message can also trigger a send if added later.
if jq -e '(.slowEndpoints | length > 0) or (.patchedPackages | length > 0) or (.testStatus != null and (.testStatus | keys | length) > 0)' "$TEMP_DIR/payload.json" > /dev/null; then
  IS_EMPTY_PAYLOAD=false
fi

if [ "$IS_EMPTY_PAYLOAD" = true ]; then
  echo "Payload is effectively empty (contains only default commit link and/or empty data fields). Skipping notification."
elif [ -n "${ALERT_WEBHOOK_URL}" ]; then
  echo "ALERT_WEBHOOK_URL is set. Attempting to send notification..."
  # This assumes monitoring/src/send-alert-cli.ts and its dependencies (alerter.ts, logger.ts)
  # are compiled to JavaScript in ./monitoring/dist/ by a preceding build step.
  # Example: tsc --project monitoring/tsconfig.json (if you have a tsconfig for this)
  # Or: tsc monitoring/src/alerter.ts monitoring/src/logger.ts monitoring/src/send-alert-cli.ts --outDir monitoring/dist/ --module commonjs (simplified)
  CLI_SCRIPT_PATH="./monitoring/dist/send-alert-cli.js"
  if [ -f "$CLI_SCRIPT_PATH" ]; then
    node "$CLI_SCRIPT_PATH" "$PAYLOAD_JSON"
    echo "Notification attempt finished."
  else
    echo "Error: Alerter CLI script not found at $CLI_SCRIPT_PATH. Ensure it has been compiled."
    # As a fallback, try to use ts-node if project setup supports it and node fails.
    # This is less ideal for production scripts but can be useful in some CI/dev setups.
    TS_CLI_SCRIPT_PATH="./monitoring/src/send-alert-cli.ts"
    if command -v ts-node &> /dev/null && [ -f "$TS_CLI_SCRIPT_PATH" ]; then
      echo "Attempting fallback with ts-node..."
      ts-node "$TS_CLI_SCRIPT_PATH" "$PAYLOAD_JSON"
      echo "ts-node notification attempt finished."
    else
      echo "ts-node not found or .ts script missing. Cannot send notification."
    fi
  fi
else
  echo "ALERT_WEBHOOK_URL is not set. Skipping notification."
fi

# --- Cleanup ---
# Consider cleaning up $TEMP_DIR if it's no longer needed, e.g.
# rm -rf "$TEMP_DIR"
# Be cautious with rm -rf, ensure $TEMP_DIR is correctly set.

echo "gather-notification-data.sh finished."
