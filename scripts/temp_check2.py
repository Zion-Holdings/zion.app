#!/usr/bin/env python3
import json
from collections import Counter

file_path = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
with open(file_path, 'r') as f:
    data = json.load(f)

# Find all services with missing id
missing_id_services = [(i, s.get('name', 'MISSING')) for i, s in enumerate(data) if not s.get('id')]
print(f"=== Services with missing id: {len(missing_id_services)} ===")

# Show all of them
for idx, name in missing_id_services[:200]:
    truncated = name[:80] if len(name) > 80 else name
    print(f"Index {idx}: name='{truncated}...'")

# Also check total count
print(f"\n=== Total services: {len(data)} ===")

# Count services with valid id
valid_id = [s for s in data if s.get('id')]
print(f"Services with valid id: {len(valid_id)}")
print(f"Services missing id: {len(data) - len(valid_id)}")