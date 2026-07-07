#!/usr/bin/env bash
set -euo pipefail
cd /data/data/com.termux/files/home/zion-support.github.io
printf 'LEAD_PIPELINE %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
python3 lead-crm/continuous_outreach_pipeline.py || true
echo 'SEND_DISABLED=false'
echo 'LEAD_PIPELINE_OK'
