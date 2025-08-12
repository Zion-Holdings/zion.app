#!/bin/bash
set -euo pipefail

# Cursor startup hook: ensure pm2 processes autostart/resurrect
if command -v npm >/dev/null 2>&1; then
  npm run -s automation:pm2:autostart || true
fi


