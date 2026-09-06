#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls with requests+BeautifulSoup, follows internal links only.
Reports: total crawled, HTTP 200 count, broken count, first 10 broken URLs.
Classifies broken URLs as stale redirect / missing page / external reference error.
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
import sys
import time
import re

BASE_URL = "https://ziontechgroup.com"
LOG_LEVEL = 1  # 0=quiet, 1=progress, 2=verbose

def log(msg):
    if LOG_LEVEL >= 1:
        print(msg, flush=True)

class IntegrityCrawler:
    def __init__(self, base_url, max_pages=500, delay=0.25):
        self.base_url = base_url.rstrip("/")
        self.base_netloc = urlparse(base_url).netloc.lower()
        self.max_pages = max_pages
        self.delay = delay
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/124.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        })
        self.visited = set()
        self.to_visit = [base_url]
        self.results = []  # (url, status, error_msg)

    def is_internal(self, url):
        parsed = urlparse(url)
        # Only http/https
        if parsed.scheme not in ("http", "https"):
            return False
        # Same netloc (lowercase)
        if parsed.netloc.lower() != self.base_netloc:
            return False
        # Skip obvious non-page paths
        path = parsed.path.lower()
        if path.endswith((".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp",
                          ".ico", ".css", ".js", ".woff", ".woff2", ".ttf",
                          ".eot", ".pdf", ".mp4", ".webm", ".zip")):
            return False
        return True

    def normalize(self, url):
        """Strip fragment, keep final URL form."""
        url, _ = urldefrag(url)
        return url.rstrip("/")

    def fetch(self, url):
        try:
            resp = self.session.get(url, timeout=15, allow_redirects=True)
            return resp
        except requests.exceptions.Timeout:
            return None
        except requests.exceptions.ConnectionError:
            return None
        except requests.exceptions.TooManyRedirects:
            return None
        except Exception:
            return None

    def extract_links(self, html, page_url):
        soup = BeautifulSoup(html, "html.parser")
        links = set()
        for a in soup.find_all("a", href=True):
            href = a["href"]
            if not isinstance(href, str):
                continue
            href = href.strip()
            if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                continue
            abs_url = urljoin(page_url, href)
            if self.is_internal(abs_url):
                links.add(self.normalize(abs_url))
        return links

    def crawl(self):
        while self.to_visit and len(self.visited) < self.max_pages:
            url = self.to_visit.pop(0)
            url = self.normalize(url)
            if url in self.visited:
                continue
            self.visited.add(url)
            log(f"[{len(self.visited)}] Checking {url}")

            resp = self.fetch(url)
            if resp is None:
                self.results.append((url, "UNREACHABLE", "Connection/timeout error"))
                continue

            final_url = self.normalize(resp.url)

            if resp.status_code == 200:
                self.results.append((url, 200, ""))
                # Extract links
                if "text/html" in resp.headers.get("Content-Type", ""):
                    links = self.extract_links(resp.text, url)
                    for link in sorted(links):
                        if link not in self.visited and link not in self.to_visit:
                            self.to_visit.append(link)
            else:
                # Non-200
                status = resp.status_code
                error_msg = ""
                if status in (301, 302, 307, 308):
                    # Followed redirect; if final is not 200, classify
                    if resp.status_code != 200:
                        error_msg = f"Redirect (HTTP {status})"
                elif status == 404:
                    error_msg = "Missing page (HTTP 404)"
                elif status == 403:
                    error_msg = "Forbidden (HTTP 403)"
                elif status == 500:
                    error_msg = "Server error (HTTP 500)"
                elif status == 502:
                    error_msg = "Bad gateway (HTTP 502)"
                elif status == 503:
                    error_msg = "Service unavailable (HTTP 503)"
                else:
                    error_msg = f"HTTP {status}"

                self.results.append((url, status, error_msg))

            time.sleep(self.delay)

        return self.results

    def classify_broken(self, url, status, error_msg):
        """Classify broken URLs into categories."""
        parsed = urlparse(url)
        if status == "UNREACHABLE":
            return "external_reference_error", "Could not connect to server"
        if status in (301, 302, 307, 308) and error_msg.startswith("Redirect"):
            return "stale_redirect", f"Redirect ended at non-200 (HTTP {status})"
        if status == 404:
            return "missing_page", "Page not found (404)"
        if status == 403:
            return "missing_page", "Forbidden — may be missing or access-restricted"
        if status in (500, 502, 503):
            return "missing_page", f"Server error (HTTP {status}) — page may be broken"
        if status and status >= 400:
            return "missing_page", f"Client/server error (HTTP {status})"
        return "unknown", error_msg

def main():
    print("=" * 70)
    print(f"Live Site Integrity Check: {BASE_URL}")
    print("=" * 70)
    print(f"Python: {sys.version.split()[0]}")
    import bs4
    print(f"requests: {requests.__version__}")
    print(f"BeautifulSoup4: {bs4.__version__}")
    print("-" * 70)

    crawler = IntegrityCrawler(BASE_URL, max_pages=500, delay=0.25)
    start = time.time()
    results = crawler.crawl()
    elapsed = time.time() - start

    total = len(results)
    ok_200 = sum(1 for _, s, _ in results if s == 200)
    broken = [(u, s, e) for u, s, e in results if s != 200]

    print(f"\n{'RESULT':<5} {'URL':<60} {'STATUS':<12} {'CLASSIFICATION'}")
    print("-" * 110)

    broken_sorted = sorted(broken, key=lambda x: x[0])
    first10 = broken_sorted[:10]

    for url, status, error_msg in broken_sorted:
        cls, desc = crawler.classify_broken(url, status, error_msg)
        display_url = url[:57] + "..." if len(url) > 60 else url
        print(f"{'BROKEN':<5} {display_url:<60} {str(status):<12} [{cls}] {desc}")

    if not broken:
        print("No broken URLs found.")

    print("=" * 70)
    print(f"SUMMARY")
    print(f"  Total crawled URLs : {total}")
    print(f"  HTTP 200 count     : {ok_200}")
    print(f"  Broken count       : {len(broken)}")
    print(f"  Elapsed time       : {elapsed:.1f}s")
    print(f"  Pages/s           : {total/max(elapsed,0.001):.1f}")
    print("=" * 70)

    if first10:
        print(f"\nFirst {min(10, len(broken))} broken URLs:")
        for i, (url, status, error_msg) in enumerate(first10, 1):
            cls, desc = crawler.classify_broken(url, status, error_msg)
            print(f"  {i}. {url}")
            print(f"     Status: {status} | Classification: {cls} | {desc}")

    # Classification summary
    if broken:
        from collections import Counter
        cls_counts = Counter(crawler.classify_broken(u, s, e)[0] for u, s, e in broken)
        print(f"\nClassification breakdown:")
        for cls, cnt in cls_counts.most_common():
            print(f"  {cls}: {cnt}")

if __name__ == "__main__":
    main()
