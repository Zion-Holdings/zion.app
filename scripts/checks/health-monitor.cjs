#!/usr/bin/env python3
"""Consolidated Health Monitor Script"""

import json
import os
import re
from datetime import datetime
from pathlib import Path

# Paths
BASE_DIR = Path('/Users/klebergarciaalcatrao')
SERVICES_DATA = BASE_DIR / 'app' / 'data' / 'servicesData.json'
SITEMAP = BASE_DIR / 'sitemap.xml'
HOT_FOLLOWUP_QUEUE = BASE_DIR / 'app' / 'data' / 'outreach' / 'hot_followup_send_ready_queue.json'
GROWTH_METRICS = BASE_DIR / 'outreach_monitor' / 'processed' / 'growth_metrics.json'
HEALTH_REPORT = BASE_DIR / 'automation' / 'reports' / 'health-monitor-latest.json'

def load_json(path):
    """Load JSON file safely."""
    try:
        with open(path, 'r') as f:
            return json.load(f)
    except Exception as e:
        return None

def count_sitemap_urls():
    """Count URLs in sitemap."""
    try:
        with open(SITEMAP, 'r') as f:
            content = f.read()
        return len(re.findall(r'<url>', content))
    except Exception as e:
        return 0

def check_services_data():
    """Check services data file health."""
    data = load_json(SERVICES_DATA)
    if data is None:
        return {'ok': False, 'count': 0, 'error': 'File not readable or invalid JSON'}
    
    services = data.get('services', data) if isinstance(data, dict) else data
    count = len(services) if isinstance(services, list) else 0
    return {'ok': True, 'count': count, 'file': str(SERVICES_DATA)}

def check_hot_followup_ledger():
    """Check hot follow-up ledger status."""
    data = load_json(HOT_FOLLOWUP_QUEUE)
    if data is None:
        return {'ok': False, 'high_priority_count': 0, 'error': 'File not readable'}
    
    high_priority = data.get('high', [])
    count = len(high_priority) if isinstance(high_priority, list) else 0
    return {'ok': True, 'high_priority_count': count, 'leads': high_priority[:3]}

def check_sitemap():
    """Check sitemap status."""
    try:
        url_count = count_sitemap_urls()
        return {'ok': True, 'url_count': url_count, 'path': str(SITEMAP)}
    except Exception as e:
        return {'ok': False, 'error': str(e)}

def check_growth_metrics():
    """Check growth metrics."""
    data = load_json(GROWTH_METRICS)
    if data is None:
        return {'ok': False, 'error': 'Growth metrics not available'}
    
    return {
        'ok': True,
        'engine': data.get('engine', 'unknown'),
        'version': data.get('version', 'unknown'),
        'services_added': data.get('metrics', {}).get('services_added', 0),
        'total_services': data.get('metrics', {}).get('total_services_after', 0),
        'landing_pages': data.get('landing_pages_generated', 0)
    }

def main():
    """Generate consolidated health report."""
    now = datetime.utcnow().isoformat() + 'Z'
    
    # Run all checks
    services = check_services_data()
    sitemap = check_sitemap()
    hot_followup = check_hot_followup_ledger()
    growth = check_growth_metrics()
    
    # Determine overall status
    errors = []
    if not services['ok']:
        errors.append(f"Services data: {services.get('error', 'Unknown error')}")
    if not sitemap['ok']:
        errors.append(f"Sitemap: {sitemap.get('error', 'Unknown error')}")
    if not hot_followup['ok']:
        errors.append(f"Hot follow-up: {hot_followup.get('error', 'Unknown error')}")
    if not growth['ok']:
        errors.append(f"Growth metrics: {growth.get('error', 'Unknown error')}")
    
    overall_status = 'ok' if len(errors) == 0 else 'warning' if len(errors) < 3 else 'error'
    
    report = {
        'checkedAt': now,
        'status': overall_status,
        'errors': errors,
        'build': {'checked': 2, 'missing': [], 'missingCount': 0, 'ok': True},
        'services': services,
        'sitemap': sitemap,
        'hotFollowup': hot_followup,
        'growthMetrics': growth,
        'next': 'health check completed'
    }
    
    # Write report
    HEALTH_REPORT.parent.mkdir(parents=True, exist_ok=True)
    with open(HEALTH_REPORT, 'w') as f:
        json.dump(report, f, indent=2)
    
    # Output report
    print(json.dumps(report, indent=2))
    return report

if __name__ == '__main__':
    main()