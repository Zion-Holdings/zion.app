import os
import sys
import json
import re
import time
import urllib.parse
import urllib.request
import urllib.error
from collections import deque

BASE = os.environ.get("SITE_BASE", "https://ziontechgroup.com")
BASE_DOMAIN = urllib.parse.urlparse(BASE).netloc
USER_AGENT = "zion-integrity-check/1.0 (+cron job)"
TIMEOUT = 20
MAX_URLS = 250

visited = set()
queue = deque([BASE])
broken = []
counts = {"total_checked": 0, "http_200": 0, "broken_count": 0}
status_counts = {}
content_type_counts = {}
link_graph = {}


def _is_internal(url: str) -> bool:
    try:
        p = urllib.parse.urlparse(url)
        return p.scheme in ("http", "https") and p.netloc == BASE_DOMAIN
    except Exception:
        return False


def _clean_url(url: str) -> str:
    return urllib.parse.urljoin(BASE, url.split("#")[0])


def fetch(url: str):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            return r.status, r.getheader("content-type", ""), r.getheader("Location"), ""
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("content-type", ""), e.headers.get("Location"), str(e)
    except urllib.error.URLError as e:
        return None, None, None, str(e.reason)
    except Exception as e:
        return None, None, None, str(e)


def classify(status: int, final: str):
    if final:
        try:
            r = fetch(final)
            final_code = r[0]
        except Exception:
            final_code = None
        if final_code == 404:
            return "stale redirect"
        if isinstance(final_code, int) and final_code >= 400:
            return "missing page"
        return "stale redirect"
    if status == 404:
        return "missing page"
    if isinstance(status, int) and status >= 500:
        return "missing page"
    return "unknown error"


while queue and len(visited) < MAX_URLS:
    url = queue.popleft()
    if url in visited:
        continue
    visited.add(url)
    counts["total_checked"] += 1
    status, ct, final, err = fetch(url)
    status_counts[url] = status
    content_type_counts[url] = ct
    if status == 200:
        counts["http_200"] += 1
        if any(x in (ct or "").lower() for x in ["text/html", "application/xhtml"]):
            try:
                data = urllib.request.urlopen(
                    urllib.request.Request(url, headers={"User-Agent": USER_AGENT}), timeout=TIMEOUT
                ).read().decode("utf-8", errors="replace")
            except Exception:
                data = ""
            hrefs = re.findall(r'href=["\']([^"\']+)["\']', data, flags=re.I)
            link_graph[url] = hrefs
            for href in hrefs:
                absu = _clean_url(href)
                if _is_internal(absu) and absu not in visited and absu not in queue:
                    queue.append(absu)
    else:
        kind = classify(status, final)
        broken.append((url, kind))
        counts["broken_count"] += 1

report = {
    "base": BASE,
    "total_crawled": counts["total_checked"],
    "http_200_count": counts["http_200"],
    "broken_count": counts["broken_count"],
    "first_10_broken": [{"url": u, "class": c} for u, c in broken[:10]],
    "status_counts": status_counts,
    "link_graph_count": {u: len(hs) for u, hs in link_graph.items()},
}
print(json.dumps(report, indent=2))
