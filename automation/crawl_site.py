import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from datetime import datetime

START = "https://ziontechgroup.com"
visited = set()
broken = []
total_crawled = 0
ok_count = 0
to_visit = [START]
headers = {"User-Agent": "Mozilla/5.0 (compatible; SiteIntegrity/1.0)"}

start_url = urlparse(START).netloc.lower()

session = requests.Session()
session.headers.update(headers)

while to_visit:
    url = to_visit.pop(0)
    if url in visited:
        continue
    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        status = resp.status_code
        final_url = resp.url
    except Exception as e:
        visited.add(url)
        total_crawled += 1
        broken.append((url, 0, f"error:{e}", "external reference error"))
        continue

    visited.add(url)
    total_crawled += 1

    # Count 200 OK
    if status == 200:
        ok_count += 1
        # Extract internal links
        try:
            soup = BeautifulSoup(resp.text, "html.parser")
            for tag in soup.find_all("a", href=True):
                href = tag.get("href")
                full = urljoin(url, href)
                p = urlparse(full)
                netloc = p.netloc.lower()
                if netloc == start_url or netloc == "":
                    # normalize
                    if netloc == "":
                        full = urljoin(START, p.path)
                    if full not in visited and full not in to_visit:
                        to_visit.append(full)
        except Exception:
            pass
    else:
        # classify broken
        if status in (301, 302, 303, 307, 308):
            if final_url.startswith("http") and urlparse(final_url).netloc.lower() != start_url:
                cls = "external reference error"
            else:
                cls = "stale redirect"
        elif status == 404:
            cls = "missing page"
        else:
            cls = "missing page"
        broken.append((url, status, final_url or "", cls))

print(f"{{\"total_crawled\": {total_crawled}, \"http_200\": {ok_count}, \"broken_count\": {len(broken)}}}")
for i, (u, s, f, c) in enumerate(broken[:10], 1):
    print(f"BROKEN#{i}: {u} | status={s} | final={f} | class={c}")
if len(broken) > 10:
    print(f"... and {len(broken)-10} more")
