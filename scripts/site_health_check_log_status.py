import requests
from datetime import datetime

URLS = [
    'https://ziontechgroup.com',
    'https://ziontechgroup.com/sitemap.xml',
    'https://ziontechgroup.com/robots.txt',
    'https://ziontechgroup.com/feed.xml',
    'https://ziontechgroup.com/health.json',
    'https://ziontechgroup.com/services/',
    'https://ziontechgroup.com/contact/',
    'https://ziontechgroup.com/tools/',
    'https://ziontechgroup.com/pricing/',
    'https://ziontechgroup.com/blog/',
    'https://ziontechgroup.com/about/',
    'https://ziontechgroup.com/ai-agents/',
    'https://ziontechgroup.com/ai-financial-services/',
    'https://ziontechgroup.com/ai-fraud-detection/',
    'https://ziontechgroup.com/services/ai-agents-autonomous/',
    'https://ziontechgroup.com/ai-chat-companion/',
]

HEADERS = {'User-Agent': 'ZTG-HealthCheck/1.0'}
now = datetime.utcnow().isoformat() + 'Z'
results = []
problems = []
for url in URLS:
    try:
        r = requests.get(url, timeout=20, headers=HEADERS, allow_redirects=False)
        status = r.status_code
        ok = status in (200, 301, 302)
        results.append({'url': url, 'status': status, 'ok': ok, 'ts': now})
        if not ok:
            problems.append({'url': url, 'status': status})
    except Exception as e:
        results.append({'url': url, 'status': -1, 'ok': False, 'error': str(e), 'ts': now})
        problems.append({'url': url, 'status': -1, 'error': str(e)})

print('ZTG_SITE_HEALTH_CHECK_COMPLETE')
for item in results:
    print(f"{item.get('url')} => {item.get('status')}")

if problems:
    print(f"PROBLEMS_DETECTED: {len(problems)}")
    for p in problems:
        print(p)
else:
    print('ALL_HEALTHY')
