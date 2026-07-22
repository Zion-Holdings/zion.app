import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json

BASE = "https://ziontechgroup.com"
MAX_PAGES = 100
NETLOC = urlparse(BASE).netloc

headers = {
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0)",
    "Accept": "text/html,application/xhtml+xml",
}

def classify(status):
    if status is None:
        return "external reference error"
    if 300 <= status < 400:
        return "stale redirect"
    if status == 404:
        return "missing page"
    return "other HTTP error"

def fetch_status(url):
    try:
        r = requests.head(url, headers=headers, timeout=15, allow_redirects=True)
        if r.status_code == 405 or r.status_code // 100 == 5:
            r = requests.get(url, headers=headers, timeout=15, allow_redirects=True)
        return r.status_code, r.url
    except Exception as e:
        return None, None

# Crawl
queue = [BASE]
visited = {BASE}
results = {}  # url -> status_code

while queue and len(visited) <= MAX_PAGES:
    url = queue.pop(0)
    try:
        resp = requests.get(url, headers=headers, timeout=15, allow_redirects=True)
        status = resp.status_code
        final_url = resp.url
    except Exception as e:
        results[url] = None
        continue

    if url not in results:
        results[url] = status

    content_type = resp.headers.get("Content-Type", "")
    if "text/html" in content_type.lower():
        soup = BeautifulSoup(resp.text, "html.parser")
        for a in soup.find_all("a", href=True):
            href = a["href"].strip()
            if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
                continue
            absolute = urljoin(final_url, href)
            p = urlparse(absolute)
            if p.netloc and p.netloc != NETLOC:
                continue
            normalized = p._replace(fragment="").geturl()
            if normalized not in visited and len(visited) < MAX_PAGES:
                visited.add(normalized)
                queue.append(normalized)

    time.sleep(0.15)

# Now verify all visited URLs
http_200 = 0
broken = []

for u in list(visited):
    if u in results:
        status = results[u]
    else:
        status, _ = fetch_status(u)
        results[u] = status
    if status == 200:
        http_200 += 1
    elif status is None or status >= 400:
        broken.append((u, status, classify(status)))

output = {
    "base": BASE,
    "total_crawled": len(visited),
    "http_200_count": http_200,
    "broken_count": len(broken),
    "first_10_broken": [
        {"url": u, "status": s, "classification": c}
        for u, s, c in broken[:10]
    ],
}

print(json.dumps(output, indent=2))
