#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

mkdir -p out
: > /tmp/site-health-check.log
fail=0

check_url() {
  local url="$1"
  local code
  code=$(curl -L -I -s -o /dev/null -w '%{http_code}' "$url" 2>/dev/null || echo "000")
  if [ "$code" != "200" ]; then
    echo "$url -> $code" | tee -a /tmp/site-health-check.log
    fail=1
  fi
}

check_url 'https://ziontechgroup.com/'
check_url 'https://ziontechgroup.com/automation/'
check_url 'https://ziontechgroup.com/services/'
check_url 'https://ziontechgroup.com/contact/'

if [ -f out/index.html ]; then
  echo 'out/index.html: present'
else
  echo 'out/index.html: missing'
  fail=1
fi

exit $fail
