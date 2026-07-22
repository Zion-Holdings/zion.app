import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque
import time

BASE = 'https://ziontechgroup.com'
visited = set()
queue = deque([BASE])
internal = set()
results = []
broken = []

session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0 (compatible; IntegrityCheck/1.0)'})

def is_internal(href, base):
    if not href or href.startswith(('#', 'javascript:', 'mailto:', 'tel:')):
        return False
    url = urljoin(base, href)
    p = urlparse(url)
    return p.netloc == urlparse(BASE).netloc and p.scheme in ('http', 'https')

def classify_status(r):
    if 300 <= r.status_code < 400:
        loc = r.headers.get('Location', '')
        p = urlparse(loc)
        if p.netloc == urlparse(BASE).netloc:
            return 'stale redirect'
        return 'stale redirect'
    elif r.status_code == 404:
        return 'missing page'
    elif r.status_code >= 400:
        return f'HTTP {r.status_code}'
    return None

while queue and len(visited) < 500:
    url = queue.popleft()
    if url in visited:
        continue
    visited.add(url)
    try:
        r = session.get(url, timeout=20, allow_redirects=True)
        final_url = r.url
        final_path = urlparse(final_url).path
        
        ct = r.headers.get('Content-Type', '')
        if 'text/html' not in ct and 'application/xhtml' not in ct:
            continue
        
        results.append((url, r.status_code, final_url))
        classification = classify_status(r)
        if classification:
            broken.append((url, r.status_code, classification, final_url))
        
        soup = BeautifulSoup(r.text, 'html.parser')
        for a in soup.find_all('a', href=True):
            href = a['href']
            if is_internal(href, final_url):
                target = urljoin(final_url, href)
                parsed = urlparse(target)
                target = f"{parsed.scheme}://{parsed.netloc}{parsed.path}".rstrip('/') + ('/' if parsed.path != '/' else '')
                if target not in internal and target not in visited:
                    internal.add(target)
                    queue.append(target)
    except requests.exceptions.RequestException as e:
        broken.append((url, None, str(e.__class__.__name__), str(e)))
    time.sleep(0.2)

print('=== ZionTech Site Integrity Check ===')
print(f'Base: {BASE}')
print(f'Queued: {len(internal) + len(visited)} | Crawled: {len(visited)}')
print(f'HTTP 200: {sum(1 for _, s, _ in results if s == 200)}')
print(f'Broken count: {len(broken)}')
print()
if broken:
    print('First 10 broken URLs:')
    for i, (url, status, classification, final) in enumerate(broken[:10], 1):
        print(f'{i}. {url}')
        print(f'   Status: {status} | Classification: {classification}')
        if final and final != url:
            print(f'   Final URL: {final}')
else:
    print('No broken links detected.')
