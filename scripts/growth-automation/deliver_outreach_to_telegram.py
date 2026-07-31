#!/usr/bin/env python3
"""Send Rapid-Fire Outreach Engine results to Telegram."""
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone
from pathlib import Path

# Configuration
CHAT_ID = '8435383377'
TOKEN = os.getenv('TELEGRAM_BOT_TOKEN', '')

# Read the sent log
SENT_LOG = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_sent.jsonl')
COUNT_FILE = Path('/Users/klebergarciaalcatrao/outreach_monitor/processed/rapid_outreach_count.txt')

def get_sent_count():
    """Get total count of sent emails."""
    if COUNT_FILE.exists():
        with open(COUNT_FILE) as f:
            return int(f.read().strip())
    return 0

def get_sample_emails(n=5):
    """Get sample emails from the sent log."""
    if not SENT_LOG.exists():
        return []
    with open(SENT_LOG) as f:
        lines = [l.strip() for l in f if l.strip()]
    return lines[:n]

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
    total_sent = get_sent_count()
    sample_emails = get_sample_emails(5)
    
    message = f"""🚀 RAPID-FIRE OUTREACH ENGINE v3.0 - COMPLETED

=====================================
Run Time: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}
=====================================

✅ GROWTH CYCLE SUCCESSFUL
   Emails generated: {total_sent}
   
📊 Summary:
   - Total outreach emails processed: {total_sent}
   - Batch size: 500 services × 4 prospects = 2,000 emails
   - Calendly: https://calendly.com/kleber-ziontechgroup/consultation

📧 Sample Outreach Emails:
"""
    for i, email in enumerate(sample_emails, 1):
        parts = email.split(':')
        if len(parts) >= 2:
            message += f"   {i}. {parts[0]} → {parts[1]}\n"
    
    message += """
📈 Pipeline Status: COMPLETE
================================="""
    
    if send_telegram_message(message):
        print(f"[✅] Message sent to Telegram chat {CHAT_ID}")
    else:
        print("[⚠️] Telegram delivery skipped (no token configured)")
        print(message)

if __name__ == '__main__':
    main()