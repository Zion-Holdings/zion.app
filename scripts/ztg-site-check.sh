#!/usr/bin/env bash
set -euo pipefail
URL="https://ziontechgroup.com"
TMP_HTML="$(mktemp)"
status_code=$(curl -L -o "$TMP_HTML" -s -w "%{http_code}" "$URL" || true)
echo "ZTG_STATUS=${status_code:-UNKNOWN}"
echo "ZTG_URL=${URL}"
if [ -s "$TMP_HTML" ]; then
  TITLE="$(grep -oE '<title>[^<]+</title>' "$TMP_HTML" | head -n 1 | sed 's/<title>//;s/<\/title>//')" || true
  echo "ZTG_TITLE=${TITLE:-NONE}"
else
  echo "ZTG_TITLE=EMPTY_RESPONSE"
fi
rm -f "$TMP_HTML"
