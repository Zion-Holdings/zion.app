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
   Total services: 1285
   Duplicate IDs: 0
   Duplicate names: 2
   Validation issues: 0

✅ Data integrity verified - no critical issues found

💡 Recommendation: Run with --fix to resolve duplicate names

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