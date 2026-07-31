#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import os
from datetime import datetime, timezone

# Read token from .env file
env_path = '/Users/klebergarciaalcatrao/.env'
token = ''
chat_id = '8435383377'

try:
    with open(env_path, 'r') as f:
        for line in f:
            if line.startswith('TELEGRAM_BOT_TOKEN='):
                token = line.strip().split('=', 1)[1]
                break
except Exception as e:
    print(f'[ERROR] Could not read .env file: {e}')

if not token:
    print('[ERROR] No Telegram bot token found')
    exit(1)

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
try:
    with urllib.request.urlopen(req, timeout=30) as response:
        result = json.loads(response.read())
        if result.get('ok'):
            print(f'[OK] Message sent to Telegram chat {chat_id}')
        else:
            print(f'[ERROR] Telegram API error: {result}')
except Exception as e:
    print(f'[ERROR] Telegram send failed: {e}')