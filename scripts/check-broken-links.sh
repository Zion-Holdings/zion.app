#!/bin/bash
# check-broken-links.sh — Crawl all internal links and check HTTP status codes
# Usage: ./scripts/check-broken-links.sh [--external]
#   Without args: checks all internal links from sitemap.xml
#   --external: also checks external links found in .tsx files

set -euo pipefail
cd "$(dirname "$0")/.."

REPORT_DIR="automation/data"
mkdir -p "$REPORT_DIR"
REPORT="$REPORT_DIR/broken-links-report.json"
TIMESTAMP=$(date -Iseconds)

BROKEN=0
TOTAL=0

# Check links from sitemap.xml
if [ -f "public/sitemap.xml" ]; then
  echo "  Checking sitemap URLs..."
  URLS=$(grep -oP '(?<=<loc>)[^<]+' public/sitemap.xml 2>/dev/null || true)
  TOTAL=$(echo "$URLS" | grep -c . || true)
  if [ -n "$URLS" ] && command -v xargs >/dev/null 2>&1; then
    BROKEN=$(echo "$URLS" | xargs -P 8 -I {} bash -lc '
      HTTP_CODE=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "{}" 2>/dev/null || echo "000")
      if [ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "301" ] && [ "$HTTP_CODE" != "302" ]; then
        echo 1
      else
        echo 0
      fi
    ' | awk '{s+=$1} END{print s+0}')
  else
    BROKEN=0
    while IFS= read -r url; do
      [ -z "$url" ] && continue
      HTTP_CODE=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "$url" 2>/dev/null || echo "000")
      if [ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "301" ] && [ "$HTTP_CODE" != "302" ]; then
        BROKEN=$((BROKEN + 1))
      fi
    done <<< "$URLS"
  fi
fi

# Check external links if --external flag
if [ "${1:-}" = "--external" ]; then
  echo "  Checking external links..."
  grep -roPh 'https?://[a-zA-Z0-9./?=_%:-]+' app/ --include='*.tsx' --include='*.ts' 2>/dev/null \
    | grep -v 'ziontechgroup.com' | sort -u | while IFS= read -r url; do
    HTTP_CODE=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "$url" 2>/dev/null || echo "000")
    TOTAL=$((TOTAL + 1))
    if [ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "301" ] && [ "$HTTP_CODE" != "302" ]; then
      BROKEN=$((BROKEN + 1))
    fi
  done
fi

printf '{"timestamp":"%s","broken_links":[],"total_checked":%d,"broken_count":%d}\n' "$TIMESTAMP" "$TOTAL" "$BROKEN" > "$REPORT"
echo "Done: $TOTAL URLs checked, $BROKEN broken"
exit $BROKEN