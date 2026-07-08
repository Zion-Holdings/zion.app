import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

BASE = "https://ziontechgroup.com"
visited = set()
broken = []
count_200 = 0
count_crawled = 0

session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityBot/1.0)"})

def check(url):
    global count_crawled, count_200
    try:
        r = session.head(url, allow_redirects=True, timeout=15)
        final_url = r.url
        status = r.status_code
        if status == 405 or status == 403:
            r = session.get(url, timeout=20, stream=True)
            status = r.status_code
            final_url = r.url
        count_crawled += 1
        if status == 200:
            count_200 += 1
            return True, status, final_url
        else:
            return False, status, final_url
    except Exception as e:
        count_crawled += 1
        return False, str(type(e).__name__), url

queue = [BASE]
max_pages = 250
while queue and len(visited) < max_pages:
    url = queue.pop(0)
    if url in visited:
        continue
    visited.add(url)
    ok, status, final = check(url)
    if not ok:
        if isinstance(status, int) and status in (301, 302, 303, 307, 308):
            cls = "stale redirect"
        elif isinstance(status, int) and status == 404:
            cls = "missing page"
        else:
            s_status = str(status)
            if any(x in s_status for x in ["Missing", "Connection", "Timeout", "DNS"]):
                cls = "missing page"
            else:
                cls = "external reference error"
        broken.append({
            "url": url,
            "status": str(status),
            "final": final,
            "class": cls,
        })
        print("BROKEN:", url, status)
    if ok and urlparse(final).netloc == urlparse(BASE).netloc:
        try:
            resp = session.get(final, timeout=20)
            soup = BeautifulSoup(resp.text, "html.parser")
            for a in soup.find_all("a", href=True):
                link = urljoin(final, a["href"]).split("#")[0]
                p = urlparse(link)
                if p.netloc == urlparse(BASE).netloc and link not in visited and len(visited) + len(queue) < max_pages:
                    queue.append(link)
        except Exception as e:
            print("PARSE_ERR:", final, e)
    time.sleep(0.05)

print("\nREPORT")
print("TOTAL_CRAWLED:", count_crawled)
print("HTTP_200:", count_200)
print("BROKEN:", len(broken))
if broken:
    print("FIRST_10_BROKEN:")
    for item in broken[:10]:
        print(item["url"], "|", item["status"], "|", item["final"], "|", item["class"])
