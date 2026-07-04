#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."
branch=${1:-continuous-build-deploy}
echo "[$branch] preflight..."
export PATH="$PATH:/c/Users/Zion/AppData/Local/hermes/node"
npm run build
node scripts/checks/build-and-verify.cjs
echo "[$branch] deploy..."
node scripts/deploy-gh-pages-contents.cjs
echo "[$branch] done"
