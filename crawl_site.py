import urllib.request
import urllib.error
import ssl
import re
from collections import deque
from urllib.parse import urljoin, urlparse

BASE = 'https://ziontechgroup.com'
MAX_PAGES = 120
MAX_DEPTH = 2
TIMEOUT = 15

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

visited = set()
queue = deque([(BASE, 0)])
broken = []
assets_missing = []
redirects = []
summary = {'pages': 0, 'broken_links': 0, 'missing_assets': 0, 'redirects': 0}

while queue and len(visited) < MAX_PAGES:
    url, depth = queue.popleft()
    if url in visited:
        continue
    visited.add(url)
    summary['pages'] += 1
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        resp = urllib.request.urlopen(req, timeout=TIMEOUT, context=ctx)
        final = resp.geturl()
        code = resp.getcode()
        if final != url:
            redirects.append((url, final, code))
            summary['redirects'] += 1
        if code >= 400:
            broken.append((url, code))
            summary['broken_links'] += 1
            continue
        if depth >= MAX_DEPTH:
            continue
        html = resp.read().decode('utf-8', errors='ignore')
        links = re.findall(r'(?:href|src)=["\']([^"\']+)["\']', html, re.I)
        for link in links:
            if link.startswith(('javascript:', '#', 'mailto:', 'tel:')):
                continue
            abs_url = urljoin(url, link)
            parsed = urlparse(abs_url)
            if parsed.netloc in ('', 'ziontechgroup.com', 'www.ziontechgroup.com'):
                if abs_url not in visited:
                    queue.append((abs_url, depth + 1))
        assets = re.findall(r'(?:href|src)=["\'](/[^"\']+)["\']', html, re.I)
        for asset in assets:
            if asset.startswith('//'):
                continue
            asset_url = urljoin(url, asset)
            try:
                a_req = urllib.request.Request(asset_url, headers={'User-Agent': 'Mozilla/5.0'})
                a_resp = urllib.request.urlopen(a_req, timeout=TIMEOUT, context=ctx)
                if a_resp.getcode() >= 400:
                    assets_missing.append((asset_url, a_resp.getcode()))
                    summary['missing_assets'] += 1
            except urllib.error.HTTPError as e:
                assets_missing.append((asset_url, e.code))
                summary['missing_assets'] += 1
            except Exception:
                assets_missing.append((asset_url, 'ERR'))
                summary['missing_assets'] += 1
    except Exception as e:
        code = getattr(e, 'code', 'ERR')
        broken.append((url, code))
        summary['broken_links'] += 1

print('CRAWL SUMMARY')
for k, v in summary.items():
    print(f'{k}: {v}')
print('---')
print('BROKEN LINKS')
for item in broken[:100]:
    print(item)
print('---')
print('MISSING ASSETS')
for item in assets_missing[:100]:
    print(item)
print('---')
print('REDIRECTS')
for item in redirects[:100]:
    print(item)
