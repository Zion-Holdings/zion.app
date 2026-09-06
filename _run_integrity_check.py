#!/usr/bin/env python3
"""
Live site integrity check for ziontechgroup.com.
Crawls with requests + BeautifulSoup, follows internal links only.
Reports: total crawled, HTTP 200 count, broken count, first 10 broken URLs.
Classifies each broken URL as stale redirect, missing page, or external reference error.
"""

import sys, time, re, json
from collections import deque, Counter
from urllib.parse import urljoin, urlparse, urldefrag

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
BASE_HOST = "ziontechgroup.com"
MAX_PAGES = 2000
DELAY = 0.1

visited = set()
queue = deque([BASE_URL])
results = {"total": 0, "ok": 0, "broken": 0, "broken_urls": []}
errors = []
start_time = time.time()

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; IntegrityCrawl/1.0; +https://ziontechgroup.com)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}


def norm(url):
    """Normalize: strip fragment, lowercase host, strip default port."""
    url, _ = urldefrag(url)
    p = urlparse(url)
    host = p.hostname.lower() if p.hostname else ""
    if host.endswith(":80"):
        host = host[:-3]
    elif host.endswith(":443"):
        host = host[:-4]
    path = p.path
    if path != "/" and path.endswith("/"):
        path = path.rstrip("/")
    return f"{p.scheme}://{host}{path}"


def is_internal(url):
    p = urlparse(url)
    host = p.hostname.lower() if p.hostname else ""
    return host == BASE_HOST or host.endswith("." + BASE_HOST)


def classify(url, status, redirect_to, text=""):
    """Classify broken URL."""
    if status in (301, 302, 307, 308):
        return "stale redirect"
    if status == 404:
        # soft 404 check
        low = text.lower()
        if "404" in low and ("not found" in low or "page not found" in low):
            return "missing page (soft 404)"
        return "missing page"
    if status >= 400:
        p = urlparse(url)
        if redirect_to and redirect_to != url:
            return "stale redirect"
        if p.hostname and p.hostname != BASE_HOST and not p.hostname.endswith("." + BASE_HOST):
            return "external reference error"
        return "missing page"
    if status == 200:
        low = text.lower()
        if "404" in low and ("not found" in low or "page not found" in low):
            return "missing page (soft 404)"
        if 'window.location' in text or 'meta http-equiv="refresh"' in text:
            return "stale redirect (meta/JS)"
    if status == 0:
        return "connection error"
    return "unknown"


print(f"Crawling {BASE_URL} ...")
sys.stdout.flush()

session = requests.Session()
session.headers.update(HEADERS)
session.max_redirects = 10

while queue and results["total"] < MAX_PAGES:
    url = queue.popleft()
    nurl = norm(url)
    if nurl in visited:
        continue
    visited.add(nurl)
    results["total"] += 1

    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        status = resp.status_code
        final_raw = resp.url
        redirect_to = norm(final_raw) if final_raw != url else None

        if status == 200:
            results["ok"] += 1
            ct = resp.headers.get("Content-Type", "")
            if "text/html" in ct:
                soup = BeautifulSoup(resp.text, "html.parser")
                for a in soup.find_all("a", href=True):
                    href = a.get("href")
                    if not href:
                        continue
                    href = str(href).strip()
                    if not href or href.startswith(("#", "javascript:", "mailto:", "tel:", "data:")):
                        continue
                    full = urljoin(url, href)
                    if is_internal(full):
                        nf = norm(full)
                        if nf not in visited and nf not in queue:
                            queue.append(full)
        else:
            results["broken"] += 1
            text_snippet = resp.text[:500] if resp.text else ""
            cls = classify(url, status, redirect_to, text_snippet)
            entry = {
                "url": url,
                "status": status,
                "redirect_to": redirect_to,
                "classification": cls,
            }
            results["broken_urls"].append(entry)
            print(f"  BROKEN [{status}] {url} -> {redirect_to or 'N/A'} ({cls})", flush=True)

    except requests.RequestException as ex:
        results["broken"] += 1
        cls = "external reference error" if any(k in str(ex) for k in ("Connection", "DNS", "resolve", "Timeout")) else "missing page"
        entry = {"url": url, "status": 0, "redirect_to": None, "classification": cls}
        results["broken_urls"].append(entry)
        print(f"  ERROR {url}: {ex}", flush=True)

    if results["total"] % 50 == 0:
        elapsed = time.time() - start_time
        sys.stderr.write(f"\r  Progress: {results['total']} pages, {results['ok']} OK, {results['broken']} broken | {elapsed:.0f}s")
        sys.stderr.flush()

elapsed = time.time() - start_time

# ── REPORT ──
print()
print("=" * 62)
print("  SITE INTEGRITY REPORT — ziontechgroup.com")
print("=" * 62)
print(f"  Total crawled:    {results['total']}")
print(f"  HTTP 200 count:   {results['ok']}")
print(f"  Broken count:     {results['broken']}")
print(f"  Elapsed:          {elapsed:.0f}s")
print("=" * 62)

if results["broken"] > 0:
    print(f"\n  First 10 broken URLs:\n  {'-' * 62}")
    for i, b in enumerate(results["broken_urls"][:10], 1):
        print(f"\n  {i}. {b['url']}")
        print(f"     Status: {b['status']}")
        if b["redirect_to"]:
            print(f"     Redirect to: {b['redirect_to']}")
        print(f"     Classification: {b['classification']}")
else:
    print("\n  ✓ No broken URLs found. Site appears healthy.")

# Classification breakdown
cls_counts = Counter(b["classification"] for b in results["broken_urls"])
print(f"\n  Breakdown by classification:")
for cls, cnt in cls_counts.most_common():
    print(f"    {cls}: {cnt}")

print("\n" + "=" * 62)
print("  End of report")
print("=" * 62)
