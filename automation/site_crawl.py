import requests
from bs4 import BeautifulSoup
import urllib.parse
import time

BASE = 'https://ziontechgroup.com'
visited = set()
to_visit = [BASE]
results = []  # list of dicts
broken_examples = []

session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0 (compatible; SiteChecker/1.0)'})

def classify(status):
    if status in (301, 302, 307, 308):
        return 'stale redirect'
    elif status == 404:
        return 'missing page'
    elif status is None:
        return 'external reference error'
    elif status >= 400:
        if status in (403,):
            return 'missing page'
        return f'HTTP {status}'
    return 'ok'

def normalize(url):
    parsed = urllib.parse.urlparse(url)
    netloc = parsed.netloc
    if netloc.startswith('www.'):
        netloc = netloc[4:]
    if ':' in netloc:
        netloc = netloc.split(':')[0]
    path = parsed.path.rstrip('/')
    if not path:
        path = '/'
    new = urllib.parse.urlunparse((
        parsed.scheme,
        netloc,
        path,
        parsed.params,
        parsed.query,
        ''  # drop fragment
    ))
    return new

def is_internal(url):
    parsed = urllib.parse.urlparse(url)
    netloc = parsed.netloc.lower()
    if netloc.startswith('www.'):
        netloc = netloc[4:]
    if ':' in netloc:
        netloc = netloc.split(':')[0]
    return netloc in ('ziontechgroup.com', '')

def find_links(html, current_url):
    soup = BeautifulSoup(html, 'html.parser')
    links = set()
    for tag in soup.find_all('a', href=True):
        href = tag['href'].strip()
        if href.startswith(('#', 'mailto:', 'tel:', 'javascript:')):
            continue
        absolute = urllib.parse.urljoin(current_url, href)
        normalized = normalize(absolute)
        links.add(normalized)
    return links

while to_visit and len(visited) < 500:
    url = to_visit.pop(0)
    if url in visited:
        continue
    visited.add(url)
    status = None
    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        status = resp.status_code
    except Exception:
        status = None

    cls = classify(status)
    results.append({'url': url, 'status': status, 'class': cls})

    if cls != 'ok' and len(broken_examples) < 20:
        broken_examples.append({'url': url, 'status': status, 'class': cls})

    if status == 200:
        try:
            links = find_links(resp.text, url)
            for l in links:
                if is_internal(l) and l not in visited and l not in to_visit:
                    to_visit.append(l)
        except Exception:
            pass

    time.sleep(0.1)

total = len(results)
ok_count = sum(1 for r in results if r['class'] == 'ok')
broken_count = sum(1 for r in results if r['class'] != 'ok')

print(f"BASE: {BASE}")
print(f"TOTAL_CRAWLED: {total}")
print(f"HTTP_200_COUNT: {ok_count}")
print(f"BROKEN_COUNT: {broken_count}")
if broken_examples:
    print("FIRST_10_BROKEN:")
    for i, item in enumerate(broken_examples[:10], 1):
        s = item['status'] if item['status'] is not None else 'ERR'
        print(f"  {i}. {item['url']} → {s} [{item['class']}]")
else:
    print("FIRST_10_BROKEN: none")
