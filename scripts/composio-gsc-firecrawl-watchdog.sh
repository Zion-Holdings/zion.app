#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use

SITE_URL="https://ziontechgroup.com"
REPORT_DIR="$HOME/.composio/reports/seo-watchdog"
mkdir -p "$REPORT_DIR"
REPORT_FILE="$REPORT_DIR/$(date +%Y-%m-%d).md"

echo "# SEO Watchdog - $(date +%Y-%m-%d)" > "$REPORT_FILE"
echo "" >> "$REPORT_FILE"


echo "" >> "$REPORT_FILE"
echo "## Firecrawl Scrape" >> "$REPORT_FILE"
composio execute FIRECRAWL_SCRAPE \
  -d '{"url":"'"$SITE_URL"'","formats":["markdown"],"onlyMainContent":true}' \
  >> "$REPORT_FILE" 2>&1 || echo "Firecrawl failed" >> "$REPORT_FILE"

echo "" >> "$REPORT_FILE"
echo "Report saved to $REPORT_FILE"
