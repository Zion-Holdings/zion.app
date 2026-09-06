#!/usr/bin/env python3
"""
Site integrity check - batch processor.
Processes URLs from a text file, writes results to JSON.
Usage: python batch_check.py <input_urls.txt> <output.json> <start_idx> <end_idx>
"""
import sys, json, time, re
from urllib.parse import urlparse
import requests

BASE = "https://ziontechgroup.com"
DOMAIN = urlparse(BASE).netloc

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 Chrome/120 Safari/537.36",
})

def check_url(url):
    try:
        r = session.head(url, timeout=5, allow_redirects=True)
        status = r.status_code
        loc = r.headers.get("Location", "")
    except requests.exceptions.Timeout:
        return (url, None, "", "timeout")
    except requests.exceptions.RequestException:
        try:
            r = session.get(url, timeout=5, allow_redirects=True, stream=True)
            status = r.status_code
            loc = r.headers.get("Location", "")
        except Exception as e:
            return (url, None, "", f"error: {type(e).__name__}")

    if status == 200:
        return (url, 200, loc, None)

    if status in (301, 302, 307, 308):
        cls = ("external reference error"
               if loc and urlparse(loc).netloc and urlparse(loc).netloc != DOMAIN
               else "stale redirect")
    elif status == 404:
        cls = ("external reference error"
               if urlparse(url).netloc != DOMAIN
               else "missing page")
    elif status == 403:
        cls = "missing page"
    elif status >= 500:
        cls = "missing page"
    else:
        cls = f"other ({status})"
    return (url, status, loc, cls)

if __name__ == "__main__":
    if len(sys.argv) < 5:
        print("Usage: python batch_check.py <urls.txt> <output.json> <start> <end>")
        sys.exit(1)

    urls_file = sys.argv[1]
    output_file = sys.argv[2]
    start = int(sys.argv[3])
    end = int(sys.argv[4])

    with open(urls_file) as f:
        urls = [l.strip() for l in f if l.strip()]

    subset = urls[start:end]
    results = []
    t0 = time.time()

    for i, url in enumerate(subset):
        url, status, loc, cls = check_url(url)
        results.append({
            "url": url,
            "status": status,
            "location": loc,
            "classification": cls
        })
        if i % 100 == 0:
            elapsed = time.time() - t0
            print(f"  [{start+i}/{end}] {elapsed:.0f}s", flush=True)
        time.sleep(0.008)

    with open(output_file, "w") as f:
        json.dump(results, f, indent=2)

    print(f"Done: {len(results)} URLs in {time.time()-t0:.1f}s -> {output_file}", flush=True)
