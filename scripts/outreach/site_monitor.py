import requests
from pathlib import Path
import json
from datetime import datetime

BASE = Path('C:/Users/Zion/tmp/zion-clone-test/outreach_monitor')
BASE.mkdir(parents=True, exist_ok=True)
LOG = BASE / 'site_monitor_log.jsonl'
STATE = BASE / 'site_monitor_state.json'

paths = [
    '/',
    '/services',
    '/about',
    '/contact',
    '/pricing',
    '/blog',
    '/ai-services',
    '/free-ai-tools',
    '/ai-services-pricing',
    '/privacy',
    '/terms',
]

results = []
ts = int(datetime.now().timestamp())
for p in paths:
    try:
        r = requests.get(f'https://ziontechgroup.com{p}', timeout=15, allow_redirects=True)
        results.append({'path': p, 'status': r.status_code, 'final': r.url})
    except Exception as e:
        results.append({'path': p, 'status': 'ERR', 'final': str(e)})

with LOG.open('a', encoding='utf-8') as f:
    for r in results:
        f.write(json.dumps({'ts': ts, **r}) + '\n')

STATE.write_text(json.dumps({'last_check': ts, 'results': results}, indent=2), encoding='utf-8')
print(json.dumps({'ts': ts, 'results': results}, indent=2))
