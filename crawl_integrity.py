"""
Live site integrity check for https://ziontechgroup.com
Crawl: parse sitemap.xml for the page list, HEAD each URL to check status.
Report: total crawled, HTTP 200 count, broken count, first 10 broken
URLs with classification: stale redirect, missing page, external reference error.
"""
import sys
import re
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests

BASE_URL = "https://ziontechgroup.com"
REQUEST_TIMEOUT = 15
MAX_WORKERS = 12


def classify(status_code: int, error: str | None) -> str:
    if 300 <= status_code < 400:
        return "stale redirect"
    if status_code in (404, 410, 403):
        return "missing page"
    if 400 <= status_code < 500:
        return "missing page"
    if error:
        return "external reference error"
    return "missing page"


def check_url(url: str) -> tuple[str, int, str, str | None]:
    try:
        r = requests.head(url, timeout=REQUEST_TIMEOUT, allow_redirects=True,
                          headers={
                              "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                                            "AppleWebKit/537.36 Chrome/120.0 Safari/537.36",
                              "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                          })
        return url, r.status_code, r.url, None
    except requests.exceptions.ConnectionError:
        return url, 0, url, "ConnectionError"
    except requests.exceptions.Timeout:
        return url, 0, url, "Timeout"
    except requests.exceptions.TooManyRedirects:
        return url, 0, url, "TooManyRedirects"
    except requests.exceptions.RequestException as e:
        return url, 0, url, str(e)[:80]


def parse_sitemap(url: str) -> list[str]:
    urls = []
    try:
        r = requests.get(url, timeout=30, headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                          "AppleWebKit/537.36 Chrome/120.0 Safari/537.36",
        })
        if r.status_code != 200:
            return urls
        text = r.text
        # sitemap index?
        if "<sitemap>" in text or "<sitemap " in text:
            for m in re.finditer(r"<loc>(.*?)</loc>", text, re.DOTALL):
                sub = m.group(1).strip()
                if sub:
                    urls.extend(parse_sitemap(sub))
            return urls
        for m in re.finditer(r"<loc>(.*?)</loc>", text, re.DOTALL):
            loc = m.group(1).strip()
            if loc:
                urls.append(loc)
    except Exception as e:
        print(f"Warning: sitemap parse failed: {e}", file=sys.stderr)
    return urls


def main():
    print("Parsing sitemap.xml ...", flush=True)
    sitemap_urls = parse_sitemap(urljoin(BASE_URL, "/sitemap.xml"))
    print(f"Sitemap: {len(sitemap_urls)} URLs", flush=True)

    # Deduplicate
    seen = set()
    unique = []
    for u in sitemap_urls:
        n = urlparse(u)._replace(fragment="").geturl()
        if n not in seen:
            seen.add(n)
            unique.append(n)
    print(f"Unique: {len(unique)} URLs", flush=True)

    total = 0
    ok = 0
    broken = 0
    results = []

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        futures = {ex.submit(check_url, u): u for u in unique}
        for f in as_completed(futures):
            url, status, final, error = f.result()
            total += 1
            if error is None and 200 <= status < 300:
                ok += 1
            else:
                broken += 1
                cls = classify(status, error)
                results.append((url, status, final, cls, error))
            if total % 500 == 0:
                print(f"  Checked {total}/{len(unique)} ...", flush=True)

    results.sort(key=lambda r: r[0])

    print("\n" + "=" * 70)
    print("SITE INTEGRITY CHECK — https://ziontechgroup.com")
    print("=" * 70)
    print(f"Total crawled:   {total}")
    print(f"HTTP 200 OK:     {ok}")
    print(f"Broken:          {broken}")
    print("-" * 70)
    if broken == 0:
        print("No broken URLs found.")
    else:
        print(f"FIRST {min(10, len(results))} BROKEN URLS:")
        print("-" * 70)
        for i, (url, status, final, cls, error) in enumerate(results[:10], 1):
            s = str(status) if status else "CONN_ERR"
            print(f"{i:>2}. [{cls.upper()}] ({s})")
            print(f"    URL:      {url}")
            if final and final != url:
                print(f"    Redirected to: {final}")
            if error:
                print(f"    Error:    {error}")
            print()
        if len(results) > 10:
            print(f"... and {len(results) - 10} more broken URLs (omitted).")

        print("-" * 70)
        print("BREAKDOWN BY CLASSIFICATION:")
        from collections import Counter
        counts = Counter(r[3] for r in results)
        for cls, cnt in counts.most_common():
            print(f"  {cls:<25} {cnt}")


if __name__ == "__main__":
    main()
