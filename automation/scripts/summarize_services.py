#!/usr/bin/env python
import json
import sys
from pathlib import Path

def summarize_services(json_path):
    data = json.loads(Path(json_path).read_text(encoding='utf-8'))
    if not isinstance(data, list):
        print('Not an array')
        return
    print('COUNT', len(data))
    cats = {}
    for item in data:
        cat = item.get('category') or 'unknown'
        cats[cat] = cats.get(cat, 0) + 1
    for k, v in sorted(cats.items()):
        print(k, v)

if __name__ == '__main__':
    for p in sys.argv[1:]:
        summarize_services(p)
