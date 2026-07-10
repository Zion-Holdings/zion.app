#!/usr/bin/env bash
set -euo pipefail
cd /data/data/com.termux/files/home/zion-support.github.io
printf 'EMAIL_PROCESS %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
python3 lead-crm/run_outreach_cycle.py || true
echo 'SEND_DISABLED=false'
echo 'EMAIL_PROCESS_OK'
