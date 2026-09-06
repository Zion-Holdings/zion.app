#!/usr/bin/env python3
"""
Ultra-fast live site integrity check: sitemap-based, short timeouts,
breaks into chunks to avoid single-call timeout.
Writes intermediate results to /Users/miami2/zion-support.github.io/check_status.txt
"""
import re, time, sys, os, json
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

STATUS_FILE = "/Users/miami2/zion-support.github.io/check_status.txt"

# ---- Load sitemap ----
print(f"Reading sitemap...", flush=True)
with open("/Users/miami2/zion-support.github.io/sitemap.xml", "rb") as f:
    sm_data = f.read()
raw_urls = [m.decode() for m in re.findall(rb"<loc>(.*?)</loc>", sm_data)]
seen = set()
sitemap_urls = [u for u in raw_urls if not (u in seen or seen.add(u))]
TOTAL = len(sitemap_urls)
del raw_urls, sm_data

results = {"200": 0, "broken": [], "errors": 0}

def check_url(url):
    try:
        r = session.head(url, timeout=5, allow_redirects=True)
        status = r.status_code
        loc = r.headers.get("Location", "")
    except requests.exceptions.Timeout:
        return (url, None, "", "timeout")
    except requests.exceptions.RequestException:
        try:
            r = session.get(url, timeout=5, allow_redirects=True, stream=True)
            status = r.status_code
            loc = r.headers.get("Location", "")
        except Exception as e:
            return (url, None, "", f"error: {type(e).__name__}")

    if status == 200:
        return (url, 200, loc, None)

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

def save_progress():
    elapsed = time.time() - t0
    with open(STATUS_FILE, "w") as f:
        f.write(f"Checked: {checked_count}/{TOTAL}\n")
        f.write(f"200: {results['200']}\n")
        f.write(f"Broken: {len(results['broken'])}\n")
        f.write(f"Errors: {results['errors']}\n")
        f.write(f"Elapsed: {elapsed:.1f}s\n")
        f.write(f"First 5 broken:\n")
        for url, st, loc, cls in results["broken"][:5]:
            f.write(f"  [{st or 'ERR'}] {url} -> {cls}\n")

t0 = time.time()
checked_count = 0
CHUNK = 500  # process in chunks of 500 URLs

print(f"Checking {TOTAL} URLs in chunks of {CHUNK} ...", flush=True)
offset = 0

while offset < TOTAL:
    chunk_end = min(offset + CHUNK, TOTAL)
    chunk = sitemap_urls[offset:chunk_end]
    offset = chunk_end

    for url in chunk:
        checked_count += 1
        url, status, loc, cls = check_url(url)
        if status == 200:
            results["200"] += 1
        elif cls is None:
            results["200"] += 1  # shouldn't happen
        else:
            results["broken"].append((url, status, loc, cls))
            if cls == "timeout":
                results["errors"] += 1
        # Small delay between requests
        time.sleep(0.01)

    elapsed = time.time() - t0
    pct = int(100 * offset / TOTAL)
    print(f"  [{pct}%] {offset}/{TOTAL} — "
          f"{results['200']} OK, {len(results['broken'])} broken "
          f"— {elapsed:.0f}s", flush=True)
    save_progress()

elapsed = time.time() - t0
print(f"\n{'='*65}", flush=True)
print(f"  SITE INTEGRITY CHECK — {BASE}", flush=True)
print(f"{'='*65}", flush=True)
print(f"  Crawl duration        : {elapsed:.1f}s", flush=True)
print(f"  Total URLs checked    : {checked_count}", flush=True)
print(f"  HTTP 200              : {results['200']}", flush=True)
print(f"  Broken / non-200      : {len(results['broken'])}", flush=True)
print(f"{'='*65}", flush=True)

if results["broken"]:
    print(f"\n  First 10 broken URLs:", flush=True)
    print(f"  {'—'*75}", flush=True)
    for i, (url, status, loc, cls) in enumerate(results["broken"][:10], 1):
        extra = f"  →  {loc[:80]}" if loc else ""
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
