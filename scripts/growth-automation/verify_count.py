#!/usr/bin/env python3
import json
from pathlib import Path

SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')

with open(SERVICES_FILE, 'r') as f:
    data = json.load(f)

if isinstance(data, list):
    count = len(data)
    sample_ids = [s['id'] for s in data[:3]]
else:
    count = len(data.get('services', []))
    sample_ids = [s['id'] for s in data.get('services', [])[:3]]

print(f"Total services: {count}")
print(f"Sample IDs: {sample_ids}")