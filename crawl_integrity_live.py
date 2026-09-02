#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls the site with requests+BeautifulSoup, follows internal links only,
and reports: total crawled, HTTP 200 count, broken count, and first 10 broken URLs.
Classifies each broken URL: stale redirect, missing page, or external reference error.
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin, urldefrag
from collections import deque, defaultdict
import sys
import time

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 500
TIMEOUT = 15
DELAY = 0.1

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityCheck/1.0; +https://ziontechgroup.com)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
}

class IntegrityChecker:
    def __init__(self, base_url):
        self.base_url = base_url
        self.base_netloc = urlparse(base_url).netloc
        self.visited = set()
        self.to_visit = deque()
        self.to_visit.append(base_url)
        self.results = []
        self.broken = []
        self.stats = {"total": 0, "ok": 0, "broken": 0}

    def is_internal(self, url):
        parsed = urlparse(url)
        return parsed.netloc == self.base_netloc or parsed.netloc == "" or parsed.netloc.endswith("." + self.base_netloc)

    def normalize(self, url):
        # Remove fragment
        url, _ = urldefrag(url)
        return url.rstrip("/") or url

    def crawl(self):
        while self.to_visit and len(self.visited) < MAX_PAGES:
            url = self.normalize(self.to_visit.popleft())
            if url in self.visited:
                continue
            self.visited.add(url)
            self.stats["total"] += 1

            status, category, error_detail = self.fetch(url)
            if status == 200:
                self.stats["ok"] += 1
                # Extract links
                try:
                    resp = requests.get(url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=True)
                    if resp.status_code == 200:
                        soup = BeautifulSoup(resp.text, "html.parser")
                        for a in soup.find_all("a", href=True):
                            href = a["href"].strip()
                            if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                                continue
                            absolute = urljoin(url, href)
                            abs_norm = self.normalize(absolute)
                            if self.is_internal(abs_norm) and abs_norm not in self.visited:
                                self.to_visit.append(abs_norm)
                except Exception:
                    pass
            else:
                self.stats["broken"] += 1
                self.broken.append({
                    "url": url,
                    "status": status,
                    "category": category,
                    "detail": error_detail,
                })

            time.sleep(DELAY)

    def fetch(self, url):
        try:
            resp = requests.get(url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=True)
            final_url = resp.url
            status = resp.status_code

            if status == 200:
                return (200, "ok", "")

            # Classify the issue
            if status in (301, 302, 307, 308):
                # Check if it redirected to something broken
                try:
                    redirect_check = requests.get(final_url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=True)
                    if redirect_check.status_code != 200:
                        return (status, "stale_redirect", f"redirects to {final_url} (status {redirect_check.status_code})")
                except Exception as e:
                    return (status, "stale_redirect", f"redirects to {final_url} — unreachable ({e})")
                return (status, "stale_redirect", f"redirects to {final_url}")

            # Non-200, non-redirect
            if status == 404:
                return (status, "missing_page", "HTTP 404 Not Found")
            elif status == 403:
                return (status, "missing_page", "HTTP 403 Forbidden (access denied)")
            elif status == 500:
                return (status, "missing_page", "HTTP 500 Internal Server Error")
            elif status == 502:
                return (status, "missing_page", "HTTP 502 Bad Gateway")
            elif status == 503:
                return (status, "missing_page", "HTTP 503 Service Unavailable")
            elif status >= 400:
                return (status, "missing_page", f"HTTP {status}")

            return (status, "missing_page", f"HTTP {status}")

        except requests.exceptions.ConnectionError as e:
            return (0, "missing_page", f"Connection error: {e}")
        except requests.exceptions.Timeout:
            return (0, "missing_page", "Request timed out")
        except requests.exceptions.TooManyRedirects:
            return (0, "stale_redirect", "Too many redirects (possible loop)")
        except requests.exceptions.RequestException as e:
            return (0, "missing_page", f"Request error: {e}")

    def report(self):
        print("=" * 70)
        print(f"ZION TECH GROUP — LIVE SITE INTEGRITY CHECK")
        print(f"Target: {self.base_url}")
        print(f"Crawl limit: {MAX_PAGES} pages")
        print("=" * 70)
        print()
        print(f"Total URLs crawled:  {self.stats['total']}")
        print(f"HTTP 200 (OK):       {self.stats['ok']}")
        print(f"Broken:              {self.stats['broken']}")
        print()
        print("-" * 70)
        print("CLASSIFICATION BREAKDOWN")
        print("-" * 70)

        categories = defaultdict(list)
        for b in self.broken:
            categories[b["category"]].append(b)

        for cat, items in sorted(categories.items()):
            cat_label = {
                "stale_redirect": "Stale Redirect",
                "missing_page": "Missing Page",
                "external_reference_error": "External Reference Error",
            }.get(cat, cat)
            print(f"  {cat_label}: {len(items)}")

        print()
        print("-" * 70)
        print("FIRST 10 BROKEN URLs")
        print("-" * 70)

        if not self.broken:
            print("  No broken URLs found.")
        else:
            for i, b in enumerate(self.broken[:10], 1):
                cat_label = {
                    "stale_redirect": "STALE REDIRECT",
                    "missing_page": "MISSING PAGE",
                    "external_reference_error": "EXTERNAL REF",
                }.get(b["category"], b["category"].upper())
                print(f"  {i:2d}. [{cat_label}] {b['url']}")
                if b["detail"]:
                    print(f"      Detail: {b['detail']}")

        if len(self.broken) > 10:
            print(f"\n  ... and {len(self.broken) - 10} more broken URLs.")

        print()
        print("=" * 70)
        print("CHECK COMPLETE")
        print("=" * 70)

        # Return as dict for programmatic use
        return {
            "total": self.stats["total"],
            "ok": self.stats["ok"],
            "broken": self.stats["broken"],
            "broken_urls": self.broken[:10],
            "all_broken": self.broken,
            "categories": {k: len(v) for k, v in categories.items()},
        }


if __name__ == "__main__":
    checker = IntegrityChecker(BASE_URL)
    print(f"Crawling {BASE_URL} ...")
    checker.crawl()
    result = checker.report()
    sys.exit(0)
