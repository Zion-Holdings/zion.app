"""
Live site integrity check for https://ziontechgroup.com
- Crawls with requests + BeautifulSoup
- Follows internal links only
- Reports: total, 200s, broken count, first 10 broken URLs
- Classifies broken URLs
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json
import sys

BASE_URL = "https://ziontechgroup.com"
TIMEOUT = 15
MAX_PAGES = 500
DELAY = 0.3  # polite crawl delay

seen = set()
queue = [BASE_URL]
results = {"total": 0, "ok_200": 0, "broken": 0, "broken_urls": [], "errors": {}}
broken_classifications = []

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; ZionIntegrityCheck/1.0; +https://ziontechgroup.com)"
})

def is_internal(url):
    parsed = urlparse(url)
    return parsed.netloc == "ziontechgroup.com" or parsed.netloc == ""

def classify_broken(url, status_code, final_url, history):
    """Classify a broken URL into a category."""
    # Check if it's a redirect chain that ends somewhere odd
    if history:
        last_status = history[-1].status
        last_url = history[-1].url
        if last_status in (301, 302, 307, 308):
            # Redirect that didn't land on a 200 — stale redirect
            return "stale_redirect"
    
    # Check if final URL is external
    parsed_final = urlparse(final_url)
    if parsed_final.netloc and parsed_final.netloc != "ziontechgroup.com":
        return "external_reference_error"
    
    # Default: missing page
    return "missing_page"

print(f"Starting crawl of {BASE_URL} (max {MAX_PAGES} pages)...")
sys.stdout.flush()

while queue and len(seen) < MAX_PAGES:
    url = queue.pop(0)
    if url in seen:
        continue
    seen.add(url)
    
    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code
        
        results["total"] += 1
        
        if status == 200:
            results["ok_200"] += 1
            
            # Extract links
            try:
                soup = BeautifulSoup(resp.text, "html.parser")
                for a_tag in soup.find_all("a", href=True):
                    href = a_tag["href"].strip()
                    # Skip anchors, javascript, mailto, tel
                    if href.startswith("#") or href.startswith("javascript:") or href.startswith("mailto:") or href.startswith("tel:"):
                        continue
                    full = urljoin(url, href)
                    # Normalize: strip fragment
                    parsed = urlparse(full)
                    clean = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
                    if parsed.query:
                        clean += f"?{parsed.query}"
                    if is_internal(clean) and clean not in seen:
                        queue.append(clean)
            except Exception as e:
                results["errors"][url] = f"parse_error: {e}"
        else:
            results["broken"] += 1
            broken_url_info = {
                "url": url,
                "status": status,
                "final_url": final_url,
                "history": [(h.status, h.url) for h in resp.history],
            }
            results["broken_urls"].append(broken_url_info)
            
            classification = classify_broken(url, status, final_url, resp.history)
            broken_classifications.append({
                "url": url,
                "status": status,
                "classification": classification,
                "final_url": final_url,
            })
        
        # Polite delay
        time.sleep(DELAY)
        
    except requests.exceptions.RequestException as e:
        results["total"] += 1
        results["broken"] += 1
        results["errors"][url] = str(e)
        results["broken_urls"].append({"url": url, "status": "error", "error": str(e)})
        broken_classifications.append({
            "url": url,
            "status": "error",
            "classification": "external_reference_error" if "connection" in str(e).lower() or "name" in str(e).lower() else "missing_page",
            "error": str(e),
        })
    except Exception as e:
        results["total"] += 1
        results["broken"] += 1
        results["errors"][url] = f"unexpected: {e}"
        results["broken_urls"].append({"url": url, "status": "error", "error": str(e)})

# Sort broken URLs by URL for consistent output
results["broken_urls"].sort(key=lambda x: x.get("url", ""))
broken_classifications.sort(key=lambda x: x.get("url", ""))

print("\n" + "=" * 70)
print("ZION TECH GROUP — LIVE SITE INTEGRITY REPORT")
print("=" * 70)
print(f"Target:        {BASE_URL}")
print(f"Total crawled: {results['total']}")
print(f"HTTP 200:      {results['ok_200']}")
print(f"Broken:        {results['broken']}")
print("=" * 70)

if results["broken"] > 0:
    print(f"\nFirst 10 broken URLs ({len(results['broken_urls'])} total found):\n")
    for i, b in enumerate(results["broken_urls"][:10], 1):
        url = b.get("url", b.get("url", "unknown"))
        status = b.get("status", "?")
        final = b.get("final_url", "")
        print(f"  {i}. [{status}] {url}")
        if final and final != url:
            print(f"     → redirected to: {final}")
    
    print(f"\nBroken URL Classifications:\n")
    for i, c in enumerate(broken_classifications[:10], 1):
        print(f"  {i}. [{c['classification'].upper()}] {c['url']} (status={c['status']})")
        if c.get('final_url') and c['final_url'] != c['url']:
            print(f"     → {c['final_url']}")
    
    # Summary counts by classification
    from collections import Counter
    class_counts = Counter(c["classification"] for c in broken_classifications)
    print(f"\nClassification summary:")
    for cls, cnt in class_counts.most_common():
        print(f"  {cls}: {cnt}")
else:
    print("\n✓ No broken URLs found. Site appears healthy.")

if results["errors"]:
    print(f"\nErrors encountered during crawl ({len(results['errors'])}):")
    for url, err in list(results["errors"].items())[:5]:
        print(f"  - {url}: {err}")

print("\n" + "=" * 70)
print("END OF REPORT")
print("=" * 70)
