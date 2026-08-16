#!/usr/bin/env python3
"""Generate public/service-index.json from servicesData.json"""
import json
import os

DAT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   'app', 'data', 'servicesData.json')
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   'public', 'service-index.json')

def main():
    with open(DAT, 'r') as f:
        data = json.load(f)
    services = data if isinstance(data, list) else data.get('services', [])
    
    output_services = []
    for svc in services:
        output_services.append({
            'id': svc.get('id', ''),
            'title': svc.get('title', svc.get('name', '')),
            'description': svc.get('description', ''),
            'category': svc.get('category', ''),
            'industry': svc.get('industry', ''),
            'href': svc.get('href', f"/services/{svc.get('id', '')}")
        })
    
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w') as f:
        json.dump({'services': output_services, 'total': len(output_services), 'generated_at': __import__('datetime').datetime.now(__import__('datetime').timezone.utc).isoformat()}, f, indent=2)
    
    print(f"service-index.json: {len(output_services)} services → {OUT}")
    cats = {}
    for svc in output_services:
        cat = svc.get('category', 'unknown')
        cats[cat] = cats.get(cat, 0) + 1
    print(f"Categories: {cats}")

if __name__ == '__main__':
    main()