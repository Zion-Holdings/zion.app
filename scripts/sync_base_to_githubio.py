#!/usr/bin/env python3
"""Sync new services from base directory to zion-support.github.io"""

import json

def sync_catalogs():
    # Read base directory catalog
    with open('/Users/klebergarciaalcatrao/app/data/servicesData.json') as f:
        base = json.load(f)

    # Read zion-support.github.io catalog
    with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json') as f:
        sg = json.load(f)

    base_services = base if isinstance(base, list) else base.get('services', [])
    sg_services = sg if isinstance(sg, list) else sg.get('services', [])

    sg_ids = set(s.get('id') for s in sg_services)
    new_services = [s for s in base_services if s.get('id') not in sg_ids]

    print(f'Base catalog: {len(base_services)} services')
    print(f'Zion-support catalog: {len(sg_services)} services')
    print(f'New services to sync: {len(new_services)}')

    if new_services:
        sg_services.extend(new_services)
        with open('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json', 'w') as f:
            json.dump(sg_services, f, indent=2)
        print(f'Synced {len(new_services)} services')
        return len(new_services)
    else:
        print('No new services to sync')
        return 0

if __name__ == '__main__':
    sync_catalogs()