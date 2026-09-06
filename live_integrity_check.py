"""
Live site integrity check for https://ziontechgroup.com
Follows internal links only (BFS), reports HTTP status breakdown + broken URLs.
Uses the zion.app automation venv's requests+BeautifulSoup.
"""
import sys, re, time
from urllib.parse import urljoin, urlparse, urlunparse
from collections import deque

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
START = BASE + "/"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) zion-integrity-check/1.0"
SESSION = requests.Session()
SESSION.headers["User-Agent"] = USER_AGENT
_TIMEOUT = 20

visited = set()
queue = deque([START])
broken = []       # (url, reason)
redirects = []    # (url, final_url, status)
http200 = 0
errors = 0
html_ok = 0       # 200 + parseable HTML

INTERNAL_RE = re.compile(r"^" + re.escape(BASE))

def strip_fragment(url: str) -> str:
    p = urlparse(url)
    return urlunparse(p._replace(fragment=""))

def is_internal(url: str) -> bool:
    return bool(INTERNAL_RE.match(urlparse(url).netloc + urlparse(url).path))

def classify(url: str, reason: str) -> str:
    """Classify a broken URL into stale redirect / missing page / external reference error."""
    code = reason.split()[0] if reason else ""
    if url.startswith(BASE):
        if code.startswith("3"):
            return "stale redirect"
        return "missing page"
    else:
        return "external reference error"

print(f"Starting crawl of {START}", flush=True)
t0 = time.time()
while queue:
    url = queue.popleft()
    url = strip_fragment(url)
    if url in visited:
        continue
    visited.add(url)

    try:
        resp = SESSION.get(url, allow_redirects=True, timeout=_TIMEOUT)
    except requests.RequestException as e:
        broken.append((url, f"exception: {e}"))
        errors += 1
        continue

    status = resp.status_code

    if status == 200:
        http200 += 1
        ct = resp.headers.get("Content-Type", "")
        if "text/html" in ct:
            html_ok += 1
            try:
                soup = BeautifulSoup(resp.text, "html.parser")
            except Exception:
                soup = None
            if soup:
                for tag in soup.find_all(["a", "link"]):
                    href = tag.get("href")
                    if not href:
                        continue
                    full = strip_fragment(urljoin(url, str(href)))
                    if is_internal(full) and full not in visited:
                        queue.append(full)
    elif 300 <= status < 400:
        # record redirect even if it eventually landed 200
        final = resp.url
        redirects.append((url, final, status))
        if final.startswith(BASE) and final not in visited:
            queue.append(final)
    else:
        broken.append((url, f"HTTP {status}"))
        errors += 1

elapsed = time.time() - t0

print("\n===== SITE INTEGRITY REPORT =====", flush=True)
print(f"Base URL: {BASE}", flush=True)
print(f"Total crawled (unique internal pages fetched): {len(visited)}", flush=True)
print(f"HTTP 200 count: {http200}", flush=True)
print(f"Broken count: {len(broken)}", flush=True)
print(f"Redirects followed: {len(redirects)}", flush=True)
print(f"Fetch errors/exceptions: {errors}", flush=True)
print(f"HTML pages parsed: {html_ok}", flush=True)
print(f"Wall time: {elapsed:.1f}s", flush=True)

print("\n----- BREAKED URLS -----", flush=True)
if not broken:
    print("None — site appears healthy on internal links.", flush=True)
else:
    for i, (url, reason) in enumerate(broken[:10], 1):
        cls = classify(url, reason)
        print(f"{i}. [{cls}] {url}  —  {reason}", flush=True)
    if len(broken) > 10:
        print(f"... and {len(broken) - 10} more broken URLs (see full log).", flush=True)

print("\n----- REDIRECTS (3xx) -----", flush=True)
if not redirects:
    print("None.", flush=True)
else:
    for url, final, code in redirects[:10]:
        print(f"  {url}  [{code}]  ->  {final}", flush=True)
