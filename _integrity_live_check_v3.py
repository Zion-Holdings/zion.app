#!/usr/bin/env python3
"""Live site integrity check for https://ziontechgroup.com"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque
import sys

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 300
TIMEOUT = 15

def is_internal(url):
    """Return True if the URL belongs to the same domain."""
    parsed = urlparse(url)
    base = urlparse(BASE_URL)
    return parsed.netloc == base.netloc or parsed.netloc == ""

def classify_broken(url, status_code, final_url, exception=None):
    """Classify a broken URL into one of the known categories."""
    if exception:
        if "Redirect" in str(exception) or "Too many redirects" in str(exception):
            return "stale redirect"
        if "Connection" in str(exception) or "timeout" in str(exception).lower():
            return "external reference error"
        return "external reference error"
    
    # Follow what the server returned
    if status_code in (301, 302, 307, 308):
        # Check if it redirected somewhere that also doesn't resolve
        if final_url and final_url != url:
            return "stale redirect"
        return "stale redirect"
    
    if status_code == 404:
        return "missing page"
    
    if status_code >= 500:
        return "missing page"
    
    if status_code == 0:
        return "external reference error"
    
    return "missing page"

def crawl_site():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; IntegrityBot/1.0)"
    })
    
    visited = set()
    to_visit = deque([BASE_URL])
    results = {
        "total": 0,
        "ok": 0,
        "broken": 0,
        "broken_urls": [],
        "classified": [],
    }
    
    while to_visit and results["total"] < MAX_PAGES:
        url = to_visit.popleft()
        if url in visited:
            continue
        visited.add(url)
        results["total"] += 1
        
        try:
            resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
            final_url = resp.url if hasattr(resp, 'url') else url
            
            if resp.status_code == 200:
                results["ok"] += 1
                # Extract links
                try:
                    soup = BeautifulSoup(resp.text, "html.parser")
                    for link in soup.find_all("a", href=True):
                        href = link["href"]
                        full_url = urljoin(url, href)
                        if is_internal(full_url) and full_url not in visited:
                            # Normalize: strip fragment, trailing slash consistency
                            normalized = full_url.split("#")[0]
                            if normalized not in visited:
                                to_visit.append(normalized)
                except Exception:
                    pass
            else:
                results["broken"] += 1
                classification = classify_broken(url, resp.status_code, final_url)
                results["broken_urls"].append({
                    "url": url,
                    "status": resp.status_code,
                    "final_url": final_url,
                    "classification": classification,
                })
                results["classified"].append(classification)
        except requests.exceptions.RequestException as e:
            results["broken"] += 1
            classification = classify_broken(url, 0, url, exception=e)
            results["broken_urls"].append({
                "url": url,
                "status": "exception",
                "final_url": url,
                "classification": classification,
                "error": str(e),
            })
            results["classified"].append(classification)
    
    return results

if __name__ == "__main__":
    print(f"Starting crawl of {BASE_URL} ...", flush=True)
    results = crawl_site()
    
    print("\n=== SITE INTEGRITY REPORT ===")
    print(f"Total crawled:      {results['total']}")
    print(f"HTTP 200 count:     {results['ok']}")
    print(f"Broken count:       {results['broken']}")
    
    if results["broken"] > 0:
        print(f"\nFirst 10 broken URLs:")
        for i, item in enumerate(results["broken_urls"][:10], 1):
            print(f"  {i}. {item['url']}")
            print(f"     Status: {item['status']}", end="")
            if item.get("final_url") and item["final_url"] != item["url"]:
                print(f" → {item['final_url']}", end="")
            print()
            print(f"     Classification: {item['classification']}")
        
        # Summary counts by classification
        from collections import Counter
        counts = Counter(results["classified"])
        print(f"\nBreakdown by classification:")
        for cls, cnt in counts.most_common():
            print(f"  {cls}: {cnt}")
    else:
        print("\nNo broken URLs found.")
    
    print("\n=== END REPORT ===")
