#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls internal links only via requests + BeautifulSoup.
Reports: total crawled, 200 count, broken count, first 10 broken URLs with classification.
"""

import sys
import re
import time
from urllib.parse import urlparse, urljoin
from collections import deque

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE_URL).netloc  # ziontechgroup.com

visited = set()
queue = deque([BASE_URL])
broken = []  # (url, status_code, classification)
ok_count = 0
total_crawled = 0
max_pages = 500  # safety cap
errors = []

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityCheck/1.0)"
})

def classify(url, status_code):
    """Classify a broken URL into one of three categories."""
    parsed = urlparse(url)
    path = parsed.path.rstrip("/")
    
    # External reference error: points to a different domain
    if parsed.netloc and parsed.netloc != DOMAIN and parsed.netloc != "":
        return "external reference error"
    
    # If the URL has a path and we can detect it's a known broken pattern
    # Stale redirect: typically status 301/302 that leads nowhere useful
    if status_code in (301, 302, 307, 308):
        return "stale redirect"
    
    # Missing page: 404, 410, or other client/server errors on our domain
    if status_code in (404, 410):
        return "missing page"
    
    # Other errors
    if status_code >= 400:
        return "missing page"
    
    return "unknown"


print(f"Starting crawl of {BASE_URL} ...")
print("-" * 60)

while queue and total_crawled < max_pages:
    url = queue.popleft()
    
    if url in visited:
        continue
    visited.add(url)
    total_crawled += 1
    
    # Only crawl our domain
    parsed = urlparse(url)
    if parsed.netloc and parsed.netloc != DOMAIN:
        # External link — record as broken if it's in our link structure
        # but don't follow
        try:
            resp = session.head(url, allow_redirects=True, timeout=10)
            status = resp.status_code
        except Exception as e:
            status = f"error: {e}"
        
        if isinstance(status, int) and status >= 400:
            classification = classify(url, status)
            broken.append((url, status, classification))
            print(f"  [EXT BROKEN {status}] {url} → {classification}")
        continue
    
    # Fetch the page
    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        status = resp.status_code
    except requests.exceptions.Timeout:
        broken.append((url, "timeout", "missing page"))
        print(f"  [TIMEOUT] {url}")
        continue
    except requests.exceptions.ConnectionError as e:
        broken.append((url, f"conn_error: {e}", "missing page"))
        print(f"  [CONN ERROR] {url}")
        continue
    except Exception as e:
        broken.append((url, f"error: {e}", "unknown"))
        print(f"  [ERROR] {url}: {e}")
        continue
    
    # Check status
    if status == 200:
        ok_count += 1
        # Extract internal links
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
            for link in soup.find_all("a", href=True):
                href = link["href"].strip()
                # Skip anchors, javascript, emails, tel
                if href.startswith("#") or href.startswith("javascript:") or href.startswith("mailto:") or href.startswith("tel:"):
                    continue
                absolute = urljoin(url, href)
                abs_parsed = urlparse(absolute)
                # Only enqueue internal links on our domain
                if abs_parsed.netloc in (DOMAIN, ""):
                    clean = absolute.rstrip("/")
                    if clean not in visited and clean != BASE_URL.rstrip("/"):
                        queue.append(clean)
        except Exception as e:
            errors.append(f"Parse error at {url}: {e}")
    else:
        classification = classify(url, status)
        broken.append((url, status, classification))
        print(f"  [BROKEN {status}] {url} → {classification}")

print("-" * 60)
print(f"\n=== SITE INTEGRITY REPORT: {BASE_URL} ===")
print(f"Timestamp: {time.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Total pages crawled: {total_crawled}")
print(f"HTTP 200 OK:         {ok_count}")
print(f"Broken URLs:         {len(broken)}")
print()

if broken:
    print(f"--- First 10 Broken URLs ---")
    for i, (url, status, cls) in enumerate(broken[:10], 1):
        print(f"  {i}. [{status}] {cls}")
        print(f"     {url}")
    print()
    
    # Summary by classification
    from collections import Counter
    cls_counts = Counter(cls for _, _, cls in broken)
    print(f"--- Breakdown by Classification ---")
    for cls, count in cls_counts.most_common():
        print(f"  {cls}: {count}")
else:
    print("No broken URLs found. Site appears intact.")

if errors:
    print(f"\n--- Crawl Errors ({len(errors)}) ---")
    for e in errors[:5]:
        print(f"  {e}")

print(f"\n--- Done ---")
