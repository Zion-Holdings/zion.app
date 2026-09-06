"""
Live site integrity check for ziontechgroup.com.
Crawls internal links only, reports totals, 200s, broken, and classifies broken URLs.
"""
import sys
import time
import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}
TIMEOUT = 15
DELAY = 0.25  # polite delay between requests

visited = set()
queue = [BASE]
broken = []  # list of (url, status_code, classification)
success_200 = 0
total_crawled = 0

session = requests.Session()
session.headers.update(HEADERS)

def is_internal(url):
    parsed = urlparse(url)
    return parsed.netloc == urlparse(BASE).netloc or parsed.netloc == ""

def classify_broken(url, status_code, content=None):
    # Try to classify the type of breakage
    if status_code in (301, 302, 307, 308):
        # Follow redirect to see where it ends
        try:
            r = session.head(url, allow_redirects=True, timeout=TIMEOUT)
            if r.status_code == 404:
                return "stale redirect (ends at 404)"
            elif r.status_code >= 400:
                return f"stale redirect (final {r.status_code})"
            else:
                return f"redirect (final {r.status_code}) — possibly okay"
        except Exception:
            return "stale redirect (could not resolve)"
    elif status_code == 404:
        return "missing page (404)"
    elif status_code >= 500:
        return f"server error ({status_code})"
    elif status_code == 403:
        return "forbidden (403)"
    elif status_code == 400:
        return "bad request (400)"
    elif status_code == 401:
        return "unauthorized (401)"
    else:
        return f"other ({status_code})"

print(f"Starting crawl of {BASE}", flush=True)

while queue:
    url = queue.pop(0)
    if url in visited:
        continue
    visited.add(url)
    total_crawled += 1

    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=False)
    except requests.exceptions.TooManyRedirects:
        broken.append((url, "many-redirects", "stale redirect loop"))
        print(f"  [BROKEN] {url} — redirect loop", flush=True)
        continue
    except requests.exceptions.RequestException as e:
        broken.append((url, "connection-error", "external reference error / connection failure"))
        print(f"  [BROKEN] {url} — {type(e).__name__}: {e}", flush=True)
        continue

    status = resp.status_code

    if status == 200:
        success_200 += 1
        # Extract internal links
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
        except Exception:
            continue

        for link in soup.find_all("a", href=True):
            href = link["href"]
            if isinstance(href, list):
                href = " ".join(href)
            href = href.strip()
            # Skip anchors, javascript, mailto, tel
            if href.startswith(("#", "javascript:", "mailto:", "tel:")):
                continue
            absolute = urljoin(url, href)
            if is_internal(absolute) and absolute not in visited:
                queue.append(absolute)
    else:
        classification = classify_broken(url, status)
        broken.append((url, status, classification))
        print(f"  [BROKEN] {url} → {status} ({classification})", flush=True)

    if total_crawled % 50 == 0:
        print(f"  ... crawled {total_crawled} URLs so far, {len(broken)} broken", flush=True)

    time.sleep(DELAY)

# Final report
print("\n" + "=" * 60)
print("SITE INTEGRITY REPORT — ziontechgroup.com")
print("=" * 60)
print(f"Total crawled (internal):  {total_crawled}")
print(f"HTTP 200:                  {success_200}")
print(f"Broken:                    {len(broken)}")
print("-" * 60)

if broken:
    print("First 10 broken URLs:")
    for i, (url, status, cls) in enumerate(broken[:10], 1):
        print(f"  {i:2d}. {url}")
        print(f"      Status: {status}  |  Classification: {cls}")
else:
    print("No broken URLs found.")

print("=" * 60)
