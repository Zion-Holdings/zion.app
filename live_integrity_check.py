#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
BFS crawl following internal links only. Classify broken URLs.
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urlunparse
import sys
import json
from collections import deque

BASE_URL = "https://ziontechgroup.com"
TIMEOUT = 20
MAX_PAGES = 500  # safety cap

def strip_fragment(url: str) -> str:
    p = urlparse(url)
    return urlunparse(p._replace(fragment=""))

def is_internal(url: str) -> bool:
    """Check if URL belongs to the same domain."""
    parsed = urlparse(url)
    return parsed.netloc == "ziontechgroup.com" or parsed.netloc == ""

def normalize(url: str, base: str) -> str:
    """Normalize a URL: join with base if relative, strip fragment, enforce https."""
    url = strip_fragment(url)
    if urlparse(url).netloc == "":
        url = urljoin(base, url)
    # Force https
    if url.startswith("http://"):
        url = "https://" + url[7:]
    return url

def classify_broken(url: str, status_code: int, exception: str = None, final_url: str = None) -> str:
    """Classify a broken URL."""
    if exception:
        # Check if it's an external domain that failed
        parsed = urlparse(url)
        if parsed.netloc and parsed.netloc != "ziontechgroup.com":
            return "external reference error"
        return "missing page"
    
    if status_code == 301 or status_code == 302 or status_code == 307 or status_code == 308:
        # Check if redirect goes external
        if final_url and urlparse(final_url).netloc != "ziontechgroup.com":
            return "stale redirect"
        # Internal redirect that didn't reach 200
        return "stale redirect"
    
    # Non-2xx, non-3xx
    parsed = urlparse(url)
    if parsed.netloc and parsed.netloc != "ziontechgroup.com":
        return "external reference error"
    return "missing page"

def crawl():
    visited = set()
    queue = deque([BASE_URL])
    broken = []
    redirects = []
    http_200 = 0
    total_crawled = 0
    errors = []

    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityCheck/1.0)"
    })

    while queue and total_crawled < MAX_PAGES:
        url = queue.popleft()
        url = normalize(url, BASE_URL)
        
        if url in visited:
            continue
        visited.add(url)
        
        try:
            resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
            total_crawled += 1
            
            final_url = resp.url
            
            if resp.status_code == 200:
                http_200 += 1
                # Extract links
                try:
                    soup = BeautifulSoup(resp.text, "html.parser")
                    for tag in soup.find_all(["a", "link"]):
                        href = tag.get("href")
                        if not href:
                            continue
                        href = str(href)
                        full_url = normalize(href, url)
                        if is_internal(full_url) and full_url not in visited and full_url not in queue:
                            if full_url.startswith(BASE_URL):
                                queue.append(full_url)
                except Exception as parse_err:
                    errors.append(f"Parse error on {url}: {parse_err}")
            else:
                # Non-200 status
                classification = classify_broken(url, resp.status_code, final_url=final_url)
                broken.append({
                    "url": url,
                    "status": resp.status_code,
                    "final_url": final_url,
                    "classification": classification
                })
                if resp.status_code in (301, 302, 307, 308):
                    redirects.append({"from": url, "to": final_url, "status": resp.status_code})
                    
        except requests.exceptions.RequestException as e:
            total_crawled += 1
            classification = classify_broken(url, 0, exception=str(e))
            broken.append({
                "url": url,
                "status": "error",
                "error": str(e),
                "classification": classification
            })
        except Exception as e:
            errors.append(f"Unexpected error on {url}: {e}")

    return {
        "total_crawled": total_crawled,
        "http_200": http_200,
        "broken_count": len(broken),
        "broken_urls": broken[:10],
        "redirects_count": len(redirects),
        "errors": errors[:5]
    }

if __name__ == "__main__":
    print(f"Starting crawl of {BASE_URL} ...", flush=True)
    result = crawl()
    print(json.dumps(result, indent=2))
