#!/usr/bin/env python3
"""Add the 10 new advisor pages to sitemap.xml."""
import re

SITEMAP = '/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml'

NEW_IDS = [
    'advisor-self-optimizing---healthcare-29187e5a',
    'advisor-self-optimizing---hospitality-0ab2c7fc',
    'advisor-self-optimizing---media-ce559587',
    'advisor-self-optimizing---retail-5a84a88e',
    'advisor-self-optimizing---sports-510e60e6',
    'advisor-self-optimizing---transportation-5f9f05ac',
    'advisor-smart---agriculture-5db9923d',
    'advisor-smart---finance-9fe2d6eb',
    'advisor-smart---media-043cda66',
    'advisor-smart---real-estate-1b110e8b',
]

with open(SITEMAP) as f:
    sitemap = f.read()

# Build new entries
new_entries = '\n'.join(
    f'  <url>\n    <loc>https://ziontechgroup.com/services/{pid}</loc>\n    <lastmod>2026-09-03</lastmod>\n  </url>'
    for pid in NEW_IDS
)

# Insert before </urlset>
sitemap = sitemap.replace('</urlset>', f'{new_entries}\n</urlset>')

with open(SITEMAP, 'w') as f:
    f.write(sitemap)

count = len(re.findall(r'<loc>', sitemap))
print(f'Sitemap updated: {count} URLs now')
print(f'Added {len(NEW_IDS)} new service URLs')
