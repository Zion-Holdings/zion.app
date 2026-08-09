import urllib.request, urllib.error, ssl, sys, concurrent.futures

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('urls.txt') as f:
    urls = f.read().strip().split('\n')[:500]

def check(url):
    try:
        req = urllib.request.Request(url, method='HEAD')
        resp = urllib.request.urlopen(req, timeout=10, context=ctx)
        return url, resp.status, None
    except urllib.error.HTTPError as e:
        return url, e.code, None
    except Exception as e:
        return url, 'ERR', str(e)[:60]

broken = []
done = 0
with concurrent.futures.ThreadPoolExecutor(max_workers=20) as pool:
    futures = {pool.submit(check, url): url for url in urls}
    for future in concurrent.futures.as_completed(futures):
        url, code, err = future.result()
        done += 1
        if code != 200:
            broken.append((url, code))
        if done % 100 == 0:
            print(f'  checked {done}/{len(urls)}', file=sys.stderr)

print(f'Total checked: {done}')
print(f'Broken: {len(broken)}')
for url, code in broken:
    print(f'{code} {url}')
