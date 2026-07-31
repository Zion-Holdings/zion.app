#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f"""META-GROWTH INTELLIGENCE SYSTEM - RUN COMPLETE

=====================================
ANALYSIS RESULTS
=====================================

Total services in catalog: 14,055
Total emails processed: 0
Health score: HEALTHY
Recommendations generated: 6

=====================================
BOTTLENECKS IDENTIFIED
=====================================

[HIGH] Low Velocity - Action: Increase batch size or optimize generation algorithm

[MEDIUM] Category Skew (1778 vs 4) - Action: Balance service generation across categories

[HIGH] Catalog Instability (0 to 69400) - Action: Fix JSON corruption issues causing catalog resets

=====================================
TOP RECOMMENDATIONS
=====================================

[HIGH] Implement service deduplication - Action: Run JSON deduplicator on servicesData.json

[MEDIUM] Focus on high-performing categories - Top: ai (1778), it (1017), automation (602), cloud (596), security (572)

[HIGH] Increase batch size - Current: 0.0 services/cycle

[MEDIUM] Optimize generation velocity - Action: Increase batch size from 10 to 50-100 services per cycle

=====================================
Run completed at: {timestamp}
====================================="""

if token:
    try:
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'Markdown'
        }).encode()
        
        req = urllib.request.Request(url, data=data, method='POST')
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read())
            if result.get('ok'):
                print("[OK] Message sent to Telegram")
            else:
                print(f"[ERROR] Telegram API error: {result}")
    except Exception as e:
        print(f"[ERROR] Telegram send failed: {e}")
else:
    print("[WARNING] No Telegram token available")