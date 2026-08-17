#!/usr/bin/env python3
"""Check specific broken.txt URLs against sitemap and local existence."""
import re, os

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
APP_DIR = os.path.join(BASE, "app")

# Read broken.txt
with open(os.path.join(BASE, "broken.txt")) as f:
    lines = f.readlines()

broken_404 = []
for line in lines:
    line = line.strip()
    if line.startswith("404"):
        url = line.split("404 ", 1)[1]
        broken_404.append(url)

# Read sitemap
with open(os.path.join(BASE, "sitemap.xml")) as f:
    sitemap = f.read()
sitemap_urls = set(re.findall(r"<loc>([^<]+)</loc>", sitemap))

# For each broken URL, check if it's in sitemap and if it exists locally
in_sitemap_and_broken = []
exist_locally = []
truly_missing = []

for url in broken_404:
    path = url.replace("https://ziontechgroup.com", "")
    # Check local existence
    local_path = os.path.join(APP_DIR, path.lstrip("/").rstrip("/"))
    # Check various forms
    page_exists = (
        os.path.isfile(local_path + "/page.tsx") or
        os.path.isfile(local_path + "/page.js") or
        os.path.isfile(local_path + "/index.tsx") or
        os.path.isfile(local_path + "/index.js") or
        os.path.isfile(local_path + ".tsx") or
        os.path.isfile(local_path + ".js") or
        path == "/"
    )
    
    if url in sitemap_urls:
        if page_exists:
            pass  # good - in sitemap and exists
        else:
            in_sitemap_and_broken.append(url)
    else:
        # not in sitemap
        if page_exists:
            exist_locally.append(url)
        else:
            truly_missing.append(url)

print(f"Total broken 404 URLs: {len(broken_404)}")
print(f"In sitemap but page doesn't exist locally (stale sitemap entries): {len(in_sitemap_and_broken)}")
print(f"Not in sitemap but page exists locally (will be deployed): {len(exist_locally)}")
print(f"Not in sitemap and page doesn't exist (truly missing): {len(truly_missing)}")

print(f"\n=== Stale sitemap entries (need redirects) ===")
for u in in_sitemap_and_broken[:20]:
    print(f"  {u}")
if len(in_sitemap_and_broken) > 20:
    print(f"  ...and {len(in_sitemap_and_broken)-20} more")
