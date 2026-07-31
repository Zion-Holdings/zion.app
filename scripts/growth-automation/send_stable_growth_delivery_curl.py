#!/usr/bin/env python3
"""Send Stable Growth Engine results to Telegram using curl."""
import json
import subprocess
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

# Try to read token from .env file
token = None
try:
    with open('/Users/klebergarciaalcatrao/.env', 'r') as f:
        for line in f:
            if line.startswith('TELEGRAM_BOT_TOKEN='):
                token = line.split('=', 1)[1].strip()
                break
except Exception:
    pass

if token:
    # Use curl to send the message
    cmd = [
        'curl', '-s', '-X', 'POST',
        f'https://api.telegram.org/bot{token}/sendMessage',
        '-d', f'chat_id=8435383377',
        '-d', f'text={message}',
        '-d', 'parse_mode=HTML'
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    print(result.stdout)
else:
    print("[⚠️] No Telegram token available")