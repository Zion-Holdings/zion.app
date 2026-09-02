"""
Check contact page and try known common paths
"""
import requests
from urllib.parse import urlparse

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
})

test_paths = [
    "https://ziontechgroup.com/",
    "https://ziontechgroup.com/contact/",
    "https://ziontechgroup.com/ai-cybersecurity-platform/",
    "https://ziontechgroup.com/about/",
    "https://ziontechgroup.com/services/",
    "https://ziontechgroup.com/blog/",
    "https://ziontechgroup.com/pricing/",
    "https://ziontechgroup.com/privacy/",
    "https://ziontechgroup.com/terms/",
    "https://ziontechgroup.com/hello/",
    "https://ziontechgroup.com/start/",
    "https://ziontechgroup.com/demo/",
    "https://ziontechgroup.com/platform/",
    "https://ziontechgroup.com/security/",
    "https://ziontechgroup.com/threats/",
    "https://ziontechgroup.com/compliance/",
    "https://ziontechgroup.com/incidents/",
    "https://ziontechgroup.com/endpoint/",
    "https://ziontechgroup.com/cloud/",
]

for u in test_paths:
    try:
        r = session.get(u, timeout=15, allow_redirects=True)
        print(f"[{r.status_code}] {u}  ->  {r.url}  ({len(r.text)} bytes)")
    except Exception as e:
        print(f"[ERR] {u}  ->  {e}")
