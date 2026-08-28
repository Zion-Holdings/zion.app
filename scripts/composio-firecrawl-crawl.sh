#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use

SITE="https://ziontechgroup.com"
REPORT_DIR="$HOME/.composio/reports/firecrawl"
mkdir -p "$REPORT_DIR"

echo "Starting Firecrawl crawl for $SITE"
composio execute FIRECRAWL_CRAWL_V2 -d '{
  "url": "'"${SITE}"'",
  "limit": 100,
  "maxDiscoveryDepth": 2,
  "crawlEntireDomain": true,
  "allowSubdomains": false,
  "sitemap": "include",
  "excludePaths": ["/admin/*", "/login/*"],
  "scrapeOptions_onlyMainContent": true,
  "scrapeOptions_formats": ["markdown", "links"],
  "maxConcurrency": 5,
  "delay": 1
}' > "$REPORT_DIR/crawl-$(date +%Y-%m-%d).json" 2>&1 || true

echo "Crawl finished. Report saved to $REPORT_DIR"
