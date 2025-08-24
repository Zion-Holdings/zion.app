#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HUSKY_DIR="$ROOT_DIR/.husky"
PKG_JSON="$ROOT_DIR/package.json"
STATUS=0

log(){ echo "[$(date -u +%FT%TZ)] $*"; }

log "🔎 Husky health check starting"

# 1) .husky directory exists
if [ ! -d "$HUSKY_DIR" ]; then
  log "❌ .husky directory not found"
  STATUS=1
else
  log "✅ .husky directory present"
fi

# 2) Ensure hooks are executable
if [ -d "$HUSKY_DIR" ]; then
  while IFS= read -r -d '' hook; do
    if [ ! -x "$hook" ]; then
      chmod +x "$hook" || true
      log "🔧 Fixed executable bit: ${hook##$ROOT_DIR/}"
    fi
  done < <(find "$HUSKY_DIR" -maxdepth 1 -type f -print0)
  log "✅ Hook permissions ensured"
fi

# 3) Verify prepare script contains 'husky install'
if grep -q '"prepare"\s*:\s*"[^"]*husky install' "$PKG_JSON"; then
  log "✅ package.json prepare script installs Husky"
else
  log "❌ package.json missing prepare script to install Husky"
  STATUS=1
fi

# 4) Verify commitlint config exists
if [ -f "$ROOT_DIR/commitlint.config.cjs" ]; then
  log "✅ commitlint config present"
else
  log "❌ commitlint config missing"
  STATUS=1
fi

# 5) Verify lint-staged is configured
if grep -q '"lint-staged"' "$PKG_JSON"; then
  log "✅ lint-staged configuration found"
else
  log "⚠️  lint-staged configuration not found"
fi

# 6) Verify git hooksPath points to .husky (best effort)
HOOKS_PATH=$(git config --get core.hooksPath || true)
if [ -n "${HOOKS_PATH}" ] && [ "${HOOKS_PATH}" != ".husky" ]; then
  log "⚠️  core.hooksPath is '${HOOKS_PATH}', expected '.husky'"
else
  log "✅ core.hooksPath is correct or default"
fi

log "🏁 Husky health check complete"
exit "$STATUS"