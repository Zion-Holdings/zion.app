#!/usr/bin/env python3
"""10000 more — push to 30k+."""
import json, uuid
from datetime import datetime, timezone

DATA = '/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json'

with open(DATA) as f:
    services = json.load(f)

existing = {s['name'] for s in services}
ts = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
count = 0

def add(name, cat, ind, desc, icon):
    global count
    if name in existing: return
    sid = f"hermes-{cat}-{name.lower().replace(' ','-').replace('/','')}-{uuid.uuid4().hex[:6]}"
    services.append({"id":sid,"name":name,"title":name,"description":desc,"category":cat,"industry":ind,
        "features":["Auto-scaling","Real-time analytics","Compliance ready","API integration"],
        "benefits":["Deploy in minutes","Cost reduction","Time savings","Scalable"],
        "pricing":{"basic":"799","pro":"2399","enterprise":"7999"},"timestamp":ts,
        "contactInfo":{"website":f"/services/{sid}","email":"hello@ziontechgroup.com","phone":"+1 (302) 464 0950"},
        "icon":icon,"href":f"/services/{sid}","popular":count%4==0})
    existing.add(name); count += 1

# 10000 more — every possible combo
prefixes = ["Hyper","Ultra","Mega","Super","Prime","Alpha","Omega","Neo","Next","Pro","Max","Elite","Apex","Zen","Nova","Orbit","Pulse","Spark","Titan","Vortex","Prism","Core","Edge","Peak","Summit","Catalyst","Vector","Matrix","Nexus","Vertex","Apex","Hyper","Ultra","Mega","Super","Prime","Alpha","Omega","Neo","Next","Pro"]
suffixes = ["AI","Intelligence","Automation","Orchestration","Coordination","Synchronization","Optimization","Acceleration","Transformation","Innovation","Evolution","Revolution","Disruption","Integration","Synthesis","Fusion","Amplification","Enhancement","Augmentation","Generation","Management","Analytics","Monitoring","Security","Compliance","Governance","Operations","Strategy","Execution","Delivery"]
domains = [
    ("Customer Experience","cx","🛍️"),("Employee Experience","ex","👥"),
    ("Digital Transformation","dx","🔄"),("Product Development","product","🚀"),
    ("Revenue Operations","revops","💰"),("Marketing Operations","marketing","📢"),
    ("Sales Operations","sales","🎯"),("Finance Operations","finance","💳"),
    ("Legal Operations","legal","⚖️"),("IT Operations","it","🖥️"),
    ("HR Operations","hr","👥"),("Supply Chain","logistics","📦"),
    ("Procurement","procurement","🛒"),("Quality Assurance","qa","✅"),
    ("Risk Management","risk","⚠️"),("Compliance","compliance","📋"),
    ("Cybersecurity","security","🛡️"),("Data Governance","data","📊"),
    ("Knowledge Management","knowledge","🧠"),("Innovation Management","innovation","💡"),
    ("Project Management","pm","📋"),("Portfolio Management","portfolio","📁"),
    ("Vendor Management","vendors","🏪"),("Asset Management","assets","🏭"),
    ("Facility Management","facilities","🏢"),("Fleet Management","fleet","🚗"),
    ("Inventory Management","inventory","📦"),("Order Management","orders","📦"),
    ("Warehouse Management","warehouse","🏭"),("Transport Management","transport","🚚"),
    ("Last Mile Delivery","delivery","📦"),("Cold Chain","cold-chain","❄️"),
    ("Pharma Logistics","pharma","💊"),("Food Safety","food-safety","🍽️"),
    ("Cross Border","cross-border","🌐"),("Customs Clearance","customs","🛃"),
    ("Trade Finance","trade-finance","💳"),("Export Credit","export-credit","💰"),
    ("Working Capital","working-capital","💵"),("Treasury Management","treasury","🏦"),
    ("Cash Management","cash","💵"),("Liquidity Management","liquidity","💧"),
    ("FX Risk","fx","💱"),("Credit Risk","credit","⚠️"),
    ("Market Risk","market","📉"),("Operational Risk","operational","⚙️"),
    ("ESG Risk","esg","🌱"),("Cyber Risk","cyber","🛡️"),
    ("Third Party Risk","third-party","🤝"),("Climate Risk","climate","🌍"),
    ("Crop Monitoring","agriculture","🌾"),("Yield Optimization","agriculture","📈"),
    ("Soil Analysis","agriculture","🔬"),("Weather Intelligence","agriculture","🌤️"),
    ("Irrigation Management","agriculture","💧"),("Pest Control","agriculture","🐛"),
    ("Guest Services","hospitality","🏨"),("Reservation Management","hospitality","📅"),
    ("Housekeeping","hospitality","🧹"),("Food & Beverage","hospitality","🍽️"),
    ("Revenue Management","hospitality","💰"),("Review Management","hospitality","⭐"),
    ("Concierge AI","hospitality","🤖"),("Events Management","hospitality","🎉"),
    ("Game Development","gaming","🎮"),("Player Support","gaming","👥"),
    ("Anti-Cheat","gaming","🛡️"),("Matchmaking","gaming","🔍"),
    ("In-Game Economy","gaming","💰"),("Esports Management","gaming","🏆"),
    ("UGC Moderation","gaming","📋"),("Live Ops","gaming","📡"),
]

for prefix in prefixes:
    for suffix in suffixes:
        for domain, cat, icon in domains:
            add(f"Hermes {prefix} {domain} {suffix}", cat, "technology",
                f"{prefix} {domain} {suffix} via Hermes AI agents", icon)

with open(DATA, 'w') as f:
    json.dump(services, f, indent=2)

print(f"Added: {count}")
print(f"Total: {len(services)}")
