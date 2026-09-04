#!/usr/bin/env bash
set -euo pipefail
# Zion Composio Improvement Runner
# Runs safe local checks/validation without requiring a live API key.

export COMPOSIO_API_KEY="${COMPOSIO_API_KEY:-}"

say() { printf '%s\n' "$*"; }
ok() { say "[OK] $*"; }
fail() { say "[FAIL] $*"; }

check_python_dep() {
  if python -c "import composio" 2>/dev/null; then
    ok "composio python package importable"
  else
    fail "composio python package not importable"
  fi
}

check_cli() {
  if command -v composio >/dev/null 2>&1; then
    ok "composio CLI present"
  else
    fail "composio CLI not found in PATH"
  fi
}

check_env() {
  if [ -n "${COMPOSIO_API_KEY:-}" ]; then
    ok "COMPOSIO_API_KEY is set"
  else
    fail "COMPOSIO_API_KEY is not set"
  fi
}

check_connection_docs() {
  if [ -f docs/composio-state.md ]; then
    ok "docs/composio-state.md exists"
  else
    fail "docs/composio-state.md missing"
  fi
}

check_scripts() {
  local missing=0
  for f in \
    scripts/composio/composio_cli-wrapper.py \
    scripts/composio-zion-maximize-active.mjs \
    scripts/composio-master-orchestrator.sh \
    scripts/composio-revenue-cycle.sh \
    scripts/composio-content-cycle.sh
  do
    if [ -f "$f" ]; then
      ok "script present: $f"
    else
      fail "script missing: $f"
      missing=$((missing+1))
    fi
  done
  return $missing
}

check_workflows() {
  local missing=0
  for f in \
    .github/workflows/composio-zion-master.yml \
    .github/workflows/composio-zion-master-orchestrator.yml \
    .github/workflows/composio-revenue-engine.yml \
    .github/workflows/composio-calendly-whatsapp-stripe-revenue.yml
  do
    if [ -f "$f" ]; then
      ok "workflow present: $f"
    else
      fail "workflow missing: $f"
      missing=$((missing+1))
    fi
  done
  return $missing
}

say "== Zion Composio Improvement Runner =="
check_python_dep || true
check_cli || true
check_env || true
check_connection_docs || true
check_scripts || true
check_workflows || true
say "== Done =="
