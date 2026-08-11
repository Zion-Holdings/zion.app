#!/usr/bin/env python3
"""Lightweight cron health monitor for ziontechgroup.com"""
import urllib.request, urllib.error, json, os, re, ssl
from datetime import datetime, timezone
from html.parser import HTMLParser

BASE = "https://ziontechgroup.com"
REPORT_PATH = r"C:/Users/Zion/tmp/zion-clone-test2/outreach_monitor/processed/site_health_report.jsonl"
MAX_PAGES = 250

# Disable SSL verification to avoid certificate issues in some environments
CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE

HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; HealthMonitor/1.0)"}

class LinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = dict(attrs).get("href", "")
            if href.startswith("/"):
                self.links.append(href)

def probe_url(url):
    """Return (status_code, error_detail)"""
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15, context=CTX) as r:
            return r.status, None
    except urllib.error.HTTPError as e:
        return e.code, str(e.reason)
    except Exception as e:
        return None, str(e)

def normalize_url(url):
    """Strip /index.html and /index.html/ but preserve non-HTML paths."""
    if url.endswith("/index.html"):
        url = url[:-11]
    elif url.endswith("/index.html/"):
        url = url[:-12]
    return url

def extract_urls_from_sitemap():
    """Try to fetch sitemap.xml and extract <loc> URLs."""
    urls = []
    try:
        req = urllib.request.Request(f"{BASE}/sitemap.xml", headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20, context=CTX) as r:
            content = r.read().decode("utf-8", errors="ignore")
        # Basic XML loc extraction
        if "<urlset" in content and "<loc>" in content:
            raw = re.findall(r"<loc>([^<]+)</loc>", content)
            for u in raw:
                u = normalize_url(u)
                if u.startswith(BASE):
                    u = u[len(BASE):]
                urls.append(u)
    except Exception as e:
        print(f"Sitemap fetch error: {e}")
    return urls

def extract_links_from_page(path):
    """Fetch a page and extract internal href links."""
    links = []
    try:
        req = urllib.request.Request(f"{BASE}{path}", headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20, context=CTX) as r:
            html = r.read().decode("utf-8", errors="ignore")
        parser = LinkExtractor()
        parser.feed(html)
        for href in parser.links:
            href = normalize_url(href)
            if href.startswith("/") and not href.startswith("//"):
                links.append(href)
    except Exception as e:
        print(f"Link extract error for {path}: {e}")
    return links

def main():
    os.makedirs(os.path.dirname(REPORT_PATH), exist_ok=True)
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    seen = set()
    urls = []

    # 1. Sitemap URLs
    sitemap_urls = extract_urls_from_sitemap()
    print(f"Sitemap URLs: {len(sitemap_urls)}")
    for u in sitemap_urls:
        u = u.strip()
        if u and u not in seen:
            seen.add(u)
            urls.append(u)

    # 2. Seed page adjacency
    seed_pages = ["/", "/services", "/tools", "/contact"]
    for path in seed_pages:
        links = extract_links_from_page(path)
        print(f"Links from {path}: {len(links)}")
        for u in links:
            u = u.strip()
            if u and u not in seen:
                seen.add(u)
                urls.append(u)
        # Always include the seed page itself
        if path not in seen:
            seen.add(path)
            urls.append(path)

    # Cap
    urls = urls[:MAX_PAGES]
    total = len(urls)
    print(f"Total URLs to probe: {total}")

    broken = []
    ok = 0
    for u in urls:
        code, err = probe_url(u)
        if code and code >= 400:
            broken.append({"url": u, "status": code, "error": err})
        else:
            ok += 1

    status = "HEALTHY" if len(broken) == 0 else "DEGRADED"
    summary = {
        "timestamp": timestamp,
        "status": status,
        "total_checked": total,
        "ok": ok,
        "broken_count": len(broken),
        "broken_links": broken,
        "source": "cron_health_monitor.py"
    }

    line = json.dumps(summary, ensure_ascii=False)
    with open(REPORT_PATH, "a", encoding="utf-8") as f:
        f.write(line + "\n")

    print(f"Status: {status} | OK: {ok} | Broken: {len(broken)} | Total: {total}")
    if broken:
        for b in broken[:10]:
            print(f"  BROKEN: {b['url']} -> {b['status']}")
    return summary

if __name__ == "__main__":
    main()
