#!/usr/bin/env python3
import subprocess, re, json
from urllib.parse import urljoin, urlparse

BASE = "https://ziontechgroup.com"
PATHS = ["/", "/services/", "/tools/", "/contact/", "/pricing/", "/solutions/", "/blog/", "/about/"]

def curl_get(url):
    cmd = ["curl", "-s", "-L", "--max-time", "20", url]
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        return r.stdout
    except Exception:
        return ""

def extract_links(html, base):
    hrefs = re.findall(r'href=["\'](.*?)["\']', html, re.IGNORECASE)
    links = set()
    for h in hrefs:
        if h.startswith("javascript:") or h.startswith("#"):
            continue
        full = urljoin(base, h)
        links.add(full)
    return links

def probe(url):
    cmd = ["curl", "-s", "-o", "NUL", "-w", "%{http_code}", "--max-time", "20", url]
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        code = r.stdout.strip()
        return int(code) if code and code != "000" else None
    except Exception:
        return None

results = {}
all_links = {}
for p in PATHS:
    url = BASE + p
    html = curl_get(url)
    links = extract_links(html, url)
    all_links[p] = sorted([l for l in links if l.startswith(BASE)])
    results[p] = {"links_found": len(all_links[p])}

broken = []
for p, links in all_links.items():
    for l in links:
        code = probe(l)
        if code is None or code >= 400:
            broken.append({"source": p, "target": l, "status": code})

print(json.dumps({"per_path": results, "broken": broken}, indent=2))
