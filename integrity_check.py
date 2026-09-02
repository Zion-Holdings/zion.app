#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com.
Uses sitemap.xml as URL source (the site is a minimal Next.js static
shell — blind link crawling only finds 2 pages). Checks every URL in
the sitemap, reports totals, 200s, broken count, first 10 broken with
classification: stale redirect / missing page / external reference error.
No files modified — status only.
"""

import sys
from urllib.parse import urljoin, urlparse
from collections import Counter
import concurrent.futures
import threading

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
SITEMAP_URL = urljoin(BASE_URL, "/sitemap.xml")
TIMEOUT = 15
MAX_WORKERS = 20  # parallel threads
LOCK = threading.Lock()
RESULTS = []  # (url, status_code, final_url, exception)

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; IntegrityBot/1.0)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
})

def is_internal(url):
    parsed = urlparse(url)
    base = urlparse(BASE_URL)
    return parsed.netloc in (base.netloc, "www." + base.netloc, "")

def classify_broken(url, status_code, exception=None, final_url=None):
    """Classify: stale redirect, missing page, or external reference error."""
    if status_code is not None:
        if 300 <= status_code < 400:
            return "stale redirect"
        if status_code == 404:
            return "missing page"
        if status_code >= 400:
            return "missing page"
    if exception:
        s = str(exception).lower()
        if "redirect" in s:
            return "stale redirect"
        if any(k in s for k in ("connection", "timeout", "name or service not known", "resolve", "getaddrinfo")):
            return "external reference error"
        return "missing page"
    if final_url and final_url != url:
        return "stale redirect"
    return "missing page"

def check_one(url):
    """Check a single URL and record result (thread-safe)."""
    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        with LOCK:
            RESULTS.append((url, resp.status_code, resp.url, None))
    except requests.exceptions.RequestException as e:
        with LOCK:
            RESULTS.append((url, None, None, e))
    except Exception as e:
        with LOCK:
            RESULTS.append((url, None, None, e))

def main():
    # 1. Fetch sitemap
    print(f"Fetching sitemap: {SITEMAP_URL}")
    try:
        r = session.get(SITEMAP_URL, timeout=30)
        r.raise_for_status()
    except Exception as e:
        print(f"ERROR fetching sitemap: {e}")
        sys.exit(2)

    soup = BeautifulSoup(r.text, "xml")
    locs = [l.text.strip() for l in soup.find_all("loc")]
    print(f"Sitemap contains {len(locs)} URLs\n")

    # 2. Check all URLs in parallel
    print(f"Checking {len(locs)} URLs with {MAX_WORKERS} workers (timeout={TIMEOUT}s/page)...")
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        list(ex.map(check_one, locs))

    print("Done.\n")

    # 3. Stats
    total = len(RESULTS)
    http200 = sum(1 for _, sc, _, _ in RESULTS if sc == 200)
    broken = [(u, sc, f, e) for u, sc, f, e in RESULTS if sc != 200 or e is not None]
    broken_count = len(broken)

    print(f"TOTAL_CRAWLED: {total}")
    print(f"HTTP_200_COUNT: {http200}")
    print(f"BROKEN_COUNT: {broken_count}")
    print("-" * 60)

    if broken_count == 0:
        print("No broken URLs found.")
        sys.exit(0)

    # 4. Classify + sort
    classified = []
    for url, sc, final_url, exc in broken:
        cls = classify_broken(url, sc, exc, final_url)
        classified.append({
            "url": url,
            "status_code": sc,
            "final_url": final_url,
            "exception": str(exc) if exc else None,
            "classification": cls,
        })

    # Sort: stale redirects first, then missing pages, then ext errors
    order = {"stale redirect": 0, "missing page": 1, "external reference error": 2}
    classified.sort(key=lambda c: (order.get(c["classification"], 9), c["url"]))

    # 5. First 10
    print("FIRST 10 BROKEN URLS:")
    for i, c in enumerate(classified[:10]):
        print(f"  [{i+1}] {c['url']}")
        print(f"      classification: {c['classification']}")
        if c['status_code'] is not None:
            print(f"      http status: {c['status_code']}")
        if c['final_url']:
            print(f"      final_url:  {c['final_url']}")
        if c['exception']:
            print(f"      exception: {c['exception']}")
        print()

    # 6. Classification summary
    counts = Counter(c["classification"] for c in classified)
    print("CLASSIFICATION SUMMARY:")
    for cls, cnt in counts.most_common():
        print(f"  {cls}: {cnt}")

    # 7. Show unique broken URLs by prefix (first 10 unique path prefixes)
    print("\nTOP BROKEN PATH PREFIXES (first 10 unique, with count):")
    prefix_counts = Counter()
    for c in classified:
        path = urlparse(c["url"]).path
        # Normalize: strip trailing slash for grouping
        key = path.rstrip("/") or "/"
        prefix_counts[key] += 1
    for path, cnt in prefix_counts.most_common(10):
        print(f"  {path}: {cnt} broken")

    sys.exit(0 if broken_count == 0 else 1)

if __name__ == "__main__":
    main()
