#!/usr/bin/env bash
set -euo pipefail
cd /data/data/com.termux/files/home/zion-support.github.io
printf 'TOKEN_RENEW_CHECK %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
python3 scripts/token_renewal_watchdog.py --status || true
echo 'SEND_DISABLED=false'
echo 'TOKEN_RENEW_CHECK_OK'
