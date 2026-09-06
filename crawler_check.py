#!/usr/bin/env python3
"""Site integrity check for ziontechgroup.com — read-only crawl."""

import re
import sys
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 500
TIMEOUT = 20

headers = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/125.0.0.0 Safari/537.36"
    ),
}

session = requests.Session()
session.headers.update(headers)

visited = set()
broken = []
ok_200 = 0
total_crawled = 0
queue = [BASE_URL]


def is_internal(url):
    parsed = urlparse(url)
    base_parsed = urlparse(BASE_URL)
    return parsed.netloc in ("", base_parsed.netloc)


def classify_broken(url, status_code, final_url, response_text):
    if status_code in (404, 410):
        return "missing page"
    if status_code in (301, 302, 307, 308):
        # Check if it redirected somewhere sensible or fell back
        if final_url == url or final_url.startswith(BASE_URL) or final_url == BASE_URL:
            # redirected to homepage or same — could be stale
            return "stale redirect"
        return "stale redirect"
    if status_code >= 500:
        return "server error"
    if status_code == 403:
        return "forbidden / access blocked"
    # Check if page might actually be fine at final destination
    if final_url != url and final_url.startswith(BASE_URL):
        return "stale redirect"
    # Default: treat as missing
    return "missing page"


while queue and total_crawled < MAX_PAGES:
    url = queue.pop(0)
    if url in visited:
        continue
    visited.add(url)

    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
    except requests.exceptions.RequestException as e:
        total_crawled += 1
        broken.append((url, 0, url, str(e)))
        continue

    final_url = resp.url
    status_code = resp.status_code
    total_crawled += 1

    if status_code == 200:
        ok_200 += 1
        # Extract links
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
        except Exception:
            continue
        for a in soup.find_all("a", href=True):
            href = str(a["href"])
            absolute = urljoin(url, href)
            if is_internal(absolute) and absolute not in visited:
                # Normalize: strip fragments, handle common suffixes
                parsed = urlparse(absolute)
                clean = parsed._replace(fragment="").geturl()
                if clean not in visited:
                    queue.append(clean)
    else:
        broken.append((url, status_code, final_url, resp.text[:200] if resp.text else ""))

print(f"=== SITE INTEGRITY REPORT: {BASE_URL} ===")
print(f"Total crawled: {total_crawled}")
print(f"HTTP 200: {ok_200}")
print(f"Broken: {len(broken)}")
print()

if broken:
    print("--- Broken URLs (first 10) ---")
    for i, (url, code, final, snippet) in enumerate(broken[:10], 1):
        classification = classify_broken(url, code, final, snippet if snippet else "")
        print(f"  {i}. [{code}] {classification}")
        print(f"     Original: {url}")
        print(f"     Final:    {final}")
        print()
else:
    print("No broken URLs found.")

print(f"--- Summary (all {len(broken)} broken) ---")
from collections import Counter
classifications = Counter()
for url, code, final, snippet in broken:
    classifications[classify_broken(url, code, final, snippet if snippet else "")] += 1
for cls, count in classifications.most_common():
    print(f"  {cls}: {count}")
