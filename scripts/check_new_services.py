import json
with open('/Users/klebergarciaalcatrao/app/data/servicesData.json') as f:
    data = json.load(f)
services = data if isinstance(data, list) else data.get('services', [])
new_services = [
    'Audio Streaming AI-Powered Data Synchronization',
    'Insurance AI-Powered ETL Pipeline Optimization',
    'Ai Threat Intelligence',
    'Enterprise Social AI-Powered Market Intelligence',
    'AI Precision Agriculture & Crop Management',
    'API Security & Threat Protection Gateway',
    'Marketing Attribution Customer Data Platform AI',
    'Dashboard AI-Powered Security Information & Event Management',
    'Power Systems AI-Powered Fraud Detection',
    'Modern Development Platform'
]
for s in services:
    title = s.get('title', s.get('name', ''))
    if title in new_services:
        print(f'{title}: {s.get("industry")}')