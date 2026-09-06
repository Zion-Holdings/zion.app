#!/usr/bin/env python3
"""Crawl ziontechgroup.com, follow internal links only, report integrity stats."""

import sys
import time
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup
from collections import Counter

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 200
DELAY = 0.2

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0; +https://ziontechgroup.com)"
})

visited = set()
queue = [BASE_URL]
broken = []
http200 = 0
total_crawled = 0

def is_internal(url_str):
    """Return True if url belongs to ziontechgroup.com domain."""
    parsed = urlparse(url_str)
    netloc = parsed.netloc.lower()
    # Strip www. for comparison
    hostname = netloc
    if hostname.startswith("www."):
        hostname = hostname[4:]
    return hostname == "ziontechgroup.com"

def classify_broken(url, status_code, exception=None):
    if exception:
        return "external reference error"
    if status_code == 404:
        return "missing page"
    if status_code in (301, 302, 307, 308):
        return "stale redirect"
    if status_code >= 500:
        return "missing page"
    return "missing page"

print(f"Starting crawl of {BASE_URL} ...")
sys.stdout.flush()

while queue and total_crawled < MAX_PAGES:
    url = queue.pop(0)
    if url in visited:
        continue
    visited.add(url)
    total_crawled += 1

    if total_crawled % 10 == 0:
        print(f"  ... crawled {total_crawled} pages so far", file=sys.stderr)
        sys.stdout.flush()

    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        time.sleep(DELAY)

        final_url = resp.url
        status_code = resp.status_code

        if status_code == 200:
            http200 += 1
            content_type = resp.headers.get("content-type", "")
            if "text/html" in content_type:
                soup = BeautifulSoup(resp.text, "html.parser")
                for link in soup.find_all("a", href=True):
                    href = str(link["href"]).strip()
                    if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                        continue
                    absolute = urljoin(final_url, href)
                    if is_internal(absolute) and absolute not in visited:
                        queue.append(absolute)
        else:
            classification = classify_broken(url, status_code)
            broken.append({
                "url": url,
                "final_url": final_url,
                "status_code": status_code,
                "classification": classification,
            })
            # Try to extract links from error pages if HTML
            if "text/html" in resp.headers.get("content-type", ""):
                try:
                    soup = BeautifulSoup(resp.text, "html.parser")
                    for link in soup.find_all("a", href=True):
                        href = str(link["href"]).strip()
                        if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                            continue
                        absolute = urljoin(final_url, href)
                        if is_internal(absolute) and absolute not in visited:
                            queue.append(absolute)
                except Exception:
                    pass

    except requests.exceptions.RequestException as e:
        broken.append({
            "url": url,
            "final_url": str(e),
            "status_code": None,
            "classification": "external reference error",
        })

# Deduplicate broken by URL
seen_broken = set()
unique_broken = []
for b in broken:
    if b["url"] not in seen_broken:
        seen_broken.add(b["url"])
        unique_broken.append(b)

print("=" * 60)
print("SITE INTEGRITY CHECK: https://ziontechgroup.com")
print("=" * 60)
print(f"Total crawled:    {total_crawled}")
print(f"HTTP 200 count:   {http200}")
print(f"Broken count:     {len(unique_broken)}")
print()

if unique_broken:
    print("FIRST 10 BROKEN URLs:")
    print("-" * 60)
    for i, b in enumerate(unique_broken[:10], 1):
        print(f"{i}. {b['url']}")
        print(f"   Status: {b['status_code'] or 'ERROR'} | Classification: {b['classification']}")
        if b.get("final_url") and b["final_url"] != b["url"]:
            print(f"   Redirects to: {b['final_url']}")
    print()
    print("CLASSIFICATION SUMMARY:")
    counts = Counter(b["classification"] for b in unique_broken)
    for cls, cnt in counts.most_common():
        print(f"  {cls}: {cnt}")
    if len(unique_broken) > 10:
        print(f"  ... and {len(unique_broken) - 10} more broken URLs")
else:
    print("No broken URLs found.")
