#!/usr/bin/env bash
set -euo pipefail

RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
NC="\033[0m"

fail() { echo -e "${RED}✖ $*${NC}"; exit 1; }
warn() { echo -e "${YELLOW}⚠ $*${NC}"; }
ok()   { echo -e "${GREEN}✔ $*${NC}"; }

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$REPO_ROOT"

[ -d .husky ] || fail ".husky directory is missing"
ok ".husky directory exists"

if [ -f .husky/_/husky.sh ]; then
  ok "Husky shim present (.husky/_/husky.sh)"
else
  warn "Husky shim missing (.husky/_/husky.sh)"
fi

# Check devDependency on husky
if grep -q '"husky"' package.json; then
  ok "husky dependency found in package.json"
else
  warn "husky dependency not found in package.json"
fi

# Check prepare script installs husky
if grep -q '"prepare"\s*:\s*"husky install"' package.json; then
  ok "prepare script configured for husky install"
else
  warn "prepare script missing or not set to 'husky install'"
fi

# Ensure hooks exist and are executable
missing=0
for hook in pre-commit commit-msg pre-push post-merge post-checkout post-rewrite pre-rebase prepare-commit-msg; do
  if [ -f ".husky/$hook" ]; then
    if [ -x ".husky/$hook" ]; then
      ok "hook $hook is present and executable"
    else
      warn "hook $hook is present but not executable"
      missing=$((missing+1))
    fi
    # Basic sanity checks
    if ! head -n1 ".husky/$hook" | grep -q '#!/usr/bin/env sh'; then
      warn "hook $hook missing shebang"
      missing=$((missing+1))
    fi
  else
    warn "hook $hook missing"
  fi
done

# Check pre-commit runs lint-staged
if [ -f .husky/pre-commit ] && grep -q "lint-staged" .husky/pre-commit; then
  ok "pre-commit runs lint-staged"
else
  warn "pre-commit does not run lint-staged"
fi

# Check commit-msg runs commitlint
if [ -f .husky/commit-msg ] && grep -q "commitlint" .husky/commit-msg; then
  ok "commit-msg runs commitlint"
else
  warn "commit-msg does not enforce commitlint"
fi

# Final result
if [ $missing -gt 0 ]; then
  fail "Husky health check found $missing issues"
fi

echo "HUSKY_HEALTH=ok"