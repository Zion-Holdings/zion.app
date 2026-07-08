import os, sys, json
from urllib.parse import urlparse, urljoin
from collections import deque

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
BASE_DOMAIN = urlparse(BASE).netloc

session = requests.Session()
session.headers["User-Agent"] = "zion-integrity-check/1.0 (+cron job)"
session.max_redirects = 8

visited = set()
queue = deque([BASE])
broken = []
counts = {"total_checked": 0, "http_200": 0, "broken_count": 0}
status_counts = {}
MAX_URLS = 200


def classify(url, response):
    status = response.status_code
    if 300 <= status < 400:
        loc = response.headers.get("location", "")
        final_status = None
        try:
            r2 = session.head(loc, allow_redirects=True, timeout=20)
            final_status = r2.status_code
        except Exception:
            pass
        if final_status == 404:
            return "stale redirect"
        if final_status and final_status >= 400:
            return "missing page"
        return "stale redirect"
    if status == 404:
        return "missing page"
    if status >= 500:
        return "missing page"
    return "unknown error"


while queue and len(visited) < MAX_URLS:
    url = queue.popleft()
    if url in visited:
        continue
    visited.add(url)
    try:
        resp = session.get(url, timeout=20)
    except requests.exceptions.TooManyRedirects:
        broken.append((url, "stale redirect"))
        counts["broken_count"] += 1
        counts["total_checked"] += 1
        continue
    except requests.exceptions.ConnectionError:
        broken.append((url, "missing page"))
        counts["broken_count"] += 1
        counts["total_checked"] += 1
        continue
    except requests.exceptions.Timeout:
        broken.append((url, "missing page"))
        counts["broken_count"] += 1
        counts["total_checked"] += 1
        continue
    except Exception:
        broken.append((url, "unknown error"))
        counts["broken_count"] += 1
        counts["total_checked"] += 1
        continue

    counts["total_checked"] += 1
    status_counts[url] = resp.status_code
    status = resp.status_code
    if status == 200:
        counts["http_200"] += 1
    else:
        kind = classify(url, resp)
        broken.append((url, kind))
        counts["broken_count"] += 1

    # Follow internal links if page is HTML
    ct = resp.headers.get("Content-Type", "")
    if "text/html" in ct and status == 200:
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
        except Exception:
            continue
        for a in soup.find_all("a", href=True):
            href = a.get("href", "")
            if not href or href.startswith(("javascript:", "mailto:", "tel:", "#")):
                continue
            abs_url = urljoin(url, href).split("#")[0]
            parsed = urlparse(abs_url)
            if parsed.scheme not in ("http", "https") or parsed.netloc != BASE_DOMAIN:
                continue
            if abs_url not in visited and abs_url not in queue:
                queue.append(abs_url)

# Output report as JSON
first_10 = broken[:10]
report = {
    "base": BASE,
    "total_crawled": counts["total_checked"],
    "http_200_count": counts["http_200"],
    "broken_count": counts["broken_count"],
    "first_10_broken": [{"url": u, "class": c} for u, c in first_10],
}
print(json.dumps(report, indent=2))
