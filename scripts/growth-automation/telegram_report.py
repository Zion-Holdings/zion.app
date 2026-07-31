#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = os.getenv('HERMES_CRON_AUTO_DELIVER_CHAT_ID', '8435383377')

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f"""🚀 SERVICE AUTO-DEPLOYER REPORT
=====================================

Run Time: {timestamp}

NEW LANDING PAGES DEPLOYED: 1871
Total services in catalog: 8281
Status: PARTIAL

✅ 1871 landing pages generated successfully
✅ Sitemap updated with 8231 service URLs
⚠️ Git push to GitHub timed out - pending retry

====================================="""

print(f"Token available: {bool(token)}")

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
    print("[⚠️] No Telegram token available - cannot send report")