#!/bin/bash
# Hourly audit script with npm audit and optional fix for critical vulnerabilities.

LOG_DIR="logs/security"
LOG_FILE_PATH="$LOG_DIR/hourly-fix.log"
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

# Check for WEBHOOK_URL
if [ -z "$WEBHOOK_URL" ]; then
    log_message "Warning: WEBHOOK_URL is not set. Skipping notification."
fi

# Prerequisite check for jq
if ! command -v jq >/dev/null 2>&1; then
  log_message "jq is not installed. Please install jq to parse audit results and send notifications. Exiting."
  # If WEBHOOK_URL was set, we might want to send a basic notification about jq missing.
  # For now, exiting is consistent with previous step.
  if [ -n "$WEBHOOK_URL" ]; then
      curl -X POST -H "Content-Type: application/json" -d '{"summary":"Error: jq is not installed in audit script. Cannot proceed or send detailed notification."}' "$WEBHOOK_URL" --silent > /dev/null 2>&1
  fi
  exit 1
fi

# Prerequisite check for curl (if webhook is to be used)
if [ -n "$WEBHOOK_URL" ] && ! command -v curl >/dev/null 2>&1; then
  log_message "curl is not installed, but WEBHOOK_URL is set. Cannot send notification. Exiting."
  # No easy way to notify without curl itself.
  exit 1
fi

# Initial logging
log_message "Starting hourly audit script."

# --- Git and Branching Setup ---
ORIGINAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)
AUTO_PATCH_BRANCH="auto/patch-critical-$(date +%s)"
MAIN_DEV_BRANCH_ENV_VAR="${MAIN_DEV_BRANCH_ENV_VAR:-main}" # From workflow, defaults to 'main'

GIT_AUTHOR_NAME_TO_USE="${GIT_AUTHOR_NAME:-GitHub Actions Bot}"
GIT_AUTHOR_EMAIL_TO_USE="${GIT_AUTHOR_EMAIL:-actions-bot@users.noreply.github.com}"

log_message "Original branch: $ORIGINAL_BRANCH"
log_message "Auto-patch branch will be: $AUTO_PATCH_BRANCH"
log_message "Targeting PRs to: $MAIN_DEV_BRANCH_ENV_VAR"
log_message "Using Git Author: $GIT_AUTHOR_NAME_TO_USE <$GIT_AUTHOR_EMAIL_TO_USE>"

# Configure git user for this script's operations
git config user.name "$GIT_AUTHOR_NAME_TO_USE"
git config user.email "$GIT_AUTHOR_EMAIL_TO_USE"
# --- End Git and Branching Setup ---

# Execute npm audit --json
log_message "Running npm audit --json..."
# Important: Ensure npm commands are run where package.json and package-lock.json are located.
# Assuming this script is run from the project root or 'npm' can find them.
# Add `cd /path/to/your/project` here if necessary.
npm_audit_output=$(npm audit --json)
audit_exit_code=$?

# Initialize status variables for the webhook
status_message="Audit completed."
critical_fixed_attempted=false
patch_attempt_status="not_attempted" # new states: not_attempted, no_changes, tests_passed_pr_created, tests_failed_rolled_back, pr_creation_failed
pr_created_url=""
# critical_still_present_after_fix=false # This would require a re-run of audit

# Initialize vulnerability counts for summary
critical_count=0
high_count=0
moderate_count=0
low_count=0
info_count=0

if [ "$audit_exit_code" -eq 0 ]; then
    log_message "npm audit found no vulnerabilities."
    status_message="npm audit found no vulnerabilities."
    # Vulnerability counts remain 0
elif echo "$npm_audit_output" | jq -e . > /dev/null 2>&1; then
    log_message "npm audit found vulnerabilities. Exit code: $audit_exit_code. Parsing details..."

    critical_count=$(echo "$npm_audit_output" | jq '.metadata.vulnerabilities.critical // 0')
    high_count=$(echo "$npm_audit_output" | jq '.metadata.vulnerabilities.high // 0')
    moderate_count=$(echo "$npm_audit_output" | jq '.metadata.vulnerabilities.moderate // 0')
    low_count=$(echo "$npm_audit_output" | jq '.metadata.vulnerabilities.low // 0')
    info_count=$(echo "$npm_audit_output" | jq '.metadata.vulnerabilities.info // 0')

    log_message "Vulnerability summary: Critical: $critical_count, High: $high_count, Moderate: $moderate_count, Low: $low_count, Info: $info_count"
    status_message="Vulnerabilities found. Summary: C:$critical_count, H:$high_count, M:$moderate_count, L:$low_count, I:$info_count."

    if [ "$critical_count" -gt 0 ]; then
        log_message "Critical vulnerabilities found ($critical_count). Attempting to fix..."
        critical_fixed_attempted=true

        # Ensure working directory is clean before attempting fixes
        if ! git diff --quiet HEAD; then
            log_message "Working directory is not clean. Skipping auto-patch attempt for critical vulnerabilities."
            status_message="$status_message Critical vulnerabilities found, but working directory not clean. Auto-patch skipped."
            patch_attempt_status="skipped_dirty_workdir"
        else
            log_message "Working directory clean. Proceeding with 'npm audit fix --force'..."
            npm audit fix --force
            fix_exit_code=$?

            if [ "$fix_exit_code" -ne 0 ]; then
                log_message "Error running 'npm audit fix --force'. Exit code: $fix_exit_code. Not attempting commit."
                status_message="$status_message Critical fix attempt command 'npm audit fix --force' failed (exit code $fix_exit_code)."
                patch_attempt_status="fix_command_failed"
            # Check if package.json or package-lock.json changed
            elif git status --porcelain | grep -q -E 'package(-lock)?\.json$'; then
                log_message "'npm audit fix --force' modified package files. Proceeding with commit and test."

                git checkout -b "$AUTO_PATCH_BRANCH"
                log_message "Switched to new branch $AUTO_PATCH_BRANCH."

                git add package.json package-lock.json
                COMMIT_MSG="chore: auto-patch critical vulnerabilities

Applied npm audit fix --force."
                git commit -m "$COMMIT_MSG"
                log_message "Committed changes to $AUTO_PATCH_BRANCH."

                log_message "Running tests (npm test)..."
                if npm test; then
                    log_message "Tests PASSED for patched vulnerabilities on branch $AUTO_PATCH_BRANCH."
                    log_message "Pushing branch $AUTO_PATCH_BRANCH to origin..."
                    if git push origin "$AUTO_PATCH_BRANCH"; then
                        log_message "Branch $AUTO_PATCH_BRANCH pushed successfully."
                        if command -v gh >/dev/null 2>&1; then
                            PR_TITLE="Auto-Patch Critical Vulnerabilities ($AUTO_PATCH_BRANCH)"
                            PR_BODY="Critical vulnerabilities automatically patched by npm audit fix --force. Please review and merge.\n\nBranch: $AUTO_PATCH_BRANCH"
                            log_message "Attempting to create Pull Request using 'gh' CLI..."
                            # Ensure GITHUB_TOKEN has permissions for gh to create PR
                            # The GITHUB_TOKEN is passed via env from the workflow
                            created_pr_url=$(gh pr create --base "$MAIN_DEV_BRANCH_ENV_VAR" --head "$AUTO_PATCH_BRANCH" --title "$PR_TITLE" --body "$PR_BODY")
                            if [ $? -eq 0 ] && [ -n "$created_pr_url" ]; then
                                log_message "Pull Request created successfully: $created_pr_url"
                                status_message="$status_message Critical vulnerabilities patched, tests passed. PR created: $created_pr_url"
                                patch_attempt_status="tests_passed_pr_created"
                                pr_created_url="$created_pr_url"
                            else
                                log_message "Failed to create Pull Request using 'gh' CLI. Please check logs and gh authentication."
                                status_message="$status_message Critical vulnerabilities patched, tests passed, branch pushed. PR creation failed."
                                patch_attempt_status="pr_creation_failed"
                            fi
                        else
                            log_message "'gh' CLI not found. Cannot create Pull Request automatically. Branch $AUTO_PATCH_BRANCH was pushed."
                            status_message="$status_message Critical vulnerabilities patched, tests passed, branch pushed. 'gh' CLI not found for PR creation."
                            patch_attempt_status="gh_cli_not_found"
                        fi
                    else
                        log_message "Failed to push branch $AUTO_PATCH_BRANCH. PR not created."
                        status_message="$status_message Critical vulnerabilities patched, tests passed. Failed to push branch."
                        patch_attempt_status="push_failed"
                        # Optional: attempt to clean up local branch? Or leave for manual inspection.
                        # For now, leave the local branch.
                    fi
                    log_message "Switching back to $ORIGINAL_BRANCH."
                    git checkout "$ORIGINAL_BRANCH"
                else
                    log_message "Tests FAILED for patched vulnerabilities on branch $AUTO_PATCH_BRANCH."
                    status_message="$status_message Critical vulnerability patch attempt failed tests."
                    patch_attempt_status="tests_failed_rolled_back"

                    log_message "Switching back to $ORIGINAL_BRANCH and cleaning up changes from 'npm audit fix --force'."
                    git checkout "$ORIGINAL_BRANCH"
                    git reset --hard HEAD # Discard changes from npm audit fix

                    log_message "Deleting local branch $AUTO_PATCH_BRANCH."
                    git branch -D "$AUTO_PATCH_BRANCH"
                    log_message "Rollback complete."
                fi
            else
                log_message "'npm audit fix --force' made no changes to package.json or package-lock.json."
                status_message="$status_message Critical vulnerabilities found, but 'npm audit fix --force' made no relevant changes."
                patch_attempt_status="no_changes_by_fix"
            fi
        fi
    else
        log_message "No critical vulnerabilities found. No automated fix applied."
        status_message="$status_message No critical vulnerabilities, no automated fix applied."
        patch_attempt_status="not_applicable_no_critical" # Or keep as "not_attempted"
    fi
else
    log_message "Error running npm audit or parsing its output. Exit code: $audit_exit_code."
    log_message "npm audit output: $npm_audit_output" # Log the raw output if it's not JSON or if npm audit failed
    status_message="Error running npm audit (exit code $audit_exit_code) or parsing its output. Check logs: $LOG_FILE_PATH"
    # Vulnerability counts remain 0 as we couldn't parse them.
fi

log_message "Hourly audit script main processing completed."

# Prepare final webhook payload
if [ -n "$WEBHOOK_URL" ]; then
    # Ensure counts are numbers for JSON
    json_payload=$(jq -n \
        --arg msg "$status_message" \
        --argjson crit_count "${critical_count:-0}" \
        --argjson high_count "${high_count:-0}" \
        --argjson mod_count "${moderate_count:-0}" \
        --argjson low_count "${low_count:-0}" \
        --argjson info_count "${info_count:-0}" \
        --argjson crit_fix_attempt "$critical_fixed_attempted" \
        --arg patch_status "$patch_attempt_status" \
        --arg pr_url "$pr_created_url" \
        '{summary: $msg, vulnerabilities: {critical: $crit_count, high: $high_count, moderate: $mod_count, low: $low_count, info: $info_count}, critical_fix_attempted: $crit_fix_attempt, patch_attempt_details: {status: $patch_status, pr_url: $pr_url} }')

    log_message "Sending webhook notification..."
    log_message "Payload: $json_payload" # Be mindful of logging sensitive URLs if they were part of payload by mistake

    # Send the webhook notification and capture HTTP status code
    # Using a temp file for curl output to separate stdout from http_code
    curl_output_file=$(mktemp)
    http_status_code=$(curl -X POST -H "Content-Type: application/json" -d "$json_payload" "$WEBHOOK_URL" -w "%{http_code}" -s -o "$curl_output_file")
    curl_response_body=$(cat "$curl_output_file")
    rm "$curl_output_file"

    if [ "$http_status_code" -ge 200 ] && [ "$http_status_code" -lt 300 ]; then # Check for 2xx success codes
        log_message "Webhook notification sent successfully (HTTP $http_status_code)."
    else
        log_message "Error sending webhook notification. HTTP Status: $http_status_code."
        log_message "Curl response body: $curl_response_body"
    fi
else
    log_message "WEBHOOK_URL not set. Skipping notification."
fi

log_message "Hourly audit finished."
exit 0 # Script itself finished, regardless of audit outcome or webhook success. Errors are logged.
