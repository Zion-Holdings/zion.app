#!/usr/bin/env python3
"""Check which URLs in sitemap.xml point to stale/non-existent service pages."""
import re, os

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
APP_DIR = os.path.join(BASE, "app")

with open(os.path.join(BASE, "sitemap.xml")) as f:
    sitemap = f.read()

urls = re.findall(r"<loc>([^<]+)</loc>", sitemap)
print(f"Total URLs in sitemap: {len(urls)}")

# Check each service URL against local existence
stale = []
for url in urls:
    if "/services/" in url:
        slug = url.replace("https://ziontechgroup.com/services/", "").rstrip("/")
        # check if exists locally (with or without hash suffix)
        path = os.path.join(APP_DIR, "services", slug)
        if os.path.isdir(path):
            continue
        # try slug-with-hash variants
        found = False
        services_dir = os.path.join(APP_DIR, "services")
        if os.path.isdir(services_dir):
            for d in os.listdir(services_dir):
                if d.rstrip("/") == slug:
                    found = True
                    break
        if not found:
            stale.append(url)

# Also check for duplicate URLs
from collections import Counter
url_counts = Counter(urls)
dupes = {u: c for u, c in url_counts.items() if c > 1}

print(f"Stale service URLs in sitemap (no page locally): {len(stale)}")
for s in stale[:30]:
    print(f"  {s}")
if len(stale) > 30:
    print(f"  ...and {len(stale)-30} more")
print(f"\nDuplicate URLs in sitemap: {len(dupes)}")
for u, c in list(dupes.items())[:10]:
    print(f"  {c}x {u}")

# Write lists
with open("sitemap_stale_urls.json", "w") as f:
    import json
    json.dump({"stale": stale, "duplicates": dict(dupes)}, f, indent=2)
