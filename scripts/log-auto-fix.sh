#!/usr/bin/env bash
set -euo pipefail
PROJECT_ROOT="$(cd "$(dirname "$0")"/.. && pwd)"
cd "$PROJECT_ROOT"

mkdir -p automation/logs
LOG_FILE="automation/logs/manual-autofix.log"

function log(){ echo "[$(date -Iseconds)] $*" | tee -a "$LOG_FILE"; }

log "Starting manual auto-fix"

# Lint quick fix
npm run lint --silent -- --fix || true

# TypeScript and general fixers
node fix_typescript_syntax_errors.cjs || true
node fix_all_typescript_errors.cjs || true
node fix_unused_imports.cjs || true
node final_fix.cjs || true

# Optional build check for visibility
npm run build | cat || true

log "Auto-fix completed"