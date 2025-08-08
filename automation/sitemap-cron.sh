#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Generate sitemap
node scripts/generate-sitemap.mjs || true

# Ping search engines
node scripts/ping-sitemaps.cjs || true

echo "[sitemap-cron] done"