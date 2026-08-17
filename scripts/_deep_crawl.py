#!/usr/bin/env python3
"""Deep crawl ziontechgroup.com for 404s and broken links."""
import requests, time, json, sys, os
from urllib.parse import urljoin, urlparse
from collections import deque

START = "https://ziontechgroup.com/"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; ZionCrawler/1.0)"}
TIMEOUT = 12
MAX_PAGES = 600  # safety cap

visited = set()
broken = []          # (from, link, status)
to_visit = deque([START])
count = 0

def is_internal(link):
    p = urlparse(link)
    return not p.netloc or p.netloc == "ziontechgroup.com"

while to_visit and count < MAX_PAGES:
    url = to_visit.popleft()
    url = url.split("#")[0].split("?")[0]  # normalize
    if url in visited:
        continue
    visited.add(url)
    count += 1
    try:
        r = requests.head(url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=True)
        status = r.status_code
        if 400 <= status < 500 and status != 403:
            broken.append((url, url, status))
            print(f"  404: {url}")
        elif status == 200:
            # get links
            try:
                r2 = requests.get(url, headers=HEADERS, timeout=TIMEOUT)
                ct = r2.headers.get("content-type", "")
                if "text/html" in ct:
                    from html.parser import HTMLParser
                    class L(HTMLParser):
                        def __init__(s):
                            super().__init__(); s.links=[]
                        def handle_starttag(s,tag,attrs):
                            if tag in ("a","link"):
                                for k,v in attrs:
                                    if k=="href" and v and not v.startswith(("mailto:","tel:","javascript:","#")):
                                        s.links.append(v)
                    lp = L()
                    lp.feed(r2.text)
                    for href in lp.links:
                        full = urljoin(url, href)
                        if is_internal(full):
                            fu = full.split("#")[0].split("?")[0]
                            if fu not in visited and fu not in to_visit:
                                # pre-check with HEAD quickly
                                to_visit.append(fu)
            except Exception as e:
                pass
    except Exception as e:
        broken.append((url, url, 0))
    time.sleep(0.05)  # polite

result = {"pages_crawled": count, "broken": broken}
with open("deep_crawl_result.json", "w") as f:
    json.dump(result, f, indent=2)
print(f"\n=== DONE: {count} pages, {len(broken)} broken ===")
for b in broken[:50]:
    print(f"  {b[2]} {b[0]}")
if len(broken) > 50:
    print(f"  ...and {len(broken)-50} more")
