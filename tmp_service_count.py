#!/usr/bin/env python3
import json
from collections import Counter

with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json', 'r') as f:
    data = json.load(f)
    
print(f"Total services in servicesData.json: {len(data)}")

# Count by category
categories = Counter(s.get('category', 'unknown') for s in data)
print("\nTop 15 categories:")
for cat, count in categories.most_common(15):
    print(f"  {cat}: {count}")

# Count by industry
industries = Counter(s.get('industry', 'unknown') for s in data)
print("\nTop 15 industries:")
for ind, count in industries.most_common(15):
    print(f"  {ind}: {count}")