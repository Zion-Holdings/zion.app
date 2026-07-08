from urllib.parse import urljoin, urlparse
import requests
from collections import deque
from bs4 import BeautifulSoup

TARGET = "https://ziontechgroup.com"
MAX_PAGES = 500
TIMEOUT = 20

visited = set()
broken = []
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; site-integrity-bot/1.0)"})

def same_domain(base, candidate):
    bp = urlparse(base)
    cp = urlparse(candidate)
    return bp.netloc == cp.netloc or (bp.netloc == "" and cp.netloc == "")

def classify_issue(code, location=None):
    if code is None:
        return "external reference error"
    if 300 <= code < 400:
        return "stale redirect"
    if code == 404:
        return "missing page"
    if 400 <= code < 500:
        return "external reference error"
    if 500 <= code < 600:
        return "external reference error"
    if code in {403}:
        return "external reference error"
    return "external reference error"

def pull_links(html, base):
    soup = BeautifulSoup(html, "html.parser")
    links = set()
    for tag in soup.find_all("a", href=True):
        href = tag.get("href").strip()
        if not href:
            continue
        joined = urljoin(base, href)
        parsed = urlparse(joined)
        if parsed.scheme not in {"http", "https"}:
            continue
        if not same_domain(TARGET, joined):
            continue
        links.add(parsed._replace(fragment="").geturl())
    return links

def crawl():
    queue = deque([TARGET])
    total = 0
    ok_count = 0

    while queue and total < MAX_PAGES:
        url = queue.popleft()
        if url in visited:
            continue
        visited.add(url)
        total += 1

        try:
            resp = session.get(url, allow_redirects=False, timeout=TIMEOUT)
            code = resp.status_code
            if code == 200:
                ok_count += 1
                try:
                    for link in pull_links(resp.text, url):
                        if link not in visited and link not in queue:
                            if total + len(queue) < MAX_PAGES:
                                queue.append(link)
                except Exception:
                    pass
            else:
                broken.append({
                    "url": url,
                    "code": code,
                    "classification": classify_issue(code, resp.headers.get("Location")),
                    "location": resp.headers.get("Location"),
                })
        except requests.exceptions.SSLError:
            broken.append({
                "url": url,
                "code": None,
                "classification": "external reference error",
                "location": None,
            })
        except requests.exceptions.Timeout:
            broken.append({
                "url": url,
                "code": None,
                "classification": "external reference error",
                "location": None,
            })
        except requests.exceptions.RequestException:
            broken.append({
                "url": url,
                "code": None,
                "classification": "external reference error",
                "location": None,
            })

    return total, ok_count

def main():
    total, ok = crawl()
    broken_count = len(broken)
    print(f"BASE URL: {TARGET}")
    print(f"TOTAL CRAWLED: {total}")
    print(f"HTTP 200 COUNT: {ok}")
    print(f"BROKEN COUNT: {broken_count}")
    if broken_count:
        seen = set()
        shown = 0
        print("FIRST 10 BROKEN URLs:")
        for entry in broken:
            if entry["url"] in seen:
                continue
            seen.add(entry["url"])
            code_display = entry["code"] if entry["code"] is not None else "n/a"
            loc = f" redirect -> {entry['location']}" if entry.get("location") else ""
            print(f"  [{code_display}] {entry['url']} — {entry['classification']}{loc}")
            shown += 1
            if shown >= 10:
                break
    else:
        print("BROKEN URLs: none")

if __name__ == "__main__":
    main()
