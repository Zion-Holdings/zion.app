import json
import xml.etree.ElementTree as ET

# Load services
data = json.load(open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'))
print(f'Services in JSON: {len(data)}')

# Count services with IDs
with_ids = sum(1 for s in data if 'id' in s)
print(f'Services with ID: {with_ids}')

# Parse sitemap
tree = ET.parse('/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml')
root = tree.getroot()
ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = root.findall('ns:url', ns)
print(f'URLs in sitemap: {len(urls)}')