#!/usr/bin/env python3
import json
path = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
with open(path) as f:
    d = json.load(f)
print(f'Services: {len(d)}')