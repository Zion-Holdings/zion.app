#!/usr/bin/env python3
import json

with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/discovered_leads.json', 'r') as f:
    data = json.load(f)
    
print(f"Total discovered leads: {len(data)}")

# Count by status
from collections import Counter
statuses = Counter(l.get('status', 'unknown') for l in data)
print("\nStatus breakdown:")
for status, count in statuses.most_common():
    print(f"  {status}: {count}")