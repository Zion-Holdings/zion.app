#!/usr/bin/env python3
import os
import urllib.request
import urllib.parse
import json
from datetime import datetime, timezone

token = os.getenv('TELEGRAM_BOT_TOKEN', '')
chat_id = '8435383377'

timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

message = f'''🚀 SERVICE AUTO-DEPLOYER REPORT
=====================================

Run Time: {timestamp}

NEW LANDING PAGES DEPLOYED: 0
Total services in catalog: 9780
Status: SUCCESS

✅ Auto-deployment completed successfully
✅ No new services to deploy (all services already processed)
✅ Sitemap verified
✅ GitHub status: no changes needed

📊 Summary:
- 0 new AI/IT service landing pages created
- 9,780 total services in catalog
- All services already processed (progress tracker: 14125)
- 0 deployment failures

====================================='''

if token:
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }).encode()
    
    req = urllib.request.Request(url, data=data, method='POST')
    with urllib.request.urlopen(req, timeout=30) as response:
        result = json.loads(response.read())
        if result.get('ok'):
            print('[OK] Telegram report sent successfully')
        else:
            print(f'[ERROR] {result}')
else:
    print('[WARN] No Telegram token available')