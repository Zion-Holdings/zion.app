#!/usr/bin/env python3
"""Live site integrity crawl for ziontechgroup.com"""
import sys, time, re, urllib.parse
from collections import deque
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
START_URL = BASE_URL + "/"
USER_AGENT = "Mozilla/5.0 (compatible; IntegrityCrawl/1.0)"
MAX_PAGES = 500
DELAY = 0.5

visited = set()
queue = deque([START_URL])
results = {"total": 0, "ok": 0, "broken": 0, "broken_urls": []}
errors = []

HEADERS = {"User-Agent": USER_AGENT, "Accept": "text/html,application/xhtml+xml"}

def is_internal(url, base):
    try:
        p = urlparse(url)
        bp = urlparse(base)
        return (p.scheme in ("http","https") and p.netloc.lower() == bp.netloc.lower())
    except:
        return False

def normalize(url, base):
    parsed = urlparse(url)
    path = parsed.path
    if not path or path == "/":
        path = "/"
    elif not path.endswith("/") and "." not in path.split("/")[-1]:
        path += "/"
    return urllib.parse.urlunparse((parsed.scheme, parsed.netloc, path, "", "", ""))

def classify_Broken(url, status_code, text):
    reason = "unknown"
    if status_code == 404:
        reason = "missing page"
    elif status_code in (301,302,307,308):
        reason = "stale redirect"
    else:
        # external reference error: link points to external domain that failed/resolve issue
        try:
            p = urlparse(url)
            if p.scheme in ("http","https") and p.netloc.lower() != urlparse(BASE_URL).netloc.lower():
                reason = "external reference error"
            else:
                reason = "missing page"
        except:
            reason = "missing page"
    return reason

print(f"Starting crawl: {START_URL}", flush=True)
session = requests.Session()
session.headers.update(HEADERS)
session.max_redirects = 8

while queue and results["total"] < MAX_PAGES:
    url = queue.popleft()
    if url in visited:
        continue
    visited.add(url)
    results["total"] += 1

    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code

        if status == 200:
            results["ok"] += 1
            # extract links
            try:
                soup = BeautifulSoup(resp.text, "html.parser")
                for a in soup.find_all("a", href=True):
                    href = a["href"].strip()
                    if not href or href.startswith(("#", "javascript:", "mailto:", "tel:", "data:")):
                        continue
                    full = urljoin(url, href)
                    if is_internal(full, BASE_URL) and full not in visited:
                        # normalize: remove fragment, ensure trailing slash
                        clean = normalize(full, BASE_URL)
                        if clean not in visited and clean not in queue:
                            queue.append(clean)
            except Exception as ex:
                errors.append(f"Parse error at {url}: {ex}")
        else:
            results["broken"] += 1
            classified = classify_Broken(final_url, status, resp.text[:200])
            results["broken_urls"].append({
                "url": url,
                "final_url": final_url,
                "status": status,
                "classification": classified
            })
            print(f"  BROKEN [{status}] {url} -> {final_url} ({classified})", flush=True)

    except requests.RequestException as ex:
        results["broken"] += 1
        results["broken_urls"].append({
            "url": url,
            "final_url": "",
            "status": 0,
            "classification": "external reference error" if "Connection" in str(ex) or "DNS" in str(ex) or "resolve" in str(ex).lower() else "missing page"
        })
        print(f"  ERROR {url}: {ex}", flush=True)

    time.sleep(DELAY)

print("\n=== INTEGRITY REPORT ===", flush=True)
print(f"Base URL: {BASE_URL}", flush=True)
print(f"Total crawled: {results['total']}", flush=True)
print(f"HTTP 200 count: {results['ok']}", flush=True)
print(f"Broken count: {results['broken']}", flush=True)
print(f"\nFirst 10 broken URLs:", flush=True)
for i, b in enumerate(results["broken_urls"][:10], 1):
    print(f"  {i}. {b['url']}  (status={b['status']}, final={b['final_url']}, class={b['classification']})", flush=True)

if results["broken"] > 0:
    # summary classification counts
    from collections import Counter
    classes = Counter(b["classification"] for b in results["broken_urls"])
    print(f"\nClassification summary:", flush=True)
    for k,v in classes.most_common():
        print(f"  {k}: {v}", flush=True)

if errors:
    print(f"\nParse/processing errors ({len(errors)}):", flush=True)
    for e in errors[:10]:
        print(f"  - {e}", flush=True)
