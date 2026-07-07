import sys
import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
from collections import deque

START_URL = "https://ziontechgroup.com"
MAX_BROKEN = 10
TIMEOUT = 15

class IntegrityCrawler:
    def __init__(self, start_url):
        self.start_netloc = urlparse(start_url).netloc.lower()
        self.seen = set()
        self.to_visit = deque([start_url])
        self.results = []  # list of (url, status, classification)
        self.total_crawled = 0
        self.http_200 = 0
        self.broken = []

    def is_internal(self, url):
        try:
            return urlparse(url).netloc.lower() == self.start_netloc
        except Exception:
            return False

    def normalize(self, url):
        # Remove fragment
        parsed = urlparse(url)
        cleaned = parsed._replace(fragment="").geturl()
        return cleaned

    def classify(self, url, status, final_url):
        if status == 200:
            return None
        if status in (301, 302, 303, 307, 308):
            return "stale redirect"
        if status == 404:
            return "missing page"
        if status is None:
            return "external reference error"
        # Other 4xx/5xx
        if 400 <= status < 600:
            return "missing page" if status == 404 else "external reference error"
        return "external reference error"

    def crawl(self):
        headers = {
            "User-Agent": "Mozilla/5.0 (compatible; IntegrityCrawler/1.0)"
        }
        session = requests.Session()
        session.headers.update(headers)

        while self.to_visit and len(self.seen) < 500:
            current = self.to_visit.popleft()
            current = self.normalize(current)
            if current in self.seen:
                continue
            self.seen.add(current)

            try:
                resp = session.get(current, timeout=TIMEOUT, allow_redirects=True)
                status = resp.status_code
                final_url = self.normalize(resp.url)
            except requests.exceptions.TooManyRedirects:
                status = None
                final_url = current
            except requests.exceptions.Timeout:
                status = None
                final_url = current
            except requests.exceptions.ConnectionError:
                status = None
                final_url = current
            except Exception:
                status = None
                final_url = current
            finally:
                # Ensure we always make progress
                if 'resp' not in dir() or status is None:
                    status = None
                    final_url = current

            self.total_crawled += 1
            if status == 200:
                self.http_200 += 1
                # Extract internal links and enqueue
                try:
                    soup = BeautifulSoup(resp.text, "html.parser")
                    for tag in soup.find_all(["a", "link"], href=True):
                        href = urljoin(current, tag.get("href", ""))
                        href = self.normalize(href)
                        if self.is_internal(href) and href not in self.seen and href not in self.to_visit:
                            self.to_visit.append(href)
                except Exception:
                    pass
            else:
                classification = self.classify(current, status, final_url)
                item = {
                    "url": current,
                    "status": status if status is not None else "no response",
                    "classification": classification,
                    "final": final_url if final_url != current else None,
                }
                self.broken.append(item)
                if len(self.broken) >= MAX_BROKEN:
                    # Stop early once we have enough broken URLs
                    break

        # Truncate to exactly MAX_BROKEN for reporting
        self.broken = self.broken[:MAX_BROKEN]
        self.broken_count = len(self.broken)

    def report(self):
        lines = []
        lines.append(f"Total crawled: {self.total_crawled}")
        lines.append(f"HTTP 200 count: {self.http_200}")
        lines.append(f"Broken count: {self.broken_count}")
        if self.broken:
            lines.append("First 10 broken URLs:")
            for item in self.broken:
                extra = ""
                if item.get("final"):
                    extra = f" -> {item['final']}"
                lines.append(f"  {item['status']} | {item['classification']}: {item['url']}{extra}")
        else:
            lines.append("No broken URLs found.")
        return "\n".join(lines)

if __name__ == "__main__":
    crawler = IntegrityCrawler(START_URL)
    crawler.crawl()
    crawler.broken_count = len(crawler.broken)
    print(crawler.report())
