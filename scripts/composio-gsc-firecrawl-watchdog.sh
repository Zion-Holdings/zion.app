#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use || true

COMPOSIO_BIN="composio"
if ! command -v "$COMPOSIO_BIN" >/dev/null 2>&1; then
  echo "composio not available; skip SEO watchdog"
  exit 0
fi

SITE_URL="${1:-https://ziontechgroup.com}"
REPORT_DIR="$HOME/.composio/reports/seo-watchdog"
mkdir -p "$REPORT_DIR"
REPORT_FILE="$REPORT_DIR/$(date +%Y-%m-%d).md"

cat > "$REPORT_FILE" <<EOF
# SEO Watchdog - $(date +%Y-%m-%d)

EOF

echo "## Firecrawl Scrape" >> "$REPORT_FILE"
$COMPOSIO_BIN execute FIRECRAWL_SCRAPE \
  -d "{\"url\":\"${SITE_URL}\",\"formats\":[\"markdown\"],\"onlyMainContent\":true}" >> "$REPORT_FILE" 2>&1 || echo "Firecrawl failed" >> "$REPORT_FILE"

echo "Report saved to $REPORT_FILE"
