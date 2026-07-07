#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
from collections import deque

base = 'https://ziontechgroup.com'
seen = set()
broken = []
count_200 = 0
count_ok = 0
total = 0
queue = deque([base])

session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0 (compatible; SiteIntegrity/1.0)'})

def classify(url, status):
    if 300 <= status < 400 and status != 200:
        return 'stale_redirect'
    elif status == 404:
        return 'missing_page'
    else:
        return 'external_reference_error'

while queue and total < 200:
    url = queue.popleft()
    if url in seen:
        continue
    seen.add(url)
    try:
        r = session.get(url, timeout=20, allow_redirects=False)
        status = r.status_code
        total += 1
        if status == 200:
            count_200 += 1
            count_ok += 1
            soup = BeautifulSoup(r.text, 'html.parser')
            for tag in soup.find_all('a', href=True):
                href = tag['href']
                next_url = urljoin(url, href)
                p = urlparse(next_url)
                if p.scheme not in ('http', 'https'):
                    continue
                if p.netloc and p.netloc != urlparse(base).netloc:
                    continue
                clean = next_url.split('#')[0].split('?')[0]
                if clean and clean not in seen:
                    queue.append(clean)
        else:
            broken.append((url, status, classify(url, status)))
        time.sleep(0.3)
    except Exception as e:
        total += 1
        broken.append((url, str(e), 'external_reference_error'))

print('TOTAL_CRAWLED', total)
print('HTTP_200', count_200)
print('BROKEN', len(broken))
print('---BROKEN_URLS---')
for url, status, kind in broken[:10]:
    print(f'{url} | {status} | {kind}')
