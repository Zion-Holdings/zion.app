#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls internal links only, reports status counts and broken URLs.
Uses the venv at /Users/miami2/zion.app/automation/.crawl-venv
"""
import sys
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 500
DELAY = 0.2  # polite delay between requests

session = requests.Session()
session.headers.update({
    "User-Agent": "ZionSiteIntegrityCheck/1.0 (cron audit; +https://ziontechgroup.com/contact/)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
})

def is_internal(url):
    """Return True if url belongs to ziontechgroup.com domain."""
    parsed = urlparse(url)
    netloc = parsed.netloc.lower()
    return netloc in ("ziontechgroup.com", "www.ziontechgroup.com", "") or netloc.endswith(".ziontechgroup.com")

def normalize(url):
    """Strip fragment, ensure absolute."""
    parsed = urlparse(url)
    return parsed._replace(fragment="").geturl()

def get_links(html, page_url):
    """Extract all href links from HTML, return set of absolute URLs."""
    soup = BeautifulSoup(html, "html.parser")
    links = set()
    for a in soup.find_all("a", href=True):
        href = a["href"]
        full = urljoin(page_url, href)
        full = normalize(full)
        if is_internal(full):
            links.add(full)
    return links

def classify_broken(url, status_code, response_text=None):
    """
    Classify a broken URL:
      - stale_redirect: 3xx that ultimately doesn't land on a 200 (or redirects to a broken target)
      - missing_page: 404/410
      - external_reference_error: internal-looking URL that resolves to a non-ziontechgroup host
    """
    parsed = urlparse(url)
    if parsed.scheme in ("http", "https") and not is_internal(url):
        return "external_reference_error"
    if status_code == 404 or status_code == 410:
        return "missing_page"
    if 300 <= status_code < 400:
        return "stale_redirect"
    # 5xx, connection errors, etc.
    if status_code >= 500:
        return "server_error"
    return "unknown"

def check_url(url):
    """Return (status_code, final_url, elapsed, error_msg)."""
    try:
        resp = session.get(url, timeout=10, allow_redirects=True)
        return resp.status_code, resp.url, resp.elapsed.total_seconds(), None
    except requests.exceptions.TooManyRedirects:
        return 310, url, 0, "too many redirects"
    except requests.exceptions.ConnectionError as e:
        return 0, url, 0, f"connection error: {e}"
    except requests.exceptions.Timeout:
        return 0, url, 0, "timeout"
    except Exception as e:
        return 0, url, 0, f"error: {e}"

def main():
    print(f"Starting integrity check for {BASE_URL}")
    print(f"Max pages: {MAX_PAGES}, delay: {DELAY}s")
    print("-" * 60)

    visited = set()
    to_crawl = deque([BASE_URL])
    url_status = {}  # url -> (status_code, final_url, error)

    crawled = 0

    while to_crawl and crawled < MAX_PAGES:
        url = to_crawl.popleft()
        if url in visited:
            continue
        visited.add(url)
        crawled += 1

        status_code, final_url, elapsed, error = check_url(url)
        url_status[url] = (status_code, final_url, error)

        if error:
            print(f"  [{crawled}] ERROR {url} -> {error}")
        else:
            print(f"  [{crawled}] {status_code} {url} (final: {final_url})")

        # Follow links only from successful HTML pages
        if status_code == 200:
            try:
                resp = session.get(url, timeout=10)
                links = get_links(resp.text, url)
                for link in links:
                    if link not in visited:
                        to_crawl.append(link)
            except Exception:
                pass

        time.sleep(DELAY)

    # --- Report ---
    print("\n" + "=" * 60)
    print("SITE INTEGRITY REPORT")
    print("=" * 60)
    print(f"Total crawled: {crawled}")
    print(f"Base URL: {BASE_URL}")

    ok_count = sum(1 for v in url_status.values() if v[0] == 200)
    broken = {u: v for u, v in url_status.items() if v[0] != 200}
    broken_count = len(broken)

    print(f"HTTP 200: {ok_count}")
    print(f"Broken: {broken_count}")
    print("-" * 60)

    if broken_count == 0:
        print("No broken URLs found. Site is healthy.")
    else:
        print(f"First 10 broken URLs (of {broken_count}):")
        print("-" * 60)
        for i, (url, (code, final, err)) in enumerate(sorted(broken.items())[:10], 1):
            classification = classify_broken(url, code)
            detail = ""
            if err:
                detail = f" [{err}]"
            elif code != 200 and final != url:
                detail = f" (redirected to {final})"
            print(f"  {i}. [{classification}] {code} {url}{detail}")

        # Summary by classification
        print("\nBreakdown by classification:")
        from collections import Counter
        cls_counts = Counter()
        for url, (code, final, err) in broken.items():
            cls_counts[classify_broken(url, code)] += 1
        for cls, cnt in cls_counts.most_common():
            print(f"  {cls}: {cnt}")

    print("-" * 60)
    print("Check complete.")

if __name__ == "__main__":
    main()
