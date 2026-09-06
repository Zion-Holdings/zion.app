#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls internal links only, reports HTTP status breakdown and broken URL classification.
"""
import sys
import re
import time
import urllib.parse
from collections import deque
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 2000
REQUEST_TIMEOUT = 15
RATE_DELAY = 0.08

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
})

visited = set()
to_visit = deque([BASE_URL])
broken = []
http200 = []

domain = urlparse(BASE_URL).netloc

def is_internal(url):
    parsed = urlparse(url)
    return (
        parsed.netloc == domain
        and parsed.scheme in ("http", "https")
        and not parsed.fragment
    )

def extract_links(html, base):
    try:
        soup = BeautifulSoup(html, "html.parser")
    except Exception:
        return []
    links = []
    for a in soup.find_all("a", href=True):
        href = str(a["href"])
        if href.startswith(("javascript:", "mailto:", "tel:", "#")):
            continue
        absolute = urljoin(base, href)
        if is_internal(absolute):
            links.append(absolute)
    return links

def classify_broken(url, status_code, redirect_location=""):
    if status_code in (301, 302, 307, 308):
        loc = redirect_location or ""
        if loc and urlparse(loc).netloc and urlparse(loc).netloc != domain:
            return "external reference error"
        return "stale redirect"
    if status_code == 404:
        if urlparse(url).netloc != domain:
            return "external reference error"
        return "missing page"
    if status_code == 403:
        return "missing page"
    if status_code >= 500:
        return "missing page"
    return f"other ({status_code})"

print(f"Starting crawl of {BASE_URL} ...", flush=True)
t0 = time.time()

while to_visit and len(visited) < MAX_PAGES:
    url = to_visit.popleft()
    if url in visited:
        continue
    visited.add(url)

    try:
        resp = session.get(url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
    except requests.exceptions.RequestException as e:
        broken.append((url, None, "", "external reference error"))
        print(f"  ERR    {url}", flush=True)
        time.sleep(RATE_DELAY)
        continue

    status = resp.status_code
    final_url = resp.url

    if status == 200:
        http200.append(url)
        new_links = extract_links(resp.text, url)
        for link in new_links:
            if link not in visited:
                to_visit.append(link)
    else:
        loc = resp.headers.get("Location", "")
        cls = classify_broken(url, status, loc)
        broken.append((url, status, loc, cls))

    # Periodic progress
    if len(visited) % 50 == 0:
        elapsed = time.time() - t0
        print(f"  Progress: {len(visited)} visited, {len(broken)} broken, "
              f"{len(to_visit)} queued | elapsed {elapsed:.0f}s", flush=True)

    time.sleep(RATE_DELAY)

elapsed = time.time() - t0

print(f"\n{'='*65}", flush=True)
print(f"  SITE INTEGRITY CHECK — {BASE_URL}", flush=True)
print(f"{'='*65}", flush=True)
print(f"  Crawl duration        : {elapsed:.1f}s", flush=True)
print(f"  Total pages crawled   : {len(visited)}", flush=True)
print(f"  HTTP 200              : {len(http200)}", flush=True)
print(f"  Broken / non-200      : {len(broken)}", flush=True)
print(f"{'='*65}", flush=True)

if broken:
    print(f"\n  First 10 broken URLs:", flush=True)
    print(f"  {'─'*75}", flush=True)
    for i, (url, status, loc, cls) in enumerate(broken[:10], 1):
        extra = f" → {loc}" if loc else ""
        print(f"  {i:2d}. [{status or 'ERR'}] {url}", flush=True)
        print(f"      Classification: {cls}{extra}", flush=True)
    print(f"  {'─'*75}", flush=True)
    print(f"\n  Full breakdown by classification:", flush=True)
    from collections import Counter
    cls_counts = Counter(cls for _, _, _, cls in broken)
    for cls, cnt in cls_counts.most_common():
        print(f"    {cls:<30s}: {cnt}", flush=True)
else:
    print(f"\n  ✓ No broken URLs found.", flush=True)

print(f"\n  Done.", flush=True)
