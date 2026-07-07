#!/usr/bin/env python3
from __future__ import annotations

import sys
from collections import deque
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE = sys.argv[1] if len(sys.argv) > 1 else "https://ziontechgroup.com"
DOMAIN = urlparse(BASE).netloc.lower()

SESSION = requests.Session()
SESSION.headers.update(
    {
        "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0; +https://ziontechgroup.com)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    }
)
SESSION.max_redirects = 5

frontier: deque[str] = deque([BASE])
visited: set[str] = set()
results: dict[str, int | str] = {}
broken: list[tuple[str, int | str, str]] = []

LIMIT = 300


def canonical(url: str) -> str:
    p = urlparse(url.strip())
    scheme = p.scheme or "https"
    netloc = p.netloc or DOMAIN
    path = p.path or "/"
    return f"{scheme}://{netloc}{path if path.endswith('/') else path + '/'}"


def snoozey_target(location: str | None) -> str | None:
    if not location:
        return None
    pl = urlparse(location)
    return pl.path


while frontier and len(visited) < LIMIT:
    url = frontier.popleft()
    url = url.strip()
    p = urlparse(url)
    if p.scheme not in {"http", "https"} or p.netloc.lower() != DOMAIN:
        continue
    cu = canonical(url)
    cu_nf = f"{p.scheme}://{p.netloc}{p.path if p.path.endswith('/') else p.path + '/'}"
    if cu_nf in visited:
        continue
    visited.add(cu_nf)

    try:
        resp = SESSION.get(cu, allow_redirects=False, timeout=20)
    except requests.Timeout:
        results[cu_nf] = "timeout / no response"
        broken.append((cu_nf, "timeout / no response", ""))
        continue
    except requests.ConnectionError:
        results[cu_nf] = "connection error"
        broken.append((cu_nf, "connection error", ""))
        continue
    except requests.TooManyRedirects:
        results[cu_nf] = "redirect loop"
        broken.append((cu_nf, "redirect loop", ""))
        continue
    except requests.RequestException as e:
        results[cu_nf] = f"connection error"
        broken.append((cu_nf, "connection error", str(e)))
        continue

    code = resp.status_code

    if 300 <= code < 400:
        loc = resp.headers.get("Location")
        path_target = snoozey_target(loc)
        classification = "stale redirect"
        if loc:
            classification = f"stale redirect -> {urljoin(BASE, loc)}"
        results[cu_nf] = code
        broken.append((cu_nf, classification, urljoin(BASE, loc) if loc else ""))
    elif 400 <= code < 500:
        if code == 403:
            classification = "forbidden / access error"
        elif code == 404:
            classification = "missing page"
        else:
            classification = "client error"
        results[cu_nf] = code
        broken.append((cu_nf, classification, ""))
    elif 500 <= code < 600:
        results[cu_nf] = code
        broken.append((cu_nf, "server error", ""))
    elif code == 200:
        results[cu_nf] = 200
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
            for tag in soup.find_all(["a", "area"], href=True):
                href = tag.get("href")
                if not href:
                    continue
                if href.startswith(("mailto:", "tel:", "javascript:")):
                    continue
                h = urljoin(cu_nf, href)
                qp = urlparse(h)
                if qp.fragment:
                    h = urljoin(qp._replace(fragment="").geturl(), "")
                np = urlparse(h)
                if np.scheme not in {"http", "https"}:
                    continue
                if (np.netloc or "").lower() != DOMAIN:
                    continue
                nh = f"{np.scheme}://{np.netloc}{np.path if np.path.endswith('/') or np.path == '' else np.path + '/'}"
                if nh not in visited and nh not in frontier:
                    frontier.append(nh)
        except Exception:
            pass
    else:
        results[cu_nf] = code

total = len(results)
ok200 = sum(1 for v in results.values() if v == 200)
broken_count = sum(1 for v in results.values() if v != 200)

print(f"BASE: {BASE}")
print(f"DOMAIN: {DOMAIN}")
print(f"TOTAL_CRAWLED: {total}")
print(f"HTTP_200_COUNT: {ok200}")
print(f"BROKEN_COUNT: {broken_count}")

if broken_count:
    print("FIRST_10_BROKEN:")
    for url, classification, target in broken[:10]:
        target_str = f" -> {target}" if target else ""
        print(f"{url} | {classification}{target_str}")
