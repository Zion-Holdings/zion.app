import re, json

with open('/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml') as f:
    sitemap = f.read()
with open('/Users/klebergarciaalcatrao/zion-support.github.io/service-index.json') as f:
    catalog = json.load(f)

urls = re.findall(r'<loc>(https://ziontechgroup.com/services/[^<]+)</loc>', sitemap)
print(f'Total service URLs in sitemap: {len(urls)}')

catalog_ids = {s['id'] for s in catalog['services']}
sitemap_ids = set()
for url in urls:
    path = url.replace('https://ziontechgroup.com/services/', '')
    sitemap_ids.add(path)

missing = sitemap_ids - catalog_ids
print(f'Sitemap URLs NOT in catalog: {len(missing)}')
for m in sorted(missing):
    print(f'  {m}')

print()
print('=== NEW (from sitemap diff) URLs missing from catalog ===')
new_ids = [
    'adaptive-healthcare-real-estate-b038aac8',
    'adaptive-image-automation-1-fed4a8d9',
    'adaptive-image-automation-7250948a',
    'adaptive-image-generator-f2ef230c',
    'adaptive-image-marketing-280e0cc4',
    'adaptive-image-optimization-1-af1bf579',
    'adaptive-image-optimization-e07d9460',
    'adaptive-image-system-1-68974657',
    'adaptive-image-system-9c136448',
    'adaptive-insights-agriculture-1-2ae0648e',
]
for nid in new_ids:
    print(f'{nid}: in_sitemap={nid in sitemap_ids}, in_catalog={nid in catalog_ids}')
