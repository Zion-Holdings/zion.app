#!/usr/bin/env python3
"""Live site integrity check for ziontechgroup.com"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

BASE = "https://ziontechgroup.com"
MAX_PAGES = 100
REQUEST_TIMEOUT = 15
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; Ziod-checker/1.0; +ziontechgroup.com)"
}

visited = set()
broken = []
count_200 = 0
total_crawled = 0

# seed with base page
queue = [BASE]

while queue and len(visited) < MAX_PAGES:
    url = queue.pop(0)
    if url in visited:
        continue

    total_crawled += 1
    visited.add(url)

    try:
        resp = requests.get(url, timeout=REQUEST_TIMEOUT, headers=HEADERS, allow_redirects=True)
        final_url = resp.url
        status = resp.status_code

        if status == 200:
            count_200 += 1
        else:
            # classify broken
            if 300 <= status < 400:
                classification = "stale redirect"
            elif status == 404:
                classification = "missing page"
            else:
                classification = f"external reference error" if status >= 500 else f"http error ({status})"

            broken.append({
                "url": url,
                "status": status,
                "final_url": final_url,
                "classification": classification
            })
            print(f"BROKEN [{status}] {url} -> {final_url} ({classification})")

        # extract internal links to crawl next
        soup = BeautifulSoup(resp.text, "html.parser")
        for a in soup.find_all("a", href=True):
            href = a["href"].strip()
            if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                continue
            abs_url = urljoin(final_url, href)
            parsed = urlparse(abs_url)
            if parsed.netloc in (urlparse(BASE).netloc, ""):
                if abs_url not in visited and abs_url not in queue:
                    # strip fragments
                    abs_url = abs_url.split("#")[0]
                    if abs_url:
                        queue.append(abs_url)

    except requests.exceptions.Timeout:
        broken.append({"url": url, "status": "timeout", "classification": "external reference error"})
        print(f"TIMEOUT {url}")
    except requests.exceptions.ConnectionError as e:
        broken.append({"url": url, "status": "connection_error", "classification": "external reference error"})
        print(f"CONNECTION ERROR {url}: {e}")
    except Exception as e:
        broken.append({"url": url, "status": "exception", "classification": "external reference error"})
        print(f"EXCEPTION {url}: {e}")

    time.sleep(0.2)  # polite crawl delay

print("\n=== Summary ===")
print(f"Total crawled:    {total_crawled}")
print(f"HTTP 200 count:   {count_200}")
print(f"Broken count:     {len(broken)}")
print(f"Remaining queue:  {len(queue)}")

if broken:
    print("\nFirst 10 broken URLs:")
    for i, b in enumerate(broken[:10], 1):
        print(f"{i}. [{b['status']}] {b['url']}")
        print(f"   Classification: {b['classification']}")
        if "final_url" in b:
            print(f"   Final URL: {b['final_url']}")
else:
    print("\nNo broken URLs found. Site appears healthy.")
