"""
Diagnostic crawl: check what happens on ziontechgroup.com
"""
import requests
from urllib.parse import urlparse, urldefrag

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
})

urls_to_check = [
    "https://ziontechgroup.com",
    "http://ziontechgroup.com",
    "https://www.ziontechgroup.com",
    "http://www.ziontechgroup.com",
]

for u in urls_to_check:
    try:
        r = session.get(u, timeout=20, allow_redirects=True)
        print(f"GET {u}")
        print(f"  final: {r.url}")
        print(f"  status: {r.status_code}")
        print(f"  history: {[(h.status_code, h.url) for h in r.history]}")
        print(f"  content-length: {len(r.text)}")
        print(f"  content-type: {r.headers.get('content-type')}")
        print(f"  --- RAW HTML (first 2000 chars) ---")
        print(r.text[:2000])
        print(f"  --- END RAW ---")
        print()
    except Exception as e:
        print(f"GET {u} -> ERROR: {e}")
        print()
