"""
Live site integrity check for https://ziontechgroup.com
Uses requests + BeautifulSoup to crawl internal links only.
Reports: total crawled, HTTP 200 count, broken count, first 10 broken URLs,
and classifies each broken URL.
"""
import sys
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque

BASE_URL = "https://ziontechgroup.com"
START_URL = BASE_URL + "/"
TIMEOUT = 15
DELAY = 0.3
MAX_PAGES = 500
MAX_BROKEN_REPORT = 10

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityCheck/1.0)"
})

def is_internal(url, base_netloc):
    """Check if URL is internal (same domain)."""
    parsed = urlparse(url)
    return parsed.netloc == base_netloc or parsed.netloc == ""

def classify_broken(url, status_code, exception=None):
    """Classify a broken URL into one of: stale redirect, missing page, external reference error."""
    if exception:
        reason = str(exception)
        if "Too many redirects" in reason or "Redirect" in reason:
            return "stale redirect (redirect loop/excessive)"
        if "Connection" in reason or "timeout" in reason.lower():
            return "external reference error (connection/timeout)"
        return "external reference error (network)"
    
    if status_code in (301, 302, 307, 308):
        return "stale redirect"
    if status_code == 403:
        return "missing page (forbidden)"
    if status_code == 404:
        return "missing page (404)"
    if status_code >= 500:
        return "missing page (server error)"
    return f"other (HTTP {status_code})"

def extract_links(html, base_url, base_netloc):
    """Extract all internal links from HTML."""
    soup = BeautifulSoup(html, "html.parser")
    links = set()
    for a in soup.find_all("a", href=True):
        href = str(a["href"]).strip()
        # Skip anchors, javascript, mailto, tel
        if href.startswith("#") or href.startswith("javascript:") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        full_url = urljoin(base_url, href)
        if is_internal(full_url, base_netloc):
            # Normalize: remove fragment
            parsed = urlparse(full_url)
            clean = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
            if parsed.query:
                clean += f"?{parsed.query}"
            links.add(clean)
    return links

def crawl():
    base_netloc = urlparse(BASE_URL).netloc
    visited = set()
    queue = deque([START_URL])
    results = {
        "total": 0,
        "ok": 0,
        "broken": 0,
        "broken_list": [],
        "skipped": 0,
    }
    
    print(f"Starting crawl of {BASE_URL}")
    print(f"Max pages: {MAX_PAGES}, Delay: {DELAY}s")
    print("-" * 60)
    
    while queue and results["total"] < MAX_PAGES:
        url = queue.popleft()
        
        if url in visited:
            continue
        visited.add(url)
        results["total"] += 1
        
        try:
            resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
            status = resp.status_code
            
            if status == 200:
                results["ok"] += 1
                # Extract and queue internal links
                links = extract_links(resp.text, url, base_netloc)
                for link in links:
                    if link not in visited:
                        queue.append(link)
            else:
                results["broken"] += 1
                classification = classify_broken(url, status)
                results["broken_list"].append({
                    "url": url,
                    "status": status,
                    "classification": classification,
                })
                print(f"  BROKEN [{status}] {classification}: {url}")
                
        except requests.exceptions.TooManyRedirects:
            results["broken"] += 1
            classification = classify_broken(url, 0, exception="Too many redirects")
            results["broken_list"].append({
                "url": url,
                "status": "redirect_loop",
                "classification": classification,
            })
            print(f"  BROKEN [redirect_loop] {classification}: {url}")
        except requests.exceptions.ConnectionError as e:
            results["broken"] += 1
            classification = classify_broken(url, 0, exception=str(e))
            results["broken_list"].append({
                "url": url,
                "status": "connection_error",
                "classification": classification,
            })
            print(f"  BROKEN [conn_err] {classification}: {url}")
        except requests.exceptions.Timeout:
            results["broken"] += 1
            classification = classify_broken(url, 0, exception="Timeout")
            results["broken_list"].append({
                "url": url,
                "status": "timeout",
                "classification": classification,
            })
            print(f"  BROKEN [timeout] {classification}: {url}")
        except Exception as e:
            results["broken"] += 1
            classification = classify_broken(url, 0, exception=str(e))
            results["broken_list"].append({
                "url": url,
                "status": "error",
                "classification": classification,
            })
            print(f"  BROKEN [err] {classification}: {url}")
        
        # Progress
        if results["total"] % 20 == 0:
            print(f"  ... {results['total']} pages crawled, {results['ok']} OK, {results['broken']} broken")
        
        time.sleep(DELAY)
    
    return results

if __name__ == "__main__":
    print("=" * 60)
    print("ZION TECH GROUP — LIVE SITE INTEGRITY CHECK")
    print(f"Target: {BASE_URL}")
    print(f"Time: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)
    print()
    
    results = crawl()
    
    print()
    print("=" * 60)
    print("CRAWL SUMMARY")
    print("=" * 60)
    print(f"  Total pages crawled: {results['total']}")
    print(f"  HTTP 200 OK:         {results['ok']}")
    print(f"  Broken:              {results['broken']}")
    print(f"  Skipped (dupes):     {results['total'] - results['ok'] - results['broken']}")
    print()
    
    if results["broken"] > 0:
        print("-" * 60)
        print(f"BROKEN URLS ({len(results['broken_list'])} total, showing first {min(MAX_BROKEN_REPORT, len(results['broken_list']))}):")
        print("-" * 60)
        for i, item in enumerate(results["broken_list"][:MAX_BROKEN_REPORT], 1):
            print(f"  {i}. {item['url']}")
            print(f"     Status: {item['status']} | Classification: {item['classification']}")
            print()
        
        # Classification summary
        print("-" * 60)
        print("CLASSIFICATION SUMMARY (all broken):")
        print("-" * 60)
        classes = {}
        for item in results["broken_list"]:
            c = item["classification"]
            classes[c] = classes.get(c, 0) + 1
        for c, count in sorted(classes.items()):
            print(f"  {c}: {count}")
    else:
        print("No broken URLs found. Site integrity check PASSED.")
    
    print()
    print("=" * 60)
    print("CHECK COMPLETE")
    print("=" * 60)
    
    # Exit with non-zero if broken found (for cron detection)
    sys.exit(0 if results["broken"] == 0 else 1)
