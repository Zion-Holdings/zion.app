#!/usr/bin/env bash
set -euo pipefail
REPO_DIR="/workspace"
LOG_DIR="/workspace/logs"
LOG_FILE="$LOG_DIR/auto_commit_push.log"
DEFAULT_BRANCH="main"

mkdir -p "$LOG_DIR"
cd "$REPO_DIR"

{
  date '+%Y-%m-%d %H:%M:%S' | sed 's/^/[AUTO_COMMIT] /'

  # Configure git user if not set
  if ! git config user.name >/dev/null; then
    git config user.name "cursor-bot"
  fi
  if ! git config user.email >/dev/null; then
    git config user.email "cursor-bot@example.com"
  fi

  # Determine branch to push
  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
  BRANCH_TO_PUSH="$CURRENT_BRANCH"

  # Stage changes
  if ! git diff --quiet || ! git diff --cached --quiet; then
    git add -A
    COMMIT_MESSAGE="chore(sync): automated commit $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MESSAGE" || true
  fi

  # Try to rebase on origin if branch exists
  git fetch origin "$BRANCH_TO_PUSH" || true
  if git show-ref --verify --quiet refs/remotes/origin/"$BRANCH_TO_PUSH"; then
    git pull --rebase --autostash origin "$BRANCH_TO_PUSH" || true
  fi

  git push -u origin "$BRANCH_TO_PUSH" || true
} >> "$LOG_FILE" 2>&1
