from urllib.parse import urljoin, urlparse
import sys
from collections import deque

import requests
from bs4 import BeautifulSoup


BASE = "https://ziontechgroup.com"
MAX_PAGES = 300
TIMEOUT = 15
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; SiteIntegrity/1.0)"}

visited = set()
broken = []
status_counts = {}
queue = deque([BASE])

s = requests.Session()
s.headers.update(HEADERS)


def norm(url: str) -> str:
    if url is None:
        return ""
    url = url.strip()
    if not url:
        return ""
    # strip fragment/query for same-page deduping? Keep query; drop only fragment.
    parsed = urlparse(url)
    cleaned = parsed._replace(fragment="").geturl()
    return cleaned


def is_internal(u: str) -> bool:
    p = urlparse(u)
    return p.netloc.lower() == urlparse(BASE).netloc.lower() and p.scheme in {"http", "https"}


while queue and len(visited) < MAX_PAGES:
    url = queue.popleft()
    url = norm(url)
    if not url or url in visited:
        continue

    visited.add(url)
    status = None
    final_url = None

    try:
        resp = s.get(url, timeout=TIMEOUT, allow_redirects=True, stream=True)
        # Read minimal content only for text pages.
        content_type = resp.headers.get("Content-Type", "")
        status = resp.status_code
        final_url = norm(resp.url)
        if final_url != url:
            visited.add(final_url)
            status_counts[final_url] = status
        status_counts[url] = status

        if status >= 400:
            broken.append((url, status, final_url or url, "missing_page"))

        if "text/html" in content_type and status < 400:
            try:
                resp.raw.decode_content = True
                soup = BeautifulSoup(resp.raw, "html.parser", from_encoding=resp.encoding or "utf-8")
            except Exception:
                soup = None
            if soup:
                for tag in soup.find_all(["a", "link"], href=True):
                    href = norm(tag.get("href"))
                    if not href:
                        continue
                    resolved = urljoin(final_url or url, href)
                    r = norm(resolved)
                    if not r:
                        continue
                    if not is_internal(r):
                        continue
                    if r not in visited and r not in queue and len(visited) + len(queue) < MAX_PAGES:
                        queue.append(r)
    except requests.TooManyRedirects:
        broken.append((url, "TOO_MANY_REDIRECTS", url, "stale_redirect"))
        status_counts[url] = "ERR"
    except requests.ConnectionError as e:
        broken.append((url, "CONNECTION_ERROR", url, "missing_page"))
        status_counts[url] = "ERR"
    except requests.Timeout:
        broken.append((url, "TIMEOUT", url, "missing_page"))
        status_counts[url] = "ERR"
    except requests.RequestException as e:
        broken.append((url, str(e.__class__.__name__), url, "missing_page"))
        status_counts[url] = "ERR"

print(f"Crawled total: {len(visited)}")

ok_count = sum(1 for v in status_counts.values() if isinstance(v, int) and v == 200)
broken_summary = [(u, s, f, c) for u, s, f, c in broken if not (isinstance(s, int) and s < 400)]
print(f"HTTP 200 count: {ok_count}")
print(f"Broken count: {len(broken_summary)}")
print("Top 10 broken URLs:")
for item in broken_summary[:10]:
    u, s, f, c = item
    print("-", u, "=>", s, "=>", f, "class:", c)
