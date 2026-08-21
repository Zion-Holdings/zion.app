#!/usr/bin/env python3
"""Push to 20k+ services — final stretch."""
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

# 400 more services to cross 20k
extra = [
    ("Telegram", "messaging", "✈️"), ("Discord", "messaging", "🎮"), ("Slack", "messaging", "💬"),
    ("WhatsApp", "messaging", "📱"), ("Signal", "messaging", "🔒"), ("Teams", "messaging", "💼"),
    ("Messenger", "messaging", "💬"), ("Viber", "messaging", "📱"), ("Line", "messaging", "✈️"),
    ("WeChat", "messaging", "💬"), ("KakaoTalk", "messaging", "✈️"), ("Zalo", "messaging", "📱"),
]

for platform, cat, icon in extra:
    for t in ["Bot","Support","Marketing","Broadcast","Analytics","Commerce","Booking","Survey","Notification","CRM","Integration","Automation"]:
        add(f"Hermes {platform} {t} Agent", cat, "technology",
            f"Enterprise {t} for {platform} via Hermes", {"basic":"599","pro":"1799","enterprise":"5999"}, icon)

for cat, ind, icon in [("devops","technology","🔄"),("security","security","🛡️"),("data","technology","📊"),
                      ("ai-agents","technology","🤖"),("sales","technology","💰"),("crm","technology","🤝"),
                      ("healthcare","healthcare","🏥"),("finance","finance","💳"),("legal","legal","⚖️"),
                      ("real-estate","real-estate","🏠"),("education","education","📚"),
                      ("manufacturing","manufacturing","🏭"),("retail","retail","🛍️"),("hr","hr","👥"),
                      ("energy","energy","⚡"),("logistics","logistics","🚚"),("agriculture","agriculture","🌾")]:
    for t in ["Pro","Enterprise","Elite","Ultimate","Global","Strategic","Advanced","Premium"]:
        add(f"Hermes {t} {cat.title()} Agent", cat, ind,
            f"{t.title()} {cat} automation via Hermes swarm",
            {"basic":"999","pro":"2999","enterprise":"9999"}, icon)

with open(DATA, 'w') as f:
    json.dump(services, f, indent=2)

print(f"Added: {count}")
print(f"Total: {len(services)}")
