import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque

BASE = "https://ziontechgroup.com"
visited = set()
results = []
broken = []

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; IntegrityBot/1.0; +ziontechgroup.com-check)"
})

frontier = deque([BASE])
max_pages = 300

while frontier and len(visited) < max_pages:
    url = frontier.popleft()
    if url in visited:
        continue
    visited.add(url)
    try:
        r = session.get(url, timeout=30, allow_redirects=True, stream=True)
        r.raise_for_status()
        status = r.status_code
        results.append((url, status))
        if status != 200:
            broken.append((url, status))
        # Parse HTML for internal links
        content_type = r.headers.get('Content-Type', '')
        if 'text/html' in content_type:
            r.raw.decode_content = True
            try:
                soup = BeautifulSoup(r.content, 'html.parser')
            except Exception:
                soup = None
            if soup:
                for a in soup.find_all('a', href=True):
                    href = a['href'].strip()
                    joined = urljoin(url, href)
                    parsed = urlparse(joined)
                    if parsed.netloc in (urlparse(BASE).netloc, ''):
                        if parsed.scheme in ('http', 'https'):
                            # Normalize
                            next_url = parsed._replace(fragment='').geturl()
                            if next_url not in visited and next_url not in frontier:
                                frontier.append(next_url)
    except requests.RequestException as e:
        status = getattr(e.response, 'status_code', None)
        if status is None:
            status = 'error'
        results.append((url, str(status)))
        broken.append((url, str(status)))

print("TOTAL_CRAWLED", len(visited))
print("HTTP_200_COUNT", sum(1 for _, s in results if s == 200))
print("BROKEN_COUNT", len(broken))
for i, (u, s) in enumerate(broken[:10], 1):
    print(f"BROKEN_{i:02d}", u, "=>", s)
