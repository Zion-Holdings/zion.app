import urllib.request, urllib.error, json, time

paths = [
    '/',
    '/services/',
    '/tools/',
    '/contact/',
    '/pricing/',
    '/solutions/',
    '/blog/',
    '/about/',
]

results = []
for p in paths:
    url = f'https://ziontechgroup.com{p}'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=20) as r:
            code = r.getcode()
            final = r.geturl()
        results.append({'path': p, 'status': code, 'final_url': final})
        print(f"{code} {p}")
    except urllib.error.HTTPError as e:
        results.append({'path': p, 'status': e.code, 'final_url': ''})
        print(f"ERR {e.code} {p}")
    except Exception as e:
        results.append({'path': p, 'status': 'EXCEPTION', 'final_url': '', 'error': str(e)})
        print(f"EXC {p}: {e}")
    time.sleep(0.5)

with open('/c/Users/Zion/tmp/zion-gh-publish/crawl_results.json', 'w') as f:
    json.dump(results, f, indent=2)
print('---DONE---')
