#!/usr/bin/env python3
"""Live integrity check for https://ziontechgroup.com — no file mutations."""

import sys
from urllib.parse import urljoin, urlparse
from collections import deque

import requests
from bs4 import BeautifulSoup

ROOT = "https://ziontechgroup.com"
TIMEOUT = 12
MAX_PAGES = 200

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/120 Safari/537.36",
})
session.max_redirects = 8

seen = set()
queue = deque([ROOT])
polished = []   # (url, status_code, error_msg_or_None)
broken = []     # (url, status_code, error_msg)

def is_internal(url: str) -> bool:
    p = urlparse(url)
    return (p.netloc == "ziontechgroup.com" or
            p.netloc == "www.ziontechgroup.com" or
            p.netloc == "")

def classify(url: str, status: int, err: str | None) -> str:
    """One-line diagnostic label."""
    if err and "too many redirects" in err.lower():
        return "stale redirect loop"
    if err and "redirect" in err.lower():
        return "stale redirect"
    if status in (301, 302, 307, 308):
        return "stale redirect"
    if status == 404:
        return "missing page"
    if status >= 500:
        return "server error"
    if err and ("name" in err.lower() or "dns" in err.lower() or "resolve" in err.lower()):
        return "external reference error (DNS/SSL/name)"
    if err:
        return f"external reference error ({err.split(':')[0][:40]})"
    if status >= 400:
        return f"broken ({status})"
    return "unknown"

total = 0
ok = 0
retryable = 0

while queue and total < MAX_PAGES:
    url = queue.popleft()
    if url in seen:
        continue
    seen.add(url)
    total += 1

    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        status = resp.status_code
        error = None
    except requests.TooManyRedirects as e:
        status = 0
        error = "too many redirects"
    except requests.RequestException as e:
        status = 0
        error = str(e)[:120]

    polished.append((url, status, error))

    if status == 200:
        ok += 1
    else:
        broken.append((url, status, error))

    # Only extract links from successful HTML pages
    if status == 200:
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
        except Exception:
            continue
        for a in soup.find_all("a", href=True):
            href = a.get("href", "")
            if isinstance(href, list):
                href = href[0] if href else ""
            href = str(href).strip()
            if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                continue
            full = urljoin(url, href)
            if is_internal(full) and full not in seen and full.startswith("http"):
                queue.append(full)

print(f"ROOT            : {ROOT}")
print(f"Total crawled   : {total}")
print(f"HTTP 200 count  : {ok}")
print(f"Broken count    : {len(broken)}")
print("-" * 70)

if broken:
    print(f"{'#':>3}  {'URL':<70}  STATUS  CLASSIFICATION")
    print("-" * 70)
    for i, (url, status, err) in enumerate(broken[:10], 1):
        cls = classify(url, status, err)
        label = f"[{status}]" if status else "[ERR]"
        print(f"{i:>3}  {url:<70}  {label:<7}  {cls}")
    if len(broken) > 10:
        print(f"  ... and {len(broken) - 10} more broken URLs")
else:
    print("No broken URLs found.")

print("-" * 70)
print("Classification key:")
print("  stale redirect       → 3xx/redirect loop leading nowhere useful")
print("  missing page         → 404 / page not found")
print("  external reference   → DNS/SSL/timeout/name resolution failures")
