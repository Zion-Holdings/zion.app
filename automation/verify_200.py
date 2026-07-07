from __future__ import annotations
import sys
import requests

urls = [
"https://ziontechgroup.com/pricing/",
"https://ziontechgroup.com/contact/",
"https://ziontechgroup.com/about/",
"https://ziontechgroup.com/services/ai-computer-vision-quality-inspection/",
"https://ziontechgroup.com/services/managed-observability-247/",
"https://ziontechgroup.com/blog/cyber-incident-response-retainer-ready-before-breach/",
"https://ziontechgroup.com/academy/",
"https://ziontechgroup.com/search/",
"https://ziontechgroup.com/services/cloud-cost-optimization-service/",
"https://ziontechgroup.com/",
]
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; integrity-check/1.0)", "Accept": "text/html,application/xhtml+xml"})
session.max_redirects = 5
for u in urls:
    try:
        r = session.get(u, timeout=20, allow_redirects=True)
        print(f"{r.status_code}\t{r.url}\t{u}")
    except Exception as e:
        print(f"ERR\t{u}\t{e}")
