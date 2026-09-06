#!/usr/bin/env python3
"""
Fast threaded live site integrity check.
Uses ThreadPoolExecutor for parallel HEAD requests against sitemap URLs.
"""
import re, time, sys, concurrent.futures
from urllib.parse import urlparse
from collections import Counter

import requests

BASE = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE).netloc

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 Chrome/120 Safari/537.36",
})

# Read sitemap
print(f"Reading sitemap...", flush=True)
with open("/Users/miami2/zion-support.github.io/sitemap.xml", "rb") as f:
    sm_data = f.read()
raw_urls = [m.decode() for m in re.findall(rb"<loc>(.*?)</loc>", sm_data)]
seen = set()
sitemap_urls = [u for u in raw_urls if not (u in seen or seen.add(u))]
print(f"Sitemap URLs: {len(sitemap_urls)}", flush=True)
del raw_urls, sm_data

results = {"200": 0, "broken": [], "errors": 0}
lock = concurrent.futures.ThreadPoolExecutor._shutdown  # not used, just placeholder

def check_url(url):
    """HEAD-check a single URL. Returns (url, status, location, classification)."""
    try:
        r = session.head(url, timeout=8, allow_redirects=True)
        status = r.status_code
        loc = r.headers.get("Location", "")
    except requests.exceptions.RequestException:
        try:
            r = session.get(url, timeout=8, allow_redirects=True, stream=True)
            status = r.status_code
            loc = r.headers.get("Location", "")
        except requests.exceptions.RequestException as e:
            return (url, None, "", "external reference error")

    if status == 200:
        return (url, 200, loc, None)  # None = not broken

    # Classify non-200
    if status in (301, 302, 307, 308):
        cls = ("external reference error"
               if loc and urlparse(loc).netloc and urlparse(loc).netloc != DOMAIN
               else "stale redirect")
    elif status == 404:
        cls = ("external reference error"
               if urlparse(url).netloc != DOMAIN
               else "missing page")
    elif status == 403:
        cls = "missing page"
    elif status >= 500:
        cls = "missing page"
    else:
        cls = f"other ({status})"
    return (url, status, loc, cls)

t0 = time.time()
TOTAL = len(sitemap_urls)
BATCH_SIZE = 100
MAX_WORKERS = 12

print(f"Checking {TOTAL} URLs with {MAX_WORKERS} workers ...", flush=True)

all_urls = sitemap_urls
offset = 0

while offset < len(all_urls):
    batch = all_urls[offset:offset + BATCH_SIZE]
    offset += BATCH_SIZE

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futures = {pool.submit(check_url, url): url for url in batch}
        done = 0
        for future in concurrent.futures.as_completed(futures):
            url, status, loc, cls = future.result()
            if status == 200:
                results["200"] += 1
            elif cls is None:
                results["200"] += 1  # shouldn't happen
            else:
                results["broken"].append((url, status, loc, cls))
            done += 1

    elapsed = time.time() - t0
    pct = min(100, int(100 * offset / TOTAL))
    print(f"  Progress: {offset}/{TOTAL} ({pct}%) — "
          f"{results['200']} OK, {len(results['broken'])} broken "
          f"— {elapsed:.0f}s", flush=True)

elapsed = time.time() - t0

# Report
print(f"\n{'='*65}", flush=True)
print(f"  SITE INTEGRITY CHECK — {BASE}", flush=True)
print(f"{'='*65}", flush=True)
print(f"  Crawl duration        : {elapsed:.1f}s", flush=True)
print(f"  Total URLs checked    : {TOTAL}", flush=True)
print(f"  HTTP 200              : {results['200']}", flush=True)
print(f"  Broken / non-200      : {len(results['broken'])}", flush=True)
print(f"{'='*65}", flush=True)

if results["broken"]:
    print(f"\n  First 10 broken URLs:", flush=True)
    print(f"  {'—'*75}", flush=True)
    for i, (url, status, loc, cls) in enumerate(results["broken"][:10], 1):
        extra = f"  →  {loc}" if loc else ""
        print(f"  {i:2d}. [{status or 'ERR'}] {url}", flush=True)
        print(f"      Classification: {cls}{extra}", flush=True)
    print(f"  {'—'*75}", flush=True)

    cls_counts = Counter(c for _, _, _, c in results["broken"])
    print(f"\n  Breakdown by classification:", flush=True)
    for cls, cnt in cls_counts.most_common():
        print(f"    {cls:<30s}: {cnt}", flush=True)
else:
    print(f"\n  ✓  No broken URLs found.", flush=True)

print(f"\n  Done in {elapsed:.1f}s.", flush=True)
