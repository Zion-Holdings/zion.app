#!/usr/bin/env python3
import json
from collections import Counter

file_path = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
with open(file_path, 'r') as f:
    data = json.load(f)

# Check services around indices 1780-1789
print("=== Sample of problematic services (indices 1775-1795) ===")
for i in range(1775, min(1795, len(data))):
    if i < len(data):
        s = data[i]
        print(f"Index {i}: id={s.get('id', 'MISSING')}, title={s.get('title', 'MISSING')[:50] if s.get('title') else 'MISSING'}, name={s.get('name', 'MISSING')[:50] if s.get('name') else 'MISSING'}")

print(f"\n=== Total services: {len(data)} ===")

# Check for duplicates by name
names = [s.get('title') or s.get('name') for s in data]
name_counter = Counter(names)
duplicates = [(name, count) for name, count in name_counter.items() if count > 1]
print(f"=== Duplicate names found: {len(duplicates)} ===")
for name, count in duplicates[:10]:
    print(f"  '{name[:50]}...': {count} occurrences")