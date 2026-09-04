#!/usr/bin/env python3
"""Update sitemap.xml with all pages from progress 900-940 (4 batches, 40 services)."""
import json, re, os

BASE = '/Users/klebergarciaalcatrao/zion-support.github.io'
DATA_FILE = '/Users/klebergarciaalcatrao/app/data/servicesData.json'
SITEMAP = os.path.join(BASE, 'sitemap.xml')

with open(DATA_FILE) as f:
    data = json.load(f)
services = data.get('services', []) if isinstance(data, dict) else data

# All 4 batches: 900-910, 910-920, 920-930, 930-940 = 40 services
new_ids = [s['id'] for s in services[900:940]]

with open(SITEMAP) as f:
    sitemap = f.read()

# Remove any existing entries we're about to add (avoid dupes if run twice)
for pid in new_ids:
    tag = f'<loc>https://ziontechgroup.com/services/{pid}</loc>'
    # Remove the entire <url> block containing this loc
    pattern = rf'  <url>\s*<loc>https://ziontechgroup\.com/services/{re.escape(pid)}</loc>.*?</url>\n'
    sitemap = re.sub(pattern, '', sitemap, flags=re.DOTALL)

entries = []
for pid in new_ids:
    entries.append(
        f'  <url>\n'
        f'    <loc>https://ziontechgroup.com/services/{pid}</loc>\n'
        f'    <lastmod>2026-09-03</lastmod>\n'
        f'    <changefreq>weekly</changefreq>\n'
        f'    <priority>0.7</priority>\n'
        f'  </url>'
    )

new_block = '\n'.join(entries)
sitemap = sitemap.replace('</urlset>', f'{new_block}\n</urlset>')

with open(SITEMAP, 'w') as f:
    f.write(sitemap)

count = len(re.findall(r'<loc>', sitemap))
print(f'Sitemap updated: {count} URLs now')
print(f'Ensured {len(new_ids)} service URLs (progress 900-940)')
missing = [pid for pid in new_ids if f'<loc>https://ziontechgroup.com/services/{pid}</loc>' not in sitemap]
if missing:
    print(f'WARNING: {len(missing)} still missing!')
    for m in missing:
        print(f'  MISSING: {m}')
else:
    print('All 40 services confirmed in sitemap.')
