#!/usr/bin/env bash
set -euo pipefail

export SELF_HOST=${SELF_HOST:-"http://localhost:3000"}

# Ensure build is running or use a running server for API
# In CI, you may want to `npm run start` in background; here we assume server.

node scripts/seo-generate-pages.ts