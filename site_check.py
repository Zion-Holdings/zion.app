#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls with requests+BeautifulSoup, follows internal links only.
Reports: total crawled, HTTP 200 count, broken count, first 10 broken URLs.
Does NOT modify files.
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque
import time
import sys

START_URL = "https://ziontechgroup.com"
MAX_PAGES = 200
TIMEOUT = 15
DELAY = 0.15  # polite delay between requests

# State
crawled = set()
broken = []
http_200 = 0
queue = deque()
session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
})

base_domain = urlparse(START_URL).hostname or "ziontechgroup.com"

def is_internal_url(url):
    """Keep http(s) links on same domain. Relative URLs are handled via urljoin later."""
    parsed = urlparse(url)
    if parsed.scheme not in ("http", "https"):
        return False
    host = parsed.hostname.lower() if parsed.hostname else ""
    base = base_domain.lower()
    if host == base:
        return True
    if host in (f"www.{base}", base.replace("www.", "")):
        return True
    return False

def classify_broken(url, status_code=None, error=None):
    """Classify a broken URL as stale redirect, missing page, or external reference error."""
    if status_code and status_code in (301, 302, 303, 307, 308):
        return "stale redirect"
    if status_code and status_code >= 400:
        return "missing page"
    if error:
        if "timeout" in str(error).lower() or "read timed out" in str(error).lower():
            return "missing page (unreachable)"
        if "connection" in str(error).lower():
            return "missing page (connection refused)"
        # Check if the error is about an external domain
        parsed = urlparse(url)
        if parsed.hostname and parsed.hostname.lower() != base_domain.lower() and not parsed.hostname.lower().startswith("www." + base_domain.lower()):
            return "external reference error"
        return "missing page"
    # If we got here, treat as missing page
    return "missing page"

def fetch_url(url):
    """Fetch a URL, return (status_code, html, error)."""
    try:
        resp = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        status = resp.status_code
        content_type = resp.headers.get("Content-Type", "")
        if "text/html" not in content_type and "application/xhtml" not in content_type:
            # Non-HTML resource — still count as crawled but skip link extraction
            return status, "", None
        html = resp.text
        return status, html, None
    except requests.exceptions.Timeout:
        return None, None, "timeout"
    except requests.exceptions.ConnectionError as e:
        return None, None, f"connection error: {e}"
    except Exception as e:
        return None, None, str(e)

def process_url(url):
    global http_200
    normalized = urldefrag(url)[0].rstrip("/") or urldefrag(url)[0]
    if normalized in crawled:
        return
    crawled.add(normalized)

    time.sleep(DELAY)
    status, html, error = fetch_url(url)

    if status is None:
        broken.append({
            "url": url,
            "status_code": None,
            "error": error,
            "classification": classify_broken(url, error=error),
        })
        return

    if status != 200:
        broken.append({
            "url": url,
            "status_code": status,
            "error": None,
            "classification": classify_broken(url, status_code=status),
        })
        return

    # HTTP 200
    http_200 += 1

    if html:
        soup = BeautifulSoup(html, "html.parser")
        for a in soup.find_all("a", href=True):
            href = a["href"]
            # Skip fragments, JS, mailto, tel
            if href.startswith("#") or href.startswith("javascript:") or href.startswith("mailto:") or href.startswith("tel:"):
                continue
            abs_url = urljoin(url, href)
            abs_url = urldefrag(abs_url)[0]
            if is_internal_url(abs_url) and abs_url not in crawled and len(crawled) < MAX_PAGES:
                queue.append(abs_url)

def run():
    print("=== ZION TECH GROUP SITE INTEGRITY CHECK ===", flush=True)
    print(f"Site: {START_URL}", flush=True)
    print(f"Max pages limit: {MAX_PAGES}, Timeout: {TIMEOUT}s, Delay: {DELAY}s", flush=True)
    print(f"Crawl venv: /Users/miami2/zion.app/automation/.crawl-venv", flush=True)
    print(f"Base domain: {base_domain}", flush=True)
    print()

    queue.append(START_URL)

    while queue and len(crawled) < MAX_PAGES:
        url = queue.popleft()
        process_url(url)
        if len(crawled) % 25 == 0 and len(crawled) > 0:
            print(f"  ... crawled {len(crawled)} pages so far ...", flush=True)

    print()
    print(f"Total crawled: {len(crawled)}", flush=True)
    print(f"HTTP 200 count: {http_200}", flush=True)
    print(f"Broken count: {len(broken)}", flush=True)
    print()

    if broken:
        print("FIRST 10 BROKEN URLS:")
        for i, b in enumerate(broken[:10], 1):
            sc = b["status_code"] if b["status_code"] else "ERR"
            print(f"  {i}. [{sc}] {b['url']}")
            print(f"     → {b['classification']}" + (f" (error: {b['error']})" if b["error"] else ""))
        print()
        if len(broken) > 10:
            print(f"  ... and {len(broken) - 10} more broken URLs omitted.", flush=True)
    else:
        print("No broken URLs found.", flush=True)

    print()
    # Summary by classification
    from collections import Counter
    cls_counts = Counter(b["classification"] for b in broken)
    if cls_counts:
        print("Classification summary:")
        for cls, cnt in sorted(cls_counts.items(), key=lambda x: -x[1]):
            print(f"  {cls}: {cnt}")
    print()
    print("=== END ===", flush=True)

if __name__ == "__main__":
    run()
