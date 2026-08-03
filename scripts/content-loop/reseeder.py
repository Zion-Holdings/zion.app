#!/usr/bin/env python3
"""
Zion Content Loop - Reseeder
Mines trending IT/AI themes and appends new topics to content-loop/topics.json without duplicates.
"""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime
from pathlib import Path

REPO_ROOT = Path("/data/data/com.termux/files/home/zion-support.github.io")
QUEUE_PATH = REPO_ROOT / "content-loop" / "topics.json"

ALLOWED_CLUSTERS = {
    "observability", "support", "security", "data", "automation",
    "ai", "it", "cloud", "micro-saas", "devops", "emerging"
}
ALLOWED_INTENTS = {"guide", "solution", "tool", "service"}
MAX_QUEUE = 500


def normalize_slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def load_queue() -> list[dict]:
    if not QUEUE_PATH.exists():
        return []
    return json.loads(QUEUE_PATH.read_text(encoding="utf-8"))


def save_queue(queue: list[dict]) -> None:
    QUEUE_PATH.write_text(
        json.dumps(queue, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8"
    )


def dedupe_existing(queue: list[dict]) -> list[dict]:
    seen = set()
    cleaned = []
    for item in queue:
        slug = item.get("slug")
        if not slug or not item.get("title"):
            continue
        norm = normalize_slug(slug)
        if norm in seen:
            continue
        seen.add(norm)
        cleaned.append(item)
    return cleaned


def validate(item: dict) -> bool:
    slug = item.get("slug", "")
    title = item.get("title", "")
    cluster = item.get("cluster", "")
    intent = item.get("intent", "")
    if not slug or not title:
        return False
    if cluster not in ALLOWED_CLUSTERS:
        return False
    if intent not in ALLOWED_INTENTS:
        return False
    if len(title) < 10 or len(title) > 120:
        return False
    if normalize_slug(slug) != slug:
        return False
    return True


def clean_item(item: dict) -> dict:
    allowed = {"slug", "title", "cluster", "intent", "cta", "summary"}
    return {k: item[k] for k in item if k in allowed}


TRENDING_THEMES = [
    {"slug": "ai-observability-for-llm-applications-tracing-and-cost-control", "title": "AI Observability for LLM Applications: Tracing and Cost Control", "cluster": "observability", "intent": "guide", "cta": "services"},
    {"slug": "zero-trust-for-ai-workloads-guardrails-for-model-access-and-data", "title": "Zero Trust for AI Workloads: Guardrails for Model Access and Data", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "ai-powered-incident-remediation-from-alert-to-fix-in-minutes", "title": "AI-Powered Incident Remediation: From Alert to Fix in Minutes", "cluster": "automation", "intent": "solution", "cta": "contact"},
    {"slug": "synthetic-data-generation-for-compliance-and-model-training", "title": "Synthetic Data Generation for Compliance and Model Training", "cluster": "data", "intent": "solution", "cta": "services"},
    {"slug": "mlops-pipeline-llms-fine-tuning-production-deployment", "title": "MLOps Pipeline for LLMs: From Fine-Tuning to Production Deployment", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "ai-governance-framework-audit-explain-model-decisions-2026", "title": "AI Governance Framework: Audit, Explain, and Govern Model Decisions in 2026", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "multimodal-ai-architecture-text-image-voice-enterprise-stack", "title": "Multimodal AI Architecture: Text, Image, and Voice in One Enterprise Stack", "cluster": "ai", "intent": "solution", "cta": "services"},
    {"slug": "edge-ai-tinyml-run-models-microcontrollers-iot-devices", "title": "Edge AI with TinyML: Run Models on Microcontrollers and IoT Devices", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "rag-optimization-playbook-reduce-hallucination-improve-retrieval-accuracy", "title": "RAG Optimization Playbook: Reduce Hallucination and Improve Retrieval Accuracy", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "ai-code-review-automation-enforce-standards-find-vulnerabilities-before-merge", "title": "AI Code Review Automation: Enforce Standards and Find Vulnerabilities Before Merge", "cluster": "ai", "intent": "solution", "cta": "services"},
    {"slug": "agentic-ai-orchestration-build-multi-agent-systems-collaborate", "title": "Agentic AI Orchestration: Build Multi-Agent Systems That Actually Collaborate", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "vector-database-architecture-pinecone-weaviate-pgvector-compared", "title": "Vector Database Architecture: Pinecone, Weaviate, and pgvector Compared", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "prompt-engineering-at-scale-version-test-deploy-prompts-code", "title": "Prompt Engineering at Scale: Version, Test, and Deploy Prompts Like Code", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "ai-model-fine-tuning-strategy-when-to-fine-tune-vs-rag-vs-prompting", "title": "AI Model Fine-Tuning Strategy: When to Fine-Tune vs. RAG vs. Prompting", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "computer-vision-retail-shelf-monitoring-foot-traffic-loss-prevention", "title": "Computer Vision for Retail: Shelf Monitoring, Foot Traffic, and Loss Prevention", "cluster": "ai", "intent": "solution", "cta": "services"},
    {"slug": "ai-customer-churn-prediction-identify-at-risk-accounts-before-they-leave", "title": "AI for Customer Churn Prediction: Identify At-Risk Accounts Before They Leave", "cluster": "ai", "intent": "solution", "cta": "services"},
    {"slug": "cnapp-strategy-2026-cloud-native-application-protection-code-to-runtime", "title": "CNAPP Strategy 2026: Cloud-Native Application Protection from Code to Runtime", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "ai-model-security-defend-against-adversarial-attacks-prompt-injection", "title": "AI Model Security: Defend Against Adversarial Attacks and Prompt Injection", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "identity-security-playbook-ciam-pam-zero-trust-identity-combined", "title": "Identity Security Playbook: CIAM, PAM, and Zero Trust Identity Combined", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "ot-iot-security-manufacturing-protecting-legacy-plcs-sensors", "title": "OT/IoT Security for Manufacturing: Protecting Legacy PLCs and Sensors", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "software-supply-chain-security-sbom-signing-provenance-2026", "title": "Software Supply Chain Security: SBOM, Signing, and Provenance in 2026", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "soc-2-automation-continuous-compliance-monitoring-audit-evidence-collection", "title": "SOC 2 Automation: Continuous Compliance Monitoring and Audit Evidence Collection", "cluster": "security", "intent": "solution", "cta": "services"},
    {"slug": "attack-surface-management-continuous-discovery-exposure-validation", "title": "Attack Surface Management: Continuous Discovery and Exposure Validation", "cluster": "security", "intent": "solution", "cta": "services"},
    {"slug": "zero-trust-saas-applications-secure-third-party-access-integrations", "title": "Zero Trust for SaaS Applications: Secure Third-Party Access and Integrations", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "endpoint-detection-response-remote-workers-beyond-vpn-protection", "title": "Endpoint Detection and Response for Remote Workers: Beyond VPN Protection", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "data-loss-prevention-ai-prevent-confidential-data-leaks-llm-apis", "title": "Data Loss Prevention for AI: Prevent Confidential Data Leaks to LLM APIs", "cluster": "security", "intent": "solution", "cta": "services"},
    {"slug": "vulnerability-management-prioritization-cvss-not-enough-exploitability-scoring", "title": "Vulnerability Management Prioritization: CVSS Isn't Enough—Use Exploitability Scoring", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "ransomware-resilience-playbook-immutable-backups-isolated-recovery-environments", "title": "Ransomware Resilience Playbook: Immutable Backups and Isolated Recovery Environments", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "finops-maturity-model-cloud-cost-visibility-to-automated-optimization", "title": "FinOps Maturity Model: From Cloud Cost Visibility to Automated Optimization", "cluster": "cloud", "intent": "guide", "cta": "services"},
    {"slug": "kubernetes-platform-engineering-build-internal-developer-platform-k8s", "title": "Kubernetes Platform Engineering: Build an Internal Developer Platform on K8s", "cluster": "cloud", "intent": "guide", "cta": "services"},
    {"slug": "multi-cloud-governance-manage-aws-azure-gcp-one-control-plane", "title": "Multi-Cloud Governance: Manage AWS, Azure, and GCP from One Control Plane", "cluster": "cloud", "intent": "solution", "cta": "services"},
    {"slug": "edge-cloud-architecture-deploy-low-latency-apps-edge-cloudflare-aws", "title": "Edge Cloud Architecture: Deploy Low-Latency Apps at the Edge with Cloudflare and AWS", "cluster": "cloud", "intent": "guide", "cta": "services"},
    {"slug": "serverless-enterprise-when-to-use-lambda-azure-functions-cloud-run", "title": "Serverless for Enterprise: When to Use Lambda, Azure Functions, and Cloud Run", "cluster": "cloud", "intent": "guide", "cta": "services"},
    {"slug": "cloud-migration-regulated-industries-hipaa-pci-gdpr-aws-azure", "title": "Cloud Migration for Regulated Industries: HIPAA, PCI, and GDPR on AWS/Azure", "cluster": "cloud", "intent": "guide", "cta": "services"},
    {"slug": "container-security-at-scale-image-scanning-runtime-protection-policy-enforcement", "title": "Container Security at Scale: Image Scanning, Runtime Protection, and Policy Enforcement", "cluster": "cloud", "intent": "solution", "cta": "services"},
    {"slug": "terraform-iac-security-scan-terraform-cloudformation-pulumi-misconfigurations", "title": "Terraform and IaC Security: Scan Terraform, CloudFormation, and Pulumi for Misconfigurations", "cluster": "cloud", "intent": "solution", "cta": "services"},
    {"slug": "cloud-exit-strategy-avoid-vendor-lock-in-portable-architecture-patterns", "title": "Cloud Exit Strategy: Avoid Vendor Lock-In with Portable Architecture Patterns", "cluster": "cloud", "intent": "guide", "cta": "services"},
    {"slug": "disaster-recovery-automation-tested-failover-multiple-cloud-regions", "title": "Disaster Recovery Automation: Tested Failover Across Multiple Cloud Regions", "cluster": "cloud", "intent": "solution", "cta": "services"},
    {"slug": "data-mesh-implementation-domain-owned-data-products-self-serve-infrastructure", "title": "Data Mesh Implementation: Domain-Owned Data Products with Self-Serve Infrastructure", "cluster": "data", "intent": "guide", "cta": "services"},
    {"slug": "real-time-data-streaming-kafka-flink-event-driven-architecture", "title": "Real-Time Data Streaming with Kafka and Flink: Event-Driven Architecture", "cluster": "data", "intent": "guide", "cta": "services"},
    {"slug": "data-lakehouse-snowflake-databricks-when-to-choose-which", "title": "Data Lakehouse on Snowflake or Databricks: When to Choose Which", "cluster": "data", "intent": "guide", "cta": "services"},
    {"slug": "feature-store-machine-learning-centralize-features-training-inference", "title": "Feature Store for Machine Learning: Centralize Features for Training and Inference", "cluster": "data", "intent": "solution", "cta": "services"},
    {"slug": "data-contracts-analytics-engineering-enforce-schema-quality-between-teams", "title": "Data Contracts for Analytics Engineering: Enforce Schema and Quality Between Teams", "cluster": "data", "intent": "guide", "cta": "services"},
    {"slug": "time-series-analytics-iot-ingest-store-query-sensor-data-scale", "title": "Time Series Analytics for IoT: Ingest, Store, and Query Sensor Data at Scale", "cluster": "data", "intent": "solution", "cta": "services"},
    {"slug": "analytics-engineering-dbt-transform-data-warehouse-like-software", "title": "Analytics Engineering with dbt: Transform Data in Your Warehouse Like Software", "cluster": "data", "intent": "guide", "cta": "services"},
    {"slug": "data-observability-detect-quality-issues-schema-drift-anomalies-automatically", "title": "Data Observability: Detect Quality Issues, Schema Drift, and Anomalies Automatically", "cluster": "data", "intent": "solution", "cta": "services"},
    {"slug": "real-time-analytics-dashboard-sub-second-queries-billion-row-datasets", "title": "Real-Time Analytics Dashboard: Sub-Second Queries on Billion-Row Datasets", "cluster": "data", "intent": "solution", "cta": "services"},
    {"slug": "data-privacy-engineering-anonymization-tokenization-differential-privacy", "title": "Data Privacy Engineering: Anonymization, Tokenization, and Differential Privacy", "cluster": "data", "intent": "guide", "cta": "services"},
    {"slug": "hyperautomation-strategy-2026-combine-rpa-ai-process-mining", "title": "Hyperautomation Strategy 2026: Combine RPA, AI, and Process Mining", "cluster": "automation", "intent": "guide", "cta": "services"},
    {"slug": "process-mining-operations-discover-bottlenecks-automate-what-matters", "title": "Process Mining for Operations: Discover Bottlenecks and Automate What Matters", "cluster": "automation", "intent": "guide", "cta": "services"},
    {"slug": "document-processing-automation-extract-data-invoices-contracts-forms", "title": "Document Processing Automation: Extract Data from Invoices, Contracts, and Forms", "cluster": "automation", "intent": "solution", "cta": "services"},
    {"slug": "low-code-automation-platforms-build-internal-tools-without-full-engineering", "title": "Low-Code Automation Platforms: Build Internal Tools Without Full Engineering", "cluster": "automation", "intent": "guide", "cta": "services"},
    {"slug": "erp-automation-automate-sap-oracle-dynamics-workflows-without-custom-code", "title": "ERP Automation: Automate SAP, Oracle, or Dynamics Workflows Without Custom Code", "cluster": "automation", "intent": "solution", "cta": "services"},
    {"slug": "email-calendar-automation-ai-agents-schedule-follow-up-summarize", "title": "Email and Calendar Automation: AI Agents That Schedule, Follow Up, and Summarize", "cluster": "automation", "intent": "solution", "cta": "services"},
    {"slug": "invoice-processing-automation-from-receipt-to-payment-ai-extraction", "title": "Invoice Processing Automation: From Receipt to Payment with AI Extraction", "cluster": "automation", "intent": "solution", "cta": "services"},
    {"slug": "automated-provisioning-de-provisioning-identity-access-lifecycle-automation", "title": "Automated Provisioning and De-provisioning: Identity and Access Lifecycle Automation", "cluster": "automation", "intent": "solution", "cta": "services"},
    {"slug": "opentelemetry-implementation-guide-instrument-any-language-export-anywhere", "title": "OpenTelemetry Implementation Guide: Instrument Any Language and Export Anywhere", "cluster": "observability", "intent": "guide", "cta": "services"},
    {"slug": "aiops-incident-detection-reduce-mttr-anomaly-detection-root-cause-analysis", "title": "AIOps for Incident Detection: Reduce MTTR with Anomaly Detection and Root Cause Analysis", "cluster": "observability", "intent": "solution", "cta": "services"},
    {"slug": "chaos-engineering-kubernetes-proactively-test-resilience-litmus-chaos-mesh", "title": "Chaos Engineering for Kubernetes: Proactively Test Resilience with Litmus or Chaos Mesh", "cluster": "observability", "intent": "guide", "cta": "services"},
    {"slug": "distributed-tracing-jaeger-zipkin-debug-microservices-without-log-dumps", "title": "Distributed Tracing with Jaeger or Zipkin: Debug Microservices Without Log Dumps", "cluster": "observability", "intent": "guide", "cta": "services"},
    {"slug": "business-observability-connect-metrics-to-revenue-conversion-customer-experience", "title": "Business Observability: Connect Metrics to Revenue, Conversion, and Customer Experience", "cluster": "observability", "intent": "guide", "cta": "services"},
    {"slug": "slo-driven-development-set-error-budgets-build-features-without-breaking-reliability", "title": "SLO-Driven Development: Set Error Budgets and Build Features Without Breaking Reliability", "cluster": "observability", "intent": "guide", "cta": "services"},
    {"slug": "proactive-customer-support-ai-predict-issues-before-tickets-open", "title": "Proactive Customer Support with AI: Predict Issues Before Tickets Open", "cluster": "support", "intent": "solution", "cta": "services"},
    {"slug": "field-service-ai-optimization-predict-service-times-optimize-technician-routes", "title": "Field Service AI Optimization: Predict Service Times and Optimize Technician Routes", "cluster": "support", "intent": "solution", "cta": "services"},
    {"slug": "customer-service-chatbot-beyond-faqs-integrate-rag-context-aware-support", "title": "Customer Service Chatbot Beyond FAQs: Integrate RAG for Context-Aware Support", "cluster": "support", "intent": "solution", "cta": "services"},
    {"slug": "customer-success-automation-trigger-health-checks-outreach-product-signals", "title": "Customer Success Automation: Trigger Health Checks and Outreach from Product Signals", "cluster": "support", "intent": "solution", "cta": "services"},
    {"slug": "itsm-modernization-from-jira-service-management-to-ai-augmented-service-desks", "title": "ITSM Modernization: From Jira Service Management to AI-Augmented Service Desks", "cluster": "it", "intent": "guide", "cta": "services"},
    {"slug": "it-asset-management-automation-track-hardware-software-licenses-real-time", "title": "IT Asset Management Automation: Track Hardware, Software, and Licenses in Real Time", "cluster": "it", "intent": "solution", "cta": "services"},
    {"slug": "digital-workplace-strategy-secure-productive-remote-hybrid-work-environments", "title": "Digital Workplace Strategy: Secure, Productive Remote and Hybrid Work Environments", "cluster": "it", "intent": "guide", "cta": "services"},
    {"slug": "it-financial-management-showback-chargeback-cloud-cost-allocation", "title": "IT Financial Management: Showback, Chargeback, and Cloud Cost Allocation", "cluster": "it", "intent": "guide", "cta": "services"},
    {"slug": "passwordless-authentication-strategy-fido2-passkeys-sso-integration", "title": "Passwordless Authentication Strategy: FIDO2, Passkeys, and SSO Integration", "cluster": "it", "intent": "guide", "cta": "services"},
    {"slug": "remote-work-enablement-secure-vpn-alternatives-zero-trust-access", "title": "Remote Work Enablement: Secure VPN Alternatives and Zero Trust Access", "cluster": "it", "intent": "guide", "cta": "services"},
    {"slug": "quantum-safe-cryptography-prepare-post-quantum-threats-today", "title": "Quantum-Safe Cryptography: Prepare for Post-Quantum Threats Today", "cluster": "emerging", "intent": "guide", "cta": "services"},
    {"slug": "sustainable-it-green-cloud-measure-reduce-carbon-footprint-infrastructure", "title": "Sustainable IT and Green Cloud: Measure and Reduce Carbon Footprint of Infrastructure", "cluster": "emerging", "intent": "guide", "cta": "services"},
    {"slug": "edge-ai-deployment-patterns-for-retail-and-manufacturing", "title": "Edge AI Deployment Patterns for Retail and Manufacturing", "cluster": "ai", "intent": "guide", "cta": "services"},
    {"slug": "cloud-cost-governance-with-ai-anomaly-detection-and-forecasting", "title": "Cloud Cost Governance with AI: Anomaly Detection and Forecasting", "cluster": "cloud", "intent": "tool", "cta": "contact"},
    {"slug": "ai-code-review-automation-security-style-and-architecture-gates", "title": "AI Code Review Automation: Security, Style, and Architecture Gates", "cluster": "automation", "intent": "tool", "cta": "services"},
    {"slug": "it-asset-discovery-automation-for-hybrid-cloud-environments", "title": "IT Asset Discovery Automation for Hybrid Cloud Environments", "cluster": "it", "intent": "solution", "cta": "services"},
    {"slug": "ai-customer-journey-analytics-from-click-to-retention", "title": "AI Customer Journey Analytics: From Click to Retention", "cluster": "ai", "intent": "solution", "cta": "contact"},
    {"slug": "ai-soc-modernization-mssps-2026", "title": "AI Security Operations Center Modernization for MSSPs", "cluster": "security", "intent": "solution", "cta": "services"},
    {"slug": "ai-observability-pipeline-kubernetes-cloud-2026", "title": "AI Observability Pipeline Design for Kubernetes and Cloud", "cluster": "observability", "intent": "guide", "cta": "services"},
    {"slug": "ai-data-engineering-strategy-latam-enterprises-2026", "title": "AI Data Engineering Strategy for LATAM Enterprises in 2026", "cluster": "data", "intent": "guide", "cta": "contact"},
    {"slug": "ai-platform-engineering-patterns-idp-backstage-golden-paths", "title": "AI Platform Engineering Patterns: IDP, Backstage, and Golden Paths", "cluster": "automation", "intent": "guide", "cta": "services"},
    {"slug": "ai-incident-response-orchestration-triage-runbooks-chatops", "title": "AI Incident Response Orchestration: Triage, Runbooks, and Chatops", "cluster": "observability", "intent": "solution", "cta": "services"},
    {"slug": "ai-credential-hygiene-secret-rotation-cicd-2026", "title": "AI Credential Hygiene and Secret Rotation for CI/CD", "cluster": "security", "intent": "guide", "cta": "services"},
    {"slug": "ai-cloud-finops-anomaly-detection-budget-guardrails-2026", "title": "AI Cloud FinOps with Anomaly Detection and Budget Guardrails", "cluster": "cloud", "intent": "solution", "cta": "contact"},
    {"slug": "ai-support-quality-assurance-score-tickets-detect-escalations", "title": "AI Support Quality Assurance: Score Tickets, Detect Escalations", "cluster": "support", "intent": "solution", "cta": "services"},
    {"slug": "ai-application-modernization-monolith-to-microservices-safely", "title": "AI Application Modernization: Monolith to Microservices Safely", "cluster": "it", "intent": "guide", "cta": "services"},
    {"slug": "ai-threat-intelligence-integration-soc-teams-2026", "title": "AI Threat Intelligence Integration for SOC Teams", "cluster": "security", "intent": "solution", "cta": "services"},
    {"slug": "ai-data-pipeline-observability-lineage-freshness-quality-2026", "title": "AI Data Pipeline Observability: Lineage, Freshness, and Quality", "cluster": "data", "intent": "solution", "cta": "contact"},
    {"slug": "ai-network-detection-response-hybrid-infrastructures-2026", "title": "AI Network Detection and Response for Hybrid Infrastructures", "cluster": "security", "intent": "solution", "cta": "services"},
    {"slug": "ai-customer-onboarding-automation-reduce-time-to-value", "title": "AI Customer Onboarding Automation: Reduce Time-to-Value", "cluster": "automation", "intent": "solution", "cta": "services"},
    {"slug": "ai-capacity-planning-saas-cloud-platforms-2026", "title": "AI Capacity Planning for SaaS and Cloud Platforms", "cluster": "cloud", "intent": "solution", "cta": "contact"},
    {"slug": "ai-desktop-support-automation-enterprise-it-2026", "title": "AI Desktop Support Automation for Enterprise IT", "cluster": "support", "intent": "solution", "cta": "services"},
]


def main() -> int:
    queue = load_queue()
    queue = dedupe_existing(queue)
    existing_norms = {normalize_slug(item.get("slug", "")) for item in queue}

    additions = []
    for theme in TRENDING_THEMES:
        if normalize_slug(theme["slug"]) not in existing_norms:
            if validate(theme):
                additions.append(clean_item(theme))

    new_queue = queue + additions
    new_queue = dedupe_existing(new_queue)
    if len(new_queue) > MAX_QUEUE:
        new_queue = new_queue[:MAX_QUEUE]

    save_queue(new_queue)
    print(json.dumps({
        "added": len(additions),
        "total": len(new_queue),
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
