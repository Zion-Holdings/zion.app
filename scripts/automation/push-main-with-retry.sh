#!/usr/bin/env bash
# push-main-with-retry.sh - Push to main with retry logic
set -euo pipefail

BRANCH="${1:-main}"
MAX_RETRIES=3
RETRY_DELAY=10

git config user.name "github-actions[bot]" 2>/dev/null || true
git config user.email "41898282+github-actions[bot]@users.noreply.github.com" 2>/dev/null || true

for i in $(seq 1 $MAX_RETRIES); do
  echo "Push attempt $i of $MAX_RETRIES..."
  if git push origin "$BRANCH"; then
    echo "Push successful!"
    exit 0
  else
    echo "Push failed, retrying in $RETRY_DELAY seconds..."
    sleep $RETRY_DELAY
    git fetch origin "$BRANCH" || true
    git rebase "origin/$BRANCH" || true
  fi
done

echo "Push failed after $MAX_RETRIES attempts"
exit 1
