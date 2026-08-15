#!/usr/bin/env python3
"""Send minimal high-frequency monitor report to Telegram."""
import json
import os
import urllib.request
from datetime import datetime, timezone

# Telegram configuration  
BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', '8631940599:YOUR_TOKEN_HERE')
CHAT_ID = '8435383377'

# Message content from monitor run
message = '''📧 MINIMAL HIGH-FREQUENCY MONITOR REPORT
=====================================

✅ Script executed successfully

🔍 RESULTS:
• New emails found: 16
• Hot follow-up threads processed: 0
• Emails sent: 0
• Errors: None

📋 INTEREST DRAFTS READY FOR REVIEW (2):
1. Shruti (Silatentkrafts) - Ledger Wallet firmware update inquiry
   → Draft in Portuguese with Zion services link
   
2. Armando (Barrett Financial) - National Housing Video sharing
   → Draft in Portuguese with Zion services link

🏷️ Scanned labels: !!!hot-follow-up
⏱️ Timestamp: ''' + datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

url = f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage'
payload = json.dumps({'chat_id': CHAT_ID, 'text': message, 'parse_mode': 'Markdown'}).encode()
req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(req, timeout=30) as r:
        result = json.loads(r.read().decode())
        print('✅ Sent to Telegram successfully')
except Exception as e:
    print(f'❌ Failed to send to Telegram: {e}')
    print(f'Message preview: {message[:100]}...')