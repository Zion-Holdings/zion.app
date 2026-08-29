#!/usr/bin/env python3
"""Deep site crawler — find all pages, check status codes, identify broken links."""

import urllib.request
import urllib.error
import urllib.parse
import re
import json
from html.parser import HTMLParser
from collections import deque

BASE_URL = "https://ziontechgroup.com"
MAX_PAGES = 500
TIMEOUT = 10

class LinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            for name, value in attrs:
                if name == "href" and value and not value.startswith('#'):
                    full = urllib.parse.urljoin(BASE_URL, value)
                    if full.startswith(BASE_URL):
                        self.links.append(full)

def fetch(url):
    """Fetch a URL and return status, title, body."""
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (compatible; HermesSiteInspector/1.0)"}
        )
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            code = resp.getcode()
            body = resp.read().decode("utf-8", errors="replace")
            title_m = re.search(r"<title[^>]*>(.*?)</title>", body, re.IGNORECASE|re.DOTALL)
            title = title_m.group(1).strip() if title_m else "(no title)"
            return {"url": url, "status": code, "title": title, "body": body}
    except urllib.error.HTTPError as e:
        return {"url": url, "status": e.code, "title": None, "body": None}
    except Exception as e:
        return {"url": url, "status": None, "title": f"error: {e}", "body": None}

def extract_links(body):
    """Extract all internal links from HTML body."""
    parser = LinkExtractor()
    try:
        parser.feed(body)
    except:
        pass
    seen = set()
    result = []
    for link in parser.links:
        if link not in seen:
            seen.add(link)
            result.append(link)
    return result

def main():
    print(f"🔍 Starting deep crawl of {BASE_URL}...")
    print(f"Max pages: {MAX_PAGES}\n")

    queue = deque([BASE_URL])
    visited = set()
    crawled = []

    while queue and len(visited) < MAX_PAGES:
        url = queue.popleft()
        if url in visited:
            continue
        visited.add(url)
        
        result = fetch(url)
        result["links"] = []
        crawled.append(result)
        
        if result["status"] == 200 and result.get("body"):
            links = extract_links(result["body"])
            result["links"] = links
            for link in links:
                if link not in visited:
                    queue.append(link)
        
        if len(visited) % 50 == 0:
            print(f"  Crawled {len(visited)} pages...")

    print(f"\n{'='*60}")
    print(f"CRAWL COMPLETE: {len(crawled)} pages")
    print(f"{'='*60}")

    working = [r for r in crawled if r['status'] == 200]
    broken_404 = [r for r in crawled if r['status'] == 404]
    broken_3xx = [r for r in crawled if r['status'] and 300 <= r['status'] < 400]
    broken_5xx = [r for r in crawled if r['status'] and r['status'] >= 500]
    broken_other = [r for r in crawled if r['status'] not in (200, 404, None) and r['status'] is not None]
    failed = [r for r in crawled if r['status'] is None]

    print(f"\n📊 SUMMARY:")
    print(f"  Total pages: {len(crawled)}")
    print(f"  ✅ 200 OK: {len(working)}")
    print(f"  ❌ 404 Not Found: {len(broken_404)}")
    print(f"  🔄 3xx Redirects: {len(broken_3xx)}")
    print(f"  💥 5xx Server Error: {len(broken_5xx)}")
    print(f"  ❗ Other errors: {len(broken_other)}")
    print(f"  ⚠️ Fetch failed: {len(failed)}")

    report = {
        "timestamp": __import__('datetime').datetime.now().isoformat(),
        "base_url": BASE_URL,
        "total_pages": len(crawled),
        "working_200": len(working),
        "broken_404": len(broken_404),
        "redirects_3xx": len(broken_3xx),
        "server_error_5xx": len(broken_5xx),
        "other_errors": len(broken_other),
        "fetch_failed": len(failed),
        "all_pages": [{"url": r["url"], "status": r["status"], "title": r["title"]} for r in crawled],
        "broken_404_pages": [
            {"url": r["url"], "status": r["status"], "title": r["title"]}
            for r in broken_404
        ],
    }

    with open('site-deep-crawl.json', 'w') as f:
        json.dump(report, f, indent=2)

    print(f"\n📁 Report saved to: site-deep-crawl.json")
    print(f"\n{'='*60}")
    print("BROKEN 404 PAGES:")
    print(f"{'='*60}")
    for r in broken_404[:80]:
        print(f"  [{r['status']}] {r['url']}")
        if len(broken_404) > 80:
            print(f"  ... and {len(broken_404) - 80} more")
            break

    print(f"\n{'='*60}")
    print("WORKING PAGES (first 50):")
    print(f"{'='*60}")
    for r in working[:50]:
        print(f"  [200] {r['url']} — {r['title']}")

    return report

if __name__ == "__main__":
    main()
