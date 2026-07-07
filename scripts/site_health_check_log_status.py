import requests
from datetime import datetime

URLS = [
    'https://ziontechgroup.com',
    'https://ziontechgroup.com/services/',
    'https://ziontechgroup.com/contact/',
    'https://ziontechgroup.com/tools/',
]

HEADERS = {'User-Agent': 'ZTG-HealthCheck/1.0'}
now = datetime.utcnow().isoformat() + 'Z'
results = []
changed = False
for url in URLS:
    try:
        r = requests.get(url, timeout=20, headers=HEADERS)
        status = r.status_code
        ok = status == 200
        results.append({'url': url, 'status': status, 'ok': ok, 'ts': now})
        if not ok:
            changed = True
    except Exception as e:
        results.append({'url': url, 'status': -1, 'ok': False, 'error': str(e), 'ts': now})
        changed = True

print('ZTG_SITE_HEALTH_CHECK_COMPLETE')
for item in results:
    print(f"{item.get('url')} => {item.get('status')}")
