#!/usr/bin/env bash
set -euo pipefail
cd /data/data/com.termux/files/home/zion-support.github.io
printf 'LEAD_GEN %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
python3 lead-crm/historical_email_miner.py || true
echo 'SEND_DISABLED=false'
echo 'LEAD_GEN_OK'
