#!/usr/bin/env python3
"""Live site integrity check for ziontechgroup.com"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 200
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; SiteIntegrity/1.0)"}

visited = set()
broken = []
status_counts = {}
to_visit = [BASE_URL]

def is_internal(link):
    parsed = urlparse(link)
    base_parsed = urlparse(BASE_URL)
    return parsed.netloc == base_parsed.netloc or parsed.netloc == ""

while to_visit and len(visited) < MAX_PAGES:
    url = to_visit.pop(0)
    if url in visited:
        continue
    
    visited.add(url)
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
        status = resp.status_code
        final_url = resp.url
        
        status_counts[status] = status_counts.get(status, 0) + 1
        
        if status != 200:
            classification = "unknown"
            if 300 <= status < 400:
                classification = "stale redirect"
            elif status == 404:
                classification = "missing page"
            elif status >= 400:
                classification = "missing page" if status in (404, 410) else "external reference error"
            
            broken.append({
                "url": url,
                "status": status,
                "final_url": final_url,
                "classification": classification
            })
            continue
        
        # Parse links if status 200
        soup = BeautifulSoup(resp.text, "html.parser")
        for tag in soup.find_all("a", href=True):
            href = tag["href"].strip()
            if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
                continue
            absolute = urljoin(final_url, href)
            if is_internal(absolute) and absolute not in visited and absolute not in to_visit:
                parsed = urlparse(absolute)
                if parsed.scheme in ("http", "https"):
                    to_visit.append(absolute)
        
        time.sleep(0.1)
    except Exception as e:
        status_counts["error"] = status_counts.get("error", 0) + 1
        broken.append({
            "url": url,
            "status": "error",
            "final_url": "",
            "classification": "missing page",
            "error": str(e)
        })

print(f"=== Zion Tech Group Site Integrity Report ===")
print(f"Total crawled: {len(visited)}")
print(f"HTTP 200 count: {status_counts.get(200, 0)}")
print(f"Broken count: {len(broken)}")
print()

if broken:
    print("First 10 broken URLs:")
    for i, item in enumerate(broken[:10], 1):
        print(f"{i}. {item['url']}")
        print(f"   Status: {item['status']} | Classification: {item['classification']}")
        if 'error' in item:
            print(f"   Error: {item['error']}")
        print()
else:
    print("No broken links found.")
