import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque
import time

BASE_URL = "https://ziontechgroup.com"
visited = set()
queue = deque([BASE_URL])
broken = []
status_counts = {}
total_crawled = 0

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (site-integrity-checker/1.0)"
})
session.max_redirects = 5

def normalize_url(url):
    parsed = urlparse(url)
    # Remove fragment
    clean = parsed._replace(fragment="").geturl()
    # Remove trailing slash except root
    if len(clean) > len(BASE_URL) + 1 and clean.endswith("/"):
        clean = clean[:-1]
    return clean

def is_internal(url):
    return urlparse(url).netloc == urlparse(BASE_URL).netloc

def classify_broken(response):
    final_status = response.status_code
    if final_status in (301, 302, 303, 307, 308):
        return "stale redirect"
    if final_status == 404:
        return "missing page"
    if 400 <= final_status < 600:
        return "error status"
    return "other"

MAX_PAGES = 300  # safety limit

while queue and total_crawled < MAX_PAGES:
    url = queue.popleft()
    norm_url = normalize_url(url)
    if norm_url in visited:
        continue
    visited.add(norm_url)

    try:
        resp = session.get(norm_url, timeout=15, allow_redirects=True)
    except Exception as e:
        status_counts["exception"] = status_counts.get("exception", 0) + 1
        broken.append({"url": norm_url, "status": str(e), "class": "external reference error / request failed"})
        total_crawled += 1
        continue

    total_crawled += 1
    status = resp.status_code
    status_counts[status] = status_counts.get(status, 0) + 1

    if status >= 400:
        broken.append({"url": norm_url, "status": status, "class": classify_broken(resp)})

    content_type = resp.headers.get("content-type", "")
    if status == 200 and "text/html" in content_type:
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
            for a_tag in soup.find_all("a", href=True):
                href = a_tag["href"].strip()
                if href.startswith(("mailto:", "tel:", "javascript:")):
                    continue
                full_url = urljoin(BASE_URL, href)
                full_norm = normalize_url(full_url)
                if is_internal(full_norm) and full_norm not in visited and full_norm not in queue:
                    queue.append(full_norm)
        except Exception:
            pass

    time.sleep(0.05)

http_200 = status_counts.get(200, 0)
broken_count = len(broken)

print(f"=== Site Integrity Report: {BASE_URL} ===")
print(f"Total crawled: {total_crawled}")
print(f"HTTP 200 count: {http_200}")
print(f"Broken count: {broken_count}")
for b in broken[:10]:
    print(f"  {b['status']} | {b['class']} | {b['url']}")

if broken_count > 10:
    print(f"... and {broken_count - 10} more broken URLs (not shown).")

print(f"\n--- Status distribution ---")
for code in sorted(status_counts.keys()):
    print(f"  HTTP {code}: {status_counts[code]}")
