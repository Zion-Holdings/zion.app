import requests, time, sys, re
from urllib.parse import urlparse, urljoin
from collections import deque, Counter

BASE = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE).netloc
session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,text/plain,*/*;q=0.8",
})

print(f"Fetching sitemap from {BASE}/sitemap.xml ...", flush=True)
sm = session.get(f"{BASE}/sitemap.xml", timeout=30)
sitemap_urls = re.findall(rb'<loc>(.*?)</loc>', sm.content)
sitemap_urls = [u.decode() for u in sitemap_urls]
print(f"Sitemap: {len(sitemap_urls)} URLs", flush=True)

visited = set()
to_visit = deque(sitemap_urls)
broken = []
http200 = []
found_new = set()  # track dedup for newly discovered links

def extract_internal(html, base):
    try:
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, "html.parser")
    except:
        return []
    links = []
    for a in soup.find_all("a", href=True):
        href = str(a["href"])
        if href.startswith(("javascript:", "mailto:", "tel:", "#")):
            continue
        abs_url = urljoin(base, href)
        parsed = urlparse(abs_url)
        if parsed.netloc == DOMAIN and parsed.scheme in ("http","https") and not parsed.fragment:
            links.append(abs_url)
    return links

print(f"Starting crawl ...", flush=True)
t0 = time.time()
checked = 0
LINK_EXTRACT_INTERVAL = 5  # extract links every N pages

while to_visit and checked < 3000:
    url = to_visit.popleft()
    if url in visited:
        continue
    visited.add(url)
    checked += 1

    try:
        try:
            r = session.head(url, timeout=10, allow_redirects=True)
        except:
            r = session.get(url, timeout=10, allow_redirects=True)
    except Exception as e:
        broken.append((url, None, str(e)[:80], "external reference error"))
        continue

    status = r.status_code
    final_url = r.url
    loc = r.headers.get("Location", "")

    if status == 200:
        http200.append(url)
        # Extract links periodically to discover more
        if checked % LINK_EXTRACT_INTERVAL == 0:
            try:
                html = session.get(url, timeout=10).text
                for link in extract_internal(html, url):
                    if link not in visited and link not in found_new:
                        found_new.add(link)
                        to_visit.append(link)
            except:
                pass
    else:
        if status in (301,302,307,308):
            cls = "external reference error" if (loc and urlparse(loc).netloc and urlparse(loc).netloc != DOMAIN) else "stale redirect"
        elif status == 404:
            cls = "external reference error" if urlparse(url).netloc != DOMAIN else "missing page"
        elif status == 403:
            cls = "missing page"
        elif status >= 500:
            cls = "missing page"
        else:
            cls = f"other ({status})"
        broken.append((url, status, loc, cls))

    if checked % 500 == 0:
        elapsed = time.time() - t0
        print(f"  Progress: {checked} checked, {len(http200)} OK, {len(broken)} broken, {len(to_visit)} queued | {elapsed:.0f}s", flush=True)

    time.sleep(0.03)

elapsed = time.time() - t0

print(f"\n{'='*65}", flush=True)
print(f"  SITE INTEGRITY CHECK - {BASE}", flush=True)
print(f"{'='*65}", flush=True)
print(f"  Crawl duration        : {elapsed:.1f}s", flush=True)
print(f"  Total pages crawled   : {len(visited)}", flush=True)
print(f"  HTTP 200              : {len(http200)}", flush=True)
print(f"  Broken / non-200      : {len(broken)}", flush=True)
print(f"{'='*65}", flush=True)

if broken:
    print(f"\n  First 10 broken URLs:", flush=True)
    print(f"  {'-'*75}", flush=True)
    for i, (url, status, loc, cls) in enumerate(broken[:10], 1):
        extra = f" -> {loc}" if loc else ""
        print(f"  {i:2d}. [{status or 'ERR'}] {url}", flush=True)
        print(f"      Classification: {cls}{extra}", flush=True)
    print(f"  {'-'*75}", flush=True)
    cls_counts = Counter(cls for _,_,_,cls in broken)
    print(f"\n  Breakdown by classification:", flush=True)
    for cls, cnt in cls_counts.most_common():
        print(f"    {cls:<30s}: {cnt}", flush=True)
else:
    print(f"\n  No broken URLs found.", flush=True)

print(f"\n  Done.", flush=True)
