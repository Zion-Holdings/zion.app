#!/usr/bin/env python3
import sys
import time
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests

SITE = "https://ziontechgroup.com"
SITEMAP_URL = f"{SITE}/sitemap.xml"
MAX_WORKERS = 20
TIMEOUT = 15
REPORT_PATH = Path("/data/data/com.termux/files/home/ztg/repo/automation/reports/termux_link_audit_latest.txt")


def fetch_sitemap():
    try:
        r = requests.get(SITEMAP_URL, timeout=TIMEOUT, headers={"User-Agent": "Mozilla/5.0"})
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"ERROR fetching sitemap: {e}", file=sys.stderr)
        return None


def extract_urls(sitemap_text):
    urls = []
    try:
        root = ET.fromstring(sitemap_text)
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        for url in root.findall("sm:url/sm:loc", ns):
            urls.append(url.text.strip())
        if not urls:
            for loc in root.iter("loc"):
                txt = (loc.text or "").strip()
                if txt.startswith("http"):
                    urls.append(txt)
    except Exception as e:
        print(f"ERROR parsing sitemap: {e}", file=sys.stderr)
    return sorted(set(urls))


def probe_url(url):
    try:
        r = requests.head(url, timeout=TIMEOUT, allow_redirects=True, headers={"User-Agent": "Mozilla/5.0"})
        if r.status_code >= 400:
            r = requests.get(url, timeout=TIMEOUT, allow_redirects=True, headers={"User-Agent": "Mozilla/5.0"}, stream=True)
            r.close()
        return url, r.status_code, None
    except Exception as e:
        return url, None, repr(e)


def main():
    print("Fetching sitemap...", file=sys.stderr)
    sitemap_text = fetch_sitemap()
    if not sitemap_text:
        print("Failed to fetch sitemap. Aborting.", file=sys.stderr)
        sys.exit(1)

    urls = extract_urls(sitemap_text)
    if not urls:
        print("No URLs found in sitemap. Aborting.", file=sys.stderr)
        sys.exit(1)

    print(f"Auditing {len(urls)} URLs from sitemap...", file=sys.stderr)
    failures = []
    checked = 0
    start = time.time()

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futures = {pool.submit(probe_url, u): u for u in urls}
        for fut in as_completed(futures):
            url, status, error = fut.result()
            checked += 1
            if status is None or status >= 400:
                failures.append({"url": url, "status": status, "error": error})

    elapsed = time.time() - start
    print(f"Checked {checked} URLs in {elapsed:.1f}s", file=sys.stderr)

    if not failures:
        print("OK")
        REPORT_PATH.write_text("OK\n", encoding="utf-8")
        sys.exit(0)

    lines = ["FAILURES:", f"Checked: {checked} | Failures: {len(failures)}", ""]
    for f in failures:
        s = f.get("status") or "ERR"
        e = f.get("error") or ""
        lines.append(f"{s}\t{f['url']}\t{e}")
    lines.append("")

    report = "\n".join(lines)
    print(report)
    REPORT_PATH.write_text(report, encoding="utf-8")
    sys.exit(2)


if __name__ == "__main__":
    main()
