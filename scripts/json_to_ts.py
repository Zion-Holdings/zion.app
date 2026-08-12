#!/usr/bin/env python3
"""
Regenerate servicesData.ts from servicesData.json.
Maps services to category arrays and builds allServices.
"""
import json
import re
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

def js_literal(value):
    """Convert Python value to JS literal string."""
    if isinstance(value, str):
        # Escape backslashes and quotes
        escaped = value.replace('\\', '\\\\').replace("'", "\\'")
        return f"'{escaped}'"
    elif isinstance(value, bool):
        return 'true' if value else 'false'
    elif isinstance(value, list):
        items = ', '.join(js_literal(item) for item in value)
        return f'[{items}]'
    elif isinstance(value, dict):
        items = ', '.join(f"{k}: {js_literal(v)}" for k, v in value.items())
        return f'{{{items}}}'
    elif value is None:
        return 'null'
    else:
        return str(value)

def service_to_ts(service):
    """Convert service dict to TS object literal."""
    lines = ['  {']
    for key, value in service.items():
        lines.append(f"    {key}: {js_literal(value)},")
    lines.append('  }')
    return '\n'.join(lines)

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
            by_category[cat].append(service)
        else:
            unmapped.append(service)
    
    # If there are unmapped services, put them in aiServices as fallback
    if unmapped:
        print(f"Warning: {len(unmapped)} services with unmapped categories, adding to aiServices")
        by_category['ai'].extend(unmapped)
    
    # Build TS content
    lines = []
    lines.append("// Service data for AI and IT solutions\r")
    lines.append("export interface Service {\r")
    lines.append("  id: string;\r")
    lines.append("  title: string;\r")
    lines.append("  description: string;\r")
    lines.append("  features: string[];\r")
    lines.append("  benefits: string[];\r")
    lines.append("  pricing: { basic: string; pro: string; enterprise: string };\r")
    lines.append("  contactInfo: { website: string; email: string; phone: string };\r")
    lines.append("  icon: string;\r")
    lines.append("  href: string;\r")
    lines.append("  popular?: boolean;\r")
    lines.append("  category: string;\r")
    lines.append("  industry: string;\r")
    lines.append("  stage?: 'published' | 'beta' | 'planned';\r")
    lines.append("}\r")
    lines.append("")
    
    # Write category arrays
    for cat, array_name in CATEGORY_TO_ARRAY.items():
        cat_services = by_category.get(cat, [])
        lines.append(f"export const {array_name}: Service[] = [")
        for service in cat_services:
            lines.append(service_to_ts(service))
            lines.append(",")
        lines.append("];\r")
        lines.append("")
    
    # Build allServices by spreading all category arrays
    array_names = [CATEGORY_TO_ARRAY[cat] for cat in CATEGORY_TO_ARRAY if cat in by_category and by_category[cat]]
    lines.append("export const allServices: Service[] = [")
    for arr_name in array_names:
        lines.append(f"  ...{arr_name},")
    lines.append("];\r")
    lines.append("")
    
    # Add helper functions
    lines.append("export const getServiceById = (id: string): Service | undefined => { return allServices.find(s => s.id === id); };\r")
    lines.append("export const getServicesByCategory = (category: Service['category']): Service[] => { return allServices.filter(s => s.category === category); };\r")
    lines.append("export const getPopularServices = (): Service[] => { return allServices.filter(s => s.popular); };\r")
    
    # Write file
    content = '\n'.join(lines)
    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Successfully wrote {TS_FILE}")
    print(f"Total lines: {len(lines)}")
    for cat, arr_name in CATEGORY_TO_ARRAY.items():
        print(f"  {arr_name}: {len(by_category.get(cat, []))} services")

if __name__ == '__main__':
    main()
