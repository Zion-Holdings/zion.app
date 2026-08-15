import json
from pathlib import Path

# Load services
with open('/Users/klebergarciaalcatrao/app/data/servicesData.json', 'r') as f:
    data = json.load(f)

if isinstance(data, list):
    services = data
elif isinstance(data, dict) and 'services' in data:
    services = data['services']
else:
    services = []

print(f"Total services in JSON: {len(services)}")

# Check for services without landing pages
SERVICES_DIR = Path('/Users/klebergarciaalcatrao/app/services')
missing_pages = []
for service in services:
    service_id = service.get('id', 'unknown')
    service_dir = SERVICES_DIR / service_id
    page_file = service_dir / 'page.tsx'
    if not page_file.exists():
        missing_pages.append(service_id)

print(f"Services missing page.tsx: {len(missing_pages)}")
if missing_pages[:5]:
    print(f"First 5 missing: {missing_pages[:5]}")