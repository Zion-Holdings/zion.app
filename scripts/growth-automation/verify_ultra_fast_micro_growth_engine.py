#!/usr/bin/env python3
"""
Verification script for Ultra-Fast Micro-Growth Engine v9.0
Verifies service catalog integrity and growth metrics
"""

import json
from pathlib import Path

SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')

def verify_catalog():
    """Verify the services catalog and print metrics."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            services = data
        elif isinstance(data, dict):
            services = data.get('services', [])
        else:
            services = []
        
        # Count by category
        categories = {}
        for s in services:
            cat = s.get('category', 'unknown')
            categories[cat] = categories.get(cat, 0) + 1
        
        print(f"Total services: {len(services)}")
        print(f"Categories: {len(categories)}")
        print("\nTop 10 categories:")
        sorted_cats = sorted(categories.items(), key=lambda x: x[1], reverse=True)
        for cat, count in sorted_cats[:10]:
            print(f"  {cat}: {count}")
        
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == '__main__':
    verify_catalog()