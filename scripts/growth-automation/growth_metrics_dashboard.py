#!/usr/bin/env python3
"""Generate Growth Metrics Dashboard Report - Optimized Version"""

import json
import re
import subprocess
from datetime import datetime
from collections import Counter

# Paths
BASE_DIR = '/Users/klebergarciaalcatrao/zion-support.github.io'
SERVICES_DATA = BASE_DIR + '/app/data/servicesData.json'
GROWTH_METRICS = BASE_DIR + '/app/data/growth-metrics.json'
SENT_LOG = BASE_DIR + '/app/data/outreach/sent_log.json'
DISCOVERED_LEADS = BASE_DIR + '/app/data/discovered_leads.json'
SITEMAP = BASE_DIR + '/sitemap.xml'
SERVICES_DIR = BASE_DIR + '/app/services'
PAGES_DIR = BASE_DIR + '/app/pages'

def load_json(path):
    """Load JSON file safely."""
    try:
        with open(path, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {path}: {e}")
        return None

def count_sitemap_urls():
    """Count URLs in sitemap using grep for efficiency."""
    try:
        result = subprocess.run(['grep', '-c', '<url>', SITEMAP], 
                                capture_output=True, text=True, timeout=30)
        return int(result.stdout.strip()) if result.returncode == 0 else 0
    except Exception as e:
        print(f"Error counting sitemap: {e}")
        return 0

def count_sent_emails():
    """Count sent emails from log."""
    try:
        with open(SENT_LOG, 'r') as f:
            data = json.load(f)
            return len(data) if isinstance(data, dict) else 0
    except:
        return 0

def count_discovered_leads():
    """Count discovered leads."""
    try:
        with open(DISCOVERED_LEADS, 'r') as f:
            data = json.load(f)
            return len(data) if isinstance(data, list) else 0
    except:
        return 0

def main():
    """Generate the growth metrics dashboard report."""
    
    # Load data files (skip massive servicesData.json - use growth-metrics for totals)
    growth_metrics = load_json(GROWTH_METRICS) or {}
    sent_log_count = count_sent_emails()
    discovered_leads_count = count_discovered_leads()
    sitemap_urls = count_sitemap_urls()
    
    # Generate report
    print('=' * 70)
    print('📊 GROWTH METRICS DASHBOARD - REAL-TIME STATUS')
    print('=' * 70)
    
    print('\n📦 SERVICE CATALOG')
    print(f'   Total services: {growth_metrics.get("total_services", 0)}')
    
    print('\n📈 GROWTH VELOCITY')
    if growth_metrics:
        run_history = growth_metrics.get('run_history', [])
        if len(run_history) >= 2:
            recent = run_history[-1]['services_added']
            previous = run_history[-2]['services_added']
            velocity = recent - previous
        else:
            velocity = growth_metrics.get('services_discovered', 0)
        
        print(f'   Current run: {growth_metrics.get("services_discovered", 0)} new services discovered')
        print(f'   Total services: {growth_metrics.get("total_services", 0)}')
        print(f'   Engine version: {growth_metrics.get("engine_version", "unknown")}')
        print(f'   Last run: {growth_metrics.get("last_run", "unknown")}')
        print(f'   Velocity (recent): {velocity} new services')
    else:
        print('   Growth metrics data not available')
    
    print('\n📧 OUTREACH STATISTICS')
    print(f'   Hot leads sent: {sent_log_count}')
    print(f'   Discovered leads: {discovered_leads_count}')
    
    print('\n🌐 LANDING PAGES')
    print(f'   Sitemap URLs: {sitemap_urls}')
    print(f'   Landing pages generated: {growth_metrics.get("landing_pages_generated", 0)}')
    
    print('\n🎯 TARGET INDUSTRIES')
    industries = growth_metrics.get('industries_targeted', [])
    for i, ind in enumerate(industries[:10], 1):
        print(f'   {i}. {ind}')
    
    print('\n' + '=' * 70)
    print(f'   Generated at: {datetime.now().isoformat()}')
    print('=' * 70)

if __name__ == '__main__':
    main()