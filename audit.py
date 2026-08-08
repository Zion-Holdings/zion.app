import os, urllib.request, urllib.error, ssl
ctx = ssl.create_default_context()
path = os.path.join(os.path.dirname(__file__), '..', '..', 'AppData', 'Local', 'Temp', 'zion_urls.txt')
path = os.path.abspath(path)
with open(path) as f:
    urls = [l.strip() for l in f if l.strip()]
broken = []
for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15, context=ctx) as r:
            code = r.getcode()
            if code != 200:
                broken.append((u, code))
    except urllib.error.HTTPError as e:
        broken.append((u, str(e.code)))
    except Exception as e:
        broken.append((u, str(e)[:80]))
print(f'Checked {len(urls)} URLs')
print(f'Broken: {len(broken)}')
for u,c in broken:
    print(f'{c} {u}')
