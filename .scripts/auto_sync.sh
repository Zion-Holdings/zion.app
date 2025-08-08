#!/usr/bin/env bash
set -euo pipefail
REPO_DIR="/workspace"
LOG_DIR="/workspace/logs"
LOG_FILE="$LOG_DIR/auto_sync.log"
BRANCH_TO_SYNC="main"

mkdir -p "$LOG_DIR"
cd "$REPO_DIR"

{
  date '+%Y-%m-%d %H:%M:%S' | sed 's/^/[AUTO_SYNC] /'
  echo "[AUTO_SYNC] Starting repo sync in $REPO_DIR"

  # Ensure we have latest refs
  git fetch --all --prune

  # Stash local changes if any
  if ! git diff --quiet || ! git diff --cached --quiet; then
    git stash push -u -m "auto_sync_$(date +%s)" || true
    echo "[AUTO_SYNC] Stashed local changes"
  fi

  # Switch to branch to sync
  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
  if [ "$CURRENT_BRANCH" != "$BRANCH_TO_SYNC" ]; then
    git checkout "$BRANCH_TO_SYNC" || git checkout -b "$BRANCH_TO_SYNC" origin/"$BRANCH_TO_SYNC" || true
  fi

  # Pull latest
  git pull --rebase --autostash origin "$BRANCH_TO_SYNC" || git pull origin "$BRANCH_TO_SYNC" || true

  # If stashes exist from our auto_sync marker, try to pop them
  if git stash list | grep -q auto_sync_; then
    git stash list | awk -F: '/auto_sync_/ {print $1}' | tac | while read -r STASH_REF; do
      git stash pop "$STASH_REF" || true
    done
  fi

  # Detect changes and push
  if ! git diff --quiet || ! git diff --cached --quiet; then
    git add -A
    git commit -m "chore(sync): automated repo sync"
  fi

  # Push current branch
  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
  git push origin "$CURRENT_BRANCH" || true

  echo "[AUTO_SYNC] Completed repo sync"
} >> "$LOG_FILE" 2>&1
