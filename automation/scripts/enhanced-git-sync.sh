#!/bin/bash
# Enhanced Git Sync Automation Script

set -e

MAIN_BRANCH="main"
REMOTE_NAME="origin"
BACKUP_BRANCH="sync-backup-$(date +%Y%m%d-%H%M%S)"
MAX_RETRIES=3

echo "🔄 Starting enhanced git sync..."

cleanup_git_locks() {
  rm -f .git/index.lock 2>/dev/null || true
  rm -rf .git/rebase-merge 2>/dev/null || true
  rm -rf .git/rebase-apply 2>/dev/null || true
  rm -rf .git/merge-HEAD 2>/dev/null || true
  rm -rf .git/CHERRY_PICK_HEAD 2>/dev/null || true
}

check_git_health() {
  if [ ! -d .git ]; then
    echo "❌ Not a git repository"
    exit 1
  fi
  git rev-parse --verify HEAD >/dev/null 2>&1 || { echo "❌ Invalid HEAD"; exit 1; }
}

safe_switch_to_main() {
  local current_branch
  current_branch=$(git branch --show-current)
  if [ "$current_branch" = "$MAIN_BRANCH" ]; then return 0; fi
  if ! git diff --quiet || ! git diff --cached --quiet; then
    git stash push -m "Auto-stash before switching to main - $(date)"
  fi
  git branch "$BACKUP_BRANCH" 2>/dev/null || true
  git checkout "$MAIN_BRANCH"
}

safe_pull() {
  local retry_count=0
  while [ $retry_count -lt $MAX_RETRIES ]; do
    if git pull "$REMOTE_NAME" "$MAIN_BRANCH"; then
      return 0
    else
      retry_count=$((retry_count + 1))
      git reset --hard HEAD
      sleep 2
    fi
  done
  return 1
}

apply_stashed_changes() {
  local stash_count
  stash_count=$(git stash list | wc -l)
  if [ "$stash_count" -eq 0 ]; then return 0; fi
  if git stash apply; then
    return 0
  else
    git checkout --theirs . 2>/dev/null || true
    git add -A
    return 0
  fi
}

commit_and_push() {
  if git diff --quiet && git diff --cached --quiet; then return 0; fi
  git add -A
  git commit -m "feat(sync): automated sync to main - $(date '+%Y-%m-%d %H:%M:%S')" || true
  git push "$REMOTE_NAME" "$MAIN_BRANCH" || { git pull "$REMOTE_NAME" "$MAIN_BRANCH" && git push "$REMOTE_NAME" "$MAIN_BRANCH"; }
}

final_cleanup() {
  if git branch | grep -q "$BACKUP_BRANCH"; then git branch -D "$BACKUP_BRANCH" 2>/dev/null || true; fi
  git status --porcelain || true
}

trap 'cleanup_git_locks; exit 1' ERR

check_git_health
cleanup_git_locks
safe_switch_to_main
safe_pull
apply_stashed_changes
commit_and_push
final_cleanup

echo "✅ All done! Repository is now synced with main branch."


