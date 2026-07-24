#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${BASE_URL:-https://ziontechgroup.com}"
ROUTES=(
/ /services/ /about/ /contact/ /blog/ /pricing/ /tools/ /ai/
/portal/ /portal
/services/ai-agents-autonomous/ /services/ai-email-bounce-and-deliverability-recovery/
)
fail=0
for p in "${ROUTES[@]}"; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "${BASE_URL}${p}" || true)
  if [ "$code" != "200" ]; then
    echo "FAIL ${BASE_URL}${p} -> ${code}"
    fail=1
  else
    echo "OK ${BASE_URL}${p}"
  fi
done
exit $fail
