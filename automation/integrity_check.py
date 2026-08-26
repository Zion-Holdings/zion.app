import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import defaultdict
import time

BASE_URL = 'https://ziontechgroup.com'
visited = set()
results = []

session = requests.Session()
session.headers.update({
    'User-Agent': 'Mozilla/5.0 (compatible; IntegrityBot/1.0; +https://ziontechgroup.com)'
})

def normalize_url(url):
    parsed = urlparse(url)
    return f"{parsed.scheme}://{parsed.netloc}{parsed.path.rstrip('/')}"

def is_internal(url):
    parsed = urlparse(url)
    base_parsed = urlparse(BASE_URL)
    return parsed.netloc == base_parsed.netloc

def crawl(url):
    normalized = normalize_url(url)
    if normalized in visited:
        return
    visited.add(normalized)
    
    try:
        resp = session.get(url, timeout=20, allow_redirects=True)
        final_url = normalize_url(resp.url)
        status = resp.status_code
        results.append((final_url, status))
        
        # Parse page for internal links if we got a good response
        if status == 200 and 'text/html' in resp.headers.get('Content-Type', ''):
            soup = BeautifulSoup(resp.text, 'html.parser')
            for tag in soup.find_all('a', href=True):
                absolute = urljoin(final_url, tag['href'])
                if is_internal(absolute):
                    crawl(absolute)
    except Exception as e:
        visited.add(normalized)
        results.append((normalized, f'ERROR: {type(e).__name__}: {str(e)[:100]}'))
    finally:
        time.sleep(0.1)

print(f'Starting crawl of {BASE_URL}...')
crawl(BASE_URL)

total = len(results)
count_200 = sum(1 for _, s in results if s == 200)
broken = [(url, s) for url, s in results if s != 200]
broken_count = len(broken)

print(f'\n=== SITE INTEGRITY REPORT ===')
print(f'Total crawled: {total}')
print(f'HTTP 200 count: {count_200}')
print(f'Broken count: {broken_count}')
print()

if broken_count > 0:
    print('Classifying broken URLs...')
    for url, status in broken[:20]:
        if isinstance(status, str) and 'ERROR' in status:
            classification = 'external reference error'
        elif isinstance(status, int) and 300 <= status < 400:
            classification = 'stale redirect'
        elif isinstance(status, int) and status == 404:
            classification = 'missing page'
        elif isinstance(status, int):
            classification = f'missing page ({status})'
        else:
            classification = 'external reference error'
        print(f'  [{classification}] {url} -> {status}')
else:
    print('No broken links found!')

print(f'\nFirst 10 broken URLs:')
for entry in broken[:10]:
    print(f'  {entry[0]} -> {entry[1]}')
