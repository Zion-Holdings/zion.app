
#!/usr/bin/env python3
"""Collect all broken URLs for analysis."""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
import time

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 300
TIMEOUT = 15
DELAY = 0.25
IGNORE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
                     '.css', '.js', '.woff', '.woff2', '.ttf', '.eot',
                     '.pdf', '.doc', '.docx', '.zip', '.mp4', '.mp3'}

session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0 (compatible; SiteIntegrityChecker/1.0)'})

visited = set()
to_visit = [BASE_URL]
broken = []

while to_visit and len(visited) < MAX_PAGES:
    url = to_visit.pop(0)
    norm = urldefrag(url)[0].rstrip('/') or urldefrag(url)[0]
    if norm in visited:
        continue
    visited.add(norm)

    path = urlparse(url).path.lower()
    if any(path.endswith(ext) for ext in IGNORE_EXTENSIONS):
        continue

    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        if resp.status_code == 200:
            soup = BeautifulSoup(resp.text, 'html.parser')
            for a in soup.find_all('a', href=True):
                href = a['href'].strip()
                if not href or href.startswith(('#', 'javascript:', 'mailto:', 'tel:')):
                    continue
                full = urljoin(url, href)
                if urlparse(full).netloc.lower() == urlparse(BASE_URL).netloc.lower():
                    fn = urldefrag(full)[0].rstrip('/') or urldefrag(full)[0]
                    if fn not in visited:
                        to_visit.append(full)
        else:
            broken.append((url, resp.status_code, resp.url))
    except Exception as e:
        broken.append((url, None, str(e)))
    time.sleep(DELAY)

# Output all broken
for url, status, final in broken:
    print("{}|{}".format(status or "ERR", url))
