#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."
name=${1:-main}
echo "[$name] preflight check..."
PATH="$PATH:/c/Users/Zion/AppData/Local/hermes/node" npm run build
node scripts/checks/build-and-verify.cjs
echo "[$name] deploy..."
node deploy.cjs
echo "[$name] done"
