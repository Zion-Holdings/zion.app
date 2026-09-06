#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com.
BFS over internal links only. Classifies broken URLs per skill taxonomy.
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
    parsed = urlparse(url)
    return parsed.netloc in ("", "ziontechgroup.com", "www.ziontechgroup.com")


def classify(url: str, status_code: int | None, final_url: str, exception: str | None) -> str:
    """Return one of: missing page, stale redirect, external reference error."""
    if exception:
        return "missing page"

    parsed = urlparse(url)
    # External link that failed
    if parsed.netloc and parsed.netloc not in ("ziontechgroup.com", "www.ziontechgroup.com"):
        if status_code is not None and status_code >= 400:
            return "external reference error"
        if status_code is None:
            return "external reference error"
        return "external reference error"

    # Internal link
    if status_code in (404, 410):
        return "missing page"
    if status_code is not None and status_code >= 400:
        return "missing page"
    if status_code is not None and 300 <= status_code < 400:
        # Redirect — check if it resolves somewhere useful
        if final_url.startswith(BASE) and final_url.rstrip("/") != url.rstrip("/"):
            # Internal redirect that didn't land on 200 → stale
            return "stale redirect"
        if final_url.startswith(BASE):
            return "stale redirect"
        # Redirects off-site
        return "stale redirect"
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
        except requests.exceptions.TooManyRedirects:
            broken[url] = (None, url, "TooManyRedirects", "stale redirect")
            if total_crawled % 50 == 0:
                print(f"  [{total_crawled}] REDIRECT LOOP {url}")
            continue
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

        # Extract internal links only from 200 pages
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
        by_class: dict[str, list[str]] = {}
        for url, (status, final, exc, cls) in broken.items():
            by_class.setdefault(cls, []).append(url)
        for cls, urls in sorted(by_class.items()):
            print(f"  {cls}: {len(urls)}")
            for u in urls[:5]:
                print(f"    - {u}")
            if len(urls) > 5:
                print(f"    ... and {len(urls) - 5} more")
    else:
        print("No broken URLs found.")

    return total_crawled, http200, broken


if __name__ == "__main__":
    crawl()
