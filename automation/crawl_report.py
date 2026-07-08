
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

BASE = "https://ziontechgroup.com"
visited = set()
results = []

def same_host(url):
    p = urlparse(url)
    return bool(p.hostname and p.hostname.endswith("ziontechgroup.com"))

def classify(status, error):
    if error:
        return "external reference error"
    if status == 404:
        return "missing page"
    if 300 <= status < 400:
        return "stale redirect"
    return f"HTTP {status}"

queue = [BASE]
while queue:
    url = queue.pop(0)
    if url in visited:
        continue
    visited.add(url)
    status = None
    error = None
    try:
        r = requests.get(url, timeout=15, allow_redirects=True)
        status = r.status_code
        results.append((r.url, status, None))
        if "text/html" in (r.headers.get("Content-Type","")):
            soup = BeautifulSoup(r.text, "html.parser")
            for a in soup.find_all("a", href=True):
                href = a["href"].strip()
                if href.startswith(("mailto:", "#", "javascript:")):
                    continue
                nxt = urljoin(r.url, href)
                if same_host(nxt) and nxt not in visited and nxt not in queue:
                    queue.append(nxt)
    except Exception as e:
        error = str(e)
        results.append((url, None, error))

ok = sum(1 for u,s,e in results if s == 200)
broken = [(u,s,e) for u,s,e in results if s != 200]

print(f"BASE={BASE}")
print(f"CRAWLED={len(results)}")
print(f"OK200={ok}")
print(f"BROKEN={len(broken)}")
if broken:
    print("FIRST_10_BROKEN")
    for u,s,e in broken[:10]:
        print(f"{s}\t{classify(s, e)}\t{u}")
