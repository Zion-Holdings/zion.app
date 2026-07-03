#!/bin/bash
set -euo pipefail
export PATH="/c/Users/Zion/AppData/Local/hermes/node:$PATH"
REPO="/c/Users/Zion/zion-support.github.io"
LOGFILE="$REPO/logs/build_deploy.log"
mkdir -p "$REPO/logs"
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] build_start" >> "$LOGFILE"
cd "$REPO"
rm -rf .next 2>/dev/null || true
npm run build >> "$LOGFILE" 2>&1
node scripts/checks/build-and-verify.cjs >> "$LOGFILE" 2>&1 || true
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] build_done" >> "$LOGFILE"
