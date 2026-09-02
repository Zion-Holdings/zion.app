#!/usr/bin/env python3
"""Live site integrity crawl for ziontechgroup.com — internal links only."""
import sys
from urllib.parse import urljoin, urlparse, urlunparse
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 300
TIMEOUT = 20

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityCheck/1.0)"
})

def strip_fragment(url):
    p = urlparse(url)
    return urlunparse(p._replace(fragment=""))

def is_internal(url):
    parsed = urlparse(url)
    base_parsed = urlparse(BASE_URL)
    return (parsed.scheme in ("", "http", "https")
            and parsed.netloc in ("", base_parsed.netloc, "www." + base_parsed.netloc))

visited = set()
queue = [BASE_URL]
broken = []
redirects = []
total_crawled = 0
http200 = 0

print(f"Starting crawl: {BASE_URL}", flush=True)

while queue and total_crawled < MAX_PAGES:
    url = queue.pop(0)
    url = strip_fragment(url)
    if url in visited:
        continue
    visited.add(url)
    total_crawled += 1

    if total_crawled % 20 == 0:
        print(f"  ... crawled {total_crawled} pages, {len(broken)} broken, {len(redirects)} redirects", flush=True)

    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
    except Exception as e:
        broken.append({"url": url, "error": str(e)})
        print(f"  BROKEN (exception): {url} -> {e}", flush=True)
        continue

    # Track redirect chain info
    if len(resp.history) > 0:
        final_url = resp.url
        redirects.append({
            "from": url,
            "to": final_url,
            "status_chain": ["{}->{}".format(r.status_code, r.headers.get("Location", "?")) for r in resp.history],
            "final_status": resp.status_code,
        })

    if resp.status_code == 200:
        http200 += 1
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
        except Exception:
            continue
        for tag in soup.find_all(["a", "link"]):
            href = tag.get("href")
            if not href:
                continue
            full = strip_fragment(urljoin(url, href))
            if not is_internal(full):
                continue
            if full not in visited:
                queue.append(full)
    else:
        # Classify
        if 300 <= resp.status_code < 400:
            cls = "stale redirect"
        elif resp.status_code >= 400:
            cls = "missing page"
        else:
            cls = "unknown"
        broken.append({"url": url, "status": resp.status_code, "classification": cls})
        print(f"  BROKEN [{cls}]: {url} -> HTTP {resp.status_code}", flush=True)

print(f"\n=== CRAWL COMPLETE ===", flush=True)
print(f"Total crawled: {total_crawled}", flush=True)
print(f"HTTP 200: {http200}", flush=True)
print(f"Broken: {len(broken)}", flush=True)
print(f"Redirects: {len(redirects)}", flush=True)

print("\n--- FIRST 10 BROKEN URLS ---", flush=True)
for i, b in enumerate(broken[:10], 1):
    cls = b.get("classification", "unknown")
    status = b.get("status", "N/A")
    err = b.get("error", "")
    extra = f" HTTP {status}" if status != "N/A" else ""
    print(f"  {i}. {b['url']} — {cls}{extra}{(' (' + err + ')') if err else ''}", flush=True)

# Classification summary
print("\n--- CLASSIFICATION SUMMARY ---", flush=True)
from collections import Counter
cls_counts = Counter(b.get("classification", "unknown") for b in broken)
for cls, cnt in cls_counts.most_common():
    print(f"  {cls}: {cnt}", flush=True)

# External reference errors (any broken that is external)
print("\n--- EXTERNAL REFERENCE ERRORS ---", flush=True)
ext_broken = [b for b in broken if not is_internal(b["url"])]
if ext_broken:
    for b in ext_broken[:10]:
        print(f"  {b['url']} — {b.get('classification', 'unknown')} ({b.get('status', b.get('error', 'N/A'))})", flush=True)
else:
    print("  None detected (all broken are internal)", flush=True)

print("\n--- REDIRECT DETAILS (first 10) ---", flush=True)
for r in redirects[:10]:
    print(f"  {r['from']} -> {r['to']} [{', '.join(r['status_chain'])}] final={r['final_status']}", flush=True)
