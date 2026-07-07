import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
from collections import deque

BASE_DOMAIN = urlparse("https://ziontechgroup.com").netloc
MAX_PAGES = 300
MAX_DEPTH = 4
TIMEOUT = 15
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; SiteIntegrity/1.0)"}

results = []
visited = set(["https://ziontechgroup.com"])

def classify(url, status_code):
    if 300 <= status_code < 400:
        return "stale redirect"
    elif status_code == 404:
        return "missing page"
    elif status_code < 200 or status_code >= 400:
        return "external reference error" if status_code == -1 else "missing page"
    return None

def crawl():
    q = deque([("https://ziontechgroup.com", 0)])
    total = 0
    broken = []

    while q and total < MAX_PAGES:
        url, depth = q.popleft()
        total += 1
        status = -1
        final_url = url
        text = ""
        try:
            resp = requests.get(url, timeout=TIMEOUT, allow_redirects=True, headers=HEADERS)
            final_url = resp.url
            status = resp.status_code
            text = resp.text
        except Exception:
            pass

        label = classify(url, status)
        entry = {
            "url": url,
            "final": final_url,
            "status": status,
            "broken": label
        }
        results.append(entry)
        if label:
            broken.append({"url": url, "status": status, "final": final_url, "type": label})

        if depth < MAX_DEPTH and status == 200:
            try:
                soup = BeautifulSoup(text, "html.parser")
                for a in soup.find_all("a", href=True):
                    href = a["href"].strip()
                    if href.startswith(("javascript:", "mailto:", "tel:", "#")):
                        continue
                    nxt = urljoin(url, href)
                    p = urlparse(nxt)
                    if p.netloc == BASE_DOMAIN or p.scheme == "":
                        clean = nxt.split("#")[0].split("?")[0]
                        if clean not in visited and total + len(q) < MAX_PAGES:
                            visited.add(clean)
                            q.append((clean, depth + 1))
            except Exception:
                pass

    return total, broken

total_crawled, broken_urls = crawl()
http_200 = sum(1 for r in results if r["status"] == 200)

print(f"TOTAL_CRAWLED={total_crawled}")
print(f"HTTP_200_COUNT={http_200}")
print(f"BROKEN_COUNT={len(broken_urls)}")
print("\nFIRST_10_BROKEN:")
for i, b in enumerate(broken_urls[:10], 1):
    print(f"{i}. URL={b['url']} STATUS={b['status']} TYPE={b['type']}")

report = {
    "total_crawled": total_crawled,
    "http_200": http_200,
    "broken_count": len(broken_urls),
    "broken": broken_urls[:10]
}
json.dump(report, open("/Users/miami2/zion.app/automation/site_integrity_report.json", "w"), indent=2)
print("\nREPORT_WRITTEN")
