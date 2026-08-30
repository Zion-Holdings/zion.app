#!/bin/bash
# Check service counts and report gaps between catalog, sitemap, and deployed pages
# Usage: ./check-service-counts.sh
set -euo pipefail

cd "$(dirname "$0")/.."

# Count services in catalog
catalog_count=$(python3 -c "import json; print(len(json.load(open('app/data/servicesData.json'))))" 2>/dev/null || echo 0)

# Count URLs in sitemap
sitemap_count=$(python3 -c "import xml.etree.ElementTree as ET; print(len(ET.parse('public/sitemap.xml').getroot().findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}url')))" 2>/dev/null || echo 0)

# Count generated service pages
page_count=$(find app/services -name "page.tsx" 2>/dev/null | wc -l | tr -d ' ')

echo "=== Service Count Report ==="
echo "Catalog services:  $catalog_count"
echo "Sitemap URLs:      $sitemap_count"
echo "Deployed pages:    $page_count"
echo ""

# Check for gaps
if [ "$sitemap_count" -lt "$catalog_count" ]; then
    gap=$((catalog_count - sitemap_count))
    echo "WARNING: Sitemap is missing $gap service URLs"
    exit 1
elif [ "$sitemap_count" -gt "$catalog_count" ]; then
    extra=$((sitemap_count - catalog_count))
    echo "OK: Sitemap has $extra extra URLs (index pages)"
    exit 0
else
    echo "OK: Sitemap coverage matches catalog"
    exit 0
fi