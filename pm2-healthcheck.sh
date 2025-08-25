#!/bin/bash
set -euo pipefail

if ! command -v pm2 >/dev/null 2>&1; then
  echo "PM2 not installed" >&2
  exit 2
fi

if pm2 status | grep -q "online"; then
  echo "OK: PM2 has online processes"
  exit 0
else
  echo "CRITICAL: No PM2 processes online" >&2
  pm2 status || true
  exit 1
fi


