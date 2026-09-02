#!/usr/bin/env python3
"""Site integrity crawl for ziontechgroup.com — read-only report."""
import sys
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque

BASE = "https://ziontechgroup.com"
MAX_PAGES = 300
DELAY = 0.3  # polite crawl delay

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0; +https://ziontechgroup.com)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

def is_internal(url: str) -> bool:
    parsed = urlparse(url)
    base_parsed = urlparse(BASE)
    return (parsed.scheme in ("", "http", "https") and
            parsed.netloc == base_parsed.netloc)

def normalize(url: str) -> str:
    url, _ = urldefrag(url)
    return url.split("#")[0].rstrip("/") or url

def fetch(session, url: str) -> tuple:
    """Return (status_code, final_url, html_or_none, error_msg_or_none)."""
    try:
        resp = session.get(url, headers=HEADERS, timeout=20, allow_redirects=True)
        final_url = resp.url
        if "text/html" not in (resp.headers.get("Content-Type", "") or ""):
            return resp.status_code, final_url, None, None
        return resp.status_code, final_url, resp.text, None
    except requests.exceptions.TooManyRedirects:
        return None, url, None, "too_many_redirects"
    except requests.exceptions.Timeout:
        return None, url, None, "timeout"
    except requests.exceptions.ConnectionError as e:
        return None, url, None, f"connection_error: {e}"
    except Exception as e:
        return None, url, None, f"error: {e}"

def extract_links(html: str, base_url: str) -> list:
    soup = BeautifulSoup(html, "lxml")
    links = []
    for a in soup.find_all("a"):
        href_raw = a.get("href")
        if href_raw is None:
            continue
        href = str(href_raw).strip()
        if not href or href.startswith(("#", "javascript:", "mailto:", "tel:", "sms:")):
            continue
        full = urljoin(base_url, href)
        if is_internal(full):
            links.append(normalize(full))
    return links

def main():
    session = requests.Session()
    session.max_redirects = 10

    visited = set()
    todo = deque([BASE])
    ok = []
    broken = []  # (url, status_code_or_none, error, final_url)
    crawled = 0

    while todo and crawled < MAX_PAGES:
        url = todo.popleft()
        url = normalize(url)
        if url in visited or not url.startswith(BASE.rstrip("/")):
            continue
        visited.add(url)
        crawled += 1

        status, final_url, html, err = fetch(session, url)
        if err:
            broken.append((url, None, err, final_url or url))
        elif status != 200:
            broken.append((url, status, None, final_url))
        else:
            ok.append(url)
            if html:
                for link in extract_links(html, url):
                    if link not in visited:
                        todo.append(link)
        time.sleep(DELAY)

    # Report
    print(f"=== SITE INTEGRITY CHECK: {BASE} ===")
    print(f"Crawl date: 2026-09-02")
    print(f"Total crawled: {crawled}")
    print(f"HTTP 200:      {len(ok)}")
    print(f"Broken:        {len(broken)}")
    print()

    # Write full broken list to file
    import os
    broken_file = "/tmp/zion_broken_all.txt"
    with open(broken_file, "w") as f:
        f.write(f"=== BROKEN URLS ({len(broken)}) — {BASE} — 2026-09-02 ===\n\n")
        for i, (url, status, err, final) in enumerate(broken, 1):
            f.write(f"{i}. {url}\n")
            detail = err if err else f"HTTP {status} -> {final}"
            f.write(f"   Detail: {detail}\n")
            f.write(f"   Classification: {classify(url, status, err, final)}\n\n")
    print(f"Full broken list written to: {broken_file}")

    # Classification tally
    tally = {}
    for url, status, err, final in broken:
        c = classify(url, status, err, final)
        tally[c] = tally.get(c, 0) + 1

    print()
    print("--- CLASSIFICATION SUMMARY ---")
    for label in sorted(tally, key=lambda x: -tally[x]):
        print(f"  {label}: {tally[label]}")

    if broken:
        print()
        print("--- BROKEN URLS (first 10) ---")
        for i, (url, status, err, final) in enumerate(broken[:10], 1):
            print(f"{i}. {url}")
            detail = err if err else f"HTTP {status} -> {final}"
            print(f"   Detail: {detail}")
            print(f"   Classification: {classify(url, status, err, final)}")
            print()
    else:
        print("No broken URLs found.")

def classify(url: str, status: int | None, err: str | None, final: str) -> str:
    """Classify broken URL into one of: stale redirect, missing page, external reference error."""
    if err:
        if "timeout" in err:
            return "missing page (timeout)"
        if "connection_error" in err:
            # Could be the server down, or an external reference to a non-existent host
            parsed = urlparse(url)
            if parsed.netloc != urlparse(BASE).netloc:
                return "external reference error"
            return "missing page (connection error)"
        if "too_many_redirects" in err:
            # Could be a redirect loop on an internal or external URL
            return "stale redirect (loop)"
        return f"missing page ({err})"

    # No error — just non-200 status
    if status is None:
        return "missing page (undetermined)"

    # Redirect that didn't land on 200
    if 300 <= status < 400:
        return "stale redirect"

    # 4xx / 5xx
    if 400 <= status < 500:
        if status == 404 or status == 403:
            return "missing page"
        if status in (400, 401, 405, 406, 408, 410, 414, 429):
            return "missing page"
        return "missing page"

    if 500 <= status < 600:
        return "missing page (server error)"

    return "missing page"

if __name__ == "__main__":
    main()
