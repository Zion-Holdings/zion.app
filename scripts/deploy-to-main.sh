#!/usr/bin/env bash
set -euo pipefail
REPO="C:/Users/Zion/zion-support.github.io"
OUT="$REPO/out"
WT="C:/tmp/zion-publish-ghpages"
BRANCH="${1:-main}"
MSG="${2:-deploy: static export $(date -u +%Y-%m-%dT%H:%M:%SZ)}"
mkdir -p "$WT"
if [ ! -d "$WT/.git" ]; then
  git worktree add -f "$WT" "$BRANCH"
fi
git -C "$WT" rev-parse --show-toplevel >/dev/null
rm -rf "$WT"/*
cp -a "$OUT"/. "$WT"/
git -C "$WT" add -A
if git -C "$WT" diff --cached --quiet; then
  echo "no changes"
  exit 0
fi
git -C "$WT" commit -m "$MSG"
git -C "$WT" push origin "$BRANCH"
echo "deployed branch=$BRANCH"
