from __future__ import annotations
import re
import sys
from collections import deque
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
REQUEST_TIMEOUT = 15
MAX_UNIQUE_URLS = 250
MAX_DEPTH = 3
USER_AGENT = "site-integrity-bot/1.0 (+ziontechgroup-crawl)"

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT, "Accept": "text/html,application/xhtml+xml"})
session.max_redirects = 5

NOISE_PATH_RE = re.compile(r"/ai-\d{4}/?", re.IGNORECASE)
QUERY_RE = re.compile(r"\?")


def is_same_host(url: str) -> bool:
    try:
        p = urlparse(url)
        return p.scheme in ("http", "https") and p.hostname and p.hostname.lower() == urlparse(BASE_URL).hostname.lower()
    except Exception:
        return False


def norm(url: str) -> str:
    p = urlparse(url)
    return f"{p.scheme.lower()}://{p.netloc.lower()}{p.path}"


def depth_of(path: str) -> int:
    return len([seg for seg in path.split("/") if seg])


def allowed(url: str) -> bool:
    if not is_same_host(url):
        return False
    p = urlparse(url)
    if p.scheme.lower() != "https":
        return False
    if QUERY_RE.search(url):
        return False
    d = depth_of(p.path)
    if d > MAX_DEPTH:
        return False
    if NOISE_PATH_RE.search(p.path):
        return False
    return True


def classify(status_code, error):
    if error:
        return "network error"
    if status_code is None:
        return "unknown"
    if status_code in (301, 308, 302):
        return "stale redirect"
    if status_code == 404:
        return "missing page"
    if status_code in (502, 503, 504):
        return "server error"
    if status_code >= 400:
        return "client/server error"
    if status_code == 200:
        return "ok"
    return "unclassified"


def main():
    seen = set()
    queue = deque([(BASE_URL, 0)])
    out = {"total_crawled": 0, "http_200": 0, "broken": 0, "broken_urls": []}

    while queue and len(seen) < MAX_UNIQUE_URLS:
        url, depth = queue.popleft()
        n = norm(url)
        if n in seen:
            continue

        status_code = None
        error = None
        final_url = None
        content_type = ""
        try:
            r = session.get(url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
            status_code = r.status_code
            final_url = norm(r.url)
            content_type = r.headers.get("Content-Type", "")
        except Exception as e:
            error = str(e)

        seen.add(n)
        out["total_crawled"] += 1
        classification = classify(status_code, error)
        if classification == "ok":
            out["http_200"] += 1
        else:
            out["broken"] += 1
            reported = final_url if final_url and is_same_host(final_url) else url
            out["broken_urls"].append({
                "url": reported,
                "status_code": status_code,
                "classification": classification,
                "error": error,
            })

        if status_code == 200 and "text/html" in content_type.lower() and depth < MAX_DEPTH:
            try:
                soup = BeautifulSoup(r.text, "html.parser")
                for a in soup.find_all("a", href=True):
                    href = a.get("href", "")
                    if href.startswith("#"):
                        continue
                    nxt = urljoin(final_url or url, href)
                    if allowed(nxt):
                        nn = norm(nxt)
                        if nn not in seen and nn not in {norm(x) for x, _ in queue}:
                            queue.append((nxt, depth + 1))
            except Exception:
                pass

        print(
            f"crawled={out['total_crawled']} seen={len(seen)} broken={out['broken']} url={n}",
            file=sys.stderr,
        )

    return out


if __name__ == "__main__":
    res = main()
    print("\nRESULTS_JSON:::")
    print(res)
