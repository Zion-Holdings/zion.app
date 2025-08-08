#!/usr/bin/env bash
set -euo pipefail
REPO_DIR="/workspace"
LOG_DIR="/workspace/logs"
LOG_FILE="$LOG_DIR/auto_merge_to_main.log"
TARGET_BRANCH="main"

mkdir -p "$LOG_DIR"
cd "$REPO_DIR"

{
  date '+%Y-%m-%d %H:%M:%S' | sed 's/^/[AUTO_MERGE] /'

  git fetch --all --prune
  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

  if [ "$CURRENT_BRANCH" = "$TARGET_BRANCH" ]; then
    echo "[AUTO_MERGE] Already on $TARGET_BRANCH. Pulling and pushing."
    git pull --rebase --autostash origin "$TARGET_BRANCH" || true
    git push origin "$TARGET_BRANCH" || true
  else
    echo "[AUTO_MERGE] Merging $CURRENT_BRANCH into $TARGET_BRANCH"
    git checkout "$TARGET_BRANCH" || git checkout -b "$TARGET_BRANCH" origin/"$TARGET_BRANCH" || true
    git pull --rebase --autostash origin "$TARGET_BRANCH" || true
    git merge --no-edit "$CURRENT_BRANCH" || true
    git push origin "$TARGET_BRANCH" || true
    git checkout "$CURRENT_BRANCH" || true
  fi
} >> "$LOG_FILE" 2>&1
