#!/usr/bin/env python3
"""Check all blog posts in sitemap.xml and verify they have matching HTML files."""

import os
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlparse

sitemap_path = Path("/data/data/com.termux/files/home/zion-support.github.io/public/sitemap.xml")
public_dir = Path("/data/data/com.termux/files/home/zion-support.github.io/public")
blog_dir = public_dir / "blog"

# Parse sitemap
tree = ET.parse(sitemap_path)
root = tree.getroot()
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

blog_urls = []
for url_elem in root.findall('.//sm:url', ns):
    loc = url_elem.find('sm:loc', ns)
    if loc is not None and loc.text:
        url = loc.text
        if '/blog/' in url and url != 'https://ziontechgroup.com/blog/':
            blog_urls.append(url)

print(f"Found {len(blog_urls)} blog URLs in sitemap")

# Check which ones exist
missing = []
existing = []
for url in blog_urls:
    path = urlparse(url).path
    # Convert URL path to file path
    slug = path.strip('/').replace('/', os.sep)
    expected_file = blog_dir / slug / "index.html"
    if expected_file.exists():
        existing.append(url)
    else:
        missing.append(url)

print(f"\nExisting: {len(existing)}")
print(f"Missing: {len(missing)}")

if missing:
    print("\n=== MISSING BLOG POSTS ===")
    for url in missing[:20]:
        print(f"  ❌ {url}")
    if len(missing) > 20:
        print(f"  ... and {len(missing) - 20} more")

print("\nDone")
