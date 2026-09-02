#!/usr/bin/env bash
set -euo pipefail
echo "Site health check..."
for p in / /services/ /pricing/; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://ziontechgroup.com$p")
  echo "$p: $code"
done
