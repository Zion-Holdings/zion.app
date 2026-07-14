from __future__ import annotations

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
  "https://ziontechgroup.com/search/",
  "https://ziontechgroup.com/academy/",
  "https://ziontechgroup.com/faq/",
  "https://ziontechgroup.com/terms/",
  "https://ziontechgroup.com/privacy/",
  "https://ziontechgroup.com/cookies/",
  "https://ziontechgroup.com/sla/",
  "https://ziontechgroup.com/services/ai-computer-vision-quality-inspection/",
  "https://ziontechgroup.com/services/managed-observability-247/",
  "https://ziontechgroup.com/ai/ai-readiness-assessment/",
  "https://ziontechgroup.com/services/ai-insurance-claims-automation/",
]

session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; integrity-check/1.0)", "Accept": "text/html,application/xhtml+xml"})
session.max_redirects = 5


def probe(urls, label):
    print(f"\n## {label}")
    for u in urls:
        try:
            r = session.get(u, timeout=20, allow_redirects=True)
            print(f"{r.status_code}\t{r.url}\t{u}")
        except Exception as e:
            print(f"ERR\t{u}\t{e}")

probe(primary_urls, "PRIMARY")
probe(secondary_urls, "SECONDARY")
