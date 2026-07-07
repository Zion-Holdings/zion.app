"""Site integrity check for ziontechgroup.com

Crawls internal links, reports total crawled, HTTP 200 count,
broken count, first 10 broken URLs with classification.
"""

from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup

TARGET = "https://ziontechgroup.com"
MAX_PAGES = 200
TIMEOUT = 15

visited = set()
broken = []  # list of dicts with url, status, classification, location
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; site-integrity-bot/1.0)"})


def same_domain(base, candidate):
    bp = urlparse(base)
    cp = urlparse(candidate)
    return bp.netloc == cp.netloc or (bp.netloc == "" and cp.netloc == "")


def classify_issue(url, status_or_exc, from_page=None):
    if isinstance(status_or_exc, str) and status_or_exc.lower() == "timeout":
        return "timeout / no response"
    if isinstance(status_or_exc, str) and status_or_exc.lower() == "connection error":
        return "connection error"
    if isinstance(status_or_exc, str) and status_or_exc.lower() == "ssl error":
        return "TLS/SSL error"
    code = None
    if isinstance(status_or_exc, int):
        code = status_or_exc
    elif isinstance(status_or_exc, requests.Response):
        code = status_or_exc.status_code
    if code is None:
        return "other error"
    if 300 <= code < 400:
        return "stale redirect"
    if code == 404:
        return "missing page"
    if code == 403:
        return "forbidden / access error"
    if code >= 400 and code < 500:
        return "client error"
    if code >= 500:
        return "server error"
    return "other error"


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
        clean = parsed._replace(fragment="").geturl()
        links.add(clean)
    return links


def crawl():
    queue = [TARGET]
    total = 0
    ok_count = 0

    while queue and total < MAX_PAGES:
        url = queue.pop(0)
        if url in visited:
            continue
        visited.add(url)
        total += 1

        try:
            resp = session.get(url, allow_redirects=False, timeout=TIMEOUT)
            code = resp.status_code
            classification = classify_issue(url, code)
            if code != 200:
                extra = None
                if 300 <= code < 400:
                    extra = "redirects to " + resp.headers.get("Location", "")
                broken.append({
                    "url": url,
                    "code": code,
                    "classification": classification,
                    "found_on": extra,
                })
            else:
                ok_count += 1
                try:
                    for link in pull_links(resp.text, url):
                        if link not in visited and link not in queue:
                            if total + len(queue) < MAX_PAGES:
                                queue.append(link)
                except Exception:
                    pass
        except requests.exceptions.SSLError:
            broken.append({
                "url": url,
                "code": None,
                "classification": classify_issue(url, "ssl error"),
                "found_on": None,
            })
        except requests.exceptions.Timeout:
            broken.append({
                "url": url,
                "code": None,
                "classification": classify_issue(url, "timeout"),
                "found_on": None,
            })
        except requests.exceptions.RequestException as e:
            broken.append({
                "url": url,
                "code": None,
                "classification": classify_issue(url, "connection error"),
                "found_on": str(e)[:120],
            })

    return total, ok_count


def main():
    total, ok_count = crawl()
    broken_count = len(broken)
    lines = []
    lines.append(f"BASE URL: {TARGET}")
    lines.append(f"TOTAL CRAWLED: {total}")
    lines.append(f"HTTP 200 COUNT: {ok_count}")
    lines.append(f"BROKEN COUNT: {broken_count}")
    if broken_count:
        lines.append("FIRST 10 BROKEN URLs:")
        for entry in broken[:10]:
            c = entry["classification"]
            code = entry["code"] if entry["code"] else "n/a"
            loc = f" [{entry['found_on']}]" if entry.get("found_on") else ""
            lines.append(f"  [{code}] {entry['url']} — {c}{loc}")
    else:
        lines.append("BROKEN URLs: none")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
