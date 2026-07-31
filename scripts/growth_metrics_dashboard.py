#!/usr/bin/env python3
"""Generate Growth Metrics Dashboard Report"""

import json
import os
import re
from datetime import datetime
from collections import Counter

# Paths
BASE_DIR = '/Users/klebergarciaalcatrao/zion-support.github.io'
SERVICES_DATA = os.path.join(BASE_DIR, 'app/data/servicesData.json')
GROWTH_METRICS = os.path.join(BASE_DIR, 'app/data/growth-metrics.json')
SENT_LOG = os.path.join(BASE_DIR, 'app/data/outreach/sent_log.json')
DISCOVERED_LEADS = os.path.join(BASE_DIR, 'app/data/discovered_leads.json')
SITEMAP = os.path.join(BASE_DIR, 'sitemap.xml')

# Read data files
with open(SERVICES_DATA, 'r') as f:
    services = json.load(f)

with open(GROWTH_METRICS, 'r') as f:
    growth_metrics = json.load(f)

with open(SENT_LOG, 'r') as f:
    sent_log = json.load(f)

with open(DISCOVERED_LEADS, 'r') as f:
    discovered_leads = json.load(f)

with open(SITEMAP, 'r') as f:
    sitemap_content = f.read()

# Count categories
categories = Counter()
for s in services:
    cat = s.get('category', 'unknown')
    categories[cat] += 1

# Count industries
industries = Counter()
for s in services:
    ind = s.get('industry', 'unknown')
    industries[ind] += 1

# Count sitemap URLs
sitemap_urls = len(re.findall(r'<url>', sitemap_content))

# Generate report
print('=' * 60)
print('📊 GROWTH METRICS DASHBOARD')
print('=' * 60)

print('\n📦 SERVICE CATALOG')
print(f'   Total services: {len(services)}')

print('\n📈 GROWTH VELOCITY')
print(f'   Current run: {growth_metrics["services_discovered"]} new services discovered')
print(f'   Total services: {growth_metrics["total_services"]}')
print(f'   Engine version: {growth_metrics["engine_version"]}')
print(f'   Last run: {growth_metrics["last_run"]}')

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
print(f'   Sitemap URLs: {sitemap_urls}')

print('\n' + '=' * 60)
print(f'   Generated at: {datetime.now().isoformat()}')
print('=' * 60)