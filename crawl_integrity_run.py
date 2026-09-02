import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
import time
import sys

BASE_URL = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE_URL).netloc
MAX_PAGES = 500  # safety cap
DELAY = 0.3       # polite delay between requests

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0; +https://ziontechgroup.com)",
    "Cache-Control": "no-cache",
})

visited = set()
queue = [BASE_URL]
broken = []   # (url, status_code, reason)
ok_urls = []  # 200
redirects = []  # 3xx

def is_internal(url):
    """Only follow links that stay on the same domain."""
    parsed = urlparse(url)
    return parsed.netloc == DOMAIN or parsed.netloc == ""

def classify(url, status_code, resp_headers=None):
    """Classify why a URL is broken/non-200."""
    if status_code == 404:
        return "missing page"
    if status_code in (301, 302, 307, 308):
        location = resp_headers.get("Location", "") if resp_headers else ""
        if location and urlparse(location).netloc != DOMAIN:
            return "stale redirect (external target)"
        if location:
            return "stale redirect (internal)"
        return "stale redirect"
    if status_code == 500:
        return "server error"
    if status_code == 403:
        return "forbidden"
    if status_code == 503:
        return "service unavailable"
    if status_code >= 400:
        return "http error"
    return "unknown"

print(f"Starting crawl from {BASE_URL}")
print(f"Max pages: {MAX_PAGES}, delay: {DELAY}s")
print("-" * 60)

while queue and len(visited) < MAX_PAGES:
    url = queue.pop(0)
    url, _ = urldefrag(url)
    if url in visited:
        continue
    visited.add(url)

    try:
        resp = session.get(url, timeout=10, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code
        time.sleep(DELAY)
    except requests.exceptions.RequestException as e:
        broken.append((url, "CONN_ERROR", str(e)[:120]))
        print(f"  ERR  {url}  ({e.__class__.__name__})")
        continue

    if status == 200:
        ok_urls.append(url)
        print(f"  200  {url}")
        # Extract links for next crawl
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
            for a in soup.find_all("a", href=True):
                href = a["href"]
                # Skip javascript, mailto, anchors-only, tel:
                if href.startswith(("javascript:", "mailto:", "tel:", "#")):
                    continue
                full = urljoin(url, href)
                full, _ = urldefrag(full)
                if is_internal(full) and full not in visited and full not in queue:
                    queue.append(full)
        except Exception:
            pass
    else:
        reason = classify(url, status, dict(resp.headers))
        broken.append((url, status, reason))
        print(f"  {status}  {url}  ({reason})")
        # Still try to follow if it redirects to internal
        if status in (301, 302, 307, 308):
            location = resp.headers.get("Location", "")
            if is_internal(location):
                target, _ = urldefrag(location)
                if target not in visited and target not in queue:
                    queue.append(target)

print("-" * 60)
print(f"\nRESULTS:")
print(f"Total crawled (unique URLs visited): {len(visited)}")
print(f"HTTP 200 OK: {len(ok_urls)}")
print(f"Broken/non-200: {len(broken)}")

if broken:
    print(f"\n--- First 10 Broken URLs ---")
    for i, (url, status, reason) in enumerate(broken[:10], 1):
        print(f"  {i}. [{status}] {url}")
        print(f"     Classification: {reason}")

    # Count by classification
    from collections import Counter
    cls_counts = Counter(reason for _, _, reason in broken)
    print(f"\n--- Breakdown by Classification ---")
    for cls, count in cls_counts.most_common():
        print(f"  {cls}: {count}")
else:
    print("\nNo broken URLs found.")

