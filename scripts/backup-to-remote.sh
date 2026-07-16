#!/usr/bin/env bash
set -euo pipefail
REPO="$HOME/zion-support.github.io"
BACKUP_REMOTE="zion-backup"
BACKUP_BRANCH="main"
cd "$REPO"
git remote get-url "$BACKUP_REMOTE" >/dev/null 2>&1 || git remote add "$BACKUP_REMOTE" "https://github.com/Zion-support/zion-backup.git"
git push "$BACKUP_REMOTE" "$(git branch --show-current):$BACKUP_BRANCH" --force
# Avoid force-pushing to the Pages source branch by default.
if git remote get-url deploy >/dev/null 2>&1; then
  echo "deploy remote present; skipping force-push to main from backup script to avoid Pages cancellation races."
fi
echo "Backup push complete."
