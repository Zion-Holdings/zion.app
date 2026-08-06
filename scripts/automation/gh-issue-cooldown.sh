#!/usr/bin/env bash
# gh-issue-cooldown.sh - Cooldown logic for GitHub issue creation
# Usage: bash gh-issue-cooldown.sh <fingerprint> <cooldown_hours>

DEFAULT_COOLDOWN_HOURS="${2:-24}"
FINGERPRINT="${1:-autonomous}"

# Check for existing open issue with this fingerprint
EXISTING=$(gh issue list --state all --label "$FINGERPRINT" --json number,updatedAt --limit 1 2>/dev/null)

if [ -z "$EXISTING" ] || [ "$EXISTING" = "[]" ]; then
  echo "0"  # No existing issue, allow creation
  exit 0
fi

LAST_UPDATED=$(echo "$EXISTING" | jq -r '.[0].updatedAt')
ISSUE_NUMBER=$(echo "$EXISTING" | jq -r '.[0].number')

if [ -z "$LAST_UPDATED" ] || [ "$LAST_UPDATED" = "null" ]; then
  echo "0"
  exit 0
fi

# Calculate hours since last update
LAST_TS=$(date -d "$LAST_UPDATED" +%s 2>/dev/null || date -j -f "%Y-%m-%dT%H:%M:%SZ" "$LAST_UPDATED" +%s 2>/dev/null)
NOW_TS=$(date +%s)
HOURS_DIFF=$(( (NOW_TS - LAST_TS) / 3600 ))

if [ "$HOURS_DIFF" -ge "$DEFAULT_COOLDOWN_HOURS" ]; then
  echo "0"  # Cooldown passed
  exit 0
else
  echo "Cooldown active: $HOURS_DIFF hours since last update (need $DEFAULT_COOLDOWN_HOURS)" >&2
  echo "1"  # Still in cooldown
  exit 1
fi
