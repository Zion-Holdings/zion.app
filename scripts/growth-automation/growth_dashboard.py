#!/usr/bin/env python3
"""Generate Growth Metrics Dashboard Report"""

import json
import os
import re
from datetime import datetime
from collections import Counter
from pathlib import Path

# Paths
BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_DATA = BASE_DIR / 'app' / 'data' / 'servicesData.json'
GROWTH_METRICS = BASE_DIR / 'app' / 'data' / 'growth-metrics.json'
SENT_LOG = BASE_DIR / 'app' / 'data' / 'outreach' / 'sent_log.json'
DISCOVERED_LEADS = BASE_DIR / 'app' / 'data' / 'discovered_leads.json'
SITEMAP = BASE_DIR / 'sitemap.xml'
SERVICES_DIR = BASE_DIR / 'app' / 'services'
PAGES_DIR = BASE_DIR / 'app' / 'pages'

def load_json(path):
    """Load JSON file safely."""
    try:
        with open(path, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {path}: {e}")
        return None

def count_sitemap_urls():
    """Count URLs in sitemap."""
    try:
        with open(SITEMAP, 'r') as f:
            content = f.read()
        return len(re.findall(r'<url>', content))
    except Exception as e:
        print(f"Error reading sitemap: {e}")
        return 0

def count_html_pages():
    """Count HTML pages in pages directory."""
    try:
        if not PAGES_DIR.exists():
            return 0
        pages = list(PAGES_DIR.glob('*.html'))
        return len(pages)
    except Exception as e:
        print(f"Error counting HTML pages: {e}")
        return 0

def main():
    """Generate the growth metrics dashboard report."""
    
    # Load data files
    services_data = load_json(SERVICES_DATA) or {}
    services = services_data.get('services', []) if isinstance(services_data, dict) else services_data
    growth_metrics = load_json(GROWTH_METRICS) or {}
    sent_log = load_json(SENT_LOG) or []
    discovered_leads = load_json(DISCOVERED_LEADS) or []
    
    # Count categories and industries
    categories = Counter()
    industries = Counter()
    
    for s in services:
        if not isinstance(s, dict):
            continue
        cat = s.get('category', 'unknown')
        categories[cat] += 1
        ind = s.get('industry', 'unknown')
        industries[ind] += 1
    
    # Count various metrics
    service_count = len(services)  # Use JSON data count for accuracy
    sitemap_urls = count_sitemap_urls()
    html_pages = count_html_pages()
    
    # Generate report
    print('=' * 60)
    print('📊 GROWTH METRICS DASHBOARD')
    print('=' * 60)
    
    print('\n📦 SERVICE CATALOG')
    print(f'   Total services: {len(services)}')
    
    print('\n📈 GROWTH VELOCITY')
    if growth_metrics:
        print(f'   Current run: {growth_metrics.get("services_discovered", 0)} new services discovered')
        print(f'   Total services: {growth_metrics.get("total_services", 0)}')
        print(f'   Engine version: {growth_metrics.get("engine_version", "unknown")}')
        print(f'   Last run: {growth_metrics.get("last_run", "unknown")}')
    else:
        print('   Growth metrics data not available')
    
    print('\n📧 OUTREACH STATISTICS')
    print(f'   Hot leads sent: {len(sent_log)}')
    print(f'   Discovered leads: {len(discovered_leads)}')
    
    print('\n🏷️ CATEGORY BREAKDOWN (Top 10)')
    for cat, count in categories.most_common(10):
        print(f'   {cat}: {count} services')
    
    print('\n🌐 INDUSTRY BREAKDOWN (Top 10)')
    for ind, count in industries.most_common(10):
        print(f'   {ind}: {count} services')
    
    print('\n📄 LANDING PAGES')
    print(f'   Service directories: {service_count}')
    print(f'   HTML pages: {html_pages}')
    print(f'   Sitemap URLs: {sitemap_urls}')
    
    print('\n' + '=' * 60)
    print(f'   Generated at: {datetime.now().isoformat()}')
    print('=' * 60)

if __name__ == '__main__':
    main()