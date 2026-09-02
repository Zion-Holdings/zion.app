#!/usr/bin/env python3
"""Live site integrity check for https://ziontechgroup.com
Crawl internal links only, report totals and broken URLs with classification."""

import sys
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque

BASE_URL = "https://ziontechgroup.com"
TIMEOUT = 15
MAX_PAGES = 500

def is_internal_url(url, base_netloc):
    """Check if URL belongs to the same site (internal)."""
    parsed = urlparse(url)
    if not parsed.netloc:
        return True  # relative URL, internal
    # strip www.
    netloc = parsed.netloc.lower()
    if netloc.startswith("www."):
        netloc = netloc[4:]
    return netloc == base_netloc

def classify_broken(url, status_code, response):
    """Classify a broken URL into one of three categories."""
    if status_code in (404, 410):
        return "missing page"
    if status_code in (403, 500, 502, 503):
        return "missing page"
    # Check for redirect chains or stale redirects
    if status_code in (301, 302, 307, 308):
        if response is not None:
            location = response.headers.get("Location", "")
            # If redirect points to nowhere or loops
            if not location or location.startswith("/") and not location.startswith("//"):
                return "stale redirect"
            if location.startswith("http"):
                # Follow one hop to check if target is 200
                try:
                    r2 = requests.head(location, timeout=TIMEOUT, allow_redirects=False)
                    if r2.status_code in (404, 410, 403, 500):
                        return "stale redirect"
                except Exception:
                    pass
        return "stale redirect"
    if status_code >= 400:
        # External reference error: link points to external domain but fails
        parsed = urlparse(url)
        return "external reference error" if parsed.netloc and parsed.netloc != "ziontechgroup.com" else "missing page"
    return "unknown"

def crawl_site():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; IntegrityCrawler/1.0; +https://ziontechgroup.com)"
    })

    base_netloc = urlparse(BASE_URL).netloc.lower()
    if base_netloc.startswith("www."):
        base_netloc = base_netloc[4:]

    visited = set()
    queue = deque([BASE_URL])
    results = {
        "total_crawled": 0,
        "http_200": 0,
        "broken": [],
        "broken_urls": [],
    }

    print(f"Starting crawl of {BASE_URL} (internal links only, max {MAX_PAGES} pages)...")
    print("-" * 60)

    while queue and results["total_crawled"] < MAX_PAGES:
        url = queue.popleft()
        url, _ = urldefrag(url)

        if url in visited:
            continue
        visited.add(url)

        try:
            resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
            status = resp.status_code
            results["total_crawled"] += 1

            if status == 200:
                results["http_200"] += 1
                # Parse links
                soup = BeautifulSoup(resp.text, "html.parser")
                for a_tag in soup.find_all("a", href=True):
                    href = a_tag["href"].strip()
                    if not href or href.startswith(("#", "javascript:", "mailto:", "tel:", "data:")):
                        continue
                    full_url = urljoin(url, href)
                    full_url, _ = urldefrag(full_url)
                    parsed = urlparse(full_url)
                    # Normalize: strip fragment, ensure http/https
                    if parsed.scheme not in ("http", "https"):
                        continue
                    if is_internal_url(full_url, base_netloc):
                        if full_url not in visited:
                            queue.append(full_url)
            else:
                # Broken link
                classification = classify_broken(url, status, resp)
                results["broken"].append({
                    "url": url,
                    "status": status,
                    "classification": classification,
                })
                results["broken_urls"].append(url)
                print(f"  BROKEN [{classification}] {status} {url}")

        except requests.exceptions.Timeout:
            results["broken"].append({
                "url": url,
                "status": "timeout",
                "classification": "missing page",
            })
            results["broken_urls"].append(url)
            print(f"  BROKEN [missing page] timeout {url}")
        except requests.exceptions.ConnectionError:
            results["broken"].append({
                "url": url,
                "status": "connection_error",
                "classification": "missing page",
            })
            results["broken_urls"].append(url)
            print(f"  BROKEN [missing page] connection_error {url}")
        except Exception as e:
            results["broken"].append({
                "url": url,
                "status": str(e)[:80],
                "classification": "missing page",
            })
            results["broken_urls"].append(url)
            print(f"  BROKEN [missing page] error {url}: {e}")

    return results

def main():
    results = crawl_site()

    total = results["total_crawled"]
    ok = results["http_200"]
    broken_count = len(results["broken"])

    print("-" * 60)
    print(f"\n{'='*60}")
    print(f"  SITE INTEGRITY CHECK: {BASE_URL}")
    print(f"{'='*60}")
    print(f"\n  Total pages crawled:  {total}")
    print(f"  HTTP 200 OK:          {ok}")
    print(f"  Broken links found:   {broken_count}")
    print()

    if broken_count > 0:
        print(f"  First 10 broken URLs:")
        print(f"  {'─'*56}")
        for i, b in enumerate(results["broken"][:10], 1):
            print(f"  {i:2d}. [{b['classification']:22s}] {str(b['status']):>6s}  {b['url']}")
        print(f"  {'─'*56}")
        print()

        # Summary by classification
        from collections import Counter
        cls_counts = Counter(b["classification"] for b in results["broken"])
        print(f"  Classification breakdown:")
        for cls, cnt in cls_counts.most_common():
            print(f"    • {cls}: {cnt}")
        print()
    else:
        print(f"  ✅  No broken links detected. Site is fully intact.")

    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
