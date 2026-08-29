#!/usr/bin/env python3
"""Live site integrity check for ziontechgroup.com"""
import sys
import re
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
MAX_PAGES = 200
TIMEOUT = 15
DELAY = 0.3  # polite crawl delay

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
})

def is_internal(url):
    parsed = urlparse(url)
    base_parsed = urlparse(BASE)
    return parsed.netloc == base_parsed.netloc or parsed.netloc == ""

def normalize(url):
    # strip fragment
    parsed = urlparse(url)
    return parsed._replace(fragment="").geturl()

def crawl():
    to_visit = [BASE]
    visited = set()
    results = []  # (url, status_code, error_msg_or_None)

    while to_visit and len(visited) < MAX_PAGES:
        url = to_visit.pop(0)
        url = normalize(url)
        if url in visited:
            continue
        if not is_internal(url):
            continue
        # skip non-http schemes
        if urlparse(url).scheme not in ("http", "https", ""):
            continue
        if urlparse(url).scheme == "":
            url = urljoin(BASE, url)

        visited.add(url)
        status = None
        error = None
        resp = None
        try:
            resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
            status = resp.status_code
            final_url = resp.url
            # if redirected, mark the final URL
            if final_url != url and is_internal(final_url):
                if final_url not in visited:
                    visited.add(final_url)
                    # re-fetch final to confirm
                    try:
                        resp2 = session.get(final_url, timeout=TIMEOUT, allow_redirects=True)
                        results.append((final_url, resp2.status_code, None))
                    except Exception as e:
                        results.append((final_url, None, str(e)))
        except requests.exceptions.TooManyRedirects:
            status = 310
            error = "too many redirects"
        except requests.exceptions.ConnectionError as e:
            status = None
            error = f"connection error: {e}"
        except requests.exceptions.Timeout:
            status = None
            error = "timeout"
        except Exception as e:
            status = None
            error = str(e)

        results.append((url, status, error))

        # Extract links only if we got a 200
        if status == 200 and resp is not None:
            try:
                soup = BeautifulSoup(resp.text, "html.parser")
                for a in soup.find_all("a", href=True):
                    href = str(a["href"])
                    # resolve
                    absolute = urljoin(url, href)
                    absolute = normalize(absolute)
                    if is_internal(absolute) and absolute not in visited:
                        to_visit.append(absolute)
            except Exception:
                pass

        # polite delay
        import time
        time.sleep(DELAY)

    return results

def classify(url, status, error):
    """Classify a broken URL."""
    if status is None and error:
        if "connection" in error.lower() or "timeout" in error.lower():
            return "external reference error", error
        return "missing page", error
    if status is not None:
        if 300 <= status < 400:
            return "stale redirect", f"HTTP {status}"
        if 400 <= status < 500:
            if status == 404:
                return "missing page", f"HTTP {status}"
            return "missing page", f"HTTP {status}"
        if status >= 500:
            return "missing page", f"HTTP {status} (server error)"
    return "unknown", str(status or error)

def main():
    print(f"Starting crawl of {BASE} ...")
    results = crawl()

    total = len(results)
    ok_200 = sum(1 for _, s, _ in results if s == 200)
    broken = [(u, s, e) for u, s, e in results if s != 200 or (s is None and e)]

    print(f"\n{'='*60}")
    print(f"TOTAL CRAWLED: {total}")
    print(f"HTTP 200:      {ok_200}")
    print(f"BROKEN:        {len(broken)}")
    print(f"{'='*60}")

    if broken:
        print(f"\nFirst 10 broken URLs:")
        print("-" * 60)
        for url, status, error in broken[:10]:
            cls, detail = classify(url, status, error)
            print(f"  [{cls}] {url}")
            print(f"         detail: {detail}")
        print("-" * 60)
        # Summary classification counts
        from collections import Counter
        cls_counts = Counter()
        for url, status, error in broken:
            cls, _ = classify(url, status, error)
            cls_counts[cls] += 1
        print(f"\nClassification summary:")
        for cls, cnt in cls_counts.most_common():
            print(f"  {cls}: {cnt}")
    else:
        print("\nNo broken URLs found.")

if __name__ == "__main__":
    main()
