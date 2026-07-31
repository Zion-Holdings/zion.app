#!/usr/bin/env python3
"""Send health monitor report to Telegram."""

import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

# Telegram credentials
token = '8631940599:AAHxY5zB-5zB-5zB-5zB-5zB-5zB-5zB-5zB'  # From telegram-send.conf
chat_id = '8435383377'

# Read the health report
health_report_path = '/Users/klebergarciaalcatrao/automation/reports/health-monitor-latest.json'

with open(health_report_path, 'r') as f:
    report = json.load(f)

# Format the message
timestamp = report.get('checkedAt', 'N/A')
status = report.get('status', 'unknown').upper()
errors = report.get('errors', [])

services = report.get('services', {})
sitemap = report.get('sitemap', {})
hot_followup = report.get('hotFollowup', {})
growth = report.get('growthMetrics', {})

message = f"""🏥 HEALTH MONITOR REPORT
========================

Timestamp: {timestamp}
Overall Status: {'✅ OK' if status == 'OK' else '⚠️ ' + status}

📊 SERVICES DATA FILE
   Status: {'✅ Healthy' if services.get('ok') else '❌ Error'}
   Service Count: {services.get('count', 0):,}

🗺️ SITEMAP STATUS
   Status: {'✅ Healthy' if sitemap.get('ok') else '❌ Error'}
   URLs: {sitemap.get('url_count', 0):,}

📧 HOT FOLLOW-UP LEDGER
   Status: {'✅ Healthy' if hot_followup.get('ok') else '❌ Error'}
   High Priority Leads: {hot_followup.get('high_priority_count', 0)}

📈 GROWTH METRICS
   Status: {'✅ Active' if growth.get('ok') else '❌ Error'}
   Engine: {growth.get('engine', 'N/A')} v{growth.get('version', 'N/A')}
   Services Added: {growth.get('services_added', 0):,}
   Total Services: {growth.get('total_services', 0):,}
   Landing Pages: {growth.get('landing_pages', 0):,}
"""

if errors:
    message += "\n⚠️ ERRORS/WARNINGS:\n"
    for err in errors:
        message += f"   • {err}\n"

message += "\n✅ All systems operational"

# Send to Telegram
url = f'https://api.telegram.org/bot{token}/sendMessage'
payload = json.dumps({'chat_id': chat_id, 'text': message}).encode()
req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(req, timeout=10) as r:
        result = json.loads(r.read().decode())
        if result.get('ok'):
            print(f"[✅] Health report sent to Telegram chat {chat_id}")
        else:
            print(f"[❌] Telegram API error: {result}")
except Exception as e:
    print(f"[❌] Telegram send failed: {e}")