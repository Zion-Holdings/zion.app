#!/usr/bin/env python3
"""
Sync newly deployed eval-gated service pages into servicesData.json
and regenerate the sitemap.

Reads the deployment results from the latest cron output JSON, constructs
proper catalog entries matching the servicesData.json schema, appends them,
syncs to services.json (stable backup), and regenerates sitemap.xml.
"""
import json, os, re, subprocess, sys, hashlib
from pathlib import Path
from datetime import datetime, timezone

BASE = Path("/Users/klebergarciaalcatrao/zion-support.github.io")
SERVICES_FILE = BASE / "app" / "data" / "servicesData.json"
STABLE_FILE = BASE / "app" / "data" / "services.json"
SERVICES_DIR = BASE / "app" / "services"
CRON_OUTPUT = BASE / "cron_output"
SITEMAP_SCRIPT = BASE / "scripts" / "generate-sitemap-feed.cjs"

# ── Replicate the concept + description data from the hermes generator ──────
CONCEPTS = [
    ("AI-Powered Autonomous Cloud Migration Orchestration Engine", "ai", "enterprise"),
    ("AI-Driven Real-Time Supply Chain Visibility Platform", "ai", "enterprise"),
    ("AI-Enhanced Industrial IoT Predictive Maintenance System", "ai", "enterprise"),
    ("AI-Powered Intelligent Contract Analysis and Review System", "ai", "enterprise"),
    ("AI-Driven Unified Customer Identity Resolution Platform", "ai", "enterprise"),
    ("AI-Enhanced Real-Time Video Analytics and Surveillance Platform", "ai", "enterprise"),
    ("AI-Powered Automated Data Catalog and Metadata Management", "ai", "enterprise"),
    ("AI-Driven Real-Time Incident Classification and Routing Engine", "ai", "enterprise"),
    ("AI-Powered Intelligent Customer Onboarding Automation", "ai", "enterprise"),
    ("AI-Enhanced API Security and Threat Detection Platform", "ai", "enterprise"),
    ("AI-Driven Real-Time Employee Experience Analytics Platform", "ai", "enterprise"),
    ("AI-Powered Automated Data Privacy Impact Assessment Tool", "ai", "enterprise"),
    ("AI-Driven Intelligent Resource Capacity Planning Assistant", "ai", "enterprise"),
    ("AI-Enhanced Predictive Data Pipeline Monitoring and Alerting", "ai", "enterprise"),
    ("AI-Powered Intelligent Claims Processing Automation Platform", "ai", "enterprise"),
    ("AI-Driven Real-Time Network Behavior Analytics Platform", "ai", "enterprise"),
    ("AI-Enhanced Automated Test Environment Provisioning Engine", "ai", "enterprise"),
    ("AI-Powered Intelligent Subscription Revenue Optimization", "ai", "enterprise"),
    ("AI-Driven Autonomous Digital Asset Management Platform", "ai", "enterprise"),
    ("AI-Enhanced Predictive Model Serving and Traffic Routing", "ai", "enterprise"),
]

DESCRIPTIONS = {
    "AI-Powered Autonomous Cloud Migration Orchestration Engine": "Zion Tech Group delivers AI-Powered Autonomous Cloud Migration Orchestration Engine solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform analyzes application dependencies, assesses cloud readiness, and orchestrates automated migration of workloads from on-premises to cloud environments with minimal downtime. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing cloud platforms including AWS, Azure, and Google Cloud.",
    "AI-Driven Real-Time Supply Chain Visibility Platform": "Zion Tech Group delivers AI-Driven Real-Time Supply Chain Visibility Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform ingests data from IoT sensors, ERP systems, and logistics partners to provide end-to-end supply chain visibility with predictive delay detection, inventory optimization, and risk mitigation insights. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing supply chain and logistics platforms.",
    "AI-Enhanced Industrial IoT Predictive Maintenance System": "Zion Tech Group delivers AI-Enhanced Industrial IoT Predictive Maintenance System solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform monitors sensor data from industrial equipment to predict failures before they occur, optimize maintenance schedules, and reduce unplanned downtime across manufacturing and process facilities. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing SCADA systems and industrial IoT platforms.",
    "AI-Powered Intelligent Contract Analysis and Review System": "Zion Tech Group delivers AI-Powered Intelligent Contract Analysis and Review System solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform uses natural language processing to extract clauses, identify risks, track obligations, and flag anomalies across contracts, agreements, and legal documents with human-level accuracy and 10x review speed. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing contract lifecycle management and e-signature platforms.",
    "AI-Driven Unified Customer Identity Resolution Platform": "Zion Tech Group delivers AI-Driven Unified Customer Identity Resolution Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform uses advanced probabilistic matching and machine learning to unify customer identities across disparate data sources, resolve identity graphs, and eliminate duplicate profiles for a single customer view. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing CRM, CDP, and marketing technology platforms.",
    "AI-Enhanced Real-Time Video Analytics and Surveillance Platform": "Zion Tech Group delivers AI-Enhanced Real-Time Video Analytics and Surveillance Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform processes live video streams to detect objects, recognize faces, identify anomalies, and trigger real-time alerts for security, safety, and operational intelligence use cases. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing IP camera infrastructure and physical security systems.",
    "AI-Powered Automated Data Catalog and Metadata Management": "Zion Tech Group delivers AI-Powered Automated Data Catalog and Metadata Management solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform automatically discovers, classifies, and tags data assets across the enterprise, building a searchable metadata catalog with data lineage, ownership tracking, and quality scoring for improved data governance and self-service analytics. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing data lakes, warehouses, and cataloging tools.",
    "AI-Driven Real-Time Incident Classification and Routing Engine": "Zion Tech Group delivers AI-Driven Real-Time Incident Classification and Routing Engine solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform ingests alerts from monitoring systems, applies machine learning to classify incidents by severity and root cause, and intelligently routes them to the appropriate response team for faster resolution. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing ITSM platforms including ServiceNow and PagerDuty.",
    "AI-Powered Intelligent Customer Onboarding Automation": "Zion Tech Group delivers AI-Powered Intelligent Customer Onboarding Automation solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform automates document collection, identity verification, compliance checks, and account provisioning using intelligent document processing and decision engines to reduce onboarding time from weeks to minutes. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing KYC, AML, and banking platforms.",
    "AI-Enhanced API Security and Threat Detection Platform": "Zion Tech Group delivers AI-Enhanced API Security and Threat Detection Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform monitors API traffic in real-time to detect abuse, enforce rate limits, identify data leakage, and block emerging threats using behavioral analysis and threat intelligence feeds. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing API gateways, WAFs, and security toolchains.",
    "AI-Driven Real-Time Employee Experience Analytics Platform": "Zion Tech Group delivers AI-Driven Real-Time Employee Experience Analytics Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform analyzes engagement signals from surveys, collaboration tools, and productivity systems to identify burnout risks, measure team health, and provide actionable recommendations for improving workforce satisfaction and retention. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing HRIS, collaboration, and employee feedback platforms.",
    "AI-Powered Automated Data Privacy Impact Assessment Tool": "Zion Tech Group delivers AI-Powered Automated Data Privacy Impact Assessment Tool solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform scans data processing activities to identify privacy risks, assess GDPR and CCPA compliance, and generate audit-ready DPIA documentation with automated remediation recommendations for data protection teams. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing data governance, privacy management, and compliance platforms.",
    "AI-Driven Intelligent Resource Capacity Planning Assistant": "Zion Tech Group delivers AI-Driven Intelligent Resource Capacity Planning Assistant solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform forecasts resource demand across compute, storage, and network resources using time-series forecasting and scenario modeling to optimize capacity allocation and prevent performance bottlenecks. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing cloud management, monitoring, and infrastructure-as-code platforms.",
    "AI-Enhanced Predictive Data Pipeline Monitoring and Alerting": "Zion Tech Group delivers AI-Enhanced Predictive Data Pipeline Monitoring and Alerting solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform continuously monitors data pipelines for anomalies, predicts potential failures, and sends proactive alerts with root cause analysis to prevent data quality issues and pipeline downtime. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing data orchestration tools including Apache Airflow, dbt, and Spark.",
    "AI-Powered Intelligent Claims Processing Automation Platform": "Zion Tech Group delivers AI-Powered Intelligent Claims Processing Automation Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform uses computer vision and NLP to extract data from claims documents, classify claim types, detect fraud patterns, and route claims for automated or human review with reduced processing time and improved accuracy. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing insurance platforms and claims management systems.",
    "AI-Driven Real-Time Network Behavior Analytics Platform": "Zion Tech Group delivers AI-Driven Real-Time Network Behavior Analytics Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform establishes behavioral baselines for network traffic, detects anomalous patterns indicative of threats, and provides actionable security insights for SOC teams to investigate and respond to security incidents. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing network monitoring, SIEM, and SOAR platforms.",
    "AI-Enhanced Automated Test Environment Provisioning Engine": "Zion Tech Group delivers AI-Enhanced Automated Test Environment Provisioning Engine solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform dynamically provisions, configures, and tears down test environments based on CI/CD pipeline needs, optimizing resource utilization and accelerating release cycles for development teams. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing CI/CD pipelines including Jenkins, GitLab CI, and Kubernetes.",
    "AI-Powered Intelligent Subscription Revenue Optimization": "Zion Tech Group delivers AI-Powered Intelligent Subscription Revenue Optimization solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform analyzes customer usage patterns, billing data, and market signals to optimize pricing strategies, reduce churn, and maximize recurring revenue through intelligent upsell, cross-sell, and retention recommendations. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing subscription billing, CRM, and revenue operations platforms.",
    "AI-Driven Autonomous Digital Asset Management Platform": "Zion Tech Group delivers AI-Driven Autonomous Digital Asset Management Platform solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform automatically ingests, tags, categorizes, and organizes digital assets using computer vision and NLP, enabling fast search, intelligent discovery, and automated rights management for creative and marketing teams. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing creative tools and digital asset ecosystems.",
    "AI-Enhanced Predictive Model Serving and Traffic Routing": "Zion Tech Group delivers AI-Enhanced Predictive Model Serving and Traffic Routing solutions that combine deep domain expertise with cutting-edge artificial intelligence. Our platform dynamically routes inference requests to the optimal model version based on latency, accuracy, and resource requirements, with predictive autoscaling to handle traffic spikes and maintain consistent performance. Built on a secure, production-ready architecture with 24/7 monitoring, SLA-backed reliability, and seamless integration with existing model serving platforms including Seldon, MLflow, and Kubernetes.",
}

FEATURES = [
    "Real-time inference with sub-second latency",
    "Zero-shot learning — no labeled data required",
    "Multi-cloud and on-premises deployment",
    "End-to-end encryption and SOC 2 compliance",
    "RESTful API and webhook integrations",
    "Auto-scaling and high availability",
    "Customizable alerting and dashboards",
    "24/7 monitoring and drift detection",
]

BENEFITS = [
    "Reduce operational costs by up to 60%",
    "Accelerate decision making with real-time insights",
    "Eliminate manual workflows and human error",
    "Scale seamlessly with demand spikes",
    "Achieve enterprise-grade security and compliance",
    "Integrate with existing tools in minutes",
    "Improve customer satisfaction and retention",
    "Gain actionable intelligence from any data source",
]

PRICING_MULT = 1.0  # Standard pricing tier


def slugify(name: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')


def main():
    # Load catalog
    with open(SERVICES_FILE) as f:
        catalog = json.load(f)
    if isinstance(catalog, dict) and "services" in catalog:
        catalog = catalog["services"]

    catalog_names = set(s.get('name', '').lower() for s in catalog)
    catalog_ids = set(s.get('id', '') for s in catalog)

    added = []
    skipped = []

    for cname, category, industry in CONCEPTS:
        if cname.lower() in catalog_names:
            skipped.append({"name": cname, "reason": "already in catalog"})
            continue

        slug = slugify(cname)
        sid = f"{slug}-{hashlib.md5(cname.encode()).hexdigest()[:8]}"
        if sid in catalog_ids:
            # find a unique suffix
            suffix = 0
            while f"{sid}-{suffix}" in catalog_ids:
                suffix += 1
            sid = f"{sid}-{suffix}"

        desc = DESCRIPTIONS.get(cname, "").replace("{svc}", cname)
        if not desc:
            desc = f"Zion Tech Group delivers {cname} solutions that combine deep domain expertise with cutting-edge artificial intelligence for enterprise-scale operations."

        service = {
            "id": sid,
            "name": cname,
            "title": cname,
            "description": desc,
            "category": category,
            "industry": industry,
            "features": FEATURES[:6],
            "benefits": BENEFITS[:6],
            "pricing": {
                "basic": str(int(199 * PRICING_MULT)),
                "pro": str(int(499 * PRICING_MULT)),
                "enterprise": str(int(1499 * PRICING_MULT)),
            },
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "contactInfo": {
                "website": f"/services/{sid}",
                "email": "hello@ziontechgroup.com",
                "phone": "+1 (302) 464-0950",
            },
            "icon": "💡",
            "href": f"/services/{sid}",
            "popular": False,
        }

        catalog.append(service)
        added.append({"name": cname, "id": sid, "category": category, "industry": industry})

    # Save updated catalog
    with open(SERVICES_FILE, 'w') as f:
        json.dump(catalog, f, indent=2)
    print(f"✅ servicesData.json updated: {len(added)} new entries, {len(skipped)} skipped (duplicates)")
    print(f"   Total catalog now: {len(catalog)} services")

    # Sync to stable backup
    with open(STABLE_FILE, 'w') as f:
        json.dump(catalog, f, indent=2)
    print(f"✅ Synced to services.json (stable backup)")

    # Regenerate sitemap
    try:
        result = subprocess.run(
            ['node', str(SITEMAP_SCRIPT)],
            capture_output=True, text=True, timeout=60
        )
        if result.returncode == 0:
            print(f"✅ Sitemap regenerated")
        else:
            print(f"⚠️  Sitemap regeneration issue: {result.stderr[:200]}")
    except Exception as e:
        print(f"⚠️  Sitemap regeneration warning: {e}")

    # Report
    print(f"\n📋 Sync Summary:")
    print(f"   Added to catalog: {len(added)}")
    print(f"   Skipped (duplicates): {len(skipped)}")
    for a in added:
        print(f"   + {a['name'][:60]} ({a['id']})")

    return added


if __name__ == '__main__':
    main()
