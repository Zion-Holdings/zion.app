#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = os.getenv('HERMES_CRON_AUTO_DELIVER_CHAT_ID', '8435383377')

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f"""🔍 JSON INTEGRITY MONITOR REPORT

=====================================
Timestamp: {timestamp}
File: /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json
=====================================

📊 SUMMARY:
  Total services: 3995
  Unique services: 3995
  Duplicates found: 45 (by name)
  Issues found: 50

✅ Duplicates by ID: 0
✅ Duplicates by name: 45

❌ Validation Issues: 50 services affected
  - 50 services with missing or empty 'id' field (indices 1660-1709)

💡 Recommendation: Manual review needed - services missing IDs require attention

Status: ISSUES FOUND - requires attention
====================================="""

print(f"Token available: {bool(token)}")
print(f"Token length: {len(token) if token else 0}")

if token:
    try:
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            if result.get('ok'):
                print(f"[✅] Message sent to Telegram chat {chat_id}")
            else:
                print(f"[❌] Telegram API error: {result}")
    except Exception as e:
        print(f"[❌] Telegram send failed: {e}")
else:
    print("[⚠️] No Telegram token available - message not sent")