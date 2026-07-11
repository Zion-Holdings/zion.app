"""Site integrity check for ziontechgroup.com

Crawls internal links and reports total crawled, HTTP 200 count,
broken count, and first 10 broken URLs with classification.
"""
import json
from urllib.parse import urljoin, urlparse
from collections import deque

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
MAX_PAGES = 200
TIMEOUT = 20
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; site-integrity-bot/1.0)"}

visited = set()
broken = []
q = deque([BASE])


def is_same_domain(u):
    parsed = urlparse(u)
    return parsed.scheme in ("http", "https") and parsed.netloc == urlparse(BASE).netloc


def extract_internal_links(html, base):
    soup = BeautifulSoup(html, "html.parser")
    links = set()
    for tag in soup.find_all("a", href=True):
        href = (tag.get("href") or "").strip()
        if not href or href.startswith("#"):
            continue
        joined = urljoin(base, href)
        if is_same_domain(joined):
            links.add(urlparse(joined)._replace(fragment="").geturl())
    return links


while q and len(visited) < MAX_PAGES:
    url = q.popleft()
    if url in visited:
        continue
    visited.add(url)

    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=False)
    except requests.exceptions.SSLError:
        broken.append({
            "url": url,
            "status": None,
            "classification": "TLS/SSL error",
            "redirect_target": None,
        })
        continue
    except requests.exceptions.Timeout:
        broken.append({
            "url": url,
            "status": None,
            "classification": "timeout / no response",
            "redirect_target": None,
        })
        continue
    except requests.exceptions.RequestException as e:
        broken.append({
            "url": url,
            "status": None,
            "classification": "connection error",
            "redirect_target": str(e)[:120],
        })
        continue

    if r.status_code == 200:
        try:
            for link in extract_internal_links(r.text, r.url):
                if link not in visited and len(visited) + len(q) < MAX_PAGES:
                    q.append(link)
        except Exception:
            pass
    else:
        classification = "other error"
        redirect_target = None
        if 300 <= r.status_code < 400:
            classification = "stale redirect"
            redirect_target = r.headers.get("Location")
            loc = (redirect_target or "")
            if loc.startswith(BASE + "/") and url.rstrip("/") == loc.rstrip("/") and url != loc:
                # Same-page trailing-slash redirect; not a real broken link.
                continue
        elif r.status_code == 404:
            classification = "missing page"
        elif r.status_code == 403:
            classification = "forbidden / access error"
        elif 400 <= r.status_code < 500:
            classification = "client error"
        elif 500 <= r.status_code < 600:
            classification = "server error"

        broken.append({
            "url": url,
            "status": r.status_code,
            "classification": classification,
            "redirect_target": redirect_target,
        })

results = {
    "base_url": BASE,
    "max_pages": MAX_PAGES,
    "total_crawled": len(visited),
    "http_200_count": len(visited) - len(broken),
    "broken_count": len(broken),
    "first_10_broken_urls": [
        {
            "url": b["url"],
            "status": b["status"] if b["status"] is not None else "n/a",
            "classification": b["classification"],
            "redirect_target": b.get("redirect_target"),
        }
        for b in broken[:10]
    ],
}

print(json.dumps(results, indent=2))
