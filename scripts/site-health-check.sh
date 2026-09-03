#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${SITE_URL:-https://ziontechgroup.com}"
ROUTES=("/" "/tools/health-check" "/status/service-health" "/sitemap.xml")
ok=0; fail=0
for p in "${ROUTES[@]}"; do
  # -L follows redirects, -s silent, -o discard, -w status code
  status=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 20 "${BASE_URL}${p}" || echo "000")
  if [[ "$status" =~ ^2[0-9]{2}$ ]]; then ok=$((ok+1)); else fail=$((fail+1)); fi
  echo "$p -> $status"
done
echo "SUMMARY routes=${#ROUTES[@]} ok=$ok fail=$fail"
if (( fail > 0 )); then exit 1; fi
