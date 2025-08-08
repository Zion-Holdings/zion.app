#!/usr/bin/env bash
set -euo pipefail

RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
NC="\033[0m"

echo -e "${YELLOW}🔎 Checking repository for merge conflicts...${NC}"

# Ensure we are in a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo -e "${RED}Not a git repository.${NC}"
  exit 2
fi

# Check for unmerged paths (index entries with conflicts)
unmerged=$(git ls-files -u | wc -l | tr -d ' ')
if [ "$unmerged" != "0" ]; then
  echo -e "${RED}❌ Unmerged paths detected (${unmerged}). Resolve them before continuing.${NC}"
  git ls-files -u | cut -f2 | sort -u | sed 's/^/ - /'
  exit 1
fi

# Check for conflict markers in tracked files
# We ignore files in .git and package-lock.json noise not relevant, but scan all tracked text files
conflict_files=$(git ls-files -z | xargs -0 grep -I -l -E '^(<<<<<<< |=======|>>>>>>> )' || true)
if [ -n "$conflict_files" ]; then
  echo -e "${RED}❌ Conflict markers found in the following files:${NC}"
  echo "$conflict_files" | sed 's/^/ - /'
  exit 1
fi

# Optionally check staged content for markers
staged_conflicts=$(git diff --cached -U0 | grep -E '^(\+|\-)<<<<<<< |^(\+|\-)=======|^(\+|\-)>>>>>>> ' || true)
if [ -n "$staged_conflicts" ]; then
  echo -e "${RED}❌ Conflict markers detected in staged changes.${NC}"
  echo "$staged_conflicts" | head -200
  exit 1
fi

# Detect if a merge is in progress
if [ -d .git/MERGE_HEAD ]; then
  echo -e "${RED}❌ A merge appears to be in progress. Please resolve or abort it.${NC}"
  exit 1
fi

# Fetch and attempt a dry evaluation against origin/main inside a temporary worktree
# This does not alter the current working directory
if git rev-parse --verify origin/main >/dev/null 2>&1; then
  tmpdir=$(mktemp -d)
  current_branch=$(git rev-parse --abbrev-ref HEAD)
  git worktree add "$tmpdir" -f "$current_branch" >/dev/null 2>&1 || true
  pushd "$tmpdir" >/dev/null
  git fetch origin main >/dev/null 2>&1 || true
  set +e
  git merge --no-commit --no-ff --no-edit origin/main >/dev/null 2>&1
  merge_ec=$?
  if [ $merge_ec -ne 0 ]; then
    # Conflicts likely occurred
    echo -e "${RED}❌ Potential merge conflicts if merging with origin/main.${NC}"
    git diff --name-only --diff-filter=U | sed 's/^/ - /'
    git merge --abort >/dev/null 2>&1 || true
    popd >/dev/null
    git worktree remove "$tmpdir" --force >/dev/null 2>&1 || true
    rm -rf "$tmpdir"
    exit 1
  else
    git merge --abort >/dev/null 2>&1 || true
    popd >/dev/null
    git worktree remove "$tmpdir" --force >/dev/null 2>&1 || true
    rm -rf "$tmpdir"
  fi
  set -e
fi

echo -e "${GREEN}✅ No merge conflicts detected.${NC}"