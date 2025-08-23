#!/bin/bash

# Performance optimization script triggered when URL latency exceeds threshold.
# This script runs a build and attempts to restart the application using common
# process managers. Adjust commands as needed for your environment.

URL="$1" # The problematic URL passed from the monitor

set -e

echo "Optimization script triggered for URL: ${URL}"
echo "--------------------------------------------------"

# Rebuild the application to ensure latest optimizations are applied
if [ -f package.json ]; then
  echo "[OPTIMIZE] Running application build..."
  npm run build >/dev/null 2>&1
else
  echo "[OPTIMIZE] No package.json found. Skipping build step."
fi

# Restart the server using an available process manager
if command -v pm2 >/dev/null 2>&1; then
  echo "[OPTIMIZE] Restarting application via pm2..."
  pm2 restart all
elif command -v systemctl >/dev/null 2>&1; then
  echo "[OPTIMIZE] Restarting application via systemctl..."
  sudo systemctl restart my_app.service
else
  echo "[OPTIMIZE] No recognized process manager found. Please restart the server manually."
fi

echo "--------------------------------------------------"
echo "Optimization complete for ${URL}."

