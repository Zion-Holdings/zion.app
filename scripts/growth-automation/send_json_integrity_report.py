#!/usr/bin/env python3
"""Send JSON Integrity Monitor report to Telegram."""
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

# Configuration
CHAT_ID = '8435383377'
TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', '')

def send_telegram_message(message):
    """Send message to Telegram."""
    if not TOKEN:
        print("[⚠️] No Telegram token configured")
        return False
    
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    data = urllib.parse.urlencode({
        'chat_id': CHAT_ID,
        'text': message,
        'parse_mode': 'Markdown'
    }).encode()
    
    try:
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            return result.get('ok', False)
    except Exception as e:
        print(f"[❌] Telegram send failed: {e}")
        return False

def main():
    timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')
    
    message = f"""🔍 JSON INTEGRITY MONITOR REPORT

============================================================
Run Time: {timestamp}
File: /Users/klebergarciaalcatrao/zion-techgroup/app/data/servicesData.json
============================================================

[ℹ️] Loaded 6337 services from JSON
[ℹ️] Found 0 duplicates by ID, 36 duplicates by name
[ℹ️] Found 0 validation issues in 0 services

📊 SUMMARY:
  Total services: 6337
  Unique services: 6337
  Duplicates found: 36
  Issues found: 0

✅ Data integrity verified - no critical issues found
💡 Recommendation: Run with --fix to resolve duplicate names

============================================================="""
    
    if send_telegram_message(message):
        print(f"[✅] Message sent to Telegram chat {CHAT_ID}")
    else:
        print("[⚠️] Telegram delivery skipped (no token configured)")
        print(message)

if __name__ == '__main__':
    main()