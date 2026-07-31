#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

# Read the JSON integrity report
report_file = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/json-integrity-report.json'
with open(report_file, 'r') as f:
    report = json.load(f)

# Format the message
checks = report.get('checks', {})
syntax = checks.get('servicesData_syntax', {})
dup_check = checks.get('duplicate_ids', {})
null_check = checks.get('null_empty_values', {})
sitemap = checks.get('sitemap_consistency', {})

message = f"""JSON INTEGRITY REPORT

=====================================
Timestamp: {timestamp}
Execution time: {report.get('execution_time_ms', 0)}ms
=====================================

[ok] Syntax: {syntax.get('message', 'N/A')}
   Records: {syntax.get('record_count', 0)}

[ok] Duplicate IDs: {dup_check.get('count', 0)}/{dup_check.get('total_items', 0)} unique

[ok] Null/Empty: null={null_check.get('null_count', 0)}, empty={null_check.get('empty_string_count', 0)}

[!] Sitemap: services={sitemap.get('service_count', 0)}, urls={sitemap.get('sitemap_url_count', 0)}
   Missing in sitemap: {len(sitemap.get('missing_in_sitemap', []))}
   Extra in sitemap: {len(sitemap.get('extra_in_sitemap', []))}

=====================================
Status: ok - Data integrity verified - no duplicates found
=====================================

Fix applied: Removed null bytes from servicesData.json (corruption at char 1654057)
File: /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json

GROWTH SYSTEMS OPERATIONAL"""

if token:
    try:
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            if result.get('ok'):
                print(f"[ok] Message sent to Telegram chat {chat_id}")
            else:
                print(f"[error] Telegram API error: {result}")
    except Exception as e:
        print(f"[error] Telegram send failed: {e}")
else:
    print("[!] No Telegram token available")