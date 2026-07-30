import json
from datetime import datetime, timezone

# Check ultra_fast_leads.json
with open('/Users/klebergarciaalcatrao/app/data/ultra_fast_leads.json') as f:
    ultra_leads = json.load(f)
print('Ultra-fast leads count:', len(ultra_leads))

# Check discovered_leads.json for hot leads
with open('/Users/klebergarciaalcatrao/app/data/discovered_leads.json') as f:
    leads = json.load(f)

total_leads = len(leads) if isinstance(leads, list) else 0

# Find hot leads (score >= 80 or budget > '50K+')
hot_leads = []
if isinstance(leads, list):
    for lead in leads:
        score = lead.get('score', 0)
        budget = lead.get('budget', '')
        status = lead.get('status', '')
        if score >= 80 or '50K+' in budget or 'Hot' in status:
            hot_leads.append(lead)
        elif score >= 70:
            hot_leads.append(lead)

print(f'Total leads: {total_leads}')
print(f'Hot leads (score >= 70 or high budget): {len(hot_leads)}')

# Check services catalog
with open('/Users/klebergarciaalcatrao/app/data/servicesData.json') as f:
    data = json.load(f)
services = data.get('services', [])
total_services = len(services)
print(f'Total services: {total_services}')

# Count recently added (last 24 hours)
recent = []
for s in services:
    ts = s.get('timestamp', '')
    if ts:
        try:
            dt = datetime.fromisoformat(ts.replace('Z', '+00:00'))
            now = datetime.now(timezone.utc)
            if (now - dt).total_seconds() < 86400:
                recent.append(s)
        except:
            pass
print(f'Services added in last 24h: {len(recent)}')

# Get latest 10 services
sorted_services = sorted(services, key=lambda x: x.get('timestamp', ''), reverse=True)
print()
print('Latest 10 services added:')
for s in sorted_services[:10]:
    print(f"  - {s.get('name', 'N/A')}: {s.get('category', 'N/A')}")

print()
print('Top 5 Hot Leads:')
for lead in hot_leads[:5]:
    print(f"  - {lead.get('company', 'N/A')}: score={lead.get('score')}, budget={lead.get('budget')}, industry={lead.get('industry')}")