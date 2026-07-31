#!/usr/bin/env python3
"""Generate Growth Metrics Dashboard Report - Simple Version"""

import json
import re
from datetime import datetime
from collections import Counter

# Paths
SERVICES_DATA = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json'
GROWTH_METRICS = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/growth-metrics.json'
SENT_LOG = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/outreach/sent_log.json'
DISCOVERED_LEADS = '/Users/klebergarciaalcatrao/zion-support.github.io/app/data/discovered_leads.json'
SITEMAP = '/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml'

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

def main():
    """Generate the growth metrics dashboard report."""
    
    # Load data files
    services = load_json(SERVICES_DATA) or []
    growth_metrics = load_json(GROWTH_METRICS) or {}
    sent_log = load_json(SENT_LOG) or {}
    discovered_leads = load_json(DISCOVERED_LEADS) or []
    
    # Count categories and industries
    categories = Counter()
    industries = Counter()
    
    for s in services:
        cat = s.get('category', 'unknown')
        categories[cat] += 1
        ind = s.get('industry', 'unknown')
        industries[ind] += 1
    
    # Count various metrics
    service_count = len(services)
    sitemap_urls = count_sitemap_urls()
    
    # Calculate velocity
    run_history = growth_metrics.get('run_history', [])
    if len(run_history) >= 2:
        recent = run_history[-1]['services_added']
        previous = run_history[-2]['services_added']
        velocity = recent - previous
    else:
        velocity = growth_metrics.get('services_discovered', 0)
    
    # Generate report
    print('=' * 70)
    print('GROWTH METRICS DASHBOARD - REAL-TIME STATUS')
    print('=' * 70)
    
    print('\nSERVICE CATALOG')
    print(f'   Total services: {service_count}')
    
    print('\nGROWTH VELOCITY')
    if growth_metrics:
        print(f'   Current run: {growth_metrics.get("services_discovered", 0)} new services discovered')
        print(f'   Total services: {growth_metrics.get("total_services", 0)}')
        print(f'   Engine version: {growth_metrics.get("engine_version", "unknown")}')
        print(f'   Last run: {growth_metrics.get("last_run", "unknown")}')
        print(f'   Velocity (recent): {velocity} new services')
    else:
        print('   Growth metrics data not available')
    
    print('\nOUTREACH STATISTICS')
    if isinstance(sent_log, dict):
        print(f'   Hot leads sent: {len(sent_log)}')
    else:
        print(f'   Hot leads sent: {len(sent_log)}')
    print(f'   Discovered leads: {len(discovered_leads)}')
    
    print('\nCATEGORY BREAKDOWN (Top 10)')
    for cat, count in categories.most_common(10):
        print(f'   {cat}: {count} services')
    
    print('\nINDUSTRY BREAKDOWN (Top 10)')
    for ind, count in industries.most_common(10):
        print(f'   {ind}: {count} services')
    
    print('\nLANDING PAGES')
    print(f'   Sitemap URLs: {sitemap_urls}')
    
    print('\n' + '=' * 70)
    print(f'   Generated at: {datetime.now().isoformat()}')
    print('=' * 70)

if __name__ == '__main__':
    main()