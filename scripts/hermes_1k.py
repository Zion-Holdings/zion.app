#!/usr/bin/env python3
"""Generate 1000 more — push toward 20k+."""
import json, uuid
from datetime import datetime, timezone

DATA = '/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json'

with open(DATA) as f:
    services = json.load(f)

existing = {s['name'] for s in services}
ts = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
count = 0

def add(name, cat, ind, desc, price, icon):
    global count
    if name in existing: return
    sid = f"hermes-{cat}-{name.lower().replace(' ','-').replace('/','')}-{uuid.uuid4().hex[:6]}"
    services.append({"id":sid,"name":name,"title":name,"description":desc,"category":cat,"industry":ind,
        "features":["Auto-scaling","Real-time analytics","Compliance ready","API integration"],
        "benefits":["Deploy in minutes","Cost reduction","Time savings","Scalable"],
        "pricing":price,"timestamp":ts,
        "contactInfo":{"website":f"/services/{sid}","email":"hello@ziontechgroup.com","phone":"+1 (302) 464 0950"},
        "icon":icon,"href":f"/services/{sid}","popular":count%4==0})
    existing.add(name); count += 1

# Industry + task combos
industries = ["Fintech","Healthtech","Edtech","Legaltech","Insurtech","Proptech","Agritech","Foodtech",
              "Traveltech","Sportstech","Adtech","MarTech","DevTools","Cybersecurity","SaaS","E-commerce",
              "Logistics","Energy","Govtech","Media","Entertainment","Automotive","Aerospace","Pharma",
              "Biotech","Medtech","Telecom","Banking","Insurance","Real Estate"]
tasks = ["Bot","Support","Analytics","Marketing","Sales","Operations","Compliance","Integration",
         "Automation","Intelligence","Optimization","Management","Monitoring","Security"]
icons = ["🤖","📊","🛡️","💰","⚡","🔄","📋","🔗"]

for ind in industries:
    for t in tasks:
        add(f"Hermes {ind} {t} Agent", "ai-agents", "technology",
            f"AI-powered {t} for {ind} via Hermes", {"basic":"799","pro":"2399","enterprise":"7999"}, icons[len(ind)%len(icons)])

with open(DATA, 'w') as f:
    json.dump(services, f, indent=2)

print(f"Added: {count}")
print(f"Total: {len(services)}")
