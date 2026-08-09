from __future__ import annotations

import re
import sys
import requests

primary_urls = [
  "https://ziontechgroup.com/pricing/",
  "https://ziontechgroup.com/contact/",
  "https://ziontechgroup.com/about/",
  "https://ziontechgroup.com/services/",
  "https://ziontechgroup.com/services/ai-agents-autonomous/",
  "https://ziontechgroup.com/services/cloud-cost-optimization-service/",
  "https://ziontechgroup.com/blog/",
  "https://ziontechgroup.com/partners/",
  "https://ziontechgroup.com/careers/",
  "https://ziontechgroup.com/",
]

secondary_urls = [
]

session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; integrity-check/1.0)", "Accept": "text/html,application/xhtml+xml"})
session.max_redirects = 5


def probe(urls, label):
    print(f"\n## {label}")
    for u in urls:
        try:
            r = session.get(u, timeout=20, allow_redirects=True)
            text = r.text if r.status_code == 200 else ''
            title = ''
            if text:
                m = re.search(r'<title>(.*?)</title>', text, re.IGNORECASE|re.DOTALL)
                if m:
                    title = ' '.join(m.group(1).split())
            canonical = ''
            if text:
                cm = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']', text, re.IGNORECASE)
                if cm:
                    canonical = cm.group(1)
            print(f"{r.status_code}\t{r.url}\t{u}\ttitle={title}\tcanonical={canonical}")
        except Exception as e:
            print(f"ERR\t{u}\t{e}")

probe(primary_urls, "PRIMARY")
probe(secondary_urls, "SECONDARY")
