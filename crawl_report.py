#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com.
Crawls internal links only, reports stats and broken URLs with classification.
"""

import sys
import re
from urllib.parse import urljoin, urlparse
from collections import deque

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
MAX_CRAWL = 500  # safety limit
TIMEOUT = 30

def is_internal(url: str) -> bool:
    parsed = urlparse(url)
    return parsed.netloc == "" or parsed.netloc == "ziontechgroup.com" or parsed.netloc == "www.ziontechgroup.com"

def normalize(url: str) -> str:
    """Normalize URL for dedup: lowercase, remove fragment, trailing slash on paths."""
    parsed = urlparse(url)
    path = parsed.path
    if path != "/" and path.endswith("/"):
        path = path.rstrip("/")
    return urljoin(BASE_URL, f"{parsed.scheme}://{parsed.netloc}{path}")

def classify_broken(url: str, status_code: int, final_url: str) -> str:
    """
    Classify broken URLs into:
    - stale redirect: 301/302/307/308 that lands on a 404 or non-200
    - missing page: direct 404 (or other 4xx that isn't a redirect)
    - external reference error: internal-looking link that resolves to a different domain
    """
    final_parsed = urlparse(final_url if final_url else url)
    
    # External reference: the URL points to a different domain but was treated as internal
    if final_parsed.netloc and final_parsed.netloc not in ("ziontechgroup.com", "www.ziontechgroup.com", ""):
        if status_code >= 400:
            return "external reference error"
    
    # Stale redirect: redirect status code that didn't land on 200
    if status_code in (301, 302, 307, 308):
        if status_code >= 400 or (final_url and urlparse(final_url).netloc not in ("ziontechgroup.com", "www.ziontechgroup.com", "")):
            return "stale redirect"
        # If it redirected but final isn't 200
        if final_url and status_code < 400:
            # we got a redirect status; the final destination may be broken
            return "stale redirect"
    
    # Missing page: 404 or other 4xx/5xx
    if status_code == 404:
        return "missing page"
    if status_code >= 400:
        return "missing page"
    
    return "missing page"  # fallback

def main():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0; +https://ziontechgroup.com)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
    })
    
    visited = set()
    to_crawl = deque([BASE_URL])
    broken = []
    stats = {"total": 0, "ok": 0, "broken": 0, "redirect": 0, "other": 0}
    
    print(f"Starting crawl from {BASE_URL}")
    print(f"Max URLs: {MAX_CRAWL}, Timeout: {TIMEOUT}s")
    print("-" * 60)
    
    while to_crawl and len(visited) < MAX_CRAWL:
        url = to_crawl.popleft()
        norm = normalize(url)
        
        if norm in visited:
            continue
        visited.add(norm)
        stats["total"] += 1
        
        try:
            resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
            status = resp.status_code
            final_url = resp.url
            
            if status == 200:
                stats["ok"] += 1
                # Extract links
                if "text/html" in resp.headers.get("Content-Type", ""):
                    soup = BeautifulSoup(resp.text, "html.parser")
                    for a in soup.find_all("a", href=True):
                        href = a["href"].strip()
                        # Skip anchors, javascript, mailto, tel
                        if href.startswith(("#", "javascript:", "mailto:", "tel:", "data:")):
                            continue
                        full = urljoin(url, href)
                        if is_internal(full) and full.startswith(BASE_URL):
                            n = normalize(full)
                            if n not in visited:
                                to_crawl.append(n)
            elif status in (301, 302, 307, 308):
                stats["redirect"] += 1
                broken.append({
                    "url": url,
                    "status": status,
                    "final": final_url,
                    "classification": classify_broken(url, status, final_url),
                })
                stats["broken"] += 1
            else:
                stats["other"] += 1
                stats["broken"] += 1
                broken.append({
                    "url": url,
                    "status": status,
                    "final": final_url,
                    "classification": classify_broken(url, status, final_url),
                })
                
        except requests.exceptions.RequestException as e:
            stats["broken"] += 1
            broken.append({
                "url": url,
                "status": "ERROR",
                "final": str(e),
                "classification": "missing page",
            })
        
        if stats["total"] % 50 == 0:
            print(f"  ... crawled {stats['total']} URLs, {stats['ok']} OK, {stats['broken']} broken")
    
    print("-" * 60)
    print("\n=== SITE INTEGRITY REPORT ===")
    print(f"Site: {BASE_URL}")
    print(f"Total crawled: {stats['total']}")
    print(f"HTTP 200:      {stats['ok']}")
    print(f"Broken:        {stats['broken']}")
    print(f"  (redirects:  {stats['redirect']}, other errors: {stats['other']})")
    print()
    
    if broken:
        print(f"=== FIRST {min(10, len(broken))} BROKEN URLS ===")
        for i, b in enumerate(broken[:10], 1):
            print(f"{i}. {b['url']}")
            print(f"   Status: {b['status']} | Final: {b['final']}")
            print(f"   Classification: {b['classification']}")
            print()
        
        if len(broken) > 10:
            print(f"... and {len(broken) - 10} more broken URLs (not shown)")
        
        # Summary by classification
        print("=== CLASSIFICATION SUMMARY ===")
        from collections import Counter
        counts = Counter(b["classification"] for b in broken)
        for cls, cnt in counts.most_common():
            print(f"  {cls}: {cnt}")
    else:
        print("No broken URLs found.")
    
    return 0 if stats["broken"] == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
