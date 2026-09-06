#!/usr/bin/env python3
"""Zion Tech Group site integrity crawler — no file mutations, read-only."""
import shlex
import sys
import time
import urllib.parse
from collections import Counter

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
DELAY = 0.25  # polite delay between requests

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityChecker/1.0)",
    "Accept": "text/html,*/*",
})

visited = set()
to_visit = [BASE]
broken = []  # dicts: url, status, final_url, error, classification

def normalize(url: str) -> str:
    """Normalize URL: strip fragment, lowercase, collapse trailing slash on path."""
    parsed = urllib.parse.urlparse(url)
    parsed = parsed._replace(fragment="")
    path = parsed.path
    if path != "/" and path.endswith("/"):
        path = path.rstrip("/")
        parsed = parsed._replace(path=path)
    return urllib.parse.urlunparse(parsed).lower()

def is_internal(url: str) -> bool:
    netloc = urllib.parse.urlparse(url).netloc.lower()
    return netloc in ("ziontechgroup.com", "www.ziontechgroup.com", "")

def classify_broken(url: str, status_code: int, error: str, final_url: str) -> str:
    if error and any(k in error for k in ("Max retries", "Connection", "Timing out", "ReadTimeout")):
        return "external reference error"
    # Stale redirect: got a 3xx that didn't resolve to 200
    if 300 <= status_code < 400 and status_code != 200:
        return "stale redirect"
    if status_code == 404:
        return "missing page"
    if status_code >= 400:
        return "missing page"
    # If final URL points off-domain, it's an external reference gone wrong
    if urllib.parse.urlparse(final_url).netloc.lower() != "ziontechgroup.com":
        return "external reference error"
    return "missing page"

total_crawled = 0
ok_count = 0
start = time.time()
MAX_TIME = 120  # seconds

print(f"Starting crawl of {BASE} ...", flush=True)

while to_visit and (time.time() - start) < MAX_TIME:
    url = to_visit.pop(0)
    norm = normalize(url)
    if norm in visited:
        continue
    visited.add(norm)
    total_crawled += 1

    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code

        if status == 200:
            ok_count += 1
            content_type = resp.headers.get("Content-Type", "")
            if "text/html" in content_type:
                soup = BeautifulSoup(resp.text, "html.parser")
                for a in soup.find_all("a", href=True):
                    href = a.get("href", "").strip()
                    if href.startswith(("mailto:", "tel:", "javascript:", "#")):
                        continue
                    full = urllib.parse.urljoin(url, href)
                    if is_internal(full) and normalize(full) not in visited:
                        to_visit.append(full)
        else:
            err_msg = ""
            if hasattr(resp, 'reason'):
                err_msg = str(resp.reason)
            classification = classify_broken(url, status, err_msg, final_url)
            broken.append({
                "url": url,
                "status": status,
                "final_url": final_url,
                "error": err_msg,
                "classification": classification,
            })
    except (requests.exceptions.Timeout, requests.exceptions.ReadTimeout):
        broken.append({
            "url": url,
            "status": 0,
            "final_url": "",
            "error": "Timeout",
            "classification": "external reference error",
        })
    except requests.exceptions.ConnectionError:
        broken.append({
            "url": url,
            "status": 0,
            "final_url": "",
            "error": "ConnectionError",
            "classification": "external reference error",
        })
    except Exception as e:
        broken.append({
            "url": url,
            "status": 0,
            "final_url": "",
            "error": str(e)[:120],
            "classification": "external reference error",
        })

    if total_crawled % 25 == 0:
        print(f"  ... crawled {total_crawled} pages, queue: {len(to_visit)}", flush=True)

# ---- REPORT ----
elapsed = time.time() - start
print()
print("=" * 65)
print("  ZIONTECHOUP.COM — LIVE SITE INTEGRITY CHECK")
print("=" * 65)
print(f"  Total crawled:     {total_crawled}")
print(f"  HTTP 200 count:    {ok_count}")
print(f"  Broken count:      {len(broken)}")
print(f"  Runtime:           {elapsed:.1f}s")
print()

if broken:
    print("  BROKEN URLS (first 10 of {}):".format(len(broken)))
    print("  " + "-" * 62)
    for i, b in enumerate(broken[:10], 1):
        print(f"  {i}. {b['url']}")
        print(f"     Status:  {b['status']}")
        print(f"     Final:   {b['final_url']}")
        print(f"     Error:   {b['error']}")
        print(f"     Class:   {b['classification']}")
        print()
else:
    print("  No broken URLs found. ✓")

# Classification breakdown
class_counts = Counter(b["classification"] for b in broken)
if class_counts:
    print("  CLASSIFICATION BREAKDOWN:")
    for klass, cnt in class_counts.most_common():
        print(f"    {klass}: {cnt}")
    print()
