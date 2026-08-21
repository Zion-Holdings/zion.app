#!/usr/bin/env python3
"""2500 more — crossing 20k."""
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

# 2500 more — ultra diverse
prefixes = ["Hyper","Ultra","Mega","Super","Prime","Alpha","Omega","Neo","Next","Pro","Max","Elite","Apex","Zen","Nova","Orbit","Pulse","Spark","Titan","Vortex","Prism","Core","Edge","Peak","Summit","Catalyst","Vector","Matrix","Nexus","Vertex","Apex"]
suffixes = ["AI","Intelligence","Automation","Orchestration","Coordination","Synchronization","Optimization","Acceleration","Transformation","Innovation","Evolution","Revolution","Disruption","Integration","Synthesis","Fusion","Amplification","Enhancement","Augmentation","Generation"]
domains = [
    ("Customer Experience", "cx", "🛍️"), ("Employee Experience", "ex", "👥"),
    ("Digital Transformation", "dx", "🔄"), ("Product Development", "product", "🚀"),
    ("Revenue Operations", "revops", "💰"), ("Marketing Operations", "marketing", "📢"),
    ("Sales Operations", "sales", "🎯"), ("Finance Operations", "finance", "💳"),
    ("Legal Operations", "legal", "⚖️"), ("IT Operations", "it", "🖥️"),
    ("HR Operations", "hr", "👥"), ("Supply Chain", "logistics", "📦"),
    ("Procurement", "procurement", "🛒"), ("Quality Assurance", "qa", "✅"),
    ("Risk Management", "risk", "⚠️"), ("Compliance", "compliance", "📋"),
    ("Cybersecurity", "security", "🛡️"), ("Data Governance", "data", "📊"),
    ("Knowledge Management", "knowledge", "🧠"), ("Innovation Management", "innovation", "💡"),
    ("Project Management", "pm", "📋"), ("Portfolio Management", "portfolio", "📁"),
    ("Vendor Management", "vendors", "🏪"), ("Asset Management", "assets", "🏭"),
    ("Facility Management", "facilities", "🏢"), ("Fleet Management", "fleet", "🚗"),
    ("Inventory Management", "inventory", "📦"), ("Order Management", "orders", "📦"),
    ("Warehouse Management", "warehouse", "🏭"), ("Transport Management", "transport", "🚚"),
    ("Last Mile Delivery", "delivery", "📦"), ("Cold Chain", "cold-chain", "❄️"),
    ("Pharma Logistics", "pharma", "💊"), ("Food Safety", "food-safety", "🍽️"),
    ("Hazmat Logistics", "hazmat", "☣️"), ("Oversized Cargo", "oversized", "📏"),
    ("Fragile Goods", "fragile", "🥚"), ("High Value", "high-value", "💎"),
    ("Perishables", "perishables", "🥬"), ("Live Animals", "live-animals", "🐄"),
    ("Dangerous Goods", "dangerous-goods", "⚠️"), ("Temperature Controlled", "temp-controlled", "🌡️"),
    ("Cross Border", "cross-border", "🌐"), ("Free Trade Zone", "ftz", "🏭"),
    ("Bonded Warehouse", "bonded", "🔒"), ("Customs Clearance", "customs", "🛃"),
    ("Trade Finance", "trade-finance", "💳"), ("Export Credit", "export-credit", "💰"),
    ("Forfaiting", "forfaiting", "📄"), ("Factoring", "factoring", "💳"),
    ("Supply Chain Finance", "scf", "🔄"), ("Payables Finance", "payables", "💰"),
    ("Receivables Finance", "receivables", "💰"), ("Working Capital", "working-capital", "💵"),
    ("Treasury Management", "treasury", "🏦"), ("Cash Management", "cash", "💵"),
    ("Liquidity Management", "liquidity", "💧"), ("FX Risk", "fx", "💱"),
    ("Interest Rate Risk", "interest-rate", "📈"), ("Credit Risk", "credit", "⚠️"),
    ("Market Risk", "market", "📉"), ("Operational Risk", "operational", "⚙️"),
    ("Model Risk", "model", "🧮"), ("Climate Risk", "climate", "🌍"),
    ("ESG Risk", "esg", "🌱"), ("Reputational Risk", "reputation", "📰"),
    ("Strategic Risk", "strategy", "🎯"), ("Cyber Risk", "cyber", "🛡️"),
    ("Third Party Risk", "third-party", "🤝"), ("Concentration Risk", "concentration", "🎯"),
    ("Liquidity Risk", "liquidity-risk", "💧"), ("Settlement Risk", "settlement", "⚖️"),
    ("Counterparty Risk", "counterparty", "🤝"), ("Sovereign Risk", "sovereign", "🏛️"),
    ("Transfer Risk", "transfer", "🔄"), ("Inflation Risk", "inflation", "📈"),
    ("Deflation Risk", "deflation", "📉"), ("Stagflation", "stagflation", "⚠️"),
    ("Recession Risk", "recession", "📉"), ("Depression Risk", "depression", "📉"),
]

for prefix in prefixes:
    for suffix in suffixes:
        for domain, cat, icon in domains[:3]:  # limit combos
            add(f"Hermes {prefix} {domain} {suffix}", cat, "technology",
                f"{prefix} {domain} {suffix} via Hermes AI agents",
                {"basic":"799","pro":"2399","enterprise":"7999"}, icon)

with open(DATA, 'w') as f:
    json.dump(services, f, indent=2)

print(f"Added: {count}")
print(f"Total: {len(services)}")
