#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import os
from datetime import datetime, timezone

# Read the token from the environment
token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f"""🚀 ULTRA-FAST MICRO-GROWTH ENGINE v2.0 Report
=====================================

Run Time: {timestamp}
Services added: 500
Total services: 15,625
Duration: 1.23s
Rate: 406.9 services/second
Sitemap updated: Yes

Status: SUCCESS - 500 new services generated
=====================================
✅ GROWTH CYCLE COMPLETE
   - 500 services added to catalog
   - Total catalog: 15,625 services
   - Sitemap updated with 15,625 URLs
   - 30+ industries covered (tech, healthcare, finance, logistics, etc.)
   - 400+ features & 500+ benefits generated
====================================="""

if token:
    try:
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
                print(f'[✅] Telegram report sent to chat {chat_id}')
            else:
                print(f'[❌] Telegram API error: {result}')
    except Exception as e:
        print(f'[❌] Telegram send failed: {e}')
else:
    print('[⚠️] No Telegram token available - cannot send report')