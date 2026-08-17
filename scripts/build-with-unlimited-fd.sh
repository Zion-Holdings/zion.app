#!/usr/bin/env bash
set -euo pipefail
# Raise file descriptor limit before build to handle 94K+ page route files
ulimit -n 262144 2>/dev/null || true
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max-old-space-size=4096"
export NEXT_BUILD_WORKER_COUNT=1
exec node node_modules/next/bin/next build "$@"
