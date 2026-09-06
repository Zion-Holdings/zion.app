#!/usr/bin/env python3
"""
Live site integrity crawl for https://ziontechgroup.com.
BFS over internal links only. Reports counts + first 10 broken URLs.
Does NOT modify any files.
"""
import sys
from collections import deque
from urllib.parse import urljoin, urlparse, urlunparse

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
START = BASE + "/"
MAX_PAGES = 500  # bound the crawl for a cron job

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; IntegrityCrawl/1.0; +https://ziontechgroup.com)",
}

def strip_fragment(url: str) -> str:
    p = urlparse(url)
    return urlunparse(p._replace(fragment=""))

def is_internal(url: str) -> bool:
    return urlparse(url).netloc == "" or urlparse(url).netloc == "ziontechgroup.com"

def classify(url: str, status_code: int, final_url: str, exception: str | None) -> str:
    """Return one of: missing page, stale redirect, external reference error."""
    if exception:
        # Could not reach at all
        return "missing page"
    if status_code in (404, 410):
        return "missing page"
    if status_code >= 400:
        return "missing page"
    if 300 <= status_code < 400:
        # redirect
        parsed_final = urlparse(final_url)
        if parsed_final.netloc and parsed_final.netloc != "ziontechgroup.com":
            return "stale redirect"
        if final_url.rstrip("/") != url.rstrip("/") and final_url.startswith(BASE):
            # internal redirect that doesn't 200 (should not happen often)
            return "stale redirect"
        return "stale redirect"
    # External link issues
    parsed = urlparse(url)
    if parsed.netloc and parsed.netloc != "ziontechgroup.com":
        return "external reference error"
    return "missing page"

def crawl():
    session = requests.Session()
    session.headers.update(HEADERS)
    session.max_redirects = 10

    visited = set()
    queue = deque([START])

    total_crawled = 0
    http200 = 0
    broken = {}  # url -> (status_code, final_url, exception_msg, classification)

    print(f"[START] Crawling {BASE}")
    while queue and total_crawled < MAX_PAGES:
        url = queue.popleft()
        url = strip_fragment(url)
        if url in visited:
            continue
        visited.add(url)
        total_crawled += 1

        try:
            resp = session.get(url, timeout=20, allow_redirects=True)
        except Exception as e:
            exception_msg = str(e)
            broken[url] = (None, url, exception_msg, "missing page")
            if total_crawled % 50 == 0:
                print(f"  [{total_crawled}] ERROR {url}: {exception_msg}")
            continue

        final_url = resp.url
        status = resp.status_code

        if status == 200:
            http200 += 1
        else:
            cls = classify(url, status, final_url, None)
            broken[url] = (status, final_url, None, cls)

        if total_crawled % 50 == 0:
            print(f"  [{total_crawled}] {url} -> {status}")

        # Extract internal links only from 200 pages (soup parse is cheap)
        if status == 200:
            try:
                soup = BeautifulSoup(resp.text, "html.parser")
            except Exception:
                continue
            for tag in soup.find_all("a", href=True):
                href = str(tag["href"])
                full = urljoin(url, href)
                full = strip_fragment(full)
                if not is_internal(full):
                    continue
                if full.startswith(BASE) and full not in visited:
                    queue.append(full)

    print(f"\n[DONE] Crawl complete.")
    print(f"Total crawled: {total_crawled}")
    print(f"HTTP 200: {http200}")
    print(f"Broken: {len(broken)}")

    if broken:
        print("\nFirst 10 broken URLs:")
        for i, (url, (status, final, exc, cls)) in enumerate(list(broken.items())[:10], 1):
            if exc:
                print(f"  {i}. {url}  [{cls}]  exception: {exc}")
            else:
                print(f"  {i}. {url}  -> {final}  [{cls}]  HTTP {status}")
        print(f"\nFull broken breakdown ({len(broken)} total):")
        by_class = {}
        for url, (status, final, exc, cls) in broken.items():
            by_class.setdefault(cls, []).append(url)
        for cls, urls in sorted(by_class.items()):
            print(f"  {cls}: {len(urls)}")
    else:
        print("No broken URLs found.")

    return total_crawled, http200, broken

if __name__ == "__main__":
    crawl()
