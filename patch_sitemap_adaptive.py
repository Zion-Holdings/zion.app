#!/usr/bin/env python3
"""Patch sitemap.xml to add the 10 adaptive-insights service URLs.
The earlier update_sitemap.py added the wrong batch (651-660).
This script appends only the adaptive-insights URLs that match the actually
generated app/services/ pages, and skips any that already exist in the sitemap.
"""
import re
import os

SITEMAP = '/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml'
BASE_URL = 'https://ziontechgroup.com/services/'

# These are the 10 adaptive-insights service ids that were generated.
ADAPTIVE_IDS = [
    'adaptive-insights-agriculture-2ed2ff43',
    'adaptive-insights-finance-e37c98ea',
    'adaptive-insights-for-agriculture-609a2d3e',
    'adaptive-insights-for-construction-5de14841',
    'adaptive-insights-for-logistics-1-97cca87b',
    'adaptive-insights-for-logistics-6cb3f4e5',
    'adaptive-insights-gaming-013c8e67',
    'adaptive-insights-insurance-b3dc916a',
    'adaptive-insights-legal-05f495e3',
    'adaptive-insights-logistics-1-a22ba1b4',
]

with open(SITEMAP, 'r') as f:
    content = f.read()

existing_urls = set(re.findall(r'<loc>(.*?)</loc>', content))
added = []
skipped = []
for pid in ADAPTIVE_IDS:
    loc = f'{BASE_URL}{pid}'
    if loc in existing_urls:
        skipped.append(pid)
        continue
    entry = (
        f'  <url>\n'
        f'    <loc>{loc}</loc>\n'
        f'    <lastmod>2026-09-04</lastmod>\n'
        f'    <changefreq>weekly</changefreq>\n'
        f'    <priority>0.7</priority>\n'
        f'  </url>'
    )
    content = content.replace('</urlset>', f'{entry}\n</urlset>')
    added.append(pid)

with open(SITEMAP, 'w') as f:
    f.write(content)

total = len(re.findall(r'<loc>', content))
print(f'Sitemap now has {total} URLs')
print(f'Added: {len(added)}')
for pid in added:
    print(f'  + {BASE_URL}{pid}')
print(f'Skipped (already present): {len(skipped)}')
for pid in skipped:
    print(f'  - {BASE_URL}{pid}')
