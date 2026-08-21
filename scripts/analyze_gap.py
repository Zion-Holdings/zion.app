#!/usr/bin/env python3
"""Analyze sitemap vs catalog gap."""
import json, os, re

# Load services data
with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json') as f:
    svcs = json.load(f)

print(f"Services in data: {len(svcs)}")

# Extract hrefs from services
svc_hrefs = set()
for s in svcs:
    h = s.get('href', '')
    if h:
        svc_hrefs.add(h)

print(f"Unique service hrefs: {len(svc_hrefs)}")

# Read sitemap (it's 21MB, need streaming)
sitemap_locs = set()
with open('/Users/klebergarciaalcatrao/zion-support.github.io/public/sitemap.xml', 'r') as f:
    for line in f:
        m = re.search(r'<loc>(.*?)</loc>', line)
        if m:
            sitemap_locs.add(m.group(1))

print(f"Unique sitemap URLs: {len(sitemap_locs)}")

# Find sitemap URLs not in catalog
missing_from_catalog = sitemap_locs - svc_hrefs
print(f"Sitemap URLs NOT in catalog: {len(missing_from_catalog)}")

# Find catalog entries not in sitemap
missing_from_sitemap = svc_hrefs - sitemap_locs
print(f"Catalog entries NOT in sitemap: {len(missing_from_sitemap)}")

# Service-type URLs in sitemap
svc_urls_in_sitemap = {u for u in sitemap_locs if '/services/' in u}
print(f"Service URLs in sitemap: {len(svc_urls_in_sitemap)}")
print(f"Service URLs NOT in catalog: {len(svc_urls_in_sitemap - svc_hrefs)}")

# Sample missing
sample_missing = list(missing_from_catalog)[:5]
print(f"\nSample missing from catalog:")
for u in sample_missing:
    print(f"  {u}")
