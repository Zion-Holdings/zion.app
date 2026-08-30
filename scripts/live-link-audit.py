#!/usr/bin/env python3
"""Termux-native live internal link audit for ziontechgroup.com."""
import re, sys, time, json, urllib.request, urllib.error
from urllib.parse import urljoin, urlparse, urlunparse

BASE = "https://ziontechgroup.com"
UA = "Mozilla/5.0 (compatible; LiveLinkAudit/1.0)"
TIMEOUT = 15
DELAY = 0.05

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            return r.status, r.read(1024*1024).decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return 0, str(e)

def get_sitemap():
    status, body = fetch(BASE + "/sitemap.xml")
    if status != 200:
        return []
    return re.findall(r"<loc>(.*?)</loc>", body)

def extract_links(html, base_url):
    hrefs = re.findall(r'href=["\'](.*?)["\']', html, re.I)
    srcs = re.findall(r'src=["\'](.*?)["\']', html, re.I)
    links = set()
    for h in hrefs + srcs:
        if h.startswith(("http://", "https://", "mailto:", "tel:", "#", "data:", "javascript:")):
            continue
        if h.endswith((".css", ".js", ".svg", ".png", ".jpg", ".jpeg", ".gif", ".ico", ".woff", ".woff2", ".ttf", ".eot", ".json", ".xml")):
            continue
        full = urljoin(base_url, h)
        parsed = urlparse(full)
        if parsed.netloc and parsed.netloc != urlparse(BASE).netloc:
            continue
        clean = parsed._replace(fragment="", query="").geturl()
        links.add(clean)
    return links

def normalize(url):
    p = urlparse(url)
    return urlunparse(p._replace(fragment="", query="")).rstrip("/") + "/"

def main():
    print(f"=== LIVE LINK AUDIT: {BASE} ===")
    urls = get_sitemap()
    if not urls:
        print("FAIL: empty sitemap")
        return 1
    print(f"Sitemap URLs: {len(urls)}")

    checked = set()
    broken = []
    errors = []

    for i, page_url in enumerate(urls):
        if i % 100 == 0:
            print(f"  [{i}/{len(urls)}] {page_url}")
        status, html = fetch(page_url)
        if status != 200:
            broken.append((page_url, f"page_itself_{status}"))
            continue
        links = extract_links(html, page_url)
        for link in links:
            if link in checked:
                continue
            checked.add(link)
            code, _ = fetch(link)
            if code not in (200, 301, 302):
                if code == 404:
                    broken.append((page_url, link))
                elif code == 0:
                    errors.append((page_url, link, "timeout/network"))
                else:
                    broken.append((page_url, f"{link} ({code})"))
        time.sleep(DELAY)

    print(f"\nPages crawled: {len(urls)}")
    print(f"Internal links probed: {len(checked)}")
    print(f"Broken internal links: {len(broken)}")
    print(f"Network errors: {len(errors)}")

    if broken:
        print("\n=== BROKEN INTERNAL LINKS ===")
        seen = set()
        for src, dst in broken:
            key = (src, dst)
            if key in seen:
                continue
            seen.add(key)
            print(f"  FROM: {src}")
            print(f"    -> {dst}")
            if len(broken) > 50 and len(seen) >= 50:
                print(f"  ... ({len(broken) - 50} more)")
                break

    if errors:
        print("\n=== NETWORK ERRORS ===")
        for src, dst, reason in errors[:20]:
            print(f"  {src} -> {dst} : {reason}")

    verdict = "SITE_HEALTH_OK" if not broken and not errors else "SITE_HEALTH_FAIL"
    print(f"\n{verdict}")
    return 0 if not broken and not errors else 1

if __name__ == "__main__":
    sys.exit(main())
