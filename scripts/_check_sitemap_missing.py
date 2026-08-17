#!/usr/bin/env python3
"""Check which of the 91 locally-existing URLs are missing from sitemap.xml."""
import json, re

with open("broken_link_analysis.json") as f:
    data = json.load(f)

with open("sitemap.xml") as f:
    sitemap = f.read()

sitemap_urls = set(re.findall(r"<loc>([^<]+)</loc>", sitemap))

missing_from_sitemap = []
for url in data["exist_locally_but_not_deployed"]:
    if url not in sitemap_urls:
        missing_from_sitemap.append(url)

print(f"Local pages not in sitemap: {len(missing_from_sitemap)}")
for u in missing_from_sitemap:
    print(f"  {u}")
