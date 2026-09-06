#!/usr/bin/env python3
"""Site integrity crawler for ziontechgroup.com."""
import sys
import time
from urllib.parse import urlparse, urljoin

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 300
DELAY = 0.25

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
})

# DNS check helper
def can_resolve(host):
    import socket
    try:
        socket.getaddrinfo(host, 443)
        return True
    except socket.gaierror:
        return False

# Status tracking
visited = set()
to_visit = [BASE_URL]
http_200 = []
broken = []  # (url, status_code, reason, classification)

def classify_broken(url, status_code, exception=None, redirect_url=None):
    parsed = urlparse(url)
    # External reference error: link points to a different domain
    if parsed.netloc and parsed.netloc != urlparse(BASE_URL).netloc:
        return "external reference error"
    if exception and isinstance(exception, requests.exceptions.ConnectionError):
        # Connection error on same domain -> missing page (server down/unreachable)
        return "missing page"
    if status_code in (404, 410):
        return "missing page"
    if status_code in (403, 401):
        return "missing page"  # access blocked, treat as missing
    if status_code in (301, 302, 307, 308):
        if redirect_url:
            redirect_parsed = urlparse(redirect_url)
            if redirect_parsed.netloc and redirect_parsed.netloc != urlparse(BASE_URL).netloc:
                return "external reference error"
            # Check if redirect target is also broken
            return "stale redirect"
        return "stale redirect"
    if exception and isinstance(exception, requests.exceptions.Timeout):
        return "missing page"
    if exception:
        return "missing page"
    # Anything else >= 400
    return "missing page"

print(f"Starting crawl of {BASE_URL}")
print(f"DNS check: {can_resolve(urlparse(BASE_URL).netloc)}")
print("-" * 60)

while to_visit and len(visited) < MAX_PAGES:
    url = to_visit.pop(0)
    if url in visited:
        continue
    visited.add(url)

    try:
        resp = session.get(url, timeout=10, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code

        # Skip non-HTML
        content_type = resp.headers.get("Content-Type", "")
        if "text/html" not in content_type and "application/xhtml+xml" not in content_type:
            if status == 200:
                http_200.append(url)
            else:
                broken.append((url, status, None, classify_broken(url, status)))
            continue

        if status == 200:
            http_200.append(url)
            # Extract links
            soup = BeautifulSoup(resp.text, "html.parser")
            for a in soup.find_all("a", href=True):
                href = a.get("href", "").strip()
                # Skip anchors, javascript, mailto, tel
                if href.startswith("#") or href.startswith("javascript:") or href.startswith("mailto:") or href.startswith("tel:"):
                    continue
                # Resolve to absolute
                abs_url = urljoin(url, href)
                parsed = urlparse(abs_url)
                # Only internal links
                if parsed.netloc and parsed.netloc != urlparse(BASE_URL).netloc:
                    continue
                # Normalize: remove fragment
                abs_url = abs_url.split("#")[0]
                # Only http/https
                if parsed.scheme not in ("http", "https"):
                    continue
                if abs_url not in visited and abs_url not in to_visit:
                    to_visit.append(abs_url)
        else:
            # Non-200 response
            broken.append((url, status, None, classify_broken(url, status, redirect_url=final_url if final_url != url else None)))

    except requests.exceptions.HTTPError as e:
        broken.append((url, e.response.status_code if e.response else 0, e, classify_broken(url, 0, e)))
    except requests.exceptions.ConnectionError as e:
        broken.append((url, 0, e, classify_broken(url, 0, e)))
    except requests.exceptions.Timeout as e:
        broken.append((url, 0, e, classify_broken(url, 0, e)))
    except requests.exceptions.TooManyRedirects as e:
        broken.append((url, 0, e, "stale redirect"))
    except Exception as e:
        broken.append((url, 0, e, "missing page"))

    time.sleep(DELAY)

print(f"\n{'='*60}")
print(f"CRAWL RESULTS for {BASE_URL}")
print(f"{'='*60}")
print(f"Total crawled:    {len(visited)}")
print(f"HTTP 200 count:   {len(http_200)}")
print(f"Broken count:     {len(broken)}")
print()

if broken:
    print("BROKEN URLS (first 10):")
    print("-" * 60)
    for i, (url, status, exc, classification) in enumerate(broken[:10], 1):
        status_str = str(status) if status else "N/A"
        exc_str = f" ({type(exc).__name__})" if exc else ""
        print(f"  {i}. [{status_str}]{exc_str} {url}")
        print(f"     Classification: {classification}")
        print()
else:
    print("No broken URLs found.")

if len(broken) > 10:
    print(f"  ... and {len(broken) - 10} more broken URLs")

# Classification summary
print()
print("CLASSIFICATION SUMMARY:")
print("-" * 60)
classifications = {}
for url, status, exc, classification in broken:
    classifications[classification] = classifications.get(classification, 0) + 1
for cls, count in sorted(classifications.items()):
    print(f"  {cls}: {count}")
