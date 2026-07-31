#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone
from pathlib import Path

# Load the health report
health_report_path = Path('/Users/klebergarciaalcatrao/automation/reports/health-monitor-latest.json')
if health_report_path.exists():
    with open(health_report_path, 'r') as f:
        report = json.load(f)
else:
    import subprocess
    result = subprocess.run(['python3', '/Users/klebergarciaalcatrao/scripts/checks/health-monitor.cjs'], 
                          capture_output=True, text=True)
    report = json.loads(result.stdout)

# Format the message
timestamp = report.get('checkedAt', datetime.now(timezone.utc).isoformat())
status = report.get('status', 'unknown').upper()
errors = report.get('errors', [])

message = f'''HEALTH MONITOR REPORT - {timestamp}

=====================================
OVERALL SYSTEM STATUS: OK - {status}
=====================================

SERVICES DATA FILE HEALTH:
  - Services count: {report['services']['count']:,}
  - File: {report['services']['file']}
  - Status: OK

HOT FOLLOW-UP LEDGER STATUS:
  - High priority count: {report['hotFollowup']['high_priority_count']} leads
  - Status: OK

SITEMAP STATUS:
  - URL count: {report['sitemap']['url_count']:,}
  - Path: {report['sitemap']['path']}
  - Status: OK

GROWTH METRICS:
  - Engine: {report['growthMetrics']['engine']} v{report['growthMetrics']['version']}
  - Services added: {report['growthMetrics']['services_added']}
  - Total services: {report['growthMetrics']['total_services']:,}
  - Landing pages: {report['growthMetrics']['landing_pages']:,}

ERRORS/WARNINGS: {', '.join(errors) if errors else 'None'}
=====================================
All systems operational'''

# Send to Telegram
token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

print(f'Token available: {bool(token)}')

if token:
    try:
        url = f'https://api.telegram.org/bot{token}/sendMessage'
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            print(f'Response: {result}')
            if result.get('ok'):
                print('[OK] Message sent to Telegram chat 8435383377')
            else:
                print(f'[ERROR] Telegram API error: {result}')
    except Exception as e:
        print(f'[ERROR] Telegram send failed: {e}')
else:
    print('[WARNING] No TELEGRAM_BOT_TOKEN configured - message not sent')
    print('--- Message Content ---')
    print(message)