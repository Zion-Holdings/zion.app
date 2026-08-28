#!/bin/bash
set -euo pipefail
source ~/.nvm/nvm.sh
nvm use

REPORT_DATE=$(date +%Y-%m-%d)
OUTPUT_FILE="$HOME/.composio/reports/seo-weekly-${REPORT_DATE}.md"
mkdir -p "$(dirname "$OUTPUT_FILE")"

echo "# SEO Weekly Report - ${REPORT_DATE}" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "## Google Search Console" >> "$OUTPUT_FILE"
composio execute GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY \
  -d '{"site_url":"sc-domain:ziontechgroup.com","start_date":"'"$(date -v-7d +%Y-%m-%d)"'","end_date":"'"${REPORT_DATE}"'","dimensions":["query"],"row_limit":20}' \
  >> "$OUTPUT_FILE" 2>&1 || echo "GSC failed" >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"
echo "## Google Analytics 4" >> "$OUTPUT_FILE"
composio execute GOOGLE_ANALYTICS_BATCH_RUN_REPORTS \
  -d '{"property":"properties/399939963","requests":[{"dateRanges":[{"start_date":"'"$(date -v-7d +%Y-%m-%d)"'","end_date":"'"${REPORT_DATE}"'"}],"dimensions":[{"name":"country"}],"metrics":[{"name":"activeUsers"}]}]}' \
  >> "$OUTPUT_FILE" 2>&1 || echo "GA4 failed" >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"
echo "## Sentry Issues" >> "$OUTPUT_FILE"
composio execute SENTRY_LIST_AN_ORGANIZATIONS_ISSUES \
  -d '{"organization_id_or_slug":"zion-holdings","query":"is:unresolved","limit":20}' \
  >> "$OUTPUT_FILE" 2>&1 || echo "Sentry failed" >> "$OUTPUT_FILE"

echo "Report saved to $OUTPUT_FILE"
