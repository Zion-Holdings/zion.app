#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use || true

COMPOSIO_BIN="composio"
if ! command -v "$COMPOSIO_BIN" >/dev/null 2>&1; then
  echo "composio not available; skip firecrawl crawl"
  exit 0
fi

SITE="${1:-https://ziontechgroup.com}"
REPORT_DIR="$HOME/.composio/reports/firecrawl"
mkdir -p "$REPORT_DIR"
REPORT_FILE="$REPORT_DIR/crawl-$(date +%Y-%m-%d).json"

$COMPOSIO_BIN execute FIRECRAWL_CRAWL_V2 -d "{\"url\":\"${SITE}\",\"limit\":100,\"maxDiscoveryDepth\":2,\"crawlEntireDomain\":true,\"allowSubdomains\":false,\"sitemap\":\"include\",\"excludePaths\":[\"/admin/*\",\"/login/*\"],\"scrapeOptions_onlyMainContent\":true,\"scrapeOptions_formats\":[\"markdown\",\"links\"],\"maxConcurrency\":5,\"delay\":1}" > "$REPORT_FILE" 2>&1 || true

echo "Crawl finished. Report saved to $REPORT_FILE"
