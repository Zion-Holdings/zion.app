#!/usr/bin/env python3
"""Generate 500 more — pushing to 20k+ services."""
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

# 500 more services
clouds2 = ["Oracle","IBM Cloud","Alibaba Cloud","OVHcloud","Hetzner","Scaleway","Vultr","Akamai","Cloudflare Workers","Vercel","Netlify","Supabase","PlanetScale","CockroachDB","TimescaleDB","ClickHouse","ScyllaDB","ArangoDB","Couchbase","Firestore"]
for c in clouds2:
    for t in ["Deploy","Monitor","Scale","Backup","Secure"]:
        add(f"Hermes {c} {t} Agent","devops","technology",f"Autonomous {t} for {c} via Hermes",{"basic":"799","pro":"2399","enterprise":"7999"},"🔄")

sec2 = ["API Security","Container Security","Serverless Security","Supply Chain Security","IoT Security","OT Security","Mobile Security","Database Security","Application Security","Network Detection","Breach Simulation","Red Team","Blue Team","Purple Team","GRC","Risk Management","Audit Management","Policy Management","Vendor Risk","Third Party Risk"]
for s in sec2:
    add(f"Hermes {s} Agent","security","technology",f"Autonomous {s} via Hermes",{"basic":"1499","pro":"4499","enterprise":"14999"},"🛡️")

data2 = ["Feature Store","ML Ops","A/B Testing","Experimentation","Reverse ETL","Data Catalog","Data Mesh","Data Contract","Data Quality","Lineage","Observability","Cost Governance","Usage Analytics","Product Analytics","Growth Analytics","Attribution","Cohort Analysis","Funnel Analysis","Retention Analysis","Revenue Analytics"]
for d in data2:
    add(f"Hermes {d} Agent","data","technology",f"Autonomous {d} via Hermes",{"basic":"599","pro":"1799","enterprise":"5999"},"📊")

fin2 = ["Invoice Factoring","Trade Finance","Lending","Insurance Underwriting","Claims Processing","Reinsurance","Wealth Management","Portfolio Management","Order Management","Treasury Management","Cash Management","FX Management","Hedging","Tax Planning","Transfer Pricing","ESG Investing","Impact Investing","Quantitative Research","Algorithmic Trading","Market Making"]
for f in fin2:
    add(f"Hermes {f} Agent","finance","finance",f"Autonomous {f} via Hermes",{"basic":"1499","pro":"4499","enterprise":"14999"},"💳")

health2 = ["Genomics","Proteomics","Pathology","Radiology","Oncology","Cardiology","Neurology","Orthopedics","Pediatrics","Geriatrics","Dermatology","Ophthalmology","Urology","Nephrology","Endocrinology","Gastroenterology","Pulmonology","Rheumatology","Immunology","Anesthesiology"]
for h in health2:
    add(f"Hermes {h} Agent","healthcare","healthcare",f"Autonomous {h} via Hermes",{"basic":"999","pro":"2999","enterprise":"9999"},"🏥")

legal2 = ["Litigation","Arbitration","Mediation","Due Diligence","M&A","Corporate Governance","Employment","Immigration","Tax Law","Environmental","Energy Law","Real Estate Law","Construction Law","Maritime","Aviation","Space Law","Entertainment","Sports Law","Food Law","Privacy Law"]
for l in legal2:
    add(f"Hermes {l} Agent","legal","legal",f"Autonomous {l} via Hermes",{"basic":"999","pro":"2999","enterprise":"9999"},"⚖️")

edu2 = ["STEM","STEAM","Montessori","Waldorf","IB","AP","Vocational","Corporate Training","Compliance Training","Safety Training","Sales Training","Leadership","Executive Coaching","Peer Tutoring","Group Learning","Adaptive Assessment","Rubric Generator","Syllabus Builder","Curriculum Mapper","Learning Path Designer"]
for e in edu2:
    add(f"Hermes {e} Agent","education","education",f"Autonomous {e} via Hermes",{"basic":"499","pro":"1499","enterprise":"4999"},"📚")

ret2 = ["Wishlist","Gift Cards","Subscription","Pre-order","Backorder","Drop-shipping","White Label","Private Label","Cross-border","Omnichannel","Unified Commerce","Headless Commerce","Social Commerce","Live Commerce","Voice Commerce","Visual Commerce","Conversational Commerce","B2B Commerce","Marketplace","Aggregator"]
for r in ret2:
    add(f"Hermes {r} Agent","retail","retail",f"Autonomous {r} via Hermes",{"basic":"599","pro":"1799","enterprise":"5999"},"🛍️")

hr2 = ["Internal Mobility","Succession Planning","Workforce Analytics","People Analytics","Org Design","Culture Analytics","Employer Branding","Total Rewards","Benefits Admin","Time & Attendance","Leave Management","Contingent Workforce","Gig Platform","Freelance Management","Crowdsourcing","Referral Program","Buddy Program","Mentoring","Coaching","Wellbeing"]
for h in hr2:
    add(f"Hermes {h} Agent","hr","hr",f"Autonomous {h} via Hermes",{"basic":"499","pro":"1499","enterprise":"4999"},"👥")

mfg2 = ["Digital Twin","Thread","Smart Factory","Lean Manufacturing","Six Sigma","Continuous Improvement","Gemba","Kanban","Poka-Yoke","Andon","Overall Equipment Effectiveness","Yield Management","Cycle Time Reduction","Changeover Reduction","SMED","TPM","RCA","FMEA","SPC","Quality Management System"]
for m in mfg2:
    add(f"Hermes {m} Agent","manufacturing","manufacturing",f"Autonomous {m} via Hermes",{"basic":"999","pro":"2999","enterprise":"9999"},"🏭")

energy2 = ["Virtual Power Plant","Peer-to-Peer Energy","Microgrid","Distributed Energy","Net Metering","Time-of-Use","Capacity Market","Ancillary Services","Frequency Regulation","Voltage Support","Renewable Certificates","Guarantees of Origin","Carbon Offsets","Carbon Capture","Green Hydrogen","Electrolyzer","Fuel Cell","Battery Storage","EV Charging","V2G"]
for e in energy2:
    add(f"Hermes {e} Agent","energy","energy",f"Autonomous {e} via Hermes",{"basic":"1999","pro":"5999","enterprise":"19999"},"⚡")

log2 = ["Last Mile","Middle Mile","Long Haul","LTL","FTL","Intermodal","Multimodal","Cross-border","Cold Chain","White Glove","Same-day","Next-day","Crowdsourced","Drone Delivery","Autonomous Vehicle","Robotic Delivery","Micro-fulfillment","Dark Store","Dark Kitchen","Click & Collect"]
for l in log2:
    add(f"Hermes {l} Agent","logistics","logistics",f"Autonomous {l} via Hermes",{"basic":"699","pro":"2099","enterprise":"6999"},"🚚")

re2 = ["Commercial","Residential","Industrial","Hospitality","Healthcare","Education","Government","Military","Agricultural","Land","Condo","Co-op","Townhome","Multi-family","Senior Living","Student Housing","Affordable","Luxury","Green","Historic"]
for r in re2:
    add(f"Hermes {r} Real Estate Agent","real-estate","real-estate",f"Autonomous {r} real estate via Hermes",{"basic":"799","pro":"2399","enterprise":"7999"},"🏠")

with open(DATA, 'w') as f:
    json.dump(services, f, indent=2)

print(f"Added: {count}")
print(f"Total: {len(services)}")
