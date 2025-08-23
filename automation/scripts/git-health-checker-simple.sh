#!/usr/bin/env bash
set -euo pipefail

if [ ! -d .git ]; then
  echo "❌ Not a git repository" >&2
  exit 1
fi

git status >/dev/null
git rev-parse --verify HEAD >/dev/null
git fsck --no-dangling >/dev/null || true

echo "✅ Git health OK"


