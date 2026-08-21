#!/usr/bin/env python3
import json, uuid
from datetime import datetime, timezone

DATA = '/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json'

with open(DATA) as f:
    services = json.load(f)

ts = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')

cats = [
    ("ai-agents", "technology", "🤖"), ("messaging", "technology", "✈️"),
    ("devops", "technology", "🔄"), ("security", "technology", "🛡️"),
    ("data", "technology", "📊"), ("sales", "technology", "💰"),
    ("customer-success", "technology", "🌟"), ("healthcare", "healthcare", "🏥"),
    ("finance", "finance", "💳"), ("education", "education", "📚"),
    ("real-estate", "real-estate", "🏠"), ("legal", "legal", "⚖️"),
    ("manufacturing", "manufacturing", "🏭"), ("retail", "retail", "🛍️"),
    ("hr", "hr", "👥"), ("energy", "energy", "⚡"),
    ("logistics", "logistics", "🚚"), ("agriculture", "agriculture", "🌾"),
    ("hospitality", "hospitality", "🏨"), ("gaming", "gaming", "🎮"),
]

templates = {
    "ai-agents": [("Multi-Agent Swarm Orchestrator", "Deploy fleets of AI agents with collision avoidance and auto-scaling.", "10x throughput, zero idle compute"), ("Agent Fleet Manager", "Monitor and scale thousands of concurrent agents across profiles.", "Manage 1000+ agents"), ("Agent Delegation Matrix", "Intelligent task delegation with role-based routing and approval gates.", "Zero misrouted tasks")],
    "messaging": [("Telegram Agent Suite", "Full-featured bot deployment: group mgmt, inline queries, payments.", "Deploy in minutes"), ("Discord Agent Platform", "Slash commands, modals, auto-moderation, ticketing at enterprise scale.", "Enterprise bots")],
    "devops": [("CI/CD Agent", "Pipeline management: detect failures, trigger rebuilds, self-heal deploys.", "Zero-downtime"), ("Infrastructure Monitor Agent", "24/7 multi-cloud monitoring with predictive alerting and auto-remediation.", "99.99% uptime")],
    "security": [("Security Response Agent", "Detect threats, isolate assets, trigger forensics, notify stakeholders.", "MTTD < 1min")],
    "data": [("Data Pipeline Agent", "Ingest, transform, validate, alert across batch and streaming data.", "Zero data loss")],
    "sales": [("Lead Scoring Agent", "Behavioral scoring, intent detection, automated routing.", "Higher conversion")],
    "customer-success": [("Customer Success Agent", "Health scoring, churn prediction, QBR automation, renewal management.", "Reduced churn")],
    "healthcare": [("Clinical Trial Agent", "Patient recruitment, site monitoring, regulatory compliance tracking.", "Faster recruitment")],
    "finance": [("Fraud Detection Agent", "Real-time anomaly detection, transaction scoring, auto-blocking.", "Zero fraud loss")],
    "education": [("EdTech Content Agent", "Curriculum-aligned content generation, assessments, learning paths.", "Faster content")],
    "real-estate": [("Property Valuation Agent", "Comparative market analysis, trend prediction, automated appraisals.", "Accurate valuations")],
    "legal": [("Contract Review Agent", "Clause analysis, risk scoring, redlining automation.", "Faster review")],
    "manufacturing": [("Predictive Maintenance Agent", "Sensor analysis, failure prediction, work order automation.", "Reduced downtime")],
    "retail": [("Product Recommendation Agent", "Personalized suggestions, A/B testing, conversion optimization.", "Higher conversion")],
    "hr": [("Recruiting Agent", "Sourcing, screening, interview scheduling, offer management.", "Faster hiring")],
    "energy": [("Energy Trading Agent", "Price forecasting, position management, risk analytics.", "Higher profits")],
    "logistics": [("Logistics Agent", "Route optimization, carrier selection, shipment tracking.", "Faster delivery")],
    "agriculture": [("Precision Agriculture Agent", "Satellite imagery, yield prediction, irrigation optimization.", "Yield +20%")],
    "hospitality": [("Hotel Revenue Agent", "Dynamic pricing, demand forecasting, competitor analysis.", "RevPAR +15%")],
    "gaming": [("Game AI Agent", "Intelligent NPCs, adaptive difficulty, emergent gameplay.", "Dev time -70%")],
}

added = 0
for cat, ind, icon in cats:
    for name, desc, benefit in templates.get(cat, []):
        sid = f"hermes-{cat}-{name.lower().replace(' ', '-').replace('/', '')}-{uuid.uuid4().hex[:6]}"
        entry = {
            "id": sid, "name": name, "title": name,
            "description": desc, "category": cat, "industry": ind,
            "features": [benefit.split(',')[0], "Auto-scaling", "Real-time analytics", "Compliance ready", "API integration"],
            "benefits": [benefit, "Cost reduction", "Time savings", "Scalable", "Zero manual work"],
            "pricing": {"basic": str(199 + hash(name) % 800), "pro": str(599 + hash(name) % 2000), "enterprise": str(1999 + hash(name) % 8000)},
            "timestamp": ts,
            "contactInfo": {"website": f"/services/{sid}", "email": "hello@ziontechgroup.com", "phone": "+1 (302) 464 0950"},
            "icon": icon, "href": f"/services/{sid}", "popular": True
        }
        services.append(entry)
        added += 1

with open(DATA, 'w') as f:
    json.dump(services, f, indent=2)

print(f"Added: {added}")
print(f"Total: {len(services)}")
