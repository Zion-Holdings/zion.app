#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = '8716864917:***'
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f'''🔍 JSON INTEGRITY MONITOR REPORT
=====================================
Run Time: {timestamp}
=====================================

📊 Findings Summary:
   Total services: 14,034
   Unique services: 14,033
   Duplicates by ID: 1
   Duplicates by name: 222
   Total duplicates: 223
   Validation issues: 100

📋 Issue Details:
   - Services at index 911-1010: Missing or empty field: id
   - 100 services affected by validation issues

💡 Recommendation: Run with --fix to automatically resolve issues

====================================='''

url = f'https://api.telegram.org/bot{token}/sendMessage'
data = urllib.parse.urlencode({
    'chat_id': chat_id,
    'text': message,
    'parse_mode': 'Markdown'
}).encode()

req = urllib.request.Request(url, data=data, method='POST')
with urllib.request.urlopen(req, timeout=30) as response:
    result = json.loads(response.read())
    if result.get('ok'):
        print(f'[OK] Message sent to Telegram chat {chat_id}')
    else:
        print(f'[ERROR] Telegram API error: {result}')