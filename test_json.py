#!/usr/bin/env python3
import json
path = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
with open(path, 'r') as f:
    data = json.load(f)
print(f'Services: {len(data)}')