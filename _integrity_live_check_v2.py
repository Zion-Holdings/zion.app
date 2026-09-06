#!/usr/bin/env python3
"""
Live site integrity check for https://ziontechgroup.com
Crawls the site with requests + BeautifulSoup, follows internal links only,
pulls URLs from sitemap.xml in addition to internal link following.
Reports total crawled, HTTP 200 count, broken count, first 10 broken URLs.
Classifies each broken URL: stale_redirect, missing_page, external_reference_error.
"""

import json
from urllib.parse import urljoin, urldefrag, urlsplit
from collections import deque, Counter
from xml.etree import ElementTree as ET

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://ziontechgroup.com"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
REQUEST_TIMEOUT = 15
MAX_PAGES = 2000

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT})
session.max_redirects = 10

base_domain = urlsplit(BASE_URL).hostname


def is_internal(url):
    try:
        parsed = urlsplit(url)
        host = parsed.hostname
        return bool(host) and host == base_domain
    except Exception:
        return False


def normalize(url):
    if not url:
        return None
    url, _ = urldefrag(url)
    try:
        parsed = urlsplit(url)
        scheme = parsed.scheme.lower()
        host = parsed.hostname.lower() if parsed.hostname else ""
        path = parsed.path or "/"
        if not path.endswith("/"):
            path += "/"
        norm = f"{scheme}://{host}{path}"
        if parsed.query:
            norm += f"?{parsed.query}"
        return norm
    except Exception:
        return None


def fetch(url):
    try:
        resp = session.get(url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
        status = resp.status_code
        html = resp.text if "text/html" in resp.headers.get("content-type", "") else None
        return status, html, None
    except requests.exceptions.TooManyRedirects:
        return 0, None, "too_many_redirects"
    except requests.exceptions.ConnectionError:
        return 0, None, "connection_error"
    except requests.exceptions.Timeout:
        return 0, None, "timeout"
    except requests.exceptions.RequestException as e:
        return 0, None, str(e)


def extract_links(html, page_url):
    links = []
    if not html:
        return links
    try:
        soup = BeautifulSoup(html, "html.parser")
        for tag in soup.find_all(["a", "link", "area"], href=True):
            href = tag.get("href") or tag["href"]
            if isinstance(href, list):
                href = href[0] if href else ""
            href = str(href).strip()
            if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                continue
            absolute = urljoin(page_url, href)
            if is_internal(absolute):
                links.append(absolute)
    except Exception:
        pass
    return links


def fetch_sitemap_urls():
    """Fetch and parse sitemap.xml, return list of internal URLs."""
    sitemap_urls = []
    variants = [
        "/sitemap.xml",
        "/sitemap_index.xml",
        "/sitemap-index.xml",
        "/sitemap/sitemap.xml",
    ]
    for path in variants:
        url = BASE_URL.rstrip("/") + path
        try:
            resp = session.get(url, timeout=REQUEST_TIMEOUT)
            if resp.status_code != 200:
                continue
            content_type = resp.headers.get("content-type", "")
            if "xml" not in content_type and "text/" not in content_type:
                continue
            text = resp.text
            # Handle sitemap index (contains other sitemaps)
            if "<sitemapindex" in text:
                try:
                    root = ET.fromstring(text)
                    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
                    for sm in root.findall("sm:sitemap", ns):
                        loc = sm.find("sm:loc", ns)
                        if loc is not None and loc.text:
                            sitemap_urls.append(loc.text.strip())
                except ET.ParseError:
                    pass
                continue
            # Regular URL sitemap
            if "<urlset" in text:
                try:
                    root = ET.fromstring(text)
                    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
                    for url_entry in root.findall("sm:url", ns):
                        loc = url_entry.find("sm:loc", ns)
                        if loc is not None and loc.text:
                            sitemap_urls.append(loc.text.strip())
                except ET.ParseError:
                    pass
                continue
            # Fallback: regex extract URLs
            import re
            found = re.findall(r"<loc>([^<]+)</loc>", text)
            sitemap_urls.extend(found)
            break
        except Exception:
            continue
    return sitemap_urls


def classify_break(b):
    url = b["url"]
    status = b["status"]
    error = b.get("error", "")

    if status == "error" and error in ("connection_error",):
        return "external_reference_error"
    if status == "error" and "timeout" in error.lower():
        return "external_reference_error"
    if not is_internal(url):
        return "external_reference_error"

    if isinstance(status, int):
        if status in (301, 302, 303, 307, 308):
            return "stale_redirect"
        if status == 404:
            return "missing_page"
        if status == 403:
            return "missing_page (forbidden)"
        if status == 500:
            return "server_error"
        if status == 0:
            return "connection_failed"
        if status >= 400:
            return f"http_{status}"
    return "unknown"


print(f"Starting crawl of {BASE_URL}")
print(f"Domain filter: {base_domain}")
print(f"Max pages: {MAX_PAGES}")
print("=" * 60)

# Phase 1: Gather URLs from sitemap
print("\n[Phase 1] Fetching sitemap...")
sitemap_urls = fetch_sitemap_urls()
sitemap_internal = [u for u in sitemap_urls if is_internal(u)]
print(f"  Sitemap URLs found: {len(sitemap_urls)}")
print(f"  Internal sitemap URLs: {len(sitemap_internal)}")

# Phase 2: Crawl from homepage + follow internal links
print("\n[Phase 2] Crawling from homepage + internal links...")
visited = set()
queued = set()
queue = deque()
results = []
broken = []

# Seed with homepage
queue.append(BASE_URL)
queued.add(BASE_URL)

while queue and len(results) < MAX_PAGES:
    url = queue.popleft()
    queued.discard(url)
    norm = normalize(url)

    if norm in visited:
        continue
    visited.add(norm)

    status, html, error = fetch(url)

    entry = {"url": url}
    if error:
        entry["status"] = "error"
        entry["error"] = error
        broken.append(entry)
    else:
        entry["status"] = status
        if status == 200 and html:
            links = extract_links(html, url)
            for link in links:
                lnorm = normalize(link)
                if lnorm and lnorm not in visited and lnorm not in queued:
                    queue.append(link)
                    queued.add(lnorm)
        else:
            entry["error"] = error
            broken.append(entry)

    results.append(entry)

    if len(results) % 50 == 0:
        print(f"  Crawled {len(results)} pages, {len(broken)} broken, queue size {len(queue)}")

# Phase 3: Check sitemap URLs not yet visited
print("\n[Phase 3] Checking remaining sitemap URLs...")
for sm_url in sitemap_internal:
    sm_norm = normalize(sm_url)
    if sm_norm in visited:
        continue
    visited.add(sm_norm)
    status, html, error = fetch(sm_url)
    entry = {"url": sm_url}
    if error:
        entry["status"] = "error"
        entry["error"] = error
        broken.append(entry)
    else:
        entry["status"] = status
        if status != 200:
            entry["error"] = error
            broken.append(entry)
    results.append(entry)
    if len(results) % 50 == 0:
        print(f"  Checked {len(results)} pages, {len(broken)} broken")

print("=" * 60)
print("CRAWL COMPLETE")
print(f"Total crawled:    {len(results)}")
http_200 = [r for r in results if r["status"] == 200]
print(f"HTTP 200 count:   {len(http_200)}")
print(f"Broken count:     {len(broken)}")

if broken:
    print("\n--- BROKEN URLS (first 10) ---")
    for i, b in enumerate(broken[:10]):
        cls = classify_break(b)
        print(f"\n[{i+1}] {b['url']}")
        if b["status"] != "error":
            print(f"    HTTP Status: {b['status']}")
        else:
            print(f"    Error: {b['error']}")
        print(f"    Classification: {cls}")

    with open("/tmp/broken_urls.json", "w") as f:
        json.dump(broken, f, indent=2)
    print(f"\nFull broken list saved to /tmp/broken_urls.json ({len(broken)} entries)")

tally = Counter()
for b in broken:
    tally[classify_break(b)] += 1
print("\n--- CLASSIFICATION TALLY ---")
for cls, count in tally.most_common():
    print(f"  {cls}: {count}")

# Also list pages that returned 200 for reference
print("\n--- SAMPLE OF 200 PAGES (first 20) ---")
for r in results[:20]:
    if r["status"] == 200:
        print(f"  200  {r['url']}")
