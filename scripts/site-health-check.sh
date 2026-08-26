#!/usr/bin/env bash
# Site shell health check for ziontechgroup.com
#
# Verifies that the deployed site is reachable and that the core navigation
# routes return HTTP 200. Exits 0 when every route is healthy, 1 otherwise.
#
# Usage:
#   scripts/site-health-check.sh                 # check default routes
#   BASE_URL=https://example.com scripts/site-health-check.sh
#   scripts/site-health-check.sh /about/ /blog/  # check specific routes

set -uo pipefail

BASE_URL="${BASE_URL:-https://ziontechgroup.com}"
BASE_URL="${BASE_URL%/}"

# Per-request timeout and retry budget. Mobile/Termux networks intermittently
# drop connections, which surfaces as curl code 000 rather than a real HTTP
# failure -- so each route gets a few attempts before being called broken.
CURL_MAX_TIME="${CURL_MAX_TIME:-30}"
ATTEMPTS="${ATTEMPTS:-6}"
RETRY_DELAY="${RETRY_DELAY:-3}"

DEFAULT_ROUTES=(
  /
  /about/
  /services/
  /solutions/
  /tools/
  /industries/
  /blog/
  /pricing/
  /contact/
  /careers/
  /partners/
  /case-studies/
  /faq/
  /privacy/
  /terms/
)

if [ "$#" -gt 0 ]; then
  ROUTES=("$@")
else
  ROUTES=("${DEFAULT_ROUTES[@]}")

  # Also cover every deployed tool page. Tools are the most-changed part of the
  # site, so a shell-only check that skips them would miss the likeliest break.
  # Enabled by default; set CHECK_TOOLS=0 to check core navigation only.
  if [ "${CHECK_TOOLS:-1}" = "1" ]; then
    tools_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/public/tools"
    if [ -d "$tools_dir" ]; then
      while IFS= read -r tool_index; do
        slug="$(basename "$(dirname "$tool_index")")"
        ROUTES+=("/tools/${slug}/")
      done < <(find "$tools_dir" -mindepth 2 -maxdepth 2 -name index.html | sort)
    fi
  fi
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "FAIL: curl is not available on PATH" >&2
  exit 1
fi

# Fetch a route, retrying on transport-level failures (code 000).
# Echoes the final HTTP status code.
fetch_status() {
  local url="$1"
  local code=000
  local attempt=1

  while [ "$attempt" -le "$ATTEMPTS" ]; do
    code=$(curl -s -o /dev/null -w '%{http_code}' \
      --max-time "$CURL_MAX_TIME" \
      -A 'zion-site-health-check/1.0' \
      "$url" 2>/dev/null)

    # curl prints nothing at all if it dies before writing the format string.
    [ -z "$code" ] && code=000

    # A real HTTP response ends the retry loop; 000 means we never got one.
    if [ "$code" != "000" ]; then
      break
    fi

    attempt=$((attempt + 1))
    [ "$attempt" -le "$ATTEMPTS" ] && sleep "$RETRY_DELAY"
  done

  echo "$code"
}

echo "Site health check -> $BASE_URL"
echo "Routes: ${#ROUTES[@]} | timeout: ${CURL_MAX_TIME}s | attempts: ${ATTEMPTS}"
echo

ok_count=0
broken=()

for route in "${ROUTES[@]}"; do
  case "$route" in
    /*) path="$route" ;;
    *)  path="/$route" ;;
  esac

  url="${BASE_URL}${path}"
  status=$(fetch_status "$url")

  if [ "$status" = "200" ]; then
    printf '  OK    %s  %s\n' "$status" "$path"
    ok_count=$((ok_count + 1))
  else
    printf '  FAIL  %s  %s\n' "$status" "$path"
    broken+=("${path} (${status})")
  fi
done

echo
echo "Checked: ${#ROUTES[@]} | OK: ${ok_count} | Broken: ${#broken[@]}"

if [ "${#broken[@]}" -gt 0 ]; then
  echo
  echo "Broken routes:"
  for entry in "${broken[@]}"; do
    echo "  - $entry"
  done
  echo
  echo "SITE_HEALTH_FAIL"
  exit 1
fi

echo "SITE_HEALTH_OK"
exit 0
