#!/usr/bin/env python3
"""Live site integrity crawl for https://ziontechgroup.com — requests + BeautifulSoup.

Follows internal links only. Reports total crawled, HTTP 200 count, broken count,
and the first 10 broken URLs with classification.

Classification:
  - stale redirect: 3xx that lands external, or 3xx/4xx internal redirect chain not reaching 200
  - missing page: non-2xx/3xx for internal link, or exception during request
  - external reference error: non-200 or exception on an external link (should not be followed)
"""

from __future__ import annotations
from urllib.parse import urljoin, urlparse, urlunparse
from collections import deque
from typing import Optional, List, Dict, Tuple
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
START_URL = BASE_URL + "/"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
REQUEST_TIMEOUT = 15
MAX_PAGES = 500  # safety cap

def strip_fragment(url: str) -> str:
    p = urlparse(url)
    return urlunparse(p._replace(fragment=""))

def is_internal(url: str, base_netloc: str) -> bool:
    parsed = urlparse(url)
    return parsed.netloc == base_netloc or parsed.netloc == ""

def normalize(url: str, base_netloc: str) -> Optional[str]:
    full = urljoin(BASE_URL, url)
    full = strip_fragment(full)
    parsed = urlparse(full)
    if parsed.scheme not in ("http", "https"):
        return None
    return full

def classify_broken(url: str, status_code: Optional[int], exception: Optional[str]) -> str:
    base_netloc = urlparse(BASE_URL).netloc
    if exception:
        parsed = urlparse(url)
        if parsed.netloc and parsed.netloc != base_netloc:
            return "external reference error"
        return "missing page"
    if status_code is None:
        return "missing page"
    if 300 <= status_code < 400:
        parsed = urlparse(url)
        if parsed.netloc and parsed.netloc != base_netloc:
            return "external reference error"
        return "stale redirect"
    if status_code >= 400:
        parsed = urlparse(url)
        if parsed.netloc and parsed.netloc != base_netloc:
            return "external reference error"
        return "missing page"
    return "missing page"

def extract_links(html: str, base_netloc: str) -> List[str]:
    soup = BeautifulSoup(html, "html.parser")
    links: List[str] = []
    for tag in soup.find_all(["a", "link"]):
        href = tag.get("href")
        if not href or not isinstance(href, str):
            continue
        full = normalize(href, base_netloc)
        if full is None:
            continue
        if not is_internal(full, base_netloc):
            continue
        full = strip_fragment(full)
        if full.startswith(BASE_URL):
            links.append(full)
    return links

def main():
    base_netloc = urlparse(BASE_URL).netloc
    visited: set = set()
    queue: deque = deque([START_URL])
    # broken: dict url -> (status_code_or_None, exception_or_None, classification)
    broken: Dict[str, Tuple] = {}
    http200 = 0
    total = 0

    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})

    while queue and total < MAX_PAGES:
        url = queue.popleft()
        if url in visited:
            continue
        visited.add(url)
        total += 1

        try:
            resp = session.get(url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
        except requests.exceptions.RequestException as e:
            exc_name = type(e).__name__
            broken[url] = (None, exc_name, classify_broken(url, None, exc_name))
            continue

        status = resp.status_code

        if status == 200:
            http200 += 1
            links = extract_links(resp.text, base_netloc)
            for link in links:
                if link not in visited and link not in queue:
                    queue.append(link)
        else:
            classification = classify_broken(url, status, None)
            broken[url] = (status, None, classification)

    unique_broken = list(broken.items())

    print("Total crawled: {}".format(total))
    print("HTTP 200: {}".format(http200))
    print("Broken: {}".format(len(unique_broken)))
    print()
    if unique_broken:
        print("First 10 broken URLs:")
        for i, (url, (status, exc, cls)) in enumerate(unique_broken[:10]):
            detail = "HTTP {}".format(status) if status else "Exception: {}".format(exc)
            print("  {}. {}  [{}]  → {}".format(i+1, url, detail, cls))
    else:
        print("No broken URLs found.")

    cls_counts: Dict[str, int] = {}
    for _url, (_status, _exc, cls) in unique_broken:
        cls_counts[cls] = cls_counts.get(cls, 0) + 1
    print()
    print("Classification breakdown:")
    for cls, cnt in sorted(cls_counts.items()):
        print("  {}: {}".format(cls, cnt))

if __name__ == "__main__":
    main()
