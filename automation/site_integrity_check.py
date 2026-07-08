from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup

TARGET = "https://ziontechgroup.com"
MAX_PAGES = 200
TIMEOUT = 15

visited = set()
broken = []
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; site-integrity-bot/1.0)"})


def same_domain(base, candidate):
    bp = urlparse(base)
    cp = urlparse(candidate)
    return bp.netloc == cp.netloc or (bp.netloc == "" and cp.netloc == "")


def classify_issue(url, status_or_exc):
    s = status_or_exc
    if isinstance(s, str) and s.lower() == "timeout":
        return "timeout / no response"
    if isinstance(s, str) and s.lower() == "connection error":
        return "connection error"
    if isinstance(s, str) and s.lower() == "ssl error":
        return "TLS/SSL error"
    code = s.status_code if hasattr(s, "status_code") else s
    if code is None:
        return "other error"
    if 300 <= code < 400:
        return "stale redirect"
    if code == 404:
        return "missing page"
    if code == 403:
        return "forbidden / access error"
    if 400 <= code < 500:
        return "client error"
    if 500 <= code < 600:
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
        links.add(parsed._replace(fragment="").geturl())
    return links


def crawles():
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
            extra = None
            if code != 200:
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
    total, ok = crawles()
    broken_count = len(broken)
    print(f"BASE URL: {TARGET}")
    print(f"TOTAL CRAWLED: {total}")
    print(f"HTTP 200 COUNT: {ok}")
    print(f"BROKEN COUNT: {broken_count}")
    if broken_count:
        print("FIRST 10 BROKEN URLs:")
        for entry in broken[:10]:
            code_display = entry["code"] if entry["code"] is not None else "n/a"
            note = f" [{entry['found_on']}]" if entry.get("found_on") else ""
            print(f"  [{code_display}] {entry['url']} — {entry['classification']}{note}")
    else:
        print("BROKEN URLs: none")


if __name__ == "__main__":
    main()
