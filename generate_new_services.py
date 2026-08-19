#!/usr/bin/env python3
"""Generate 5-10 new SEO-optimized services for target industries and add to servicesData.json"""

import json
import uuid
from datetime import datetime
from pathlib import Path

# Target industries from growth_metrics.json
TARGET_INDUSTRIES = [
    "real-estate",
    "telecom",
    "gaming",
    "healthcare",
    "finance",
    "manufacturing",
    "retail",
    "logistics"
]

# Service templates for each industry with SEO-optimized titles and descriptions
SERVICE_TEMPLATES = {
    "real-estate": [
        {
            "name": "AI Property Valuation Engine",
            "title": "AI Property Valuation Engine",
            "description": "Instant, accurate property valuations using AI-powered comparative market analysis. Integrates MLS data, recent sales, and market trends for residential and commercial real estate.",
            "category": "ai",
            "features": ["Automated comparative market analysis", "MLS data integration", "Real-time market trend analysis", "Residential and commercial support", "API for platform integration"],
            "benefits": ["Reduce valuation time from days to minutes", "Increase accuracy with ML models", "Scale across multiple markets", "Reduce manual appraisal costs", "Improve client confidence"],
            "pricing": {"basic": "299", "pro": "799", "enterprise": "2499"},
            "icon": "🏠",
            "popular": True
        },
        {
            "name": "Smart Property Management Platform",
            "title": "Smart Property Management Platform",
            "description": "End-to-end property management automation with AI-powered tenant screening, maintenance prediction, and rent optimization. Maximizes ROI for property owners and managers.",
            "category": "automation",
            "features": ["AI tenant screening and scoring", "Predictive maintenance scheduling", "Dynamic rent optimization", "Automated lease management", "Financial reporting and analytics"],
            "benefits": ["Reduce vacancy rates by 30%", "Cut maintenance costs 25%", "Automate 80% of routine tasks", "Improve tenant retention", "Real-time portfolio insights"],
            "pricing": {"basic": "199", "pro": "599", "enterprise": "1999"},
            "icon": "🏢",
            "popular": True
        }
    ],
    "telecom": [
        {
            "name": "Network Traffic Anomaly Detection",
            "title": "Network Traffic Anomaly Detection",
            "description": "Real-time AI-powered anomaly detection for telecom networks. Identifies DDoS attacks, fraud, and performance degradation before they impact customers.",
            "category": "security",
            "features": ["Real-time traffic analysis", "ML-based anomaly detection", "DDoS and fraud identification", "Automated alerting", "Integration with SIEM/SOAR"],
            "benefits": ["Detect threats in milliseconds", "Reduce false positives 90%", "Prevent revenue leakage", "Maintain SLA compliance", "Scale to petabyte networks"],
            "pricing": {"basic": "999", "pro": "2999", "enterprise": "9999"},
            "icon": "🛡️",
            "popular": True
        },
        {
            "name": "5G Network Slicing Optimizer",
            "title": "5G Network Slicing Optimizer",
            "description": "AI-driven optimization of 5G network slices for maximum efficiency and QoS. Dynamic resource allocation based on traffic patterns and service requirements.",
            "category": "ai",
            "features": ["Dynamic slice orchestration", "QoS guarantee automation", "Traffic prediction models", "Resource efficiency optimization", "Multi-tenant isolation"],
            "benefits": ["Improve spectral efficiency 40%", "Guarantee slice SLAs", "Reduce operational costs", "Enable new revenue streams", "Automate slice lifecycle"],
            "pricing": {"basic": "1999", "pro": "4999", "enterprise": "14999"},
            "icon": "📡",
            "popular": True
        }
    ],
    "gaming": [
        {
            "name": "Game AI Behavior Engine",
            "title": "Game AI Behavior Engine",
            "description": "Create intelligent NPCs with realistic behaviors using advanced AI. Supports dynamic dialogue, adaptive difficulty, and emergent gameplay without scripted decision trees.",
            "category": "ai",
            "features": ["Dynamic NPC behavior", "Adaptive difficulty scaling", "Procedural dialogue generation", "Emergent gameplay support", "Unity/Unreal integration"],
            "benefits": ["Reduce AI development time 70%", "Increase player engagement", "Create living worlds", "Scale to thousands of NPCs", "No behavior tree maintenance"],
            "pricing": {"basic": "999", "pro": "2999", "enterprise": "9999"},
            "icon": "🎮",
            "popular": True
        },
        {
            "name": "LiveOps Analytics Platform",
            "title": "LiveOps Analytics Platform",
            "description": "Real-time analytics for live game operations. Player segmentation, event optimization, economy balancing, and automated A/B testing for maximum retention and revenue.",
            "category": "analytics",
            "features": ["Real-time player analytics", "Automated A/B testing", "Economy balancing AI", "Event performance optimization", "Cohort analysis"],
            "benefits": ["Increase Day 30 retention 15%", "Optimize IAP revenue", "Reduce live ops workload", "Data-driven event planning", "Player lifecycle management"],
            "pricing": {"basic": "499", "pro": "1499", "enterprise": "4999"},
            "icon": "📊",
            "popular": True
        }
    ],
    "healthcare": [
        {
            "name": "Clinical Documentation AI",
            "title": "Clinical Documentation AI",
            "description": "Automate clinical documentation with ambient AI scribes. Generates SOAP notes, coding suggestions, and compliance checks in real-time during patient encounters.",
            "category": "ai",
            "features": ["Ambient clinical listening", "Real-time SOAP generation", "ICD-10/CPT code suggestions", "Compliance validation", "EHR integration (Epic, Cerner)"],
            "benefits": ["Save 2 hours/day per physician", "Reduce documentation errors", "Improve coding accuracy", "Increase patient face time", "Burnout reduction"],
            "pricing": {"basic": "299/provider/mo", "pro": "599/provider/mo", "enterprise": "custom"},
            "icon": "🏥",
            "popular": True
        },
        {
            "name": "Patient Flow Optimization",
            "title": "Patient Flow Optimization",
            "description": "AI-powered hospital operations platform. Predicts admission surges, optimizes bed management, reduces ED wait times, and coordinates discharge planning across departments.",
            "category": "ai",
            "features": ["Admission surge prediction", "Bed management optimization", "ED wait time reduction", "Discharge coordination", "Staffing optimization"],
            "benefits": ["Reduce LOS by 15%", "Cut ED wait times 30%", "Increase bed utilization", "Improve staff satisfaction", "CMS compliance ready"],
            "pricing": {"basic": "4999/mo", "pro": "14999/mo", "enterprise": "custom"},
            "icon": "🏥",
            "popular": True
        }
    ],
    "finance": [
        {
            "name": "AI Fraud Detection Engine",
            "title": "AI Fraud Detection Engine",
            "description": "Real-time fraud detection for payments, banking, and insurance. Graph neural networks detect complex fraud rings with 99.9% accuracy and sub-millisecond latency.",
            "category": "security",
            "features": ["Graph neural network detection", "Sub-millisecond scoring", "Fraud ring identification", "Explainable AI decisions", "Real-time model updates"],
            "benefits": ["Reduce fraud losses 60%", "Minimize false declines", "Regulatory compliance", "Scale to billions of transactions", "Continuous learning"],
            "pricing": {"basic": "0.001/transaction", "pro": "0.0005/transaction", "enterprise": "custom"},
            "icon": "🛡️",
            "popular": True
        },
        {
            "name": "Algorithmic Trading Risk Manager",
            "title": "Algorithmic Trading Risk Manager",
            "description": "Real-time risk management for algorithmic trading. Pre-trade checks, position monitoring, and automated kill switches with microsecond latency for HFT and quant funds.",
            "category": "risk",
            "features": ["Pre-trade risk checks", "Real-time position monitoring", "Automated kill switches", "Regulatory reporting", "Multi-venue support"],
            "benefits": ["Prevent catastrophic losses", "MiFID II compliance", "Sub-microsecond latency", "Reduce operational risk", "Audit-ready trails"],
            "pricing": {"basic": "9999/mo", "pro": "29999/mo", "enterprise": "custom"},
            "icon": "⚡",
            "popular": True
        }
    ],
    "manufacturing": [
        {
            "name": "Predictive Maintenance AI",
            "title": "Predictive Maintenance AI",
            "description": "Predict equipment failures before they happen using IoT sensor data and AI. Reduces unplanned downtime by 50% and extends asset life across manufacturing operations.",
            "category": "ai",
            "features": ["Multi-sensor data fusion", "Failure prediction 30+ days out", "Root cause analysis", "Work order automation", "CMMS/ERP integration"],
            "benefits": ["Reduce downtime 50%", "Cut maintenance costs 25%", "Extend equipment life", "Optimize spare parts inventory", "Safety incident reduction"],
            "pricing": {"basic": "499/asset/mo", "pro": "999/asset/mo", "enterprise": "custom"},
            "icon": "🔧",
            "popular": True
        },
        {
            "name": "Quality Inspection Vision AI",
            "title": "Quality Inspection Vision AI",
            "description": "Automated visual inspection using computer vision. Detects defects at line speed with 99.9% accuracy. Adapts to new products without reprogramming.",
            "category": "ai",
            "features": ["Line-speed inspection", "99.9% defect detection", "Zero-shot learning", "Defect classification", "Traceability integration"],
            "benefits": ["Eliminate manual inspection", "Reduce scrap 40%", "Increase throughput", "Consistent quality 24/7", "Regulatory documentation"],
            "pricing": {"basic": "1999/line/mo", "pro": "4999/line/mo", "enterprise": "custom"},
            "icon": "👁️",
            "popular": True
        }
    ],
    "retail": [
        {
            "name": "Personalized Recommendation Engine",
            "title": "Personalized Recommendation Engine",
            "description": "AI-powered personalization across web, mobile, email, and in-store. Real-time recommendations using collaborative filtering, content-based, and session-aware models.",
            "category": "ai",
            "features": ["Real-time personalization", "Multi-channel delivery", "Cold-start handling", "A/B testing framework", "Revenue attribution"],
            "benefits": ["Increase conversion 15-30%", "Boost AOV 10-20%", "Improve customer LTV", "Reduce marketing spend", "Privacy-compliant"],
            "pricing": {"basic": "0.001/recommendation", "pro": "0.0005/recommendation", "enterprise": "custom"},
            "icon": "🎯",
            "popular": True
        },
        {
            "name": "Inventory Demand Forecasting",
            "title": "Inventory Demand Forecasting",
            "description": "AI demand forecasting for retail inventory. SKU-level predictions across channels, seasons, and promotions. Automated replenishment and allocation optimization.",
            "category": "analytics",
            "features": ["SKU-level forecasting", "Promotion impact modeling", "Multi-channel demand", "Automated replenishment", "Stockout prevention"],
            "benefits": ["Reduce stockouts 50%", "Cut excess inventory 30%", "Improve sell-through", "Automate buying decisions", "Omnichannel optimization"],
            "pricing": {"basic": "499/mo", "pro": "1499/mo", "enterprise": "custom"},
            "icon": "📦",
            "popular": True
        }
    ],
    "logistics": [
        {
            "name": "Route Optimization AI",
            "title": "Route Optimization AI",
            "description": "AI-powered route optimization for last-mile and long-haul logistics. Real-time traffic, weather, and constraint-aware routing with dynamic reoptimization.",
            "category": "ai",
            "features": ["Real-time dynamic routing", "Multi-constraint optimization", "Traffic/weather integration", "Fleet-wide optimization", "Driver app integration"],
            "benefits": ["Reduce fuel costs 15%", "Improve on-time delivery", "Increase driver efficiency", "Reduce emissions", "Scale to 10,000+ vehicles"],
            "pricing": {"basic": "49/vehicle/mo", "pro": "99/vehicle/mo", "enterprise": "custom"},
            "icon": "🗺️",
            "popular": True
        },
        {
            "name": "Warehouse Automation Orchestrator",
            "title": "Warehouse Automation Orchestrator",
            "description": "Orchestrate AS/RS, conveyors, AMRs, and pick-to-light systems with AI. Real-time slotting, wave optimization, and labor allocation for maximum throughput.",
            "category": "automation",
            "features": ["Multi-system orchestration", "Real-time slotting AI", "Wave optimization", "Labor allocation", "WMS/ERP integration"],
            "benefits": ["Increase throughput 50%", "Reduce labor costs 30%", "Optimize space utilization", "Real-time visibility", "Peak season readiness"],
            "pricing": {"basic": "9999/mo", "pro": "29999/mo", "enterprise": "custom"},
            "icon": "🏭",
            "popular": True
        }
    ]
}

def generate_service_id(name, industry):
    """Generate a unique service ID"""
    base = name.lower().replace(' ', '-').replace('/', '-').replace('.', '')
    base = ''.join(c for c in base if c.isalnum() or c == '-')
    unique = uuid.uuid4().hex[:8]
    return f"{base}-{unique}"

def create_service_entry(template, industry):
    """Create a service entry matching the servicesData.json schema"""
    service_id = generate_service_id(template['name'], industry)
    timestamp = datetime.utcnow().isoformat() + 'Z'
    
    return {
        "id": service_id,
        "name": template['name'],
        "title": template['title'],
        "description": template['description'],
        "category": template['category'],
        "industry": industry,
        "features": template['features'],
        "benefits": template['benefits'],
        "pricing": template['pricing'],
        "timestamp": timestamp,
        "contactInfo": {
            "website": f"/services/{service_id}",
            "email": "hello@ziontechgroup.com",
            "phone": "+1 (302) 464 0950"
        },
        "icon": template['icon'],
        "href": f"/services/{service_id}",
        "popular": template['popular']
    }

def main():
    services_file = Path('app/data/servicesData.json')
    growth_metrics_file = Path('growth-metrics.json')
    
    # Load existing services
    with open(services_file, 'r') as f:
        data = json.load(f)
    
    # Handle both array and object-with-services-key formats
    if isinstance(data, list):
        services = data
    else:
        services = data.get('services', [])
    print(f"Current services count: {len(services)}")
    
    # Generate new services for target industries
    new_services = []
    for industry in TARGET_INDUSTRIES:
        templates = SERVICE_TEMPLATES.get(industry, [])
        # Add 1 service per industry (8 total across 8 industries — within 5-10 range)
        for template in templates[:1]:
            new_service = create_service_entry(template, industry)
            new_services.append(new_service)
            print(f"Generated: {new_service['title']} ({industry})")
    
    # Add new services to the list
    services.extend(new_services)
    
    # Write back to servicesData.json (handle both formats)
    if isinstance(data, list):
        output_data = services
    else:
        data['services'] = services
        output_data = data
    
    with open(services_file, 'w') as f:
        json.dump(output_data, f, indent=2)
    
    print(f"\n✅ Added {len(new_services)} new services. Total: {len(services)}")
    
    # Update growth_metrics.json
    if growth_metrics_file.exists():
        with open(growth_metrics_file, 'r') as f:
            metrics = json.load(f)
        
        metrics['total_services_main'] = len(services)
        metrics['services_added_discovery'] = len(new_services)
        metrics['total_services_added_this_run'] = len(new_services)
        metrics['last_run'] = datetime.utcnow().isoformat() + 'Z'
        
        # Update industry breakdown
        industry_counts = {}
        for svc in services:
            ind = svc.get('industry', 'unknown')
            industry_counts[ind] = industry_counts.get(ind, 0) + 1
        
        metrics['industry_breakdown_main'] = industry_counts
        
        # Update target industry counts
        target_counts = {}
        for ind in TARGET_INDUSTRIES:
            target_counts[ind] = industry_counts.get(ind, 0)
        metrics['target_industry_counts_main'] = target_counts
        
        with open(growth_metrics_file, 'w') as f:
            json.dump(metrics, f, indent=2)
        
        print(f"✅ Updated growth_metrics.json")

if __name__ == '__main__':
    main()