#!/usr/bin/env python3
"""Live site integrity check for ziontechgroup.com."""

import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
visited = set()
to_visit = [BASE]
broken = []
total_crawled = 0
http_200 = 0

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityCheck/1.0; +https://ziontechgroup.com)"
}


def is_internal(url):
    parsed = urlparse(url)
    base_parsed = urlparse(BASE)
    return parsed.netloc == base_parsed.netloc and parsed.scheme in ("http", "https")


def classify_broken(resp):
    if 300 <= resp.status_code < 400:
        return "stale redirect"
    elif resp.status_code == 404:
        return "missing page"
    elif resp.status_code >= 400:
        return "missing page"
    return "unknown"


session = requests.Session()
session.headers.update(HEADERS)

while to_visit and len(visited) < 200:
    url = to_visit.pop(0)
    if url in visited:
        continue
    visited.add(url)
    total_crawled += 1

    try:
        resp = session.get(url, timeout=15, allow_redirects=False)
        if resp.status_code == 200:
            http_200 += 1
        else:
            broken.append((url, resp.status_code, classify_broken(resp)))
            continue

        soup = BeautifulSoup(resp.text, "html.parser")
        for tag in soup.find_all("a", href=True):
            href = tag["href"].strip()
            if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                continue
            next_url = urljoin(url, href)
            if is_internal(next_url) and next_url not in visited and next_url not in to_visit:
                to_visit.append(next_url)
    except Exception as e:
        broken.append((url, str(type(e).__name__), "external reference error"))

broken_count = len(broken)
first_10 = broken[:10]

print("=== Site Integrity Report: ziontechgroup.com ===")
print(f"Total crawled : {total_crawled}")
print(f"HTTP 200 count: {http_200}")
print(f"Broken count  : {broken_count}")
print()

if broken_count > 0:
    print("First 10 broken URLs:")
    for i, (u, code, reason) in enumerate(first_10, 1):
        print(f"{i:2}. {u} (status={code}) -> {reason}")
else:
    print("No broken internal links found.")
