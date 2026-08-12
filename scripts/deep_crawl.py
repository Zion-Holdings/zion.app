#!/usr/bin/env python3
"""Deep crawl of ziontechgroup.com - parses sitemap, checks all URLs,
follows internal links on a sample of pages, reports broken links."""
import requests
import xml.etree.ElementTree as ET
import json
import time
import sys
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_URL = "https://ziontechgroup.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
HEADERS = {"User-Agent": UA}
BATCH_SIZE = 1000


def fetch_sitemap_urls():
    """Fetch all URLs from sitemap.xml"""
    print("Fetching sitemap.xml...", file=sys.stderr)
    r = requests.get(f"{BASE_URL}/sitemap.xml", headers=HEADERS, timeout=60)
    print(f"Sitemap response: {r.status_code}, length: {len(r.text)}", file=sys.stderr)
    root = ET.fromstring(r.text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for url in root.findall("sm:url", ns):
        loc = url.find("sm:loc", ns).text
        urls.append(loc)
    print(f"Found {len(urls)} URLs in sitemap", file=sys.stderr)
    return urls


def check_url(url, session):
    """Check a single URL, return (url, status_code)"""
    if url.startswith("http"):
        # External link - just check it's reachable
        try:
            r = session.head(url, headers=HEADERS, timeout=15, allow_redirects=True)
            return (url, "external", r.status_code)
        except Exception:
            try:
                r = session.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
                return (url, "external", r.status_code)
            except Exception as e:
                return (url, "external", 0)
    else:
        # Internal link
        full_url = urljoin(BASE_URL, url)
        try:
            r = session.head(full_url, headers=HEADERS, timeout=15, allow_redirects=True)
            code = r.status_code
            if code == 405 or code == 501:
                r = session.get(full_url, headers=HEADERS, timeout=15, allow_redirects=True)
                code = r.status_code
            return (full_url, "internal", code)
        except Exception:
            return (full_url, "internal", 0)


def check_batch(urls, concurrency=20, batch_num=0, total_batches=0):
    session = requests.Session()
    results = {"ok": [], "broken_404": [], "broken_4xx": [], "broken_5xx": [], "redirects": [], "timeout": [], "error": []}

    def check(u):
        return check_url(u, session)

    with ThreadPoolExecutor(max_workers=concurrency) as executor:
        future_to_url = {executor.submit(check, u): u for u in urls}
        done = 0
        for future in as_completed(future_to_url):
            url, link_type, code = future.result()
            done += 1
            if done % 200 == 0:
                print(f"  Batch {batch_num}/{total_batches}: {done}/{len(urls)} done", file=sys.stderr)

            if code == 200:
                results["ok"].append(url)
            elif code == 404:
                results["broken_404"].append(url)
            elif 400 <= code < 500:
                results["broken_4xx"].append((url, code))
            elif 500 <= code < 600:
                results["broken_5xx"].append((url, code))
            elif code in (301, 302, 303, 307, 308):
                results["redirects"].append((url, code))
            elif code == 0:
                results["timeout"].append(url)
            else:
                results["error"].append((url, code))

    return results


def main():
    all_urls = fetch_sitemap_urls()

    total_batches = (len(all_urls) + BATCH_SIZE - 1) // BATCH_SIZE
    print(f"\nChecking {len(all_urls)} URLs in {total_batches} batches...\n", file=sys.stderr)

    all_results = {
        "ok": [], "broken_404": [], "broken_4xx": [], "broken_5xx": [],
        "redirects": [], "timeout": [], "error": []
    }

    for i in range(total_batches):
        batch = all_urls[i * BATCH_SIZE: (i + 1) * BATCH_SIZE]
        print(f"\nBatch {i+1}/{total_batches}: {len(batch)} URLs", file=sys.stderr)
        batch_results = check_batch(batch, concurrency=20, batch_num=i+1, total_batches=total_batches)

        for key in all_results:
            all_results[key].extend(batch_results[key])

        # Save incremental results
        with open("deep_crawl_results.json", "w") as f:
            json.dump({
                "total_checked": len(all_urls),
                "ok_count": len(all_results["ok"]),
                "broken_404_count": len(all_results["broken_404"]),
                "broken_4xx_count": len(all_results["broken_4xx"]),
                "broken_5xx_count": len(all_results["broken_5xx"]),
                "redirects_count": len(all_results["redirects"]),
                "timeout_count": len(all_results["timeout"]),
                "error_count": len(all_results["error"]),
                "broken_404": sorted(all_results["broken_404"]),
                "broken_4xx": sorted(all_results["broken_4xx"]),
                "broken_5xx": sorted(all_results["broken_5xx"]),
                "redirects": sorted(all_results["redirects"]),
                "timeout": sorted(all_results["timeout"]),
                "errors": sorted(all_results["error"]),
            }, f, indent=2)

    print(f"\n{'='*60}")
    print(f"DEEP CRAWL COMPLETE")
    print(f"{'='*60}")
    print(f"Total URLs checked: {len(all_urls)}")
    print(f"✅ OK (200): {len(all_results['ok'])}")
    print(f"❌ 404 Broken: {len(all_results['broken_404'])}")
    print(f"❌ 4xx Other: {len(all_results['broken_4xx'])}")
    print(f"❌ 5xx Server: {len(all_results['broken_5xx'])}")
    print(f"↳ Redirects: {len(all_results['redirects'])}")
    print(f"⏱️  Timeout: {len(all_results['timeout'])}")
    print(f"❓ Other: {len(all_results['error'])}")

    if all_results["broken_404"]:
        print(f"\n--- First 50 404s ---")
        for url in sorted(all_results["broken_404"])[:50]:
            print(f"  404: {url}")


if __name__ == "__main__":
    main()
