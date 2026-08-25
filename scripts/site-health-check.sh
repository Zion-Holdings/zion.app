#!/bin/bash
# Site health check - verifies ziontechgroup.com is serving content correctly
# Usage: ./site-health-check.sh [base_url]
set -euo pipefail

BASE_URL="${1:-https://ziontechgroup.com}"
failed=0
total=0

echo "=== Site Health Check ==="
echo "URL: $BASE_URL"
echo ""

# Check root
status=$(curl --silent --show-error --max-time 10 -o /dev/null -w "%{http_code}" "$BASE_URL/" || echo "000")
total=$((total + 1))
if [ "$status" = "200" ]; then
    echo "OK  / -> $status"
else
    echo "FAIL / -> $status"
    failed=$((failed + 1))
fi

# Check key routes
routes=(
    "/services/"
    "/solutions/"
    "/pricing/"
    "/contact/"
    "/tools/"
    "/about"
    "/blog"
    "/careers"
    "/partners"
    "/portal"
    "/ai-services-index"
    "/free-ai-it-tools"
    "/automation/"
    "/services/ai-customer-support-pro/"
    "/use-cases/"
    "/industries/financial-services/"
    "/public-roadmap/"
    "/status-page/"
    "/solutions/healthcare/"
    "/free-consultation/"
    "/tools/phishing-analyzer/"
)

for route in "${routes[@]}"; do
    status=$(curl --silent --show-error --max-time 10 -o /dev/null -w "%{http_code}" "$BASE_URL$route" || echo "000")
    total=$((total + 1))
    if [ "$status" = "200" ]; then
        echo "OK  $route -> $status"
    else
        echo "FAIL $route -> $status"
        failed=$((failed + 1))
    fi
done

echo ""
echo "Results: $((total - failed))/$total routes healthy ($failed failing)"

if [ "$failed" -eq 0 ]; then
    echo "EXIT: 0 (all healthy)"
    exit 0
else
    echo "EXIT: 1 (some routes failing)"
    exit 1
fi