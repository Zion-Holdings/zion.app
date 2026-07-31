#!/usr/bin/env python3
import urllib.request
import urllib.parse
import json
import os
from datetime import datetime, timezone

# Get the token from environment
token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

print(f'Token available: {bool(token)}')
print(f'Token length: {len(token)}')
print(f'Chat ID: {chat_id}')

# Load the report
report_path = '/Users/klebergarciaalcatrao/scripts/growth-automation/meta_growth_report.json'
with open(report_path, 'r') as f:
    report = json.load(f)

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

# Build the message
message_lines = []
message_lines.append('🧠 META-GROWTH INTELLIGENCE SYSTEM - REAL-TIME OPTIMIZATION REPORT')
message_lines.append('')
message_lines.append('=====================================')
message_lines.append('📊 SERVICE CATALOG METRICS')
message_lines.append('=====================================')
message_lines.append(f'Total services in catalog: {report.get("service_count", 0)}')
message_lines.append(f'Unique categories: {len(report.get("categories", {}))}')
message_lines.append(f'Popular services: {report.get("popularity", {}).get("popular", 0)} ({report.get("popularity", {}).get("popularity_rate", 0)}%)')
message_lines.append('')
message_lines.append('=====================================')
message_lines.append('📈 GROWTH METRICS')
message_lines.append('=====================================')
message_lines.append(f'Total cycles completed: {report.get("metrics", {}).get("total_cycles", 0)}')
message_lines.append(f'Services added: {report.get("metrics", {}).get("total_services_added", 0)}')
message_lines.append(f'Emails found: {report.get("metrics", {}).get("total_emails_found", 0)}')
message_lines.append(f'Emails processed: {report.get("metrics", {}).get("total_emails_processed", 0)}')
message_lines.append(f'Sitemap updates: {report.get("metrics", {}).get("total_sitemap_updates", 0)}')
message_lines.append(f'Errors detected: {len(report.get("metrics", {}).get("errors", []))}')
message_lines.append('')
message_lines.append('=====================================')
message_lines.append('⚠️ BOTTLENECKS IDENTIFIED')
message_lines.append('=====================================')

bottlenecks = report.get('bottlenecks', [])
if bottlenecks:
    for bn in bottlenecks:
        message_lines.append(f'[{bn.get("severity", "unknown").upper()}] {bn.get("type", "unknown")}: {bn.get("description", "N/A")}')
else:
    message_lines.append('None detected')

message_lines.append('')
message_lines.append('=====================================')
message_lines.append('💡 RECOMMENDATIONS GENERATED')
message_lines.append('=====================================')

recommendations = report.get('recommendations', [])
for i, rec in enumerate(recommendations, 1):
    message_lines.append(f'{i}. [{rec.get("priority", "unknown").upper()}] {rec.get("title", "N/A")}')
    message_lines.append(f'   → {rec.get("action", "N/A")}')

message_lines.append('')
message_lines.append('=====================================')
message_lines.append('🔧 OPTIMIZATIONS APPLIED')
message_lines.append('=====================================')
message_lines.append(f'- Analyzed {report.get("service_count", 0)} services across {len(report.get("categories", {}))} categories')
message_lines.append(f'- Identified {len(bottlenecks)} bottlenecks in the growth pipeline')
message_lines.append(f'- Generated {len(recommendations)} optimization recommendations')
message_lines.append('')
message_lines.append('=====================================')
message_lines.append('🏥 SYSTEM HEALTH')
message_lines.append('=====================================')
message_lines.append(f'Status: {report.get("system_health", "unknown").upper()}')
message_lines.append('')
message_lines.append('=====================================')
message_lines.append(f'Report generated: {timestamp}')
message_lines.append('Delivered to: telegram:8435383377')

message = '\n'.join(message_lines)

print('\n--- MESSAGE TO SEND ---')
print(message)
print('\n--- END MESSAGE ---')

# Try to send
if token:
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
                print(f'\n[OK] Message sent to Telegram chat {chat_id}')
            else:
                print(f'\n[ERROR] Telegram API error: {result}')
    except Exception as e:
        print(f'\n[ERROR] Telegram send failed: {e}')
else:
    print('\n[WARNING] No Telegram token available')