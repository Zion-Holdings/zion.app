import json
import os
from urllib.parse import urljoin, urlparse
from collections import deque
import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
MAX_PAGES = 100
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; site-integrity-bot/1.0)"}

visited = set()
q = deque([BASE])
results = {"total_crawled": 0, "http_200": 0, "broken": 0, "broken_urls": []}
broken_set = set()


def is_same_domain(u):
    p = urlparse(u)
    return p.netloc == urlparse(BASE).netloc and p.scheme in ("http", "https")


while q and results["total_crawled"] < MAX_PAGES:
    url = q.popleft()
    if url in visited:
        continue
    visited.add(url)
    results["total_crawled"] += 1
    try:
        r = requests.get(url, headers=HEADERS, timeout=20, allow_redirects=True)
        final = f"{urlparse(r.url).scheme}://{urlparse(r.url).netloc}{urlparse(r.url).path}"
        if r.status_code == 200:
            results["http_200"] += 1
            soup = BeautifulSoup(r.text, "html.parser")
            for a in soup.find_all("a", href=True):
                href = a["href"].strip()
                if href.startswith("#"):
                    continue
                nu = urljoin(final, href)
                if is_same_domain(nu):
                    q.append(nu)
        else:
            if url not in broken_set:
                results["broken"] += 1
                broken_set.add(url)
                if r.status_code == 404:
                    classification = "missing page"
                elif 300 <= r.status_code < 400:
                    classification = "stale redirect"
                else:
                    classification = "external reference error"
                results["broken_urls"].append(
                    {"url": url, "status": r.status_code, "classification": classification}
                )
    except Exception as e:
        if url not in broken_set:
            results["broken"] += 1
            broken_set.add(url)
            results["broken_urls"].append(
                {"url": url, "status": None, "classification": "external reference error", "error": str(e)}
            )

print(json.dumps(results, indent=2))
