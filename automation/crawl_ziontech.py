#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
from collections import deque

BASE = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE).netloc
MAX_PAGES = 1000
TIMEOUT = 15
DELAY = 0.5

session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; ZionCrawler/1.0)"})

visited = set()
to_crawl = deque([BASE])
broken = []
http200 = 0
total_crawled = 0

def normalize(url):
    p = urlparse(url)
    return f"{p.scheme}://{DOMAIN}{p.path.rstrip('/')}/" if p.netloc == DOMAIN else None

while to_crawl and total_crawled < MAX_PAGES:
    url = to_crawl.popleft()
    if url in visited:
        continue
    visited.add(url)

    try:
        r = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        total_crawled += 1

        final_url = r.url
        status = r.status_code

        if status == 200:
            http200 += 1
        elif status >= 400:
            cls = "missing page"
            if 300 <= status < 400:
                cls = "stale redirect"
            broken.append((url, status, cls))

        if "text/html" not in r.headers.get("Content-Type", ""):
            continue

        soup = BeautifulSoup(r.text, "html.parser")
        for a in soup.find_all("a", href=True):
            href = a["href"].strip()
            if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                continue
            joined = urljoin(final_url, href)
            parsed = urlparse(joined)
            if parsed.netloc == DOMAIN:
                norm = normalize(joined)
                if norm and norm not in visited:
                    to_crawl.append(norm)

        time.sleep(DELAY)

    except requests.exceptions.RequestException as e:
        total_crawled += 1
        cls = "missing page"
        reason = str(e)
        if "NameResolutionError" in reason or "getaddrinfo failed" in reason or "Connection refused" in reason:
            cls = "external reference error"
        elif "MissingSchema" in reason or "InvalidSchema" in reason:
            cls = "external reference error"
        broken.append((url, "ERR", cls))

print("=== Zion Tech Group Site Integrity Check ===")
print(f"Total crawled: {total_crawled}")
print(f"HTTP 200 count: {http200}")
print(f"Broken count: {len(broken)}")
if broken:
    print("\nFirst 10 broken URLs:")
    for i, (u, s, c) in enumerate(broken[:10], 1):
        print(f"{i:2}. [{s}] {u}  ({c})")
else:
    print("\nNo broken URLs found.")
