#!/usr/bin/env python3
"""
Fast live site integrity check: reads sitemap, HEAD-checks every URL,
follows internal links from a sample, classifies broken.
"""
import re, time, sys
from urllib.parse import urlparse, urljoin
from collections import deque, Counter

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE).netloc

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 Chrome/120 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,text/plain,*/*;q=0.8",
})

# ---- Read sitemap ----
print(f"Reading sitemap: {BASE}/sitemap.xml ...", flush=True)
with open("/Users/miami2/zion-support.github.io/sitemap.xml", "rb") as f:
    sm_data = f.read()
sitemap_urls = [m.decode() for m in re.findall(rb"<loc>(.*?)</loc>", sm_data)]
# Deduplicate preserving order
seen = set()
sitemap_urls = [u for u in sitemap_urls if not (u in seen or seen.add(u))]
print(f"Sitemap URLs: {len(sitemap_urls)}", flush=True)

visited = set()
to_visit = deque(sitemap_urls)
broken = []
http200 = []

def extract_internal(html, base):
    try:
        soup = BeautifulSoup(html, "html.parser")
    except Exception:
        return []
    out = []
    for a in soup.find_all("a", href=True):
        href = str(a["href"])
        if href.startswith(("javascript:", "mailto:", "tel:", "#")):
            continue
        abs_url = urljoin(base, href)
        p = urlparse(abs_url)
        if p.netloc == DOMAIN and p.scheme in ("http", "https") and not p.fragment:
            out.append(abs_url)
    return out

print("Starting HEAD-based crawl ...", flush=True)
t0 = time.time()
checked = 0
LINK_INTERVAL = 7  # extract links from every 7th 200-page (sampled)

while to_visit and checked < 5000:
    url = to_visit.popleft()
    if url in visited:
        continue
    visited.add(url)
    checked += 1

    # HEAD request (fast)
    status = None
    loc = ""
    try:
        r = session.head(url, timeout=12, allow_redirects=True)
        status = r.status_code
        loc = r.headers.get("Location", "")
    except requests.exceptions.RequestException:
        # Fallback to GET (some servers reject HEAD)
        try:
            r = session.get(url, timeout=12, allow_redirects=True, stream=True)
            status = r.status_code
            loc = r.headers.get("Location", "")
        except requests.exceptions.RequestException as e:
            broken.append((url, None, str(e)[:80], "external reference error"))
            continue

    if status == 200:
        http200.append(url)
        # Extract links from sampled pages only (keeps crawl bounded + fast)
        if checked % LINK_INTERVAL == 0:
            try:
                g = session.get(url, timeout=12)
                for link in extract_internal(g.text, url):
                    if link not in visited:
                        to_visit.append(link)
            except Exception:
                pass
    else:
        # Classify
        if status in (301, 302, 307, 308):
            cls = ("external reference error"
                   if loc and urlparse(loc).netloc and urlparse(loc).netloc != DOMAIN
                   else "stale redirect")
        elif status == 404:
            cls = ("external reference error"
                   if urlparse(url).netloc != DOMAIN
                   else "missing page")
        elif status == 403:
            cls = "missing page"
        elif status >= 500:
            cls = "missing page"
        else:
            cls = f"other ({status})"
        broken.append((url, status, loc, cls))

    # Progress
    if checked % 300 == 0:
        print(f"  ... {checked} checked, {len(http200)} OK, "
              f"{len(broken)} broken, {len(to_visit)} queued "
              f"({time.time()-t0:.0f}s)", flush=True)

    time.sleep(0.02)

elapsed = time.time() - t0

# ---- Report ----
print(f"\n{'='*65}", flush=True)
print(f"  SITE INTEGRITY CHECK — {BASE}", flush=True)
print(f"{'='*65}", flush=True)
print(f"  Crawl duration        : {elapsed:.1f}s", flush=True)
print(f"  Total pages crawled   : {len(visited)}", flush=True)
print(f"  HTTP 200              : {len(http200)}", flush=True)
print(f"  Broken / non-200      : {len(broken)}", flush=True)
print(f"{'='*65}", flush=True)

if broken:
    print(f"\n  First 10 broken URLs:", flush=True)
    print(f"  {'—'*75}", flush=True)
    for i, (url, status, loc, cls) in enumerate(broken[:10], 1):
        extra = f"  →  {loc}" if loc else ""
        print(f"  {i:2d}. [{status or 'ERR'}] {url}", flush=True)
        print(f"      Classification: {cls}{extra}", flush=True)
    print(f"  {'—'*75}", flush=True)

    cls_counts = Counter(c for _, _, _, c in broken)
    print(f"\n  Breakdown by classification:", flush=True)
    for cls, cnt in cls_counts.most_common():
        print(f"    {cls:<30s}: {cnt}", flush=True)
else:
    print(f"\n  ✓  No broken URLs found.", flush=True)

print(f"\n  Done.", flush=True)
