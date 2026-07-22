import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import time
import sys

BASE = "https://ziontechgroup.com"
session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0)"
})

visited = set()
broken = []

def is_internal(url):
    parsed = urlparse(url)
    base_parsed = urlparse(BASE)
    same_netloc = parsed.netloc == base_parsed.netloc
    if parsed.scheme not in ("http", "https"):
        return False
    if parsed.scheme == "http":
        return False
    return same_netloc

def crawl():
    to_visit = [BASE]
    while to_visit:
        url = to_visit.pop(0)
        url = url.rstrip("/")
        if url in visited:
            continue
        visited.add(url)
        try:
            resp = session.get(url, timeout=15, allow_redirects=True)
            final_url = resp.url.rstrip("/")
            status = resp.status_code
            if status >= 400:
                classification = "missing page"
                broken.append((url, final_url, status, classification))
                continue
            if resp.history:
                chain = " -> ".join([str(r.status_code) for r in resp.history] + [str(resp.status_code)])
                # Check if final destination is external
                if urlparse(final_url).netloc != urlparse(BASE).netloc:
                    classification = "external reference error"
                    broken.append((url, final_url, resp.status_code, f"{classification} (history: {chain})"))
                    continue
                # Otherwise it's an internal redirect that resolved successfully
                # Not truly broken
            soup = BeautifulSoup(resp.text, "html.parser")
            for a in soup.find_all("a", href=True):
                href = a["href"].strip()
                if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                    continue
                full = urljoin(url, href).split("#")[0]
                if is_internal(full):
                    full = full.rstrip("/")
                    if full not in visited and full not in to_visit:
                        to_visit.append(full)
            time.sleep(0.2)
        except requests.exceptions.RequestException as e:
            broken.append((url, None, None, f"network error: {e}"))

crawl()

total = len(visited)
ok = total - len(broken)
broken_count = len(broken)

print(f"BASE: {BASE}")
print(f"Total crawled: {total}")
print(f"HTTP 200 count: {ok}")
print(f"Broken count: {broken_count}")
print()
for item in broken[:10]:
    print(item)

sys.exit(0 if broken_count == 0 else 2)
