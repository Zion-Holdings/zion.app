#!/usr/bin/env bash
set -u
LOG=/tmp/cron_deliveries.log
TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
cat >> "$LOG" <<EOF
$TS | cron-delivery-attempt | telegram ascii_401_fallback | channel=local_log_only | status=failed_telegram_sender_401
EOF
exit 0
