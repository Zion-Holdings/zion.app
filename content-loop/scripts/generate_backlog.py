#!/usr/bin/env python3
"""
Zion Content Loop — Topic backlog generator.

Appends high-intent IT/AI/security/cloud/data topics without duplicating existing topics or blog slugs.
"""
from __future__ import annotations
import json, re
from datetime import datetime
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
TOPICS_FILE = REPO / 'content-loop' / 'topics.json'
BACKLOG_FILE = REPO / 'content-loop' / 'new-topics-backlog.json'


def load_topics() -> list[dict]:
    if not TOPICS_FILE.exists():
        return []
    return json.loads(TOPICS_FILE.read_text(encoding='utf-8'))


def load_backlog() -> list[dict]:
    if not BACKLOG_FILE.exists():
        return []
    return json.loads(BACKLOG_FILE.read_text(encoding='utf-8'))


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-{2,}', '-', text)
    return text.strip('-')


def seed_backlog() -> list[dict]:
    seeds = [
        {"title": "AI SOC Modernization for MSSPs in 2026", "cluster": "security", "intent": "solution", "differentiation_hook": "MSSP-specific playbook with tooling comparisons", "rationale": "Rising demand for managed detection and response with constrained SOC staff"},
        {"title": "AI Threat Intelligence Integration for SOC Teams", "cluster": "security", "intent": "guide", "differentiation_hook": "Actionable intents into existing SIEM/SOAR", "rationale": "Teams need faster triage and structured threat context"},
        {"title": "Cloud Cost Governance with AI Anomaly Detection and Forecasting", "cluster": "cloud", "intent": "guide", "differentiation_hook": "Real budget guardrails, not dashboards", "rationale": "Finance and engineering need shared cost ownership"},
        {"title": "AI Incident Response Orchestration: Triage, Runbooks, ChatOps", "cluster": "ai", "intent": "solution", "differentiation_hook": "Operator-first workflow with measurable MTTR reduction", "rationale": "Incident response is still mostly manual"},
        {"title": "Business Observability: Connect Metrics to Revenue, Conversion, and CX", "cluster": "observability", "intent": "guide", "differentiation_hook": "Business outcome mapping for technical telemetry", "rationale": "Engineering metrics need business translation"},
        {"title": "AI Data Pipeline Observability: Lineage, Freshness, and Quality in 2026", "cluster": "data", "intent": "guide", "differentiation_hook": "End-to-end data trust playbook", "rationale": "Bad pipelines undermine AI initiatives"},
        {"title": "ERP Automation: Automate SAP/Oracle/Dynamics Workflows Without Custom Code", "cluster": "automation", "intent": "solution", "differentiation_hook": "Low-risk integration patterns for core ERP", "rationale": "ERP automation is backlog-heavy and high-friction"},
        {"title": "Field Service AI Optimization: Predict Service Times and Optimize Technician Routes", "cluster": "ai", "intent": "solution", "differentiation_hook": "Operational ROI from dispatch and scheduling", "rationale": "Service operations still rely on spreadsheets and manual routing"},
        {"title": "IT Financial Management: Showback, Chargeback, and Cloud Cost Allocation", "cluster": "cloud", "intent": "guide", "differentiation_hook": "Allocation models that finance and engineering accept", "rationale": "Cost ownership remains unclear in many organizations"},
        {"title": "Process Mining for Operations: Discover Bottlenecks and Automate What Matters", "cluster": "automation", "intent": "guide", "differentiation_hook": "Evidence-based process discovery before automation", "rationale": "Automation without process mapping often fails"},
        {"title": "Automated Provisioning and Deprovisioning: Identity and Access Lifecycle Automation", "cluster": "it", "intent": "guide", "differentiation_hook": "Joiner/mover/leaver playbooks with audit trails", "rationale": "Manual access changes are a top security and operational risk"},
        {"title": "AI Application Modernization: Monolith to Microservices Safely", "cluster": "ai", "intent": "guide", "differentiation_hook": "Strangler-fig patterns with observability and rollback", "rationale": "Modernization projects are high-risk without clear guardrails"},
        {"title": "Digital Workplace Strategy: Secure, Productive Remote and Hybrid Work Environments", "cluster": "it", "intent": "guide", "differentiation_hook": "Device, access, and support in one operational model", "rationale": "Hybrid work remains a productivity and security challenge"},
        {"title": "AI Desktop Support Automation for Enterprise IT", "cluster": "support", "intent": "solution", "differentiation_hook": "In-app guidance, KB suggestions, and automated remediation", "rationale": "Support teams still spend time on repetitive tier-1 issues"},
        {"title": "Email and Calendar Automation with AI Agents: Schedule, Follow Up, and Summarize", "cluster": "automation", "intent": "solution", "differentiation_hook": "Practical workflow integration instead of generic assistant demos", "rationale": "Time lost to scheduling and follow-up remains high"},
        {"title": "IT Asset Discovery Automation for Hybrid Cloud Environments", "cluster": "it", "intent": "guide", "differentiation_hook": "Unified inventory across on-prem and cloud", "rationale": "Shadow IT and unmanaged assets create security and cost risk"},
        {"title": "IT Asset Management Automation: Track Hardware, Software, and Licenses in Real Time", "cluster": "it", "intent": "guide", "differentiation_hook": "Lifecycle automation with compliance-ready reporting", "rationale": "Manual asset tracking causes audit and renewal failures"},
        {"title": "AI Data Engineering Strategy for LATAM Enterprises in 2026", "cluster": "data", "intent": "guide", "differentiation_hook": "Regional execution model with integration-first design", "rationale": "Data engineering maturity varies widely across LATAM enterprises"},
        {"title": "AI Credential Hygiene and Secret Rotation in CI/CD", "cluster": "security", "intent": "guide", "differentiation_hook": "Automated rotation with minimal developer friction", "rationale": "Hardcoded credentials remain a common breach vector"},
        {"title": "Edge AI Deployment Patterns for Retail and Manufacturing", "cluster": "ai", "intent": "guide", "differentiation_hook": "Latency, bandwidth, and reliability constraints addressed", "rationale": "Cloud-only AI is often unsuitable for operational edge sites"},
        {"title": "Low-Code Automation Platforms: Build Internal Tools Without Full Engineering", "cluster": "automation", "intent": "solution", "differentiation_hook": "Governance, auth, and integration patterns", "rationale": "Demand for internal tools exceeds engineering capacity"},
        {"title": "Invoice Processing Automation: From Receipt to Payment with AI Extraction", "cluster": "automation", "intent": "solution", "differentiation_hook": "ERP and finance workflow integration", "rationale": "AP automation remains a high-ROI, high-friction workflow"},
        {"title": "AI Platform Engineering Patterns: IDP, Backstage, and Golden Paths", "cluster": "cloud", "intent": "guide", "differentiation_hook": "Developer experience, templates, and guardrails", "rationale": "Platform teams need scalable internal developer platforms"},
        {"title": "AI Capacity Planning for SaaS and Cloud Platforms in 2026", "cluster": "cloud", "intent": "guide", "differentiation_hook": "Demand forecasting and reservation optimization", "rationale": "Overprovisioning and throttling both hurt service quality"},
        {"title": "AI Cloud FinOps: Anomaly Detection and Budget Guardrails", "cluster": "cloud", "intent": "solution", "differentiation_hook": "Finance and engineering collaboration with automated alerts", "rationale": "Cloud costs still surprise many organizations monthly"},
        {"title": "AI Customer Journey Analytics: From Click to Retention", "cluster": "ai", "intent": "guide", "differentiation_hook": "Actionable segments and churn prevention", "rationale": "Customer analytics need operational action, not just reporting"},
        {"title": "AI Customer Onboarding Automation: Reduce Time to Value", "cluster": "support", "intent": "solution", "differentiation_hook": "In-product guidance, setup automation, and early alerts", "rationale": "Slow onboarding increases churn and support load"},
        {"title": "Distributed Tracing with Jaeger and Zipkin: Debug Microservices Without Log Dumps", "cluster": "observability", "intent": "guide", "differentiation_hook": "Practical instrumentation and sampling strategy", "rationale": "Microservices debugging remains a major operational burden"},
        {"title": "AI Code Review Automation: Security, Style, and Architecture Gates", "cluster": "ai", "intent": "solution", "differentiation_hook": "Automated review with human escalation paths", "rationale": "Manual review is a bottleneck for fast-moving teams"},
        {"title": "Customer Success Automation: Trigger Health Checks, Outreach, and Product Signals", "cluster": "support", "intent": "solution", "differentiation_hook": "Health-based playbooks and intervention timing", "rationale": "CS outcomes improve with proactive, data-driven outreach"},
        {"title": "AI Support Quality Assurance: Score Tickets, Detect Escalations, and Coach Agents", "cluster": "support", "intent": "solution", "differentiation_hook": "Quality scoring and coaching without full QA staffing", "rationale": "Support quality is hard to measure and improve at scale"},
        {"title": "AI Network Detection and Response for Hybrid Infrastructures in 2026", "cluster": "security", "intent": "guide", "differentiation_hook": "Network telemetry plus endpoint and identity signals", "rationale": "Network-only detection is insufficient for hybrid environments"},
        {"title": "AI Observability Pipeline for Kubernetes and Cloud in 2026", "cluster": "observability", "intent": "guide", "differentiation_hook": "Unified metrics, logs, traces, and events pipeline", "rationale": "Observability fragmentation increases mean time to resolution"},
        {"title": "Remote Work Enablement: Secure VPN Alternatives and Zero Trust Access", "cluster": "it", "intent": "guide", "differentiation_hook": "Zero trust network access execution model", "rationale": "Remote access needs identity-centered security"},
    ]
    out = []
    for s in seeds:
        slug = slugify(s['title'])
        out.append({
            'title': s['title'],
            'slug': slug,
            'cluster': s['cluster'],
            'intent': s['intent'],
            'differentiation_hook': s['differentiation_hook'],
            'rationale': s['rationale'],
        })
    return out


def merge_backlog() -> list[dict]:
    current_topics = load_topics()
    backlog = load_backlog()
    existing_topics = {t['title'] for t in current_topics}
    existing_slugs = {t['slug'] for t in current_topics}
    existing_blog = set()
    blog_root = REPO / 'app' / 'blog'
    if blog_root.exists():
        for child in blog_root.iterdir():
            if child.is_dir() and (child / 'page.tsx').exists():
                existing_blog.add(child.name)

    new_topics = []
    for item in seed_backlog():
        if item['title'] in existing_topics or item['slug'] in existing_slugs or item['slug'] in existing_blog:
            continue
        new_topics.append(item)

    merged = current_topics + new_topics + backlog
    merged = [dict(t) for t in {tuple(sorted(d.items())) for d in merged}]
    TOPICS_FILE.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    BACKLOG_FILE.write_text(json.dumps(new_topics, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    return new_topics


def main() -> int:
    added = merge_backlog()
    print(json.dumps({"added": len(added), "items": [t['slug'] for t in added]}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
