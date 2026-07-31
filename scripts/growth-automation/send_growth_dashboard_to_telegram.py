#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone
from pathlib import Path
from collections import Counter

# Read the token from the environment
token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

# Paths
BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_JSON = BASE_DIR / 'app' / 'data' / 'servicesData.json'
SENT_LOG = BASE_DIR / 'app' / 'data' / 'outreach' / 'sent_log.json'
PAGES_DIR = BASE_DIR / 'app' / 'routes' / 'services'

def count_services():
    try:
        with open(SERVICES_JSON, 'r') as f:
            services = json.load(f)
        total = len(services)
        categories = Counter()
        for service in services:
            cat = service.get('category', 'unknown')
            categories[cat] += 1
        return total, dict(categories)
    except Exception as e:
        return 0, {}

def count_landing_pages():
    try:
        if PAGES_DIR.exists():
            pages = list(PAGES_DIR.glob('*.tsx'))
            sorted_pages = sorted(pages, key=lambda p: p.stat().st_mtime, reverse=True)
            recent = [p.name for p in sorted_pages[:5]]
            return len(pages), recent
        return 0, []
    except Exception as e:
        return 0, []

def count_hot_leads_sent():
    try:
        with open(SENT_LOG, 'r') as f:
            sent_log = json.load(f)
        return len(sent_log)
    except Exception as e:
        return 0

# Generate report data
total_services, categories = count_services()
growth_cycles = (total_services // 50) + 1 if total_services > 0 else 0
total_pages, recent_pages = count_landing_pages()
hot_leads_sent = count_hot_leads_sent()

sorted_categories = sorted(categories.items(), key=lambda x: x[1], reverse=True)[:10]
categories_str = '\n'.join([f"{i+1}. {cat}: {count} services" for i, (cat, count) in enumerate(sorted_categories)])

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f"""📊 GROWTH ORCHESTRATION DASHBOARD
{'='*50}

📦 SERVICE CATALOG
   Total services: {total_services}
   Growth cycles: {growth_cycles}

🏆 TOP 10 CATEGORIES BY SERVICE COUNT
{categories_str}

🌐 LANDING PAGE DEPLOYMENT
   Total pages: {total_pages}
   Recent pages: {', '.join(recent_pages) if recent_pages else 'None'}

📧 EMAIL OUTREACH
   Hot leads sent: {hot_leads_sent}

{'='*50}
Generated at: {timestamp}"""

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
                print(f'[✅] Telegram report sent to chat {chat_id}')
            else:
                print(f'[❌] Telegram API error: {result}')
    except Exception as e:
        print(f'[❌] Telegram send failed: {e}')
else:
    print('[⚠️] No Telegram token available - cannot send report')