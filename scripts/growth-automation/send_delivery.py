#!/usr/bin/env python3
"""Send Hyper-Accelerated Growth Engine results to Telegram."""
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

# Read the results
result_file = '/tmp/hyper_growth_result.json'
with open(result_file, 'r') as f:
    result = json.load(f)

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'  # User's Telegram chat ID

timestamp = result.get('timestamp', datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC'))
growth = result.get('growth', {})
services_added = growth.get('services_added', 0)
total_services = growth.get('total_services', 0)
added_services = growth.get('added_services', [])

# Build the message
message = f"""🚀 HYPER-ACCELERATED GROWTH ENGINE - COMPLETED
    
=====================================
Run Time: {timestamp}
=====================================

✅ GROWTH CYCLE SUCCESSFUL
   Services requested: 30
   Services added: {services_added}
   Total services: {total_services}
    
📁 Output Files:
   - /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json

📦 New Services Discovered:
"""

for i, svc in enumerate(added_services, 1):
    message += f"   {i:2d}. {svc}\n"

message += """
📊 Pipeline Status: COMPLETE
================================="""

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
    print("[⚠️] No Telegram token available")