#!/usr/bin/env python3
"""Live site integrity check for ziontechgroup.com"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import time
from collections import deque, Counter

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 200
REQUEST_TIMEOUT = 15

def is_internal_link(url, base_domain):
    """Check if a URL is internal to the base domain."""
    parsed = urlparse(url)
    netloc = parsed.netloc.lower()
    base_lower = base_domain.lower()
    return netloc == base_lower or netloc == "" or netloc.endswith("." + base_lower)

def fetch(url, session):
    """Fetch a URL and return status code, final URL, and HTML content."""
    try:
        resp = session.get(url, timeout=REQUEST_TIMEOUT, allow_redirects=True,
                          headers={"User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0)"})
        return resp.status_code, resp.url, resp.text
    except requests.exceptions.Timeout:
        return None, url, None
    except requests.exceptions.ConnectionError:
        return None, url, None
    except requests.exceptions.TooManyRedirects:
        return None, url, None
    except Exception:
        return None, url, None

def extract_links(html, base_url):
    """Extract all href links from HTML."""
    links = set()
    if not html:
        return links
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup.find_all(["a", "link", "area"]):
        href = tag.get("href")
        if not href:
            continue
        href_str = str(href).strip()
        if href_str.startswith("#") or href_str.startswith("mailto:") or href_str.startswith("tel:") or href_str.startswith("javascript:"):
            continue
        full_url = urljoin(base_url, href_str)
        links.add(full_url)
    return links

def classify_broken(url, status_code, final_url, base_domain):
    """Classify why a URL is broken."""
    if status_code is None:
        parsed = urlparse(url)
        if parsed.scheme in ("http", "https"):
            return "missing page"
        return "external reference error"

    if status_code >= 400:
        parsed_final = urlparse(final_url)
        parsed_orig = urlparse(url)

        if parsed_final.netloc.lower() != base_domain.lower() and parsed_final.netloc.lower() != parsed_orig.netloc.lower():
            return "stale redirect (to external domain)"

        if status_code in (404, 410):
            return "missing page"

        if status_code in (301, 302, 307, 308):
            return "stale redirect"

        return "missing page"

    return None  # Not broken

def main():
    base_domain = urlparse(BASE_URL).netloc
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    })

    visited = set()
    queue = deque([BASE_URL])
    broken_list = []
    broken_urls_list = []
    total = 0
    ok = 0

    print(f"Starting crawl of {BASE_URL} (domain: {base_domain})")
    print(f"Max pages: {MAX_PAGES}, Timeout: {REQUEST_TIMEOUT}s")
    print("-" * 60)

    while queue and total < MAX_PAGES:
        url = queue.popleft()

        if url in visited:
            continue
        visited.add(url)
        total += 1

        status_code, final_url, html = fetch(url, session)

        if status_code == 200:
            ok += 1
            links = extract_links(html, url)
            for link in sorted(links):
                if link not in visited and is_internal_link(link, base_domain):
                    queue.append(link)
        else:
            classification = classify_broken(url, status_code, final_url, base_domain)
            if classification is None:
                classification = f"other (status={status_code})"
            broken_list.append({
                "url": url,
                "status_code": status_code,
                "final_url": final_url,
                "classification": classification,
            })
            broken_urls_list.append(url)

        if total % 25 == 0:
            print(f"  Progress: {total} crawled, {ok} OK, {len(broken_list)} broken...")

        time.sleep(0.15)

    print("-" * 60)
    print(f"\n=== SITE INTEGRITY REPORT ===")
    print(f"Target: {BASE_URL}")
    print()
    print(f"Total URLs crawled:      {total}")
    print(f"HTTP 200 OK count:       {ok}")
    print(f"Broken count:            {len(broken_list)}")
    print()

    if broken_list:
        print("FIRST 10 BROKEN URLS:")
        print("-" * 60)
        for i, entry in enumerate(broken_list[:10], 1):
            print(f"  {i}. {entry['url']}")
            print(f"     Status: {entry['status_code']} | Final: {entry['final_url']}")
            print(f"     Classification: {entry['classification']}")
            print()

        print("BREAKDOWN BY CLASSIFICATION:")
        print("-" * 60)
        classifications = Counter(b["classification"] for b in broken_list)
        for cls, count in classifications.most_common():
            print(f"  {cls}: {count}")
    else:
        print("No broken URLs found.")

    print()
    print("BROKEN DETAIL (ALL):")
    print("-" * 60)
    for i, b in enumerate(broken_list, 1):
        print(f"  {i}. [{b['status_code']}] {b['url']} -> {b['classification']}")

if __name__ == "__main__":
    main()
