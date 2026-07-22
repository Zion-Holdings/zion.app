import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

BASE = "https://ziontechgroup.com"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; SiteIntegrity/1.0)"}

session = requests.Session()
session.headers.update(HEADERS)

visited = set()
broken = []
info = {"crawled": 0, "ok": 0}

def classify_broken(url, status_code, reason):
    if status_code is None:
        if "Connection" in str(reason):
            return "external reference error (connection failed)"
        return f"external reference error ({reason})"
    if 300 <= status_code < 400:
        return f"stale redirect ({status_code})"
    if status_code == 404:
        return "missing page"
    return f"HTTP error ({status_code})"

def is_internal(url):
    p = urlparse(url)
    return p.netloc == urlparse(BASE).netloc and p.scheme in ("http", "https")

def crawl(url, depth=0, max_depth=3):
    if depth > max_depth or url in visited:
        return
    visited.add(url)
    info["crawled"] += 1
    
    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code
        
        if status == 200:
            info["ok"] += 1
            if depth < max_depth:
                soup = BeautifulSoup(resp.text, "html.parser")
                for a in soup.find_all("a", href=True):
                    link = urljoin(final_url, a["href"])
                    if is_internal(link):
                        crawl(link, depth + 1, max_depth)
        else:
            broken.append((url, status, ""))
    except Exception as e:
        broken.append((url, None, str(e)))
    
    time.sleep(0.1)

print(f"Starting crawl of {BASE} (max depth={3})...")
crawl(BASE)

print("\n=== RESULTS ===")
print(f"Total crawled:   {info['crawled']}")
print(f"HTTP 200 count:  {info['ok']}")
print(f"Broken count:    {len(broken)}")

if broken:
    print("\nFirst 10 broken URLs:")
    for i, (url, status, reason) in enumerate(broken[:10]):
        cls = classify_broken(url, status, reason)
        print(f"  {i+1}. {url}")
        print(f"     -> {cls}")
