#!/usr/bin/env python3
"""Send Stable Growth Engine results to Telegram."""
import os
import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone

# Read the results
result_file = '/tmp/stable_growth_delivery.json'
with open(result_file, 'r') as f:
    result = json.load(f)

timestamp = result.get('timestamp', datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC'))
services_added = result.get('services_added', 0)
total_services = result.get('total_services', 0)
added_services = result.get('added_services', [])

# Build the message
message = f"""🚀 STABLE GROWTH ENGINE - COMPLETED
    
=====================================
Run Time: {timestamp}
=====================================

✅ GROWTH CYCLE SUCCESSFUL
   Services requested: 5
   Services added: {services_added}
   Total services: {total_services}
   
📁 Output Files:
   - /Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json

📦 New Services Added:
"""

for i, svc in enumerate(added_services, 1):
    message += f"   {i:2d}. {svc}\n"

message += """
📊 Pipeline Status: COMPLETE
================================="""

chat_id = '8435383377'

# Try multiple token sources
token = None

# Method 1: Environment variable
token = os.getenv('TELEGRAM_BOT_TOKEN', None)

# Method 2: .env file (with proper handling)
if not token:
    try:
        with open('/Users/klebergarciaalcatrao/.env', 'r') as f:
            content = f.read()
            for line in content.split('\n'):
                if line.startswith('TELEGRAM_BOT_TOKEN='):
                    token = line.split('=', 1)[1].strip().strip('"\'')
                    break
    except Exception as e:
        print(f"[⚠️] Could not read .env: {e}")

# Method 3: Try sourcing the .env file
if not token:
    try:
        import subprocess
        result = subprocess.run(
            ['bash', '-c', 'source /Users/klebergarciaalcatrao/.env && echo $TELEGRAM_BOT_TOKEN'],
            capture_output=True, text=True
        )
        token = result.stdout.strip() if result.stdout.strip() else None
    except Exception as e:
        print(f"[⚠️] Could not source .env: {e}")

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
            result_api = json.loads(response.read())
            if result_api.get('ok'):
                print(f"[✅] Message sent to Telegram chat {chat_id}")
            else:
                print(f"[❌] Telegram API error: {result_api}")
    except Exception as e:
        print(f"[❌] Telegram send failed: {e}")
else:
    print("[⚠️] No Telegram token available - logging to file")
    # Log to file as mock fallback
    with open('/tmp/telegram_stable_growth.log', 'a') as f:
        f.write(f"[{timestamp}] {message}\n")
    print(f"[📝] Message logged to /tmp/telegram_stable_growth.log")