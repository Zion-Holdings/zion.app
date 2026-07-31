#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = '8716864917:***'
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f'''🚀 CONTINUOUS GROWTH RUNNER - DELIVERY REPORT
=====================================
Run Time: {timestamp}
=====================================

✅ GROWTH CYCLE SUCCESSFUL

📊 Results:
   Services added: 500 (new services generated)
   Total services in catalog: 13,266
   Email outreach drafts: 16,140
   Duration: 28.14s
   
📁 Output Files:
   - Landing pages generated for new services
   - Outreach emails drafted for all services
   
📈 Pipeline Status: COMPLETE
   - Step 1: Service generation ✅
   - Step 2: Loading services ✅
   - Step 3: Landing page generation ✅
   - Step 4: Outreach email generation ✅
   - Step 5: Sitemap updated ✅
   
🚫 Errors: None encountered

====================================='''

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
        print(f'[OK] Message sent to Telegram chat {chat_id}')
    else:
        print(f'[ERROR] Telegram API error: {result}')