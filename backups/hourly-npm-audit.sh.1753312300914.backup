#!/bin/bash
# Runs npm outdated, npm update, npm audit and fixes critical vulnerabilities.
# Logs actions, commits changes to a new branch, and optionally sends a webhook notification.

set -euo pipefail

LOG_DIR="$(dirname "$0")/../logs/security"
LOG_FILE="$LOG_DIR/hourly-fix.log"
WEBHOOK_URL="${WEBHOOK_URL:-}" # Use environment variable or default to empty

mkdir -p "$LOG_DIR"
touch "$LOG_FILE" # Ensure log file exists

echo "=============================================" >> "$LOG_FILE"
echo "[$(date)] Starting hourly dependency check and audit" >> "$LOG_FILE"
echo "=============================================" >> "$LOG_FILE"

# 1. Git Configuration
echo "[$(date)] Configuring git user..." >> "$LOG_FILE"
git config user.name "Automated Dependency Updater"
git config user.email "devops@example.com"
echo "[$(date)] Git user configured." >> "$LOG_FILE"

# 2. NPM Outdated and Update
echo "[$(date)] Running npm outdated --json..." >> "$LOG_FILE"
NPM_OUTDATED_JSON=$(npm outdated --json || true)
echo "[$(date)] Raw npm outdated JSON:" >> "$LOG_FILE"
echo "$NPM_OUTDATED_JSON" >> "$LOG_FILE"

UPDATED_PACKAGES=()
PACKAGES_TO_UPDATE=$(echo "$NPM_OUTDATED_JSON" | jq -r 'keys[] as $pkg | .[$pkg] | select(.current != .wanted and (.type == "patch" or .type == "minor")) | "\($pkg)@\(.wanted)"')

if [ -n "$PACKAGES_TO_UPDATE" ]; then
    echo "[$(date)] Identified packages for safe updates:" >> "$LOG_FILE"
    echo "$PACKAGES_TO_UPDATE" >> "$LOG_FILE"
    OLD_IFS=$IFS
    IFS=$'\n'
    for pkg_spec in $PACKAGES_TO_UPDATE; do
        echo "[$(date)] Updating $pkg_spec..." >> "$LOG_FILE"
        NPM_UPDATE_OUTPUT=$(npm update "$pkg_spec" 2>&1)
        NPM_UPDATE_EXIT_CODE=$?
        echo "$NPM_UPDATE_OUTPUT" >> "$LOG_FILE"
        if [ $NPM_UPDATE_EXIT_CODE -eq 0 ]; then
            UPDATED_PACKAGES+=("$pkg_spec")
            echo "[$(date)] Successfully updated $pkg_spec." >> "$LOG_FILE"
        else
            echo "[$(date)] WARNING: Failed to update $pkg_spec. Exit code: $NPM_UPDATE_EXIT_CODE" >> "$LOG_FILE"
        fi
    done
    IFS=$OLD_IFS
else
    echo "[$(date)] No safe package updates found based on 'wanted' version and type (patch/minor)." >> "$LOG_FILE"
fi

# 3. NPM Audit and Fix
echo "[$(date)] Running npm audit --json..." >> "$LOG_FILE"
NPM_AUDIT_JSON=$(npm audit --json || true) # Allow failure if no vulns or other issues
echo "[$(date)] Raw npm audit JSON:" >> "$LOG_FILE"
echo "$NPM_AUDIT_JSON" >> "$LOG_FILE"

# Extract vulnerability counts, defaulting to 0 if null or not found
TOTAL_VULNS=$(echo "$NPM_AUDIT_JSON" | jq '.metadata.vulnerabilities.total // 0')
CRITICAL_VULNS=$(echo "$NPM_AUDIT_JSON" | jq '.metadata.vulnerabilities.critical // 0')
AUDIT_FIX_PERFORMED="false"

echo "[$(date)] Total vulnerabilities: $TOTAL_VULNS" >> "$LOG_FILE"
echo "[$(date)] Critical vulnerabilities: $CRITICAL_VULNS" >> "$LOG_FILE"

if [ "$CRITICAL_VULNS" -gt 0 ]; then
    echo "[$(date)] Critical vulnerabilities detected: $CRITICAL_VULNS. Running npm audit fix --force..." >> "$LOG_FILE"
    NPM_AUDIT_FIX_OUTPUT=$(npm audit fix --force 2>&1)
    NPM_AUDIT_FIX_EXIT_CODE=$?
    echo "$NPM_AUDIT_FIX_OUTPUT" >> "$LOG_FILE"
    if [ $NPM_AUDIT_FIX_EXIT_CODE -eq 0 ]; then
        AUDIT_FIX_PERFORMED="true"
        echo "[$(date)] npm audit fix --force completed successfully." >> "$LOG_FILE"
    else
        # Note: npm audit fix can exit non-zero even if it fixes some things,
        # especially if --force is needed or if it cannot fix all.
        # We'll record it was run, but the commit will depend on file changes.
        AUDIT_FIX_PERFORMED="true (exit code $NPM_AUDIT_FIX_EXIT_CODE)"
        echo "[$(date)] npm audit fix --force completed with exit code $NPM_AUDIT_FIX_EXIT_CODE." >> "$LOG_FILE"
    fi
else
    echo "[$(date)] No critical vulnerabilities detected that require 'npm audit fix --force'." >> "$LOG_FILE"
fi

# 4. Commit Changes
BRANCH_NAME=""
COMMIT_PERFORMED="false"
echo "[$(date)] Checking for changes in package.json or package-lock.json..." >> "$LOG_FILE"

# Check if package files have changed.
# `git status --porcelain` is more reliable than `git diff --quiet` across different git versions and configurations.
if git status --porcelain package.json package-lock.json | grep -E '^\s?[MADRCU]'; then
    echo "[$(date)] Changes detected in package.json or package-lock.json." >> "$LOG_FILE"
    BRANCH_NAME="maintenance/auto-deps-$(date +'%Y-%m-%d-%H-%M-%S')"
    echo "[$(date)] Creating and switching to new branch: $BRANCH_NAME" >> "$LOG_FILE"
    git checkout -b "$BRANCH_NAME" >> "$LOG_FILE" 2>&1

    echo "[$(date)] Staging package.json and package-lock.json..." >> "$LOG_FILE"
    git add package.json package-lock.json >> "$LOG_FILE" 2>&1

    COMMIT_MESSAGE_SUBJECT="Automated dependency updates and audit fixes"
    COMMIT_MESSAGE_BODY="Summary of actions:
- Packages updated by 'npm update': ${UPDATED_PACKAGES[*]:-"None"}
- Total vulnerabilities found by 'npm audit': $TOTAL_VULNS
- Critical vulnerabilities found: $CRITICAL_VULNS
- 'npm audit fix --force' executed: $AUDIT_FIX_PERFORMED
"
    echo "[$(date)] Committing changes..." >> "$LOG_FILE"
    echo "Commit message subject: $COMMIT_MESSAGE_SUBJECT" >> "$LOG_FILE"
    echo "Commit message body: $COMMIT_MESSAGE_BODY" >> "$LOG_FILE"
    # Use printf for the body to handle multi-line commit messages properly
    git commit -m "$COMMIT_MESSAGE_SUBJECT" -m "$(printf "%s" "$COMMIT_MESSAGE_BODY")" >> "$LOG_FILE" 2>&1

    echo "[$(date)] Pushing branch $BRANCH_NAME to origin..." >> "$LOG_FILE"
    git push origin "$BRANCH_NAME" >> "$LOG_FILE" 2>&1
    COMMIT_PERFORMED="true"
    echo "[$(date)] Changes committed and pushed to branch $BRANCH_NAME." >> "$LOG_FILE"
else
    echo "[$(date)] No changes to package.json or package-lock.json. No commit needed." >> "$LOG_FILE"
fi

# 5. Reporting
REPORT_MESSAGE="Hourly Dependency Check Report:
- Updated Packages ('npm update'): ${UPDATED_PACKAGES[*]:-"None"}
- Total Vulnerabilities ('npm audit'): $TOTAL_VULNS
- Critical Vulnerabilities: $CRITICAL_VULNS
- 'npm audit fix --force' Executed: $AUDIT_FIX_PERFORMED
"
if [ "$COMMIT_PERFORMED" = "true" ]; then
    REPORT_MESSAGE+="- Changes committed to branch: $BRANCH_NAME"
else
    REPORT_MESSAGE+="- No changes committed."
fi

echo "[$(date)] Preparing to send webhook notification..." >> "$LOG_FILE"
echo "[$(date)] Report message:" >> "$LOG_FILE"
echo "$REPORT_MESSAGE" >> "$LOG_FILE"

if [ -n "$WEBHOOK_URL" ]; then
    # Construct JSON payload for webhook
    # jq arguments: create (--arg) a string variable, then build an object.
    # The message is passed as a whole string.
    PAYLOAD=$(jq -n \
        --arg msg "$REPORT_MESSAGE" \
        --argjson updatedPackages "$(echo "${UPDATED_PACKAGES[*]:-"None"}" | jq -R . | jq -s .)" \
        --argjson totalVulnerabilities "$TOTAL_VULNS" \
        --argjson criticalVulnerabilities "$CRITICAL_VULNS" \
        --arg auditFixPerformed "$AUDIT_FIX_PERFORMED" \
        --arg commitPerformed "$COMMIT_PERFORMED" \
        --arg branchName "${BRANCH_NAME:-"N/A"}" \
        '{
            message: $msg,
            details: {
                updatedPackages: $updatedPackages,
                totalVulnerabilities: $totalVulnerabilities,
                criticalVulnerabilities: $criticalVulnerabilities,
                auditFixPerformed: $auditFixPerformed,
                commitPerformed: $commitPerformed,
                branchName: $branchName
            }
        }')

    echo "[$(date)] Sending webhook notification to $WEBHOOK_URL..." >> "$LOG_FILE"
    echo "[$(date)] Payload:" >> "$LOG_FILE"
    echo "$PAYLOAD" >> "$LOG_FILE"
    curl -fsS -X POST -H "Content-Type: application/json" -d "$PAYLOAD" "$WEBHOOK_URL" >> "$LOG_FILE" 2>&1
    CURL_EXIT_CODE=$?
    if [ $CURL_EXIT_CODE -eq 0 ]; then
        echo "[$(date)] Webhook notification sent successfully." >> "$LOG_FILE"
    else
        echo "[$(date)] WARNING: Webhook notification failed with exit code $CURL_EXIT_CODE." >> "$LOG_FILE"
    fi
else
    echo "[$(date)] WEBHOOK_URL not set. Skipping notification." >> "$LOG_FILE"
fi

echo "[$(date)] Hourly dependency check and audit finished." >> "$LOG_FILE"
echo "=============================================" >> "$LOG_FILE"

exit 0
