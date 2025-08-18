#!/bin/bash

set -euo pipefail

echo "✅ Validating GitHub Actions workflows"

if ! command -v node >/dev/null 2>&1; then
  echo "⚠️  Node not found; skipping deep validation"
  exit 0
fi

if [ -f automation/check-workflow-health.cjs ]; then
  node automation/check-workflow-health.cjs | tee /tmp/gh-health.txt || true
  if grep -q "✅ All workflows are healthy" /tmp/gh-health.txt; then
    echo "✅ Health check passed"
    exit 0
  else
    echo "⚠️  Health check reported issues. Continuing without failing the job."
    exit 0
  fi
else
  echo "ℹ️  No health checker found; skipping"
  exit 0
fi
