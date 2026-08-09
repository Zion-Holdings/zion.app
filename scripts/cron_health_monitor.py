#!/usr/bin/env python3
"""Lightweight site health monitor for ziontechgroup.com."""

import json
import os
import re
import sys
from datetime import datetime, timezone
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse

import urllib.request
import urllib.error

BASE = "https://ziontechgroup.com"
SEED_PATHS = ["/", "/services/", "/tools/", "/contact/"]
SITEMAP_PATH = "/sitemap.xml"
MAX_PAGES = 250
USER_AGENT = "Mozilla/5.0 (compatible; HealthMonitor/1.0)"

REPORT_PATH = os.path.join(os.path.dirname(__file__), "..", "outreach_monitor", "processed", "site_health_report.jsonl")


class LinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() == "a":
            for k, v in attrs:
                if k.lower() == "href" and v:
                    self.links.append(v)


def fetch(path):
    url = urljoin(BASE, path)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            code = r.getcode()
            ctype = r.headers.get("Content-Type", "")
            body = r.read().decode("utf-8", errors="ignore")[:500000]
            return code, ctype, body, url
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Content-Type", ""), "", url
    except Exception as e:
        return 0, "", str(e), url


def normalize(u):
    p = urlparse(u)
    if p.scheme not in ("http", "https"):
        return None
    if p.netloc != urlparse(BASE).netloc:
        return None
    path = p.path.rstrip("/") or "/"
    if not path.endswith("/") and not any(path.endswith(ext) for ext in (
        ".html", ".htm", ".xml", ".json", ".txt", ".ico", ".css", ".js", ".png", ".jpg", ".svg", ".webp", ".woff", ".woff2"
    )):
        path += "/"
    return f"{p.scheme}://{p.netloc}{path}"


def extract_links(body, base_url):
    parser = LinkExtractor()
    try:
        parser.feed(body)
    except Exception:
        pass
    out = set()
    for href in parser.links:
        full = urljoin(base_url, href)
        n = normalize(full)
        if n:
            out.add(n)
    return out


def extract_sitemap_urls(body):
    urls = set()
    # Try XML sitemap first
    for m in re.finditer(r"<loc>(.*?)</loc>", body, re.IGNORECASE):
        u = m.group(1).strip()
        n = normalize(u)
        if n:
            urls.add(n)
    if urls:
        return urls
    # Malformed sitemap fallback: space-separated URL+date lines
    for line in body.splitlines():
        line = line.strip()
        if not line:
            continue
        m = re.match(r"(https?://\S+)", line)
        if m:
            n = normalize(m.group(1))
            if n:
                urls.add(n)
    return urls


def probe(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.getcode(), r.headers.get("Content-Type", ""), ""
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Content-Type", ""), str(e)
    except Exception as e:
        return 0, "", str(e)


def main():
    seen = set()
    queue = []
    errors = []
    ok_count = 0
    err_count = 0

    # Seed pages
    for path in SEED_PATHS:
        code, ctype, body, url = fetch(path)
        n = normalize(url)
        if n and n not in seen:
            seen.add(n)
            if code and code < 400:
                ok_count += 1
            else:
                err_count += 1
                errors.append({"url": n, "code": code, "type": ctype, "error": body[:200] if not code else ""})
        if body and "text/html" in ctype:
            for link in extract_links(body, url):
                if link not in seen:
                    queue.append(link)
        if len(seen) >= MAX_PAGES:
            break

    # Sitemap
    code, ctype, body, url = fetch(SITEMAP_PATH)
    n = normalize(url)
    if n and n not in seen:
        seen.add(n)
        if code and code < 400:
            ok_count += 1
        else:
            err_count += 1
            errors.append({"url": n, "code": code, "type": ctype, "error": body[:200] if not code else ""})
    if body:
        for u in extract_sitemap_urls(body):
            if u not in seen:
                queue.append(u)

    # Probe queue
    while queue and len(seen) < MAX_PAGES:
        url = queue.pop(0)
        if url in seen:
            continue
        seen.add(url)
        code, ctype, err = probe(url)
        if code and code < 400:
            ok_count += 1
        else:
            err_count += 1
            errors.append({"url": url, "code": code, "type": ctype, "error": err[:200]})

    ts = datetime.now(timezone.utc).isoformat()
    summary = {
        "timestamp": ts,
        "ok": ok_count,
        "errors": err_count,
        "error_urls": [e["url"] for e in errors],
        "sample_errors": errors[:50],
        "max_pages": MAX_PAGES,
        "total_seen": len(seen),
        "status": "DEGRADED" if err_count else "HEALTHY",
    }

    os.makedirs(os.path.dirname(REPORT_PATH), exist_ok=True)
    with open(REPORT_PATH, "a", encoding="utf-8") as f:
        f.write(json.dumps(summary, ensure_ascii=False) + "\n")

    print(json.dumps(summary, ensure_ascii=False))


if __name__ == "__main__":
    main()
