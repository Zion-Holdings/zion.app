#!/bin/bash
# commit-and-push-main.sh — Commit and push to main branch
# Usage: bash scripts/automation/commit-and-push-main.sh "<commit message>"
set -euo pipefail

COMMIT_MSG="${1:-chore: autonomous commit}"
BRANCH="${2:-main}"

cd "$(dirname "$0")/../.."

git config user.name "github-actions[bot]" 2>/dev/null || true
git config user.email "github-actions[bot]@users.noreply.github.com" 2>/dev/null || true

# Check if there are changes to commit
git add -A

if git diff --staged --quiet; then
  echo "No changes to commit."
  exit 0
fi

echo "Committing: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "Pushing to $BRANCH..."
git push origin "HEAD:$BRANCH"

echo "✅ Committed and pushed successfully."
