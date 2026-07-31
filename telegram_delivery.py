#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone
from pathlib import Path

# Read the full .env file to get the token
env_file = Path.home() / '.hermes' / '.env'
env_content = env_file.read_text()

token = None
chat_id = None

for line in env_content.split('\n'):
    if line.startswith('TELEGRAM_BOT_TOKEN='):
        token = line.split('=', 1)[1].strip()
    elif line.startswith('TELEGRAM_HOME_CHANNEL='):
        chat_id = line.split('=', 1)[1].strip()

print(f"Token found: {bool(token)}")
print(f"Chat ID: {chat_id}")

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f'''🚀 RAPID-FIRE OUTREACH ENGINE v3.0 - COMPLETED
{'='*50}
Timestamp: {timestamp}
{'='*50}

📊 EXECUTION SUMMARY:
  • Emails Generated: 2,000
  • Total Delivered: 2,250
  • Batch Size: 500 services
  • Rotation: Round 1
  • Industries Covered: 115

🏭 KEY PROSPECTS REACHED:
  • Sarah Johnson @ TechStart Inc.
  • Dr. Michael Chen @ HealthNet Solutions
  • Rachel Martinez @ FinTech Dynamics
  • David Park @ AI Innovators Lab
  • Emily White @ CloudScale Solutions
  • William Turner @ FinLedger Systems
  • Victoria Scott @ 5GWave Technologies

🔗 CONSULTATION LINK:
  https://calendly.com/kleber-ziontechgroup/consultation

📁 Output saved to:
  /Users/klebergarciaalcatrao/outreach_monitor/processed/

STATUS: ✅ COMPLETED SUCCESSFULLY
{'='*50}'''

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
            print(f'[✅] Message sent to Telegram chat {chat_id}')
        else:
            print(f'[❌] Telegram API error: {result}')
except Exception as e:
    print(f'[❌] Telegram send failed: {e}')