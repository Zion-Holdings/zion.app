#!/usr/bin/env bash
set -euo pipefail
REPO="$HOME/zion-support.github.io"
BACKUP_REMOTE="zion-backup"
BACKUP_BRANCH="main"
cd "$REPO"
git remote get-url "$BACKUP_REMOTE" >/dev/null 2>&1 || git remote add "$BACKUP_REMOTE" "https://github.com/Zion-support/zion-backup.git"
git push "$BACKUP_REMOTE" "$(git branch --show-current):$BACKUP_BRANCH" --force
git remote get-url deploy >/dev/null 2>&1 && git push deploy HEAD:main --force || true
echo "Backup push complete."
