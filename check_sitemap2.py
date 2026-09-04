import re, json

with open('/Users/klebergarciaalcatrao/zion-support.github.io/public/sitemap.xml') as f:
    sitemap = f.read()

# Extract ALL URLs from sitemap - more flexible pattern
urls = re.findall(r'<loc>([^<]+)</loc>', sitemap)
service_urls = [u for u in urls if '/services/' in u]
print(f'Total URLs in sitemap: {len(urls)}')
print(f'Service URLs: {len(service_urls)}')

adaptive_urls = [u for u in service_urls if 'adaptive' in u]
print(f'Adaptive service URLs: {len(adaptive_urls)}')
for u in adaptive_urls:
    print(f'  {u.split("/services/")[1]}')

print()
# Check the 10 new ones
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
print('=== New 10 in sitemap? ===')
for nid in new_ids:
    found = any(nid in u for u in service_urls)
    print(f'{nid}: {"YES" if found else "NO"}')
