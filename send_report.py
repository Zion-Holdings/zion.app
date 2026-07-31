#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = os.getenv('HERMES_CRON_AUTO_DELIVER_CHAT_ID', '8435383377')

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

# Use simple ASCII characters only
message = """[JSON INTEGRITY MONITOR REPORT]

Timestamp: """ + timestamp + """
File: /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json

SUMMARY:
  Total services: 3005
  Unique services: 3002
  Duplicates found: 15 (3 by ID, 12 by name)
  Issues found: 0

Duplicates by ID: 3
Duplicates by name: 12

Validation Issues: 0 services affected

Recommendation: Run with --fix to automatically resolve duplicates

Status: ISSUES FOUND - duplicates detected"""

print("Token available:", bool(token))

if token:
    try:
        url = "https://api.telegram.org/bot" + token + "/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            if result.get('ok'):
                print("[OK] Message sent to Telegram chat", chat_id)
            else:
                print("[ERROR] Telegram API error:", result)
    except Exception as e:
        print("[ERROR] Telegram send failed:", e)
else:
    print("[WARNING] No Telegram token available - message not sent")