#!/usr/bin/env python3
"""
Regenerate servicesData.ts from servicesData.json.

Instead of inlining 42K service objects as TS literals (78MB, massive memory
overhead during V8 compilation), this version imports the JSON directly.
JSON.parse is far more memory-efficient than evaluating inline object literals.

The generated file maintains the same export surface:
  - Service interface
  - aiServices, itServices, cloudServices, securityServices, dataServices, automationServices
  - allServices (spread from category arrays)
  - getServiceById, getServicesByCategory, getPopularServices
"""
import json
from pathlib import Path
from collections import defaultdict

BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
JSON_FILE = BASE_DIR / 'app' / 'data' / 'servicesData.json'
TS_FILE = BASE_DIR / 'app' / 'data' / 'servicesData.ts'

# Known category -> array name mapping
CATEGORY_TO_ARRAY = {
    'ai': 'aiServices',
    'it': 'itServices',
    'cloud': 'cloudServices',
    'security': 'securityServices',
    'data': 'dataServices',
    'automation': 'automationServices',
}


def main():
    print("Loading servicesData.json...")
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        services = json.load(f)

    print(f"Loaded {len(services)} services")

    # Group by category
    by_category = defaultdict(list)
    unmapped = []

    for service in services:
        cat = service.get('category', 'unknown')
        if cat in CATEGORY_TO_ARRAY:
            by_category[cat].append(service['id'])
        else:
            unmapped.append(service['id'])

    if unmapped:
        print(f"Warning: {len(unmapped)} services with unmapped categories, adding to aiServices")
        by_category['ai'] = by_category.get('ai', []) + unmapped

    # Build lean TS content that imports JSON (memory-efficient)
    lines = []
    lines.append("// Service data for AI and IT solutions")
    lines.append("// AUTO-GENERATED from servicesData.json by scripts/json_to_ts.py")
    lines.append("// Imports JSON directly to avoid V8 memory overhead of inline literals.")
    lines.append("")
    lines.append('import servicesData from "./servicesData.json";')
    lines.append("")
    lines.append("export interface Service {")
    lines.append("  id: string;")
    lines.append("  title: string;")
    lines.append("  description: string;")
    lines.append("  features: string[];")
    lines.append("  benefits: string[];")
    lines.append("  popular?: boolean;")
    lines.append("  href: string;")
    lines.append("  category: string;")
    lines.append("  industry: string;")
    lines.append("  [key: string]: unknown;")
    lines.append("}")
    lines.append("")

    # Create a lookup map from the JSON array for efficient filtering
    # Build category arrays as filtered views of the JSON import
    for cat, array_name in CATEGORY_TO_ARRAY.items():
        ids = by_category.get(cat, [])
        lines.append(f"export const {array_name}: Service[] = servicesData.filter((s: Service) => s.category === '{cat}') as Service[];")
        print(f"  {array_name}: {len(ids)} services (filtered by category '{cat}')")
    lines.append("")

    # allServices is the full JSON array cast to Service[]
    lines.append("export const allServices: Service[] = servicesData as Service[];")
    lines.append("")

    # Add helper functions
    lines.append("export const getServiceById = (id: string): Service | undefined => {")
    lines.append("  return allServices.find(s => s.id === id);")
    lines.append("};")
    lines.append("")
    lines.append("export const getServicesByCategory = (category: Service['category']): Service[] => {")
    lines.append("  return allServices.filter(s => s.category === category);")
    lines.append("};")
    lines.append("")
    lines.append("export const getPopularServices = (): Service[] => {")
    lines.append("  return allServices.filter(s => s.popular);")
    lines.append("};")
    lines.append("")

    # Write file
    content = '\n'.join(lines)
    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully wrote {TS_FILE}")
    print(f"Total lines: {len(lines)}")
    print(f"Final file size: {len(content)} bytes")


if __name__ == '__main__':
    main()
