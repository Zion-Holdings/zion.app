import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque
import time

START = "https://ziontechgroup.com"
NETLOC = urlparse(START).netloc
MAX_PAGES = 200
MAX_DEPTH = 6

session = requests.Session()
session.verify = "/etc/ssl/cert.pem"
session.headers.update({"User-Agent": "site-integrity-check/1.0"})

visited = set()
queue = deque([(START, 0)])
results = []  # list of dict

while queue and len(visited) < MAX_PAGES:
    url, depth = queue.popleft()
    if url in visited:
        continue
    visited.add(url)

    try:
        r = session.get(url, allow_redirects=True, timeout=(10, 20))
        status = r.status_code
        final_url = r.url
        history = [{"url": h.url, "status_code": h.status_code} for h in r.history]
        content_type = r.headers.get("Content-Type", "")
        is_html = "html" in content_type.lower()
    except requests.RequestException as e:
        status = getattr(e.response, "status_code", 0) or 0
        final_url = url
        history = []
        is_html = False

    results.append({
        "started": url,
        "final": final_url,
        "status": status,
        "depth": depth,
        "history": history,
        "is_html": is_html,
    })

    # enqueue internal links only from HTML responses
    if status == 200 and is_html and depth < MAX_DEPTH:
        try:
            soup = BeautifulSoup(r.text if 'r' in locals() else '', "html.parser")
        except Exception:
            soup = None
        if soup:
            for a in soup.find_all("a", href=True):
                href = a.get("href", "").strip()
                if not href or href.startswith(("mailto:", "tel:", "#", "javascript:")):
                    continue
                abs_url = urljoin(url, href)
                parsed = urlparse(abs_url)
                if parsed.netloc and parsed.netloc != NETLOC:
                    continue
                if abs_url.startswith("http://") and not abs_url.startswith("https://"):
                    # already internal; keep if you want, but skip http variants if desired
                    pass
                if abs_url not in visited:
                    queue.append((abs_url, depth + 1))

    time.sleep(0.05)

print("--- CRAWL SUMMARY ---")
print(f"Total crawled: {len(results)}")
print(f"HTTP 200 count: {sum(1 for x in results if x['status'] == 200)}")
print(f"Broken count: {sum(1 for x in results if x['status'] != 200)}")
print()

broken = [x for x in results if x['status'] != 200]
if broken:
    print("--- FIRST 10 BROKEN URLS ---")
    for x in broken[:10]:
        classification = "unknown"
        if x["status"] in (301, 302, 303, 307, 308):
            classification = "stale redirect"
        elif x["status"] == 404:
            classification = "missing page"
        elif x["status"] == 0:
            classification = "external reference error" if urlparse(x["started"]).netloc else "network/connection error"
        elif 400 <= x["status"] < 500:
            classification = "missing page"
        elif x["status"] >= 500:
            classification = "server error"
        hist = " -> ".join(f"{h['status_code']} ({h['url']})" for h in x.get("history", []))
        print(
            f"{x['status']} [{classification}] -> {x['final']} "
            f"(depth={x['depth']})"
            + (f" history: {hist}" if hist else "")
        )
