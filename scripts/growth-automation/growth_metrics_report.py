#!/usr/bin/env python3
"""Generate Growth Metrics Dashboard Report"""

import json
import re
from pathlib import Path
from collections import Counter
from datetime import datetime

BASE_DIR = Path('/Users/klebergarciaalcatrao/zion-support.github.io')

# Count sitemap URLs
sitemap_path = BASE_DIR / 'sitemap.xml'
sitemap_count = 0
try:
    with open(sitemap_path, 'r') as f:
        content = f.read()
    sitemap_count = content.count('<url>')
except Exception as e:
    print(f'Error reading sitemap: {e}')

# Count service directories
services_dir = BASE_DIR / 'app' / 'services'
service_dirs = 0
try:
    if services_dir.exists():
        service_dirs = len([d for d in services_dir.iterdir() if d.is_dir()])
except Exception as e:
    print(f'Error counting service directories: {e}')

# Count discovered leads
leads_path = BASE_DIR / 'app' / 'data' / 'discovered_leads.json'
leads_count = 0
try:
    with open(leads_path, 'r') as f:
        data = json.load(f)
    leads_count = len(data) if isinstance(data, list) else 0
except Exception as e:
    print(f'Error reading leads: {e}')

# Count sent emails
sent_log_path = BASE_DIR / 'app' / 'data' / 'outreach' / 'sent_log.json'
sent_count = 0
try:
    with open(sent_log_path, 'r') as f:
        data = json.load(f)
    sent_count = len(data) if isinstance(data, dict) else 0
except Exception as e:
    print(f'Error reading sent log: {e}')

# Read growth metrics
growth_path = BASE_DIR / 'app' / 'data' / 'growth-metrics.json'
growth_data = {}
try:
    with open(growth_path, 'r') as f:
        growth_data = json.load(f)
except Exception as e:
    print(f'Error reading growth metrics: {e}')

# Count industries in discovered leads
industries = Counter()
try:
    with open(leads_path, 'r') as f:
        data = json.load(f)
    if isinstance(data, list):
        for lead in data:
            ind = lead.get('industry', 'unknown')
            industries[ind] += 1
except:
    pass

# Count sources in discovered leads
sources = Counter()
try:
    with open(leads_path, 'r') as f:
        data = json.load(f)
    if isinstance(data, list):
        for lead in data:
            src = lead.get('source', 'unknown')
            sources[src] += 1
except:
    pass

print('=' * 70)
print('GROWTH METRICS DASHBOARD - REAL-TIME STATUS')
print('=' * 70)
print()
print('SERVICE CATALOG')
print(f'   Total services (from growth-metrics.json): {growth_data.get("total_services", 0)}')
print(f'   Service directories: {service_dirs}')
print()
print('GROWTH VELOCITY')
print(f'   Current run: {growth_data.get("services_discovered", 0)} new services discovered')
print(f'   Total services: {growth_data.get("total_services", 0)}')
print(f'   Engine version: {growth_data.get("engine_version", "unknown")}')
print(f'   Last run: {growth_data.get("last_run", "unknown")}')
if growth_data.get('run_history') and len(growth_data['run_history']) >= 2:
    recent = growth_data['run_history'][-1]['services_added']
    previous = growth_data['run_history'][-2]['services_added']
    velocity = recent - previous
    print(f'   Velocity (recent): {velocity} new services')
print()
print('OUTREACH STATISTICS')
print(f'   Hot leads sent: {sent_count}')
print(f'   Discovered leads: {leads_count}')
print()
print('LEAD SOURCES')
for src, count in sources.most_common(10):
    print(f'   {src}: {count} leads')
print()
print('INDUSTRY BREAKDOWN (Top 10)')
for ind, count in industries.most_common(10):
    print(f'   {ind}: {count} leads')
print()
print('LANDING PAGES')
print(f'   Service directories: {service_dirs}')
print(f'   Sitemap URLs: {sitemap_count}')
print()
print('=' * 70)
print(f'   Generated at: {datetime.now().isoformat()}')
print('=' * 70)