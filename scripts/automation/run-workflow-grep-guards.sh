#!/usr/bin/env bash
# run-workflow-grep-guards.sh - Run workflow grep guards checks
set -euo pipefail

MODE="${1:-default}"

echo "Running workflow grep guards (${MODE})..."

# Check for deprecated actions
DEPRECATED=$(grep -r "uses:.*@v[12]" .github/workflows/ 2>/dev/null || true)
if [ -n "$DEPRECATED" ]; then
  echo "WARNING: Deprecated action versions found:"
  echo "$DEPRECATED"
fi

# Check for true: instead of on:
TRUE_TRIGGERS=$(grep -rn "^true:" .github/workflows/ 2>/dev/null || true)
if [ -n "$TRUE_TRIGGERS" ]; then
  echo "WARNING: Invalid 'true:' trigger syntax found:"
  echo "$TRUE_TRIGGERS"
fi

echo "Workflow grep guards complete."
exit 0
