import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
from concurrent.futures import ThreadPoolExecutor, as_completed
import json

BASE = "https://ziontechgroup.com"
MAX_PAGES = 200
MAX_WORKERS = 10
TIMEOUT = 15

session = requests.Session()
session.headers["User-Agent"] = "Mozilla/5.0 (compatible; site-integrity-checker/1.0)"

visited = set()
to_visit = [BASE]
results = {}  # url -> (status, final_url)

def is_internal(url):
    p = urlparse(url)
    return p.netloc == urlparse(BASE).netloc

def fix_url(url):
    url = url.strip()
    if url.startswith("//"):
        return "https:" + url
    if url.startswith("/"):
        return urljoin(BASE, url)
    if url.startswith("http"):
        return url
    return urljoin(BASE, url)

def classify_error(status, final_url):
    if status is None:
        return "missing page/network error"
    if 300 <= status < 400:
        if final_url and urlparse(final_url).netloc != urlparse(BASE).netloc:
            return "stale redirect to external domain"
        return "stale redirect"
    if status == 404:
        return "missing page"
    if status >= 400:
        return f"HTTP {status} error"
    return "unknown"

def check_url(url):
    try:
        resp = session.head(url, allow_redirects=True, timeout=TIMEOUT)
        if resp.status_code == 405 or (400 <= resp.status_code < 500):
            resp = session.get(url, allow_redirects=True, timeout=TIMEOUT, stream=True)
            resp.close()
        return url, resp.status_code, resp.url
    except Exception as e:
        return url, None, str(e)

def extract_internal_links(url, html):
    soup = BeautifulSoup(html, "html.parser")
    links = set()
    for tag in soup.find_all("a", href=True):
        link = fix_url(tag.get("href"))
        if link.startswith(BASE) and link not in visited:
            links.add(link)
    return links

# crawl
while to_visit and len(results) < MAX_PAGES:
    batch = []
    while to_visit and len(batch) < MAX_WORKERS:
        u = to_visit.pop(0)
        if u in results:
            continue
        batch.append(u)

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(check_url, url): url for url in batch}
        for future in as_completed(futures):
            url, status, final = future.result()
            results[url] = (status, final)
            if status == 200:
                try:
                    r = session.get(url, timeout=TIMEOUT)
                    found = extract_internal_links(url, r.text)
                    for link in found:
                        if link not in results and link not in to_visit:
                            to_visit.append(link)
                except Exception:
                    pass

# combine counts
ok_count = sum(1 for s, _ in results.values() if s == 200)
all_non_ok = [(u, s, f) for u, (s, f) in results.items() if s != 200]
broken_count = len(all_non_ok)
broken_list = []
for url, status, final in all_non_ok[:10]:
    broken_list.append({
        "url": url,
        "status": status,
        "classification": classify_error(status, final)
    })

report = {
    "total_crawled": len(results),
    "http_200_count": ok_count,
    "broken_count": broken_count,
    "first_10_broken": broken_list if broken_count > 0 else []
}

print(json.dumps(report, indent=2))
