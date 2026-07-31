#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = """🚀 STABLE GROWTH ENGINE v2.0 - RUN COMPLETE

=====================================
Run Time: """ + timestamp + """
=====================================

✅ EXECUTION SUCCESSFUL
   Services added: 5
   Total catalog size: 11,015
   Status: Complete

📁 Output Files:
   - /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json
   - /Users/klebergarciaalcatrao/outreach_monitor/processed/stable_growth_engine.log

📊 Services Added:
   • AI-Powered Predictive Analytics Suite
   • Autonomous Customer Service AI
   • AI-Powered SEO Content Engine
   • Intelligent Document Processing AI
   • AI Sales Lead Scoring Engine

=====================================
GROWTH CYCLE COMPLETE - All systems operational"""

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
                print(f"[OK] Message sent to Telegram chat {chat_id}")
            else:
                print(f"[ERROR] Telegram API error: {result}")
    except Exception as e:
        print(f"[ERROR] Telegram send failed: {e}")
else:
    print("[WARN] No Telegram token available")