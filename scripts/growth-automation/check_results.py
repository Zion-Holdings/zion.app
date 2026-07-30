#!/usr/bin/env python3
import json
import os

# Check the services catalog
data_path = '/Users/klebergarciaalcatrao/app/data/servicesData.json'

if os.path.exists(data_path):
    with open(data_path, 'r') as f:
        data = json.load(f)
    total = len(data.get('services', []))
    print(f'Total services in catalog: {total}')
    print(f'Total services field: {data.get("total_services", "N/A")}')
    
    # Check growth metrics
    metrics = data.get('growth_metrics', {})
    print(f'Cycles run: {metrics.get("cycles_run", 0)}')
    print(f'Total emails sent: {metrics.get("total_emails_sent", 0)}')
    print(f'Total prospects contacted: {metrics.get("total_prospects_contacted", 0)}')
    print(f'Meetings booked: {metrics.get("meetings_booked", 0)}')
    print(f'Revenue generated: {metrics.get("revenue_generated", 0)}')
else:
    print(f'Data file not found: {data_path}')

# Check for hot leads
lead_crm_path = '/Users/klebergarciaalcatrao/lead-crm'
if os.path.exists(lead_crm_path):
    # Check pipeline log
    pl_path = os.path.join(lead_crm_path, 'pipeline_log.json')
    if os.path.exists(pl_path):
        with open(pl_path, 'r') as f:
            pl = json.load(f)
        print(f'\nPipeline log type: {type(pl).__name__}')
        if isinstance(pl, dict):
            for k, v in pl.items():
                if 'hot' in k.lower() or 'lead' in k.lower():
                    print(f'{k}: {v}')
        elif isinstance(pl, list):
            print(f'Pipeline log has {len(pl)} items')
else:
    print(f'Lead CRM path not found: {lead_crm_path}')