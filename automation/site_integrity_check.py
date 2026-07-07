#!/usr/bin/env python3
import sys
from urllib.parse import urlparse, urljoin

import requests
from bs4 import BeautifulSoup
from collections import deque

BASE_DOMAIN = "ziontechgroup.com"
START_URL = f"https://{BASE_DOMAIN}"

MAX_PAGES = 200
TIMEOUT = 20
USER_AGENT = "SiteIntegrityBot/1.0"

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT})

visited = set()
queue = deque([START_URL])
broken = []  # tuples (url, final_url, status_or_error, category)
external_checked = set()

crawled = 0
crawled_200 = 0


def classify(url, final_url, status, is_external=False):
    if is_external:
        return "external reference error"
    if isinstance(status, int):
        if 300 <= status < 400:
            return "stale redirect"
        if status == 404:
            return "missing page"
        if status >= 500:
            return "missing page"
    return "missing page"


def check_external(url):
    """Return (status, error)."""
    try:
        r = session.head(url, timeout=TIMEOUT, allow_redirects=True, headers={"User-Agent": USER_AGENT})
        if r.status_code == 405 or r.status_code == 403:
            r = session.get(url, timeout=TIMEOUT, allow_redirects=True, headers={"User-Agent": USER_AGENT})
        return r.status_code, None
    except Exception as e:
        return None, str(e)


while queue and len(visited) < MAX_PAGES:
    url = queue.popleft()
    if url in visited:
        continue
    visited.add(url)
    crawled += 1

    final_url = url
    status = None
    error = None
    text = None

    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True, headers={"User-Agent": USER_AGENT})
        final_url = resp.url
        status = resp.status_code
        if status == 200:
            text = resp.text
            crawled_200 += 1
    except Exception as e:
        error = str(e)
        status = "error"

    if status != 200 or error:
        cat = classify(url, final_url, status if not error else error)
        broken.append((url, final_url, status if not error else error, cat))
        continue

    # Parse links from 200 pages only
    soup = BeautifulSoup(text, "html.parser")
    tags = soup.find_all(["a", "img", "script", "link", "iframe", "source", "video", "audio"])
    for tag in tags:
        for attr in ["href", "src"]:
            link = tag.get(attr)
            if not link:
                continue
            link = link.strip()
            if not link or link.startswith(("javascript:", "mailto:", "tel:", "#")):
                continue
            abs_link = urljoin(final_url, link)
            parsed = urlparse(abs_link)
            if not parsed.scheme.startswith("http"):
                continue
            # Drop fragment
            norm = parsed._replace(fragment="").geturl()
            if parsed.netloc == BASE_DOMAIN:
                if norm not in visited and norm not in queue:
                    queue.append(norm)
            else:
                if norm not in external_checked and len(external_checked) < 200:
                    external_checked.add(norm)
                    ext_status, ext_err = check_external(norm)
                    if ext_status != 200:
                        cat = classify(norm, None, ext_status if not ext_err else ext_err, is_external=True)
                        broken.append((norm, None, ext_status if not ext_err else ext_err, cat))

# Print report
print(f"BASE: {START_URL}")
print(f"TOTAL_CRAWLED={crawled}")
print(f"HTTP_200_COUNT={crawled_200}")
print(f"BROKEN_COUNT={len(broken)}")
if broken:
    print("FIRST_10_BROKEN:")
    for item in broken[:10]:
        if len(item) == 4:
            u, fu, st, cat = item
            print(f"- {u} => final={fu} status={st} category={cat}")
        else:
            u, fu, st, cat = (item + (None,))[:4]
            print(f"- {u} => final={fu} status={st} category={cat}")
else:
    print("NO_BROKEN_LINKS")

sys.exit(0 if not broken else 1)
