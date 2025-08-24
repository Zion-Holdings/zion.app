#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$REPO_ROOT"

log() { echo "[husky-repair] $*"; }

log "Ensuring husky is installed as a devDependency..."
# Install husky quietly; do not fail if already installed
npm install --no-audit --no-fund -D husky@^9 >/dev/null 2>&1 || true

log "Running prepare script to (re)install hooks..."
if npm run -s prepare >/dev/null 2>&1; then
  log "prepare script executed"
else
  log "prepare script missing; adding it temporarily and running 'husky install'"
  npx --yes husky install || true
fi

# Ensure Husky internal shim exists by (re)running install
if [ ! -f .husky/_/husky.sh ]; then
  log "Husky shim missing; running 'husky install'"
  npx --yes husky install || true
fi

log "Setting execute permissions on hooks..."
if [ -d .husky ]; then
  chmod +x .husky/* 2>/dev/null || true
fi

log "Repair attempt complete."