
#!/usr/bin/env python3
"""
Site integrity crawl for ziontechgroup.com.
Follows internal links only, classifies broken URLs.
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
import time
import sys
import re

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 300
TIMEOUT = 15
DELAY = 0.25
IGNORE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
                     '.css', '.js', '.woff', '.woff2', '.ttf', '.eot',
                     '.pdf', '.doc', '.docx', '.zip', '.mp4', '.mp3'}

class Crawler:
    def __init__(self, base_url):
        self.base_url = base_url.rstrip('/')
        self.base_netloc = urlparse(base_url).netloc.lower()
        self.visited = set()
        self.to_visit = [base_url]
        self.ok = []       # 200
        self.broken = []   # non-200 or error
        self.errors = []   # request exceptions
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (compatible; SiteIntegrityChecker/1.0)'
        })

    def is_internal(self, url):
        parsed = urlparse(url)
        return parsed.netloc.lower() == self.base_netloc

    def should_skip(self, url):
        path = urlparse(url).path.lower()
        for ext in IGNORE_EXTENSIONS:
            if path.endswith(ext):
                return True
        return False

    def normalize(self, url):
        url, _ = urldefrag(url)
        return url.rstrip('/') or url

    def crawl(self):
        while self.to_visit and len(self.visited) < MAX_PAGES:
            url = self.to_visit.pop(0)
            norm = self.normalize(url)
            if norm in self.visited:
                continue
            self.visited.add(norm)

            if self.should_skip(url):
                self.ok.append(url)
                continue

            try:
                resp = self.session.get(url, timeout=TIMEOUT, allow_redirects=True)
                final_url = resp.url
                final_norm = self.normalize(final_url)

                if resp.status_code == 200:
                    self.ok.append(url)
                    # Extract links
                    soup = BeautifulSoup(resp.text, 'html.parser')
                    for a in soup.find_all('a', href=True):
                        href = a['href'].strip()
                        if not href or href.startswith(('#', 'javascript:', 'mailto:', 'tel:')):
                            continue
                        full = urljoin(url, href)
                        if self.is_internal(full) and self.normalize(full) not in self.visited:
                            self.to_visit.append(full)
                else:
                    self.broken.append((url, resp.status_code, final_url))
            except requests.exceptions.RequestException as e:
                self.errors.append((url, str(e)))

            time.sleep(DELAY)

        return self.ok, self.broken, self.errors

def classify_broken(broken_list, errors_list):
    """Classify each broken URL as stale redirect, missing page, or external reference error."""
    results = []
    for entry in broken_list:
        url, status, final = entry
        classification = ""
        if 300 <= status < 400:
            # Check if final URL is external or no URL
            if not final or urlparse(final).netloc.lower() != urlparse(BASE_URL).netloc.lower():
                classification = "stale redirect (points to external or invalid target)"
            else:
                classification = "stale redirect (HTTP {0} -> {1})".format(status, final)
        elif status == 404:
            classification = "missing page (404 Not Found)"
        elif status == 410:
            classification = "missing page (410 Gone)"
        elif status >= 500:
            classification = "server error (HTTP {0})".format(status)
        else:
            classification = "missing page (HTTP {0})".format(status)
        results.append((url, status, classification))

    for url, err in errors_list:
        results.append((url, None, "external reference error: {0}".format(err)))

    return results

if __name__ == '__main__':
    print("=" * 60)
    print("Site Integrity Check: " + BASE_URL)
    print("=" * 60)

    crawler = Crawler(BASE_URL)
    ok, broken, errors = crawler.crawl()

    total = len(ok) + len(broken) + len(errors)
    print("\n--- Summary ---")
    print("Total crawled: {0}".format(total))
    print("HTTP 200 OK:   {0}".format(len(ok)))
    print("Broken:        {0}".format(len(broken) + len(errors)))
    print("Errors:        {0}".format(len(errors)))

    if broken or errors:
        print("\n--- Broken URLs ---")
        classified = classify_broken(broken, errors)
        for i, (url, status, cls) in enumerate(classified[:10], 1):
            status_str = str(status) if status else "ERR"
            print("{0}. [{1}] {2}".format(i, status_str, url))
            print("   → {0}".format(cls))
        if len(classified) > 10:
            print("... and {0} more".format(len(classified) - 10))

    if not broken and not errors:
        print("\n✓ No broken URLs found.")
