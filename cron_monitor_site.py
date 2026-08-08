#!/usr/bin/env python3
"""Cron monitor: crawl ziontechgroup.com and record health findings."""
import json, os, re, subprocess, sys
from datetime import datetime, timezone

BASE = "https://ziontechgroup.com"
SEED_PATHS = ["/", "/services/", "/tools/", "/contact/"]
MAX_PAGES = 250
REPORT_PATH = r"C:\Users\Zion\tmp\zion-clone-test2\outreach_monitor\processed\site_health_report.jsonl"

os.makedirs(os.path.dirname(REPORT_PATH), exist_ok=True)

def curl_probe(url, timeout=15):
    """Return (status_code, final_url) using curl on Windows."""
    try:
        r = subprocess.run(
            ["curl", "-sL", "-o", "NUL", "-w", "%{http_code}|%{url_effective}", "--max-time", str(timeout), url],
            capture_output=True, text=True, timeout=timeout + 5
        )
        out = r.stdout.strip()
        if "|" in out:
            code_str, final = out.split("|", 1)
            try:
                code = int(code_str)
            except ValueError:
                code = 0
            return code, final
        return 0, url
    except Exception as e:
        return 0, url

def curl_get(url, timeout=15):
    """Return body text using curl."""
    try:
        r = subprocess.run(
            ["curl", "-sL", "--max-time", str(timeout), "-H", "User-Agent: Mozilla/5.0", url],
            capture_output=True, text=True, timeout=timeout + 5
        )
        return r.stdout
    except Exception:
        return ""

def extract_sitemap_urls(limit=MAX_PAGES):
    """Extract URLs from sitemap.xml."""
    body = curl_get(BASE + "/sitemap.xml")
    urls = []
    if body:
        # Try XML loc tags
        for m in re.finditer(r'<loc[^>]*>(.*?)</loc>', body, re.I):
            u = m.group(1).strip()
            if u.startswith("http"):
                urls.append(u)
        # Malformed fallback: space-separated tokens with dates
        if not urls:
            for m in re.finditer(r'(https?://[^\s]+)', body):
                u = m.group(1).strip()
                if "ziontechgroup.com" in u:
                    urls.append(u)
    # Deduplicate while preserving order
    seen = set()
    deduped = []
    for u in urls:
        if u not in seen:
            seen.add(u)
            deduped.append(u)
    return deduped[:limit]

def extract_links_from_html(html, base_url=BASE):
    """Extract internal http(s) links from HTML."""
    urls = []
    for m in re.finditer(r'href=["\'](.*?)["\']', html, re.I):
        href = m.group(1).strip()
        if href.startswith("http"):
            if "ziontechgroup.com" in href:
                urls.append(href)
        elif href.startswith("/"):
            urls.append(base_url + href)
    seen = set()
    deduped = []
    for u in urls:
        if u not in seen:
            seen.add(u)
            deduped.append(u)
    return deduped

def main():
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    errors = []
    ok = 0
    probed = 0

    # Seed probes
    for path in SEED_PATHS:
        url = BASE + path
        code, final = curl_probe(url)
        probed += 1
        if code >= 400:
            errors.append({"url": url, "code": code, "kind": "seed"})
        elif code == 0:
            errors.append({"url": url, "code": 0, "kind": "timeout"})
        else:
            ok += 1

    # Sitemap probe
    sitemap_code, _ = curl_probe(BASE + "/sitemap.xml")
    probed += 1
    if sitemap_code >= 400:
        errors.append({"url": BASE + "/sitemap.xml", "code": sitemap_code, "kind": "sitemap"})
    else:
        ok += 1

    sitemap_urls = []
    if sitemap_code < 400:
        sitemap_urls = extract_sitemap_urls()
        # Probe a sample of sitemap URLs (cap to avoid long runs)
        sample = sitemap_urls[: min(len(sitemap_urls), 100)]
        for url in sample:
            code, final = curl_probe(url)
            probed += 1
            if code >= 400:
                errors.append({"url": url, "code": code, "kind": "sitemap_page"})
            elif code == 0:
                errors.append({"url": url, "code": 0, "kind": "timeout"})
            else:
                ok += 1

    # Hub page adjacency crawl (from homepage)
    home_body = curl_get(BASE + "/")
    if home_body:
        links = extract_links_from_html(home_body)
        # Probe a small sample of internal links from homepage
        sample_links = links[: min(len(links), 50)]
        for url in sample_links:
            code, final = curl_probe(url)
            probed += 1
            if code >= 400:
                errors.append({"url": url, "code": code, "kind": "hub_link"})
            elif code == 0:
                errors.append({"url": url, "code": 0, "kind": "timeout"})
            else:
                ok += 1

    summary = {
        "timestamp": now,
        "probed": probed,
        "ok": ok,
        "errors": len(errors),
        "sitemap_urls_found": len(sitemap_urls),
        "error_samples": errors[:20],
        "status": "HEALTHY" if not errors else "DEGRADED"
    }

    line = json.dumps(summary)
    # Append cleanly
    with open(REPORT_PATH, "a", encoding="utf-8") as f:
        f.write(line + "\n")

    # Print concise report
    print(json.dumps(summary, indent=2))

if __name__ == "__main__":
    main()
