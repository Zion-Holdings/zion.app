#!/usr/bin/env python3
import json
from datetime import datetime
from pathlib import Path

services_file = Path('/Users/klebergarciaalcatrao/zion-support.github.io/app/data/servicesData.json')
growth_metrics_file = Path('/Users/klebergarciaalcatrao/zion-support.github.io/growth-metrics.json')

with open(services_file, 'r') as f:
    services = json.load(f)

print(f'Current services count: {len(services)}')

with open(growth_metrics_file, 'r') as f:
    metrics = json.load(f)

metrics['total_services_main'] = len(services)
metrics['services_added_discovery'] = 16
metrics['total_services_added_this_run'] = 16
metrics['last_run'] = datetime.utcnow().isoformat() + 'Z'

industry_counts = {}
for svc in services:
    ind = svc.get('industry', 'unknown')
    industry_counts[ind] = industry_counts.get(ind, 0) + 1

metrics['industry_breakdown_main'] = industry_counts

TARGET_INDUSTRIES = ['real-estate', 'telecom', 'gaming', 'healthcare', 'finance', 'manufacturing', 'retail', 'logistics']
target_counts = {}
for ind in TARGET_INDUSTRIES:
    target_counts[ind] = industry_counts.get(ind, 0)
metrics['target_industry_counts_main'] = target_counts

metrics['total_services'] = len(services)

with open(growth_metrics_file, 'w') as f:
    json.dump(metrics, f, indent=2)

print('Updated growth-metrics.json')
print(f'Total services: {len(services)}')
print(f'Target industry counts: {target_counts}')