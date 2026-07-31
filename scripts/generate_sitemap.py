#!/usr/bin/env python3
"""
Sitemap Generator - Zion Tech Group

Synchronizes sitemap.xml with all active service URLs in servicesData.json.
"""

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Tuple

# Configuration
SERVICES_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
SITEMAP_FILE = Path('/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml')

def load_services() -> list:
    """Load services from JSON file."""
    with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if isinstance(data, list):
        return data
    elif isinstance(data, dict):
        return data.get('services', [])
    return []

def generate_sitemap(services: list) -> Tuple[str, int]:
    """Generate sitemap.xml content from services list."""
    today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    
    # Start with basic URLs
    sitemap_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>{today}</lastmod>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
    
    # Add service URLs
    service_count = 0
    for service in services:
        if 'id' in service:
            service_id = service['id']
            sitemap_content += f'''  <url>
    <loc>https://ziontechgroup.com/services/{service_id}</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
            service_count += 1
    
    sitemap_content += '</urlset>'
    
    return sitemap_content, service_count

def main():
    """Main entry point."""
    print("=" * 70)
    print("🚀 SITEMAP GENERATOR")
    print("=" * 70)
    
    # Load services
    services = load_services()
    print(f"[ℹ️] Loaded {len(services)} services from catalog")
    
    # Generate sitemap
    sitemap_content, service_count = generate_sitemap(services)
    
    # Write sitemap
    with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    
    print(f"[✅] Generated sitemap with {service_count} service URLs")
    print(f"[📄] Saved to: {SITEMAP_FILE}")
    
    # Verify
    with open(SITEMAP_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        url_count = content.count('<url>')
    
    print(f"[🔍] Verified: {url_count} URL entries in sitemap")
    print("=" * 70)
    print("✅ SITEMAP GENERATION COMPLETE")
    print("=" * 70)

if __name__ == '__main__':
    main()