#!/bin/sh
set -e

# Usage: ./automation/start-pm2-auto-sync.sh
# Starts or reloads the pm2 processes defined in ecosystem.pm2.cjs

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

mkdir -p logs

if command -v pm2 >/dev/null 2>&1; then
  pm2 startOrRestart ecosystem.pm2.cjs --only zion-auto-sync,zion-auto-sync-cron || pm2 start ecosystem.pm2.cjs
  pm2 save
  echo "PM2 auto-sync processes started and saved."
else
  echo "pm2 is not installed. Install with: npm i -g pm2"
  exit 1
fi


