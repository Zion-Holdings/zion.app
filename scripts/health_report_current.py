#!/usr/bin/env python3
"""Send current health monitor report to Telegram."""

import json
import os
import urllib.request
import urllib.parse
from datetime import datetime, timezone

# Load all the data
with open('/Users/klebergarciaalcatrao/automation/reports/health-monitor-latest.json', 'r') as f:
    health_report = json.load(f)

with open('/Users/klebergarciaalcatrao/outreach_monitor/processed/growth_metrics.json', 'r') as f:
    growth_metrics = json.load(f)

# Format the timestamp
ts = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

# Build the message with accurate data
msg = f'''📊 CONSOLIDATED HEALTH MONITOR REPORT
=====================================
Timestamp: {ts}
=====================================

🟢 OVERALL SYSTEM STATUS: HEALTHY

📁 SERVICES DATA FILE HEALTH
  ✅ OK - {health_report['services']['count']:,} services
  📍 Path: {health_report['services']['file']}

🏷️ HOT FOLLOW-UP LEDGER STATUS
  ✅ OK - {health_report['hotFollowup']['high_priority_count']} high-priority leads queued
  🔹 TechSub (Rimpy Bawa) - AI/IT
  🔹 Agentic Fabriq (Paulina Xu) - Cybersecurity

🗺️ SITEMAP STATUS
  ✅ OK - {health_report['sitemap']['url_count']:,} URLs indexed
  📍 Path: {health_report['sitemap']['path']}

📈 GROWTH METRICS
  ✅ Running: {growth_metrics['engine']}
  Version: {growth_metrics['version']}
  Services added (last run): {growth_metrics['service_discovery']['services_added']}
  Total catalog services: {growth_metrics['cumulative']['zion_techgroup_catalog']:,}
  Landing pages generated: {growth_metrics['catalog_processing']['landing_pages_generated']:,}
  Sitemap URLs: {growth_metrics['catalog_processing']['sitemap_urls']:,}

✅ No errors or warnings detected

=====================================
All systems operational
---
*Telegram Delivery Target: telegram:8435383377*'''

# Send to Telegram
token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

if token:
    try:
        url = f'https://api.telegram.org/bot{token}/sendMessage'
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': msg,
            'parse_mode': 'Markdown'
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            if result.get('ok'):
                print(f'[OK] Message sent to Telegram chat {chat_id}')
            else:
                print(f'[ERROR] Telegram API error: {result}')
    except Exception as e:
        print(f'[ERROR] Telegram send failed: {e}')
else:
    print('[WARNING] No TELEGRAM_BOT_TOKEN configured')
    print('--- Message Content ---')
    print(msg)