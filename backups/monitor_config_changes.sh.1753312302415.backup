#!/bin/bash

# Configuration
CONFIG_FILE="scripts/config_integrity_check.txt"
LOG_DIR="logs/security"
LOG_FILE_PATH="$LOG_DIR/config_integrity.log"
CHECKSUM_FILE="$LOG_DIR/checksums.txt" # Stores known checksums
WEBHOOK_URL="${YOUR_WEBHOOK_URL_ENV_VAR:-}" # Populate from env var or leave empty

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Function to log messages
log_message() {
  local message="$1"
  local timestamp
  timestamp=$(date +"%Y-%m-%d %H:%M:%S")
  local log_entry="[$timestamp] $message"

  echo "$log_entry" >> "$LOG_FILE_PATH"
  echo "$log_entry" # Also print to stdout for CRON job logging
}

# Function to send webhook notification
send_notification() {
  local event_summary="$1" # e.g., "File Modified", "File Reverted"
  local file_path="$2"
  local details="$3"       # e.g., "Old checksum: ..., New checksum: ..." or "Revert successful"

  if [ -z "$WEBHOOK_URL" ]; then
    # log_message "WEBHOOK_URL not set. Skipping notification for $file_path." # Can be too verbose
    return
  fi

  # Prerequisite check for jq (only if not already checked globally, but good for a standalone function)
  if ! command -v jq >/dev/null 2>&1; then
    log_message "jq is not installed. Cannot send detailed notification for $file_path."
    # Send a basic text notification if curl is available
    if command -v curl >/dev/null 2>&1; then
        curl -X POST -H "Content-Type: application/json" -d "{\"text\":\"Config Monitor Error: jq not found. Event: $event_summary for $file_path. Details: $details\"}" "$WEBHOOK_URL" --silent > /dev/null 2>&1
    fi
    return
  fi

  local json_payload
  json_payload=$(jq -n \
    --arg event_summary "$event_summary" \
    --arg file_path "$file_path" \
    --arg details "$details" \
    '{script: "monitor_config_changes.sh", event: $event_summary, file: $file_path, details: $details}')

  log_message "Sending webhook notification for $file_path: $event_summary"
  # log_message "Payload: $json_payload" # Be mindful of logging sensitive URLs

  local curl_output_file
  curl_output_file=$(mktemp)
  local http_status_code
  http_status_code=$(curl -X POST -H "Content-Type: application/json" -d "$json_payload" "$WEBHOOK_URL" -w "%{http_code}" -s -o "$curl_output_file")
  local curl_response_body
  curl_response_body=$(cat "$curl_output_file")
  rm "$curl_output_file"

  if [ "$http_status_code" -ge 200 ] && [ "$http_status_code" -lt 300 ]; then
    log_message "Webhook for $file_path sent successfully (HTTP $http_status_code)."
  else
    log_message "Error sending webhook for $file_path. HTTP Status: $http_status_code. Response: $curl_response_body"
  fi
}

# --- Prerequisite Checks ---
log_message "Starting configuration integrity monitor."

if [ -n "$WEBHOOK_URL" ]; then
    if ! command -v curl >/dev/null 2>&1; then
      log_message "Error: curl is not installed, but WEBHOOK_URL is set. Cannot send notifications. Exiting."
      exit 1
    fi
    if ! command -v jq >/dev/null 2>&1; then
      log_message "Error: jq is not installed, but WEBHOOK_URL is set. Detailed notifications will fail. Attempting basic notifications. Please install jq."
      # Non-fatal, send_notification has a fallback if jq is missing.
    fi
fi

if ! command -v sha256sum >/dev/null 2>&1; then
  log_message "Error: sha256sum command not found. Exiting."
  send_notification "Script Error" "N/A" "sha256sum command not found. Script cannot run."
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  log_message "Error: git command not found. Reverting changes will not be possible. Exiting."
  send_notification "Script Error" "N/A" "git command not found. Script cannot run as revert is a key feature."
  exit 1
fi

if [ ! -f "$CONFIG_FILE" ]; then
  log_message "Error: Configuration file $CONFIG_FILE not found. Exiting."
  send_notification "Script Error" "$CONFIG_FILE" "Configuration file for monitor script not found."
  exit 1
fi

# --- Main Processing Logic ---
# Create checksum file if it doesn't exist
touch "$CHECKSUM_FILE"

CHECKSUM_FILE_TMP="$CHECKSUM_FILE.tmp"
# Ensure temp file is clean or use `>` to overwrite
> "$CHECKSUM_FILE_TMP"

# Read each file path from the configuration file
while IFS= read -r target_file_path || [ -n "$target_file_path" ]; do
  # Skip empty lines or lines starting with #
  if [ -z "$target_file_path" ] || [[ "$target_file_path" == \#* ]]; then
    continue
  fi

  log_message "Processing: $target_file_path"

  if [ ! -f "$target_file_path" ]; then
    log_message "Warning: Target file '$target_file_path' not found."
    stored_checksum_line=$(grep " $target_file_path$" "$CHECKSUM_FILE")
    if [ -n "$stored_checksum_line" ]; then
        log_message "Monitored file '$target_file_path' has been deleted."
        if git ls-files --error-unmatch "$target_file_path" >/dev/null 2>&1; then
          log_message "Attempting to restore '$target_file_path' from git."
          git checkout HEAD -- "$target_file_path"
          restore_exit_code=$?
          if [ "$restore_exit_code" -eq 0 ]; then
            restored_checksum=$(sha256sum "$target_file_path" | awk '{print $1}')
            log_message "File '$target_file_path' restored. Checksum is now '$restored_checksum'."
            echo "$restored_checksum $target_file_path" >> "$CHECKSUM_FILE_TMP"
            send_notification "File Deleted & Restored" "$target_file_path" "File restored from git. New checksum: $restored_checksum."
            continue
          else
            log_message "ERROR: Failed to restore '$target_file_path' (git checkout exit code: $restore_exit_code)."
            send_notification "File Deleted & Restore FAILED" "$target_file_path" "File missing and restore attempt failed (code: $restore_exit_code)."
            # Removal from tracking - don't add to new checksum file
            continue
          fi
        else
          send_notification "File Deleted" "$target_file_path" "File was previously tracked but is now missing."
        fi
    fi
    # Do not add to CHECKSUM_FILE_TMP, effectively removing it
    continue
  fi

  current_checksum=$(sha256sum "$target_file_path" | awk '{print $1}')
  # Grep for a line ending with space and then the filename to avoid partial matches
  # e.g. "file.txt" vs "otherfile.txt"
  stored_checksum_line=$(grep " $target_file_path$" "$CHECKSUM_FILE")
  stored_checksum=""
  if [ -n "$stored_checksum_line" ]; then
    stored_checksum=$(echo "$stored_checksum_line" | awk '{print $1}')
  fi

  if [ -z "$stored_checksum" ]; then
    log_message "Tracking new file '$target_file_path' with checksum '$current_checksum'."
    echo "$current_checksum $target_file_path" >> "$CHECKSUM_FILE_TMP"
    send_notification "New File Tracked" "$target_file_path" "Checksum: $current_checksum"
  elif [ "$current_checksum" != "$stored_checksum" ]; then
    log_message "CHANGE DETECTED: File '$target_file_path' has been modified. Old: '$stored_checksum', New: '$current_checksum'."

    # Attempt to revert using Git
    # Check if file is tracked by Git (stderr is redirected to /dev/null)
    if git ls-files --error-unmatch "$target_file_path" >/dev/null 2>&1; then
      log_message "Attempting to revert '$target_file_path' to HEAD."
      git checkout HEAD -- "$target_file_path"
      revert_exit_code=$?
      if [ "$revert_exit_code" -eq 0 ]; then
        reverted_checksum=$(sha256sum "$target_file_path" | awk '{print $1}')
        log_message "File '$target_file_path' reverted. Checksum is now '$reverted_checksum'."
        echo "$reverted_checksum $target_file_path" >> "$CHECKSUM_FILE_TMP"
        send_notification "File Modified & Reverted" "$target_file_path" "Change detected. Successfully reverted to HEAD. New checksum: $reverted_checksum."
      else
        log_message "ERROR: Failed to revert '$target_file_path' (git checkout exit code: $revert_exit_code)."
        echo "$current_checksum $target_file_path" >> "$CHECKSUM_FILE_TMP" # Keep current checksum as revert failed
        send_notification "File Modified & Revert FAILED" "$target_file_path" "Change detected. Git revert FAILED (code: $revert_exit_code). Current (modified) checksum: $current_checksum."
      fi
    else
      log_message "WARNING: '$target_file_path' is not tracked by Git. Cannot revert automatically."
      echo "$current_checksum $target_file_path" >> "$CHECKSUM_FILE_TMP" # Keep current checksum
      send_notification "File Modified & Not Tracked by Git" "$target_file_path" "Change detected. File is not in Git. Cannot revert. Current (modified) checksum: $current_checksum."
    fi
  else
    # log_message "File '$target_file_path' is unchanged." # Can be too verbose
    echo "$current_checksum $target_file_path" >> "$CHECKSUM_FILE_TMP" # Keep it in the new checksum file
  fi
done < "$CONFIG_FILE"

# Atomically update the checksum file
mv "$CHECKSUM_FILE_TMP" "$CHECKSUM_FILE"

log_message "Configuration integrity monitor finished."
exit 0
