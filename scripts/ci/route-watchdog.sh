#!/usr/bin/env bash
set -euo pipefail
cd "$(cd "$(dirname "$0")"/.. && pwd)"
missing=0
for route in "/" "/services/" "/pricing/" "/contact/" "/about/" "/blog/" "/careers/" "/partners/" "/portal/" "/press/" "/faq/" "/case-studies/" "/docs/" "/privacy/" "/terms/" "/cookies/" "/sla/" "/dashboard/" "/agents-monitoring/" "/status/" "/academy/" "/search" "/tools/base64/" "/tools/port-scanner/" "/tools/color-palette-generator/" "/tools/service-comparison/" "/tools/ssl-checker/" "/tools/analytics/" "/tools/health-check/"; do
  rel="${route#/}"
  if [ -f "out/$rel/index.html" ] || [ -f "docs/$rel/index.html" ] || [ -f "out/$rel.html" ] || [ -f "docs/$rel.html" ] || [ -f "public/$rel.html" ] || [ -f "public/$rel/index.html" ]; then
    continue
  fi
  echo "MISSING $route"; missing=$((missing+1))
done
if [ "$missing" -gt 0 ]; then echo "MISSING_COUNT=$missing"; exit 1; fi
echo "OK"; exit 0
