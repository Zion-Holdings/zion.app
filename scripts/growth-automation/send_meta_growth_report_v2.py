#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

# Read the optimization report
with open('/Users/klebergarciaalcatrao/zion-support.github.io/conversions/optimization_report.json', 'r') as f:
    report = json.load(f)

# Read the meta_growth_report.json for email count
try:
    with open('/Users/klebergarciaalcatrao/scripts/growth-automation/meta_growth_report.json', 'r') as f:
        mg_report = json.load(f)
        emails_processed = mg_report.get('metrics', {}).get('total_emails_processed', 0)
except:
    emails_processed = 0

health_score = "HEALTHY" if report.get('system_health') == 'healthy' else "WARNING"

message = f"""META-GROWTH INTELLIGENCE SYSTEM - RUN COMPLETE

=====================================
ANALYSIS RESULTS
=====================================

Total services in catalog: {report['service_count']}
Total emails processed: {emails_processed}
Health score: {health_score}
Recommendations generated: {len(report['recommendations'])}

=====================================
OPTIMIZATIONS APPLIED
=====================================

Execution mode: {report['execution_mode']}
Runtime: {report['execution_time_seconds']}s
Velocity: {report['velocity_items_per_second']} items/sec
Unique categories: {len(report['category_distribution'])}

=====================================
PRIORITY TARGETS (< 10 services/category)
=====================================

Top 5 under-represented categories:
- government: 1 service
- legal: 1 service
- real-estate: 1 service
- retail: 1 service
- it: 1 service

Total priority targets: {len(report['priority_generation_targets'])}

=====================================
RECOMMENDATIONS
=====================================

[HIGH] Expand under-represented categories
Action: Focus generation on: government, legal, real-estate, retail, it

[MEDIUM] Focus on high-performing categories
Action: Maintain current generation velocity for top categories
Top categories: ai (49), cloud (47), automation (44), security (41), data (41)

=====================================
TOP PERFORMING CATEGORIES
=====================================

ai: 49 services
cloud: 47 services
automation: 44 services
security: 41 services
data: 41 services
quantum: 31 services
iot: 31 services
agritech: 34 services

=====================================
Run completed at: {timestamp}
================================="""

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
                print("[OK] Message sent to Telegram chat 8435383377")
            else:
                print(f"[ERROR] Telegram API error: {result}")
    except Exception as e:
        print(f"[ERROR] Telegram send failed: {e}")
else:
    print("[WARNING] No Telegram token available")