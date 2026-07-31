#!/usr/bin/env python3
"""Deliver Rapid-Fire Outreach Engine v3.0 results to Telegram."""
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone
from pathlib import Path

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f"""🚀 RAPID-FIRE OUTREACH ENGINE v3.0 - BATCH 11 COMPLETED

=====================================
Run Time: {timestamp}
=====================================

✅ BATCH EXECUTION SUMMARY
   Batch: 11
   Services processed: 500
   Rotation: 11/14 (partial)
   
📊 TOTAL PIPELINE STATUS
   Total emails sent: 56,675
   Email drafts created: 69,342 files
   Industries covered: 349
   
📁 OUTPUT FILES
   - /Users/klebergarciaalcatrao/email_drafts/ (69,342 files)
   - /Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_sent.jsonl
   
🔗 Calendly: https://calendly.com/kleber-ziontechgroup/consultation

📈 Pipeline Status: OPERATIONAL
   Next batch will auto-process remaining services
====================================="""

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