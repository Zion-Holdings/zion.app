#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls internal links only, reports HTTP status breakdown and broken URL classification.
"""
import sys
import re
import urllib.parse
from collections import deque
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 2000          # safety cap
REQUEST_TIMEOUT = 20      # seconds
RATE_DELAY = 0.15         # seconds between requests

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
})

visited = set()
to_visit = deque([BASE_URL])
broken = []          # list of (url, status_code, reason, classification)
http200 = []
other = []           # non-200, non-broken (redirects etc.)

domain = urlparse(BASE_URL).netloc  # ziontechgroup.com

def is_internal(url):
    """Keep only same-domain, http/https URLs."""
    parsed = urlparse(url)
    return (
        parsed.netloc == domain
        and parsed.scheme in ("http", "https")
        and not parsed.fragment  # skip in-page anchors
    )

def classify(url, status_code, redirect_target=None):
    """Classify a non-200 response."""
    if status_code in (301, 302, 307, 308):
        # Follow one hop to see where it lands
        try:
            r = session.head(url, allow_redirects=True, timeout=REQUEST_TIMEOUT)
            final = r.url
            final_status = r.status_code
        except Exception:
            return "stale redirect"

        if final_status == 404 or final_status == 403:
            return "stale redirect"
        if urlparse(final).netloc != domain:
            return "stale redirect"
        return "stale redirect"

    if status_code == 404:
        # Check if it looks like an external URL mistakenly linked internally
        if urlparse(url).netloc != domain:
            return "external reference error"
        return "missing page"

    if status_code == 403:
        return "missing page"   # forbidden — treat as missing

    if status_code >= 500:
        return "missing page"

    return f"other ({status_code})"

print(f"Starting crawl of {BASE_URL} ...")
print(f"Rate delay: {RATE_DELAY}s | Max pages: {MAX_PAGES}")
print("-" * 60)

while to_visit and len(visited) < MAX_PAGES:
    url = to_visit.popleft()
    if url in visited:
        continue
    visited.add(url)

    try:
        resp = session.get(url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
    except requests.exceptions.RequestException as e:
        broken.append((url, None, str(e), "external reference error"))
        print(f"  ERROR  {url}  — {e}")
        continue

    status = resp.status_code
    final_url = resp.url

    # Track where we actually landed (follow redirects transparently)
    if final_url != url and final_url not in visited:
        # The URL redirected; record the redirect mapping but count final_url separately
        pass

    if status == 200:
        http200.append(url)
        # Extract internal links for next wave
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
        except Exception:
            continue
        for a in soup.find_all("a", href=True):
            href = str(a["href"])
            # Skip javascript, mailto, tel, anchors
            if href.startswith(("javascript:", "mailto:", "tel:", "#")):
                continue
            absolute = urljoin(url, href)
            if is_internal(absolute) and absolute not in visited:
                to_visit.append(absolute)
    else:
        # Non-200: classify
        redirect_target = None
        if status in (301, 302, 307, 308):
            redirect_target = resp.headers.get("Location", "")
            # If Location points off-domain, it's an external reference error
            if urlparse(redirect_target).netloc and urlparse(redirect_target).netloc != domain:
                classification = "external reference error"
            else:
                classification = classify(url, status, redirect_target)
        else:
            classification = classify(url, status)

        broken.append((url, status, redirect_target or "", classification))
        print(f"  BROKEN {url}  [{status}]  -> {classification}")

    # Polite delay
    import time
    time.sleep(RATE_DELAY)

print("-" * 60)
print(f"\nRESULTS FOR {BASE_URL}")
print(f"{'='*60}")
print(f"Total pages crawled : {len(visited)}")
print(f"HTTP 200            : {len(http200)}")
print(f"Broken / non-200    : {len(broken)}")
print(f"{'='*60}")

if broken:
    print(f"\nFirst 10 broken URLs:")
    print(f"{'─'*80}")
    for i, (url, status, redirect_to, cls) in enumerate(broken[:10], 1):
        extra = f" redirects to {redirect_to}" if redirect_to else ""
        print(f"  {i:2d}. [{status}] {url}")
        print(f"      Class    : {cls}{extra}")
    print(f"{'─'*80}")
else:
    print("\nNo broken URLs found.")

print(f"\nDone. Visited {len(visited)} URLs in total.")
