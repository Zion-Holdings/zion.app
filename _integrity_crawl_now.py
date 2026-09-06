#!/usr/bin/env python3
"""Live site integrity check for ziontechgroup.com — requests + BeautifulSoup."""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque
import sys
import time

BASE_URL = "https://ziontechgroup.com"
BASE_DOMAIN = "ziontechgroup.com"
MAX_PAGES = 2000  # safety limit

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; IntegrityCrawler/1.0; +https://ziontechgroup.com)"
})

def is_internal(url):
    """Check if URL is internal to ziontechgroup.com (ignore fragments)."""
    parsed = urlparse(url)
    if parsed.fragment:
        return False
    host = parsed.hostname or ""
    return host == BASE_DOMAIN or host.endswith("." + BASE_DOMAIN)

def normalize_url(url):
    """Remove fragment and trailing slash for deduplication."""
    url, _ = urldefrag(url)
    parsed = urlparse(url)
    path = parsed.path
    if path != "/" and path.endswith("/"):
        path = path.rstrip("/")
    netloc = parsed.netloc
    if netloc.endswith(":80"):
        netloc = netloc[:-3]
    elif netloc.endswith(":443"):
        netloc = netloc[:-4]
    return f"{parsed.scheme}://{netloc}{path}"

def classify_broken(url, status_code, redirect_target=None, content_snippet=""):
    """Classify a broken URL."""
    if status_code in (301, 302, 307, 308):
        return "stale redirect"
    if status_code == 404:
        return "missing page"
    if status_code >= 400:
        parsed = urlparse(url)
        if redirect_target and redirect_target != url:
            return "stale redirect"
        if parsed.hostname and parsed.hostname != BASE_DOMAIN and not parsed.hostname.endswith("." + BASE_DOMAIN):
            return "external reference error"
        return "missing page"
    if status_code == 200:
        lower = content_snippet.lower()
        if "404" in lower and ("not found" in lower or "page not found" in lower):
            return "missing page (soft 404)"
        if 'window.location' in content_snippet or 'meta http-equiv="refresh"' in content_snippet:
            return "stale redirect (meta/JS)"
    return "unknown"

def main():
    visited = set()
    broken = []
    good_200 = 0
    queue = deque([BASE_URL])
    total_crawled = 0
    start_time = time.time()

    while queue and total_crawled < MAX_PAGES:
        url = queue.popleft()
        url = normalize_url(url)
        if url in visited:
            continue
        visited.add(url)
        total_crawled += 1

        try:
            resp = session.get(url, timeout=15, allow_redirects=True)
            status = resp.status_code
            raw_url = resp.url
            redirect_target = normalize_url(raw_url) if raw_url != url else None

            if status == 200:
                good_200 += 1
                if "text/html" in resp.headers.get("Content-Type", ""):
                    soup = BeautifulSoup(resp.text, "html.parser")
                    for a in soup.find_all("a", href=True):
                        href = a.get("href")
                        if not href:
                            continue
                        href = str(href).strip()
                        full_url = urljoin(url, href)
                        if is_internal(full_url):
                            nurl = normalize_url(full_url)
                            if nurl not in visited:
                                queue.append(nurl)
            else:
                snippet = resp.text[:500] if resp.text else ""
                classification = classify_broken(url, status, redirect_target, snippet)
                broken.append({
                    "url": url,
                    "status_code": status,
                    "redirect_target": redirect_target,
                    "classification": classification,
                    "content_type": resp.headers.get("Content-Type", "")
                })
        except Exception as e:
            broken.append({
                "url": url,
                "status_code": "error",
                "redirect_target": None,
                "classification": f"request error: {str(e)[:100]}",
                "content_type": ""
            })

        if total_crawled % 100 == 0:
            elapsed = time.time() - start_time
            sys.stderr.write(f"\rProgress: {total_crawled} pages, {good_200} OK, {len(broken)} broken, {elapsed:.0f}s")
            sys.stderr.flush()

    elapsed = time.time() - start_time

    # Output report
    print("=" * 60)
    print("SITE INTEGRITY REPORT — ziontechgroup.com")
    print("=" * 60)
    print(f"Total crawled:   {total_crawled}")
    print(f"HTTP 200 count:  {good_200}")
    print(f"Broken count:    {len(broken)}")
    print(f"Elapsed:         {elapsed:.0f}s")
    print("=" * 60)

    if broken:
        print("\nFirst 10 broken URLs:")
        print("-" * 60)
        for i, b in enumerate(broken[:10], 1):
            print(f"\n{i}. {b['url']}")
            print(f"   Status: {b['status_code']}")
            if b['redirect_target']:
                print(f"   Redirect target: {b['redirect_target']}")
            print(f"   Classification: {b['classification']}")
    else:
        print("\nNo broken URLs found. Site appears healthy.")

    # Summary by classification
    from collections import Counter
    cls_counts = Counter(b['classification'] for b in broken)
    print("\nBreakdown by classification:")
    for cls, cnt in cls_counts.most_common():
        print(f"  {cls}: {cnt}")

    print("\n" + "=" * 60)
    print("End of report")

if __name__ == "__main__":
    main()
