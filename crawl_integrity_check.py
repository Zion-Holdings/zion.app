#!/usr/bin/env python3
"""Live site integrity check for https://ziontechgroup.com.
Crawls internal links only with requests+BeautifulSoup. Reports counts and first 10 broken URLs.
"""

import sys
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin, urlunparse

BASE_URL = "https://ziontechgroup.com"
USER_AGENT = "Mozilla/5.0 (compatible; IntegrityBot/1.0)"

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT})

visited = set()
queue = [BASE_URL]
broken = []  # list of (url, status_or_error, classification)

def normalize_url(url):
    """Normalize URL: lowercase domain, strip fragment, trailing slash consistency."""
    p = urlparse(url)
    # lowercase scheme+netloc
    p = p._replace(scheme=p.scheme.lower(), netloc=p.netloc.lower())
    # strip fragment
    p = p._replace(fragment="")
    # normalize path: add trailing slash for directory-like paths
    path = p.path
    if path and not path.endswith("/") and "." not in path.split("/")[-1]:
        path += "/"
    p = p._replace(path=path)
    return urlunparse(p)

def is_internal(url):
    """Check if URL belongs to ziontechgroup.com."""
    p = urlparse(url)
    netloc = p.netloc.lower()
    return netloc in ("ziontechgroup.com", "www.ziontechgroup.com")

def classify_broken(url, status_code, exception=None):
    """Classify a broken URL."""
    if exception:
        # Try to determine if it's an external reference error
        if not is_internal(url):
            return "external reference error"
        return "missing page"
    
    if status_code is None:
        return "missing page"
    
    # Check if it's a redirect (3xx)
    if 300 <= status_code < 400:
        # Follow the redirect ourselves to see where it goes
        try:
            resp = session.get(url, allow_redirects=False, timeout=15)
            location = resp.headers.get("Location", "")
            if location:
                loc_parsed = urlparse(location)
                # Redirect to external site = stale redirect
                if loc_parsed.netloc and loc_parsed.netloc not in ("ziontechgroup.com", "www.ziontechgroup.com"):
                    return "stale redirect"
                # Internal redirect that didn't reach 200
                if is_internal(location):
                    return "stale redirect"
            return "stale redirect"
        except Exception:
            return "stale redirect"
    
    # 4xx/5xx for internal = missing page
    if is_internal(url):
        return "missing page"
    
    # External link error
    return "external reference error"

def extract_links(html, base_url):
    """Extract internal links from HTML."""
    links = []
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup.find_all(["a", "link"]):
        href = tag.get("href")
        if href is None:
            continue
        href_str = str(href)
        # Skip anchors, javascript, mailto, tel, etc.
        if href_str.startswith(("#", "javascript:", "mailto:", "tel:")):
            continue
        full = urljoin(base_url, href_str)
        full_norm = normalize_url(full)
        if is_internal(full_norm):
            links.append(full_norm)
    return links

total_crawled = 0
http_200 = 0

while queue:
    url = queue.pop(0)
    norm = normalize_url(url)
    
    if norm in visited:
        continue
    visited.add(norm)
    
    total_crawled += 1
    
    try:
        resp = session.get(norm, timeout=20, allow_redirects=True)
        status = resp.status_code
        
        if status == 200:
            http_200 += 1
            # Extract links
            for link in extract_links(resp.text, norm):
                if link not in visited:
                    queue.append(link)
        else:
            # Non-200 status
            classification = classify_broken(norm, status)
            broken.append((norm, f"HTTP {status}", classification))
            # Still extract links from error pages if possible
            if status < 500:
                try:
                    for link in extract_links(resp.text, norm):
                        if link not in visited:
                            queue.append(link)
                except Exception:
                    pass
    except requests.exceptions.RequestException as e:
        classification = classify_broken(norm, None, exception=str(e))
        broken.append((norm, f"Error: {str(e)[:100]}", classification))
    except Exception as e:
        broken.append((norm, f"Error: {str(e)[:100]}", "missing page"))
    
    # Polite delay
    time.sleep(0.1)

# Report
print(f"Site integrity check: {BASE_URL}")
print(f"Total crawled: {total_crawled}")
print(f"HTTP 200: {http_200}")
print(f"Broken: {len(broken)}")
print()
if broken:
    print("First 10 broken URLs:")
    for i, (url, status, cls) in enumerate(broken[:10], 1):
        print(f"  {i}. {url} — {status} [{cls}]")
else:
    print("No broken URLs found.")

# Classification summary
from collections import Counter
classifications = Counter(cls for _, _, cls in broken)
print()
print("Classification summary:")
for cls, count in classifications.items():
    print(f"  {cls}: {count}")
