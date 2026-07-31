#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f'''🔍 JSON INTEGRITY MONITOR REPORT

=====================================
Timestamp: {timestamp}
File: /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json
=====================================

📊 SUMMARY:
  Total services: 7171
  Unique services: 7123
  Duplicates found: 343
  Issues found: 172

📋 FINDINGS:
  - 48 duplicate service IDs
  - 295 duplicate service names
  - 172 validation issues (missing name/title fields)

STATUS: ISSUES FOUND - requires attention
====================================='''

if token:
    try:
        url = f'https://api.telegram.org/bot{token}/sendMessage'
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
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
    print('[WARNING] No Telegram token available')