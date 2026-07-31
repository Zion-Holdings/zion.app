#!/usr/bin/env python3
"""Send health monitor report to Telegram."""

import json
import os
import urllib.request
import urllib.parse
from datetime import datetime, timezone

# Get the health report from the script output
import subprocess
result = subprocess.run(
    ['python3', '/Users/klebergarciaalcatrao/scripts/checks/health-monitor.cjs'],
    capture_output=True,
    text=True
)
data = json.loads(result.stdout)

# Build the message
ts = data.get('checkedAt', 'N/A')
status = data.get('status', 'unknown')
errors = data.get('errors', [])
services = data.get('services', {})
sitemap = data.get('sitemap', {})
hot = data.get('hotFollowup', {})
growth = data.get('growthMetrics', {})

msg = f'''🔍 HEALTH MONITOR REPORT

Status: {status.upper()}
Checked: {ts}

📊 SERVICES DATA
  OK: {services.get('ok', False)}
  Count: {services.get('count', 0)}
  File: {services.get('file', 'N/A')}

🔥 HOT FOLLOW-UP LEDGER
  OK: {hot.get('ok', False)}
  High Priority: {hot.get('high_priority_count', 0)}
  
  Leads:'''

for lead in hot.get('leads', [])[:2]:
    company = lead.get('company', 'N/A')
    name = lead.get('name', 'N/A')
    industry = lead.get('industry', 'N/A')
    msg += f"\n    - {company}: {name} ({industry})"

msg += f'''

🗺️ SITEMAP
  OK: {sitemap.get('ok', False)}
  URLs: {sitemap.get('url_count', 0)}

📈 GROWTH METRICS
  OK: {growth.get('ok', False)}
  Engine: {growth.get('engine', 'N/A')}
  Version: {growth.get('version', 'N/A')}
  Services Added: {growth.get('services_added', 0)}
  Total Services: {growth.get('total_services', 0)}
  Landing Pages: {growth.get('landing_pages', 0)}'''

if errors:
    msg += f'''

⚠️ ERRORS/WARNINGS ({len(errors)})'''
    for e in errors:
        msg += f"\n  - {e}"

# Send to Telegram
token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

if token:
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    data_send = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': msg,
        'parse_mode': 'HTML'
    }).encode()
    
    req = urllib.request.Request(url, data=data_send, method='POST')
    with urllib.request.urlopen(req, timeout=30) as response:
        result = json.loads(response.read())
        if result.get('ok'):
            print(f'[OK] Message sent to Telegram chat {chat_id}')
        else:
            print(f'[ERROR] Telegram API error: {result}')
else:
    print('[WARNING] No Telegram token available')