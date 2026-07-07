import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json
from collections import deque
import os

report_path = '/tmp/site_integrity_report.json'
base = 'https://ziontechgroup.com'
domain = 'ziontechgroup.com'
visited = set()
broken = []
ok = 0
count = 0
MAX = 120
session = requests.Session()
session.headers.update({'User-Agent': 'SiteIntegrityCheck/1.0 (+https://ziontechgroup.com)'})

def normalize(url: str):
    p = urlparse(url)
    if p.hostname and p.hostname.replace('www.', '') != domain:
        return None
    host = p.hostname or domain
    path = p.path or '/'
    query = ('?' + p.query) if p.query else ''
    # ignore pure hash-only refs; keep them only if path differs
    return f"https://{host}{path}{query}"

def is_internal(href: str):
    if not href or href.startswith(('#', 'javascript:', 'mailto:', 'tel:')):
        return False
    n = normalize(urljoin(base, href))
    return n is not None

queue = deque([base])
seen = {base}
while queue and count < MAX:
    url = queue.popleft()
    nn = normalize(url)
    if not nn:
        continue
    if nn in visited:
        continue
    visited.add(nn)
    count += 1
    try:
        resp = session.get(nn, timeout=(8, 15), allow_redirects=True)
        status = resp.status_code
        final = resp.url
        if status == 200:
            ok += 1
            try:
                soup = BeautifulSoup(resp.text, 'html.parser')
                for a in soup.find_all('a', href=True):
                    nxt = urljoin(final, a['href'])
                    nxt_n = normalize(nxt)
                    if nxt_n and nxt_n not in seen:
                        seen.add(nxt_n)
                        queue.append(nxt_n)
            except Exception:
                pass
        else:
            reason = 'unknown'
            if status in (301,302,303,307,308):
                target = normalize(final)
                if target is None:
                    reason = 'external reference error'
                else:
                    reason = 'stale redirect'
            elif status in (404,410):
                reason = 'missing page'
            elif status >= 400:
                reason = 'http error'
            broken.append({'url': nn, 'status': status, 'final': final, 'reason': reason})
        print(json.dumps({'event':'visited','url':nn,'status':status,'final':final,'ok':status==200}), flush=True)
    except requests.exceptions.TooManyRedirects:
        broken.append({'url': nn, 'status': None, 'final': None, 'reason': 'external reference error'})
    except requests.exceptions.ConnectionError:
        broken.append({'url': nn, 'status': None, 'final': None, 'reason': 'connection error'})
    except requests.exceptions.Timeout:
        broken.append({'url': nn, 'status': None, 'final': None, 'reason': 'timeout'})
    except Exception as e:
        broken.append({'url': nn, 'status': None, 'final': None, 'reason': str(e)[:140]})
    time.sleep(0.04)

report = {
    'total': count,
    'ok': ok,
    'broken_count': len(broken),
    'broken': broken[:10]
}
with open(report_path, 'w') as f:
    json.dump(report, f)
print(json.dumps({'event':'done','total':count,'ok':ok,'broken_count':len(broken)}), flush=True)
for b in broken[:10]:
    print(json.dumps({'event':'broken',**b}), flush=True)
