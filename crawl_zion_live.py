#!/usr/bin/env python3
"""Live site integrity BFS crawler for https://ziontechgroup.com.

Follows internal links only. Classifies broken URLs as:
  - stale redirect  (3xx that does not resolve to a 200 internal page,
                     or 3xx/4xx internal redirect chain that does not reach 200)
  - missing page    (non-2xx/non-3xx for an internal link, or request exception)
  - external reference error (non-200 or exception on an external link)

Does NOT modify any files — only reports status.
"""

import sys
import time
from collections import deque
from urllib.parse import urljoin, urlparse, urlunparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE_URL).netloc.lower()
MAX_PAGES = 600
REQUEST_TIMEOUT = 20
DELAY = 0.05  # seconds between requests (politeness)

session = requests.Session()
session.headers.update(
    {
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/605.1.15 (KHTML, like Gecko) "
            "Version/17.0 Safari/605.1.15"
        )
    }
)


def normalize_url(url: str) -> str:
    """Strip fragment and lowercase scheme/netloc for stable dedup."""
    p = urlparse(url)
    p = p._replace(fragment="", path=p.path.rstrip("/") or "/")
    return urlunparse(p).lower()


def is_internal(url: str) -> bool:
    p = urlparse(url)
    return (not p.netloc or p.netloc.lower() == DOMAIN) and p.scheme in ("http", "https")


def classify(url: str, status: int | None, redirected_to: str | None, exc: Exception | None) -> str:
    if exc is not None:
        if is_internal(url):
            return "missing page"
        return "external reference error"
    # exception-free branch
    if not is_internal(url):
        # external link
        if status == 200:
            return "ok"
        return "external reference error"
    # internal link
    if status == 200:
        return "ok"
    if status in (301, 302, 303, 307, 308):
        # follow the redirect manually-ish: if redirected_to is external or
        # still non-200, it's a stale redirect
        if redirected_to and not is_internal(redirected_to):
            return "stale redirect"
        # internal redirect that we didn't reach 200 on
        return "stale redirect"
    # any other status for internal => missing page
    return "missing page"


def extract_links(html: str, base: str) -> list[str]:
    soup = BeautifulSoup(html, "html.parser")
    links = []
    for tag in soup.find_all(["a", "link"]):
        href = tag.get("href")
        if not href:
            continue
        # skip non-navigation links
        if tag.name == "link":
            rel = tag.get("rel")
            if rel is not None:
                rel_str = " ".join(rel).lower() if not isinstance(rel, str) else rel.lower()
                if rel_str in ("stylesheet", "preload", "icon", "apple-touch-icon"):
                    continue
        full = urljoin(base, href)
        full = normalize_url(full)
        if is_internal(full):
            links.append(full)
    return links


def main() -> None:
    start = time.time()
    to_visit = deque([normalize_url(BASE_URL)])
    visited: set[str] = set()
    broken: list[tuple[str, str, int | None, str | None, Exception | None]] = []  # url, classification, status, redirected_to, exc
    redirects_seen: list[tuple[str, str, int]] = []  # url, target, status

    total_requests = 0
    http_200 = 0

    print(f"Starting crawl of {BASE_URL} (max {MAX_PAGES} pages)", flush=True)

    while to_visit and len(visited) < MAX_PAGES:
        url = to_visit.popleft()
        if url in visited:
            continue
        visited.add(url)
        total_requests += 1

        try:
            resp = session.get(url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
            status = resp.status_code
            redirected_to = None
            if resp.is_redirect or status in (301, 302, 303, 307, 308):
                # capture the location header if present
                redirected_to = resp.headers.get("Location", "")
                if redirected_to:
                    redirected_to = normalize_url(urljoin(url, redirected_to))
        except Exception as exc:
            status = None
            redirected_to = None
            # For classification we still want a category
            cls = classify(url, None, None, exc)
            broken.append((url, cls, None, None, exc))
            if total_requests % 25 == 0:
                print(f"  [{len(visited)} visited, {len(broken)} broken] {url} -> EXCEPT: {exc}", flush=True)
            continue

        # track 200s
        if status == 200:
            http_200 += 1

        # follow redirects that land internally on 200 without re-fetching:
        # requests already followed them. The final `resp` object is the
        # post-redirect response. We still want to record the redirect chain
        # for classification purposes.
        if status in (301, 302, 303, 307, 308):
            # requests with allow_redirects=True should have followed through.
            # If we landed here, the final status is still a redirect =>
            # either a chain that didn't resolve or a redirect to external.
            redirects_seen.append((url, redirected_to or "", status))
            cls = classify(url, status, redirected_to, None)
            broken.append((url, cls, status, redirected_to, None))
        elif status != 200:
            cls = classify(url, status, redirected_to, None)
            broken.append((url, cls, status, redirected_to, None))
        else:
            # 200 — extract links
            pass

        if status == 200:
            links = extract_links(resp.text, url)
            for link in links:
                norm = normalize_url(link)
                if norm not in visited and norm not in to_visit:
                    to_visit.append(norm)

        if total_requests % 25 == 0:
            elapsed = time.time() - start
            print(
                f"  [{len(visited)} visited, {len(broken)} broken, "
                f"{len(to_visit)} queued, {elapsed:.1f}s]",
                flush=True,
            )

    # Deduplicate broken by URL (keep first classification)
    seen_broken: dict[str, tuple] = {}
    for entry in broken:
        url = entry[0]
        if url not in seen_broken:
            seen_broken[url] = entry
    broken_unique = list(seen_broken.values())

    elapsed = time.time() - start
    print("=" * 70, flush=True)
    print("SITE INTEGRITY CHECK — https://ziontechgroup.com", flush=True)
    print(f"Crawl duration: {elapsed:.1f}s", flush=True)
    print(f"Total pages crawled: {len(visited)}", flush=True)
    print(f"HTTP 200 count:      {http_200}", flush=True)
    print(f"Broken count:        {len(broken_unique)}", flush=True)
    print("=" * 70, flush=True)

    if broken_unique:
        print("\nFirst 10 broken URLs (by discovery order):", flush=True)
        for i, (url, cls, status, redir, exc) in enumerate(broken_unique[:10], 1):
            detail = ""
            if exc is not None:
                detail = f" | error: {exc}"
            elif status is not None:
                detail = f" | HTTP {status}"
                if redir:
                    detail += f" → {redir}"
            print(f"  {i}. [{cls}] {url}{detail}", flush=True)

        # Summary counts by classification
        from collections import Counter
        counts = Counter(entry[1] for entry in broken_unique)
        print("\nClassification summary:", flush=True)
        for cls, cnt in sorted(counts.items()):
            print(f"  {cls}: {cnt}", flush=True)
    else:
        print("\nNo broken links found.", flush=True)

    print("\nDone.", flush=True)


if __name__ == "__main__":
    main()
