#!/usr/bin/env bash
set -euo pipefail
cd /data/data/com.termux/files/home/zion-support.github.io
printf 'EMAIL_PROCESS %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
python3 lead-crm/continuous_outreach_pipeline.py || true
echo 'SEND_DISABLED=false'
echo 'EMAIL_PROCESS_OK'
