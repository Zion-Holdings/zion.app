#!/usr/bin/env python3
"""Fix sitemap to include all services."""
import json
from datetime import datetime, timezone
from pathlib import Path

SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
SITEMAP_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml')

# Load services
with open(SERVICES_FILE, 'r') as f:
    services = json.load(f)

print(f"Services in JSON: {len(services)}")

# Generate sitemap
today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
sitemap_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>{today}</lastmod>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>{today}</lastmod>
  </url>
'''

for service in services:
    if 'id' in service:
        service_id = service['id']
        sitemap_content += f'''  <url>
    <loc>https://ziontechgroup.com/services/{service_id}</loc>
    <lastmod>{today}</lastmod>
  </url>
'''

sitemap_content += '</urlset>'

# Write sitemap
with open(SITEMAP_FILE, 'w') as f:
    f.write(sitemap_content)

print(f"Sitemap updated with {len(services)} service URLs")

# Count URLs in sitemap
import re
with open(SITEMAP_FILE, 'r') as f:
    sitemap_text = f.read()
url_count = len(re.findall(r'<loc>https://ziontechgroup.com/services/', sitemap_text))
print(f"URLs in sitemap: {url_count}")