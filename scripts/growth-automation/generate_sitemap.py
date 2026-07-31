#!/usr/bin/env python3
"""
Sitemap Generator - Synchronizes sitemap.xml with all active service URLs.
"""

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_FILE = BASE_DIR / 'zion-support.github.io' / 'app' / 'data' / 'servicesData.json'
SITEMAP_FILE = BASE_DIR / 'zion-support.github.io' / 'sitemap.xml'

def load_services() -> list:
    """Load services from catalog."""
    try:
        with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        return []
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error loading services: {e}")
        return []

def generate_sitemap(services: list) -> str:
    """Generate sitemap XML content."""
    today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]
    
    # Add main pages
    main_pages = [
        ('https://ziontechgroup.com/', 'Home'),
        ('https://ziontechgroup.com/services', 'Services'),
        ('https://ziontechgroup.com/about', 'About'),
        ('https://ziontechgroup.com/contact', 'Contact'),
    ]
    
    for url, name in main_pages:
        lines.append(f'  <url>')
        lines.append(f'    <loc>{url}</loc>')
        lines.append(f'    <lastmod>{today}</lastmod>')
        lines.append(f'  </url>')
    
    # Add service pages
    service_count = 0
    for service in services:
        service_id = service.get('id', '')
        if service_id:
            url = f'https://ziontechgroup.com/services/{service_id}'
            lines.append(f'  <url>')
            lines.append(f'    <loc>{url}</loc>')
            lines.append(f'    <lastmod>{today}</lastmod>')
            lines.append(f'  </url>')
            service_count += 1
    
    lines.append('</urlset>')
    
    return '\n'.join(lines), service_count

def main():
    """Main entry point."""
    services = load_services()
    print(f"Loaded {len(services)} services")
    
    sitemap_content, service_count = generate_sitemap(services)
    
    # Write sitemap
    SITEMAP_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    
    print(f"Generated sitemap with {service_count} service URLs")
    print(f"Sitemap saved to: {SITEMAP_FILE}")
    
    # Count total URLs
    total_urls = 2 + service_count  # 2 main pages + services
    print(f"Total URLs in sitemap: {total_urls}")
    
    return 0

if __name__ == '__main__':
    sys.exit(main())