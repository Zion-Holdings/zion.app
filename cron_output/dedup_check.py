#!/usr/bin/env python3
"""Check which of the 50 service concepts already exist in the catalog."""
import json, os, re, sys

BASE = "/Users/klebergarciaalcatrao/zion-support.github.io"
SERVICES_FILE = os.path.join(BASE, "app", "data", "servicesData.json")
SERVICES_DIR = os.path.join(BASE, "app", "services")

def slugify(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

with open(SERVICES_FILE) as f:
    data = json.load(f)
services = data if isinstance(data, list) else data.get("services", [])
print(f"Total services in catalog: {len(services)}")

# Build lookup sets
catalog_names = set()
catalog_titles = set()
for s in services:
    n = (s.get("name") or "").lower()
    t = (s.get("title") or "").lower()
    if n: catalog_names.add(n)
    if t: catalog_titles.add(t)

concepts = [
    "AI-Powered Network Anomaly Detector",
    "Autonomous Edge AI Inference Server",
    "Zero-Shot Document Intelligence Pipeline",
    "AI-Enhanced Kubernetes Autoscaling",
    "Predictive Infrastructure Capacity Planner",
    "Multi-Cloud Cost Optimization AI Agent",
    "AI-Driven SOC Threat Hunting Suite",
    "Conversational Data Warehouse Agent",
    "Neural Architecture Search for Edge Chips",
    "AI-Powered IT Asset Lifecycle Manager",
    "Automated Model Drift Monitoring Agent",
    "Federated Learning for Healthcare Data",
    "AI-Enhanced Log Anomaly Correlation",
    "Dynamic Pricing Engine for SaaS",
    "AI-Powered Customer Journey Optimizer",
    "Automated Security Posture Assessment",
    "Intelligent API Gateway with Rate AI",
    "AI-Enhanced Backup Recovery Orchestrator",
    "Predictive Database Index Advisor",
    "AI-Powered Incident Response Automator",
    "Autonomous DevSecOps Pipeline Agent",
    "AI-Enhanced SRE Reliability Bot",
    "Predictive CDN Edge Placement AI",
    "AI-Powered Service Mesh Traffic Manager",
    "Automated MLOps Experiment Tracker",
    "AI-Enhanced Identity Access Governance",
    "Neural Search for Technical Documentation",
    "AI-Powered IT Procurement Assistant",
    "Automated Data Quality Remediation Agent",
    "AI-Enhanced Endpoint Detection and Response",
    "Predictive Storage Tiering AI",
    "AI-Powered Cloud Compliance Auditor",
    "Automated Certificate Lifecycle AI",
    "AI-Enhanced Network Traffic Engineering",
    "Predictive Application Performance AI",
    "AI-Powered Patch Management Agent",
    "Automated Dependency Vulnerability AI",
    "AI-Enhanced Container Security Scanner",
    "Predictive License Usage Optimizer AI",
    "AI-Powered Network Capacity Forecaster",
    "Automated Infrastructure as Code AI",
    "AI-Enhanced Zero Trust Policy Engine",
    "Neural Network Hardware Scheduler AI",
    "AI-Powered Quantum Job Queue Manager",
    "Automated LLM Cost Governance Agent",
    "AI-Enhanced Data Lake Cataloging Bot",
    "Predictive Churn Reduction AI",
    "AI-Powered Lead Scoring Optimizer",
    "Automated Email Sequence Personalization AI",
    "Neural Recommender for Microservices",
]

existing_disk = set(os.listdir(SERVICES_DIR)) if os.path.isdir(SERVICES_DIR) else set()

new_concepts = []
for c in concepts:
    cn = c.lower()
    slug = slugify(c)
    # Check catalog name/title match
    in_catalog = cn in catalog_names or cn in catalog_titles
    # Check disk slug prefix
    in_disk = False
    if slug:
        for d in existing_disk:
            if d == slug or d.startswith(slug + "-"):
                if os.path.exists(os.path.join(SERVICES_DIR, d, "page.tsx")):
                    in_disk = True
                    break
    status = "DUP(catalog)" if in_catalog else ("DUP(disk)" if in_disk else "NEW")
    if not in_catalog and not in_disk:
        new_concepts.append(c)
    print(f"  {status:15s} {c}")

print(f"\nSummary:")
print(f"  Total concepts: {len(concepts)}")
print(f"  Already exist (catalog+disk): {len(concepts) - len(new_concepts)}")
print(f"  New (need generation): {len(new_concepts)}")
print(f"\nNew concepts: {new_concepts}")
