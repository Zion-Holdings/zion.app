#!/usr/bin/env bash
# commit-and-push-main.sh - Commit changes and push to main with retry logic
set -euo pipefail

COMMIT_MSG="${1:-chore: automated update}"
BRANCH="${2:-main}"

git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

if git diff --quiet && git diff --cached --quiet; then
  echo "No changes to commit"
  exit 0
fi

git add -A
git commit -m "$COMMIT_MSG"

MAX_RETRIES=3
RETRY_DELAY=10

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
