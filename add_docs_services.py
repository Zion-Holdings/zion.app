import os
import json
import urllib.request
import urllib.error
import ssl
from pathlib import Path

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('C:/Users/Zion/.gh_token', 'r') as f:
    TOKEN = f.read().strip()

REPO = "Zion-support/zion-support.github.io"
BASE_URL = f"https://api.github.com/repos/{REPO}"
HEADERS = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github+json",
    "Content-Type": "application/json"
}

TEMPLATE = '''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | Zion Tech Group</title>
  <meta name="robots" content="index,follow" />
  <meta name="description" content="{desc}" />
  <link rel="canonical" href="https://ziontechgroup.com{slug}/" />
  <link rel="stylesheet" href="/styles.css"/>
  <style>
    :root {{ color-scheme: dark; }}
    body {{ background:#020617; color:#e5e7eb; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }}
    .container {{ max-width: 1100px; margin: 0 auto; padding: 24px; }}
    .hero {{ padding: 96px 0 64px; }}
    h1 {{ font-size: 44px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; }}
    .grid {{ display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin-top: 36px; }}
    .card {{ border:1px solid #334155; border-radius:12px; padding:18px; background:#0b1220; }}
    .cta {{ display:inline-flex; align-items:center; gap:8px; margin-top:24px; padding:14px 18px; border-radius:8px; background:#2563eb; color:#fff; text-decoration:none; font-weight:600; }}
    .footer {{ margin-top: 64px; padding: 24px 0; color:#64748b; font-size:13px; }}
  </style>
</head>
<body>
  <main class="container">
    <section class="hero">
      <h1>{title}</h1>
      <p class="lead">{desc}</p>
      <a class="cta" href="/contact/">Get Your Custom Proposal →</a>
      <div class="grid">
        <div class="card"><h3>Strategy</h3><p>Assessment, roadmap, and prioritization aligned to your business outcomes.</p></div>
        <div class="card"><h3>Implementation</h3><p>Delivery with modern tooling, automation, and production-ready guardrails.</p></div>
        <div class="card"><h3>Operations</h3><p>Monitoring, optimization, and support to keep systems reliable and performant.</p></div>
      </div>
    </section>
    <footer class="footer">© <span id="y"></span> Zion Tech Group. <a href="/services/">Services</a> · <a href="/contact/">Contact</a></footer>
  </main>
  <script>document.getElementById('y').textContent = new Date().getFullYear();</script>
</body>
</html>
'''

SERVICES = [
    ("cybersecurity", "Cybersecurity", "Security architecture, detection, response, and compliance programs."),
    ("api-development", "API Development", "RESTful and GraphQL API development with OpenAPI documentation."),
    ("ai-automation", "AI Automation", "Enterprise AI automation for repetitive, high-volume workflows."),
    ("cloud-migration", "Cloud Migration", "Migration strategy, landing zones, and workload modernization."),
]

REDIRECTS = """# Service and content routes
/services/ai-cybersecurity/ /docs/services/ai-cybersecurity/index.html 200
/services/ai-development-acceleration/ /docs/services/ai-development-acceleration/index.html 200
/services/ai-email-intelligence/ /docs/services/ai-email-intelligence/index.html 200
/services/cloud-cost-optimization-platform/ /docs/services/cloud-cost-optimization-platform/index.html 200

# Core site routes
/ /docs/index.html 200
/services/ /docs/services/index.html 200
/blog/ /docs/blog/index.html 200
/contact /docs/contact/index.html 200
/contact/ /docs/contact/index.html 200
/search /docs/search/index.html 200
/search/ /docs/search/index.html 200
/api-development/ /docs/api-development/index.html 200
/blockchain-solutions/ /docs/blockchain-solutions/index.html 200
/analytics/ /docs/analytics/index.html 200

# Direct service page mappings
/services/automation-multi-channel-campaign-orchestrator/ /docs/services/automation-multi-channel-campaign-orchestrator/index.html 200
/services/it-backup-disaster-recovery-solution/ /docs/services/it-backup-disaster-recovery-solution/index.html 200
/services/cloud-data-lakehouse-platform/ /docs/services/cloud-data-lakehouse-platform/index.html 200
/services/cloud-edge-ai-deployment-platform/ /docs/services/cloud-edge-ai-deployment-platform/index.html 200
/services/automation-integrated-commerce-flows/ /docs/services/automation-integrated-commerce-flows/index.html 200
/services/data-graph-analytics-platform/ /docs/services/data-graph-analytics-platform/index.html 200
/services/automation-document-intelligence-pipeline/ /docs/services/automation-document-intelligence-pipeline/index.html 200
/services/security-web-application-firewall/ /docs/services/security-web-application-firewall/index.html 200
/services/data-realtime-trending-aggregator/ /docs/services/data-realtime-trending-aggregator/index.html 200
/services/it-api-management-gateway/ /docs/services/it-api-management-gateway/index.html 200
/services/security-supply-chain-sbom-manager/ /docs/services/security-supply-chain-sbom-manager/index.html 200
/services/cloud-event-driven-microservices/ /docs/services/cloud-event-driven-microservices/index.html 200
/services/automation-multi-channel-campaign-manager/ /docs/services/automation-multi-channel-campaign-manager/index.html 200
/services/ai-sustainable-supply-chain-radar/ /docs/services/ai-sustainable-supply-chain-radar/index.html 200
/services/ai-fintech-fraud-graph/ /docs/services/ai-fintech-fraud-graph/index.html 200
/services/security-sbom-supply-chain/ /docs/services/security-sbom-supply-chain/index.html 200
/services/it-api-gateway-openapi/ /docs/services/it-api-gateway-openapi/index.html 200
/services/cloud-hybrid-multicloud-networking/ /docs/services/cloud-hybrid-multicloud-networking/index.html 200
/services/it-backup-dr-bc-as-a-service/ /docs/services/it-backup-dr-bc-as-a-service/index.html 200
/services/ai-contract-lifecycle-intelligence/ /docs/services/ai-contract-lifecycle-intelligence/index.html 200
/services/cloud-migration/ /docs/services/cloud-migration/index.html 200
/services/cybersecurity/ /docs/services/cybersecurity/index.html 200
/services/devops-cicd/ /docs/services/devops-cicd/index.html 200
/services/micro-saas-ai-translation-engine/ /docs/services/micro-saas-ai-translation-engine/index.html 200
/services/micro-saas-ai-expense-tracker/ /docs/services/micro-saas-ai-expense-tracker/index.html 200
/services/micro-saas-ai-hr-recruitment/ /docs/services/micro-saas-ai-hr-recruitment/index.html 200
/services/micro-saas-ai-customer-onboarding/ /docs/services/micro-saas-ai-customer-onboarding/index.html 200
/services/micro-saas-ai-social-media-manager/ /docs/services/micro-saas-ai-social-media-manager/index.html 200
/services/advanced-ai-enterprise-intelligence-hub/ /docs/services/advanced-ai-enterprise-intelligence-hub/index.html 200
/services/ai-3d-asset-generator/ /docs/services/ai-3d-asset-generator/index.html 200
/services/ai-accessibility-auditor/ /docs/services/ai-accessibility-auditor/index.html 200
/services/ai-accessibility-optimizer/ /docs/services/ai-accessibility-optimizer/index.html 200
/services/ai-ad-copy-generator/ /docs/services/ai-ad-copy-generator/index.html 200
/services/ai-agent-safety-evaluation/ /docs/services/ai-agent-safety-evaluation/index.html 200
/services/ai-agent-tool-builder/ /docs/services/ai-agent-tool-builder/index.html 200
/services/ai-agentic-workflows/ /docs/services/ai-agentic-workflows/index.html 200
/services/ai-agents-autonomous/ /docs/services/ai-agents-autonomous/index.html 200
/services/ai-aiops-anomaly-detection/ /docs/services/ai-aiops-anomaly-detection/index.html 200
/services/ai-api-orchestration-layer/ /docs/services/ai-api-orchestration-layer/index.html 200
/services/ai-automated-reporting/ /docs/services/ai-automated-reporting/index.html 200
/services/ai-automation/ /docs/services/ai-automation/index.html 200
/services/ai-autonomous-code-deployment/ /docs/services/ai-autonomous-code-deployment/index.html 200
/services/ai-autonomous-qa-engineering/ /docs/services/ai-autonomous-qa-engineering/index.html 200
/services/ai-bdr-sdr/ /docs/services/ai-bdr-sdr/index.html 200
/services/ai-bom-procurement/ /docs/services/ai-bom-procurement/index.html 200
/services/ai-brand-voice-guardian/ /docs/services/ai-brand-voice-guardian/index.html 200
/services/accessibility-compliance/ /docs/services/accessibility-compliance/index.html 200
/services/ai-performance-monitoring/ /docs/services/ai-performance-monitoring/index.html 200
/services/api-gateway-management/ /docs/services/api-gateway-management/index.html 200
/services/api-integration/ /docs/services/api-integration/index.html 200
/services/api-management-gateway/ /docs/services/api-management-gateway/index.html 200
/services/apm-application-performance/ /docs/services/apm-application-performance/index.html 200
/services/chaos-engineering-svc/ /docs/services/chaos-engineering-svc/index.html 200
/services/cloud-cost-ai-optimizer/ /docs/services/cloud-cost-ai-optimizer/index.html 200
/services/cloud-finops-1/ /docs/services/cloud-finops-1/index.html 200
/services/cloud-native-app-dev/ /docs/services/cloud-native-app-dev/index.html 200
/services/container-security-lifecycle/ /docs/services/container-security-lifecycle/index.html 200
/services/cyber-threat-intelligence/ /docs/services/cyber-threat-intelligence/index.html 200
/services/data-warehouse-modernization/ /docs/services/data-warehouse-modernization/index.html 200
/services/db-migration-service/ /docs/services/db-migration-service/index.html 200
/services/devops-gen-ai-ci-cd/ /docs/services/devops-gen-ai-ci-cd/index.html 200
/services/devsecops-pipeline/ /docs/services/devsecops-pipeline/index.html 200
/services/edge-computing-deploy/ /docs/services/edge-computing-deploy/index.html 200
/services/endpoint-management/ /docs/services/endpoint-management/index.html 200
/services/enterprise-backup-dr/ /docs/services/enterprise-backup-dr/index.html 200
/services/etl-pipeline-optimization/ /docs/services/etl-pipeline-optimization/index.html 200
/services/event-driven-architecture/ /docs/services/event-driven-architecture/index.html 200
/services/evm-smart-contract-audit/ /docs/services/evm-smart-contract-audit/index.html 200
/services/graphql-federation-platform/ /docs/services/graphql-federation-platform/index.html 200
/services/incident-response-retainer/ /docs/services/incident-response-retainer/index.html 200
/services/it-api-gateway-ai/ /docs/services/it-api-gateway-ai/index.html 200
/services/it-api-gateway-management/ /docs/services/it-api-gateway-management/index.html 200
/services/it-api-performance-testing/ /docs/services/it-api-performance-testing/index.html 200
/services/it-apisec-testing/ /docs/services/it-apisec-testing/index.html 200
/services/micro-saas-ai-data-backup/ /docs/services/micro-saas-ai-data-backup/index.html 200
/services/api-development/ /docs/services/api-development/index.html 200
/services/aws-serverless-migration/ /docs/services/aws-serverless-migration/index.html 200
/services/backup-disaster-recovery/ /docs/services/backup-disaster-recovery/index.html 200
/services/cdn-edge-cache/ /docs/services/cdn-edge-cache/index.html 200
/services/cloud-ai-mlops-platform/ /docs/services/cloud-ai-mlops-platform/index.html 200
/services/cloud-api-gateway-enterprise/ /docs/services/cloud-api-gateway-enterprise/index.html 200
/services/cloud-blob-intelligent-tiering/ /docs/services/cloud-blob-intelligent-tiering/index.html 200
/services/cloud-bom-visualiser/ /docs/services/cloud-bom-visualiser/index.html 200
/services/cloud-chaos-engineering-platform/ /docs/services/cloud-chaos-engineering-platform/index.html 200
/services/cloud-container-registry-trivy-scan/ /docs/services/cloud-container-registry-trivy-scan/index.html 200
/services/cloud-cost-anomaly-detector/ /docs/services/cloud-cost-anomaly-detector/index.html 200
/services/cloud-cost-anomaly-detector-ml/ /docs/services/cloud-cost-anomaly-detector-ml/index.html 200
/services/cloud-cost-optimization-service/ /docs/services/cloud-cost-optimization-service/index.html 200
/services/cloud-data-lakehouse-platform/ /docs/services/cloud-data-lakehouse-platform/index.html 200
/services/cloud-disaster-recovery-orchestration/ /docs/services/cloud-disaster-recovery-orchestration/index.html 200
/services/cloud-edge-ai-deployment-platform/ /docs/services/cloud-edge-ai-deployment-platform/index.html 200
/services/cloud-edge-computing-global/ /docs/services/cloud-edge-computing-global/index.html 200
/services/cloud-event-driven-microservices/ /docs/services/cloud-event-driven-microservices/index.html 200
/services/cloud-gitops-enterprise-platform/ /docs/services/cloud-gitops-enterprise-platform/index.html 200
/services/cloud-hybrid-multi-cloud-orchestrator/ /docs/services/cloud-hybrid-multi-cloud-orchestrator/index.html 200
/services/cloud-hybrid-multicloud-networking/ /docs/services/cloud-hybrid-multicloud-networking/index.html 200
/services/cloud-kubernetes-cost-optimizer/ /docs/services/cloud-kubernetes-cost-optimizer/index.html 200
/services/cloud-kubernetes-gitops-platform/ /docs/services/cloud-kubernetes-gitops-platform/index.html 200
"""

SERVICES_ALL = [
    ("automation-multi-channel-campaign-orchestrator", "Multi-Channel Campaign Orchestration", "Orchestrated multi-channel campaign automation across email, chat, ads, and CRM."),
    ("it-backup-disaster-recovery-solution", "Backup & Disaster Recovery Solution", "Backup architecture, recovery planning, and DR testing for business continuity."),
    ("cloud-data-lakehouse-platform", "Cloud Data Lakehouse Platform", "Unified data lakehouse for analytics, BI, and operational workloads."),
    ("cloud-edge-ai-deployment-platform", "Cloud & Edge AI Deployment Platform", "Deploy AI workloads at the edge with cloud governance and observability."),
    ("automation-integrated-commerce-flows", "Automated Integrated Commerce Flows", "Commerce automation across storefronts, marketplaces, and fulfillment."),
    ("data-graph-analytics-platform", "Data Graph Analytics Platform", "Graph analytics for relationships, fraud, and recommendation systems."),
    ("automation-document-intelligence-pipeline", "Document Intelligence Automation Pipeline", "Extract, classify, and act on document data at scale."),
    ("security-web-application-firewall", "Web Application Firewall Security", "WAF rules, threat management, and application-layer protection."),
    ("data-realtime-trending-aggregator", "Real-Time Data Trending Aggregator", "Real-time aggregation and trend detection for operational dashboards."),
    ("it-api-management-gateway", "API Management & Gateway", "API lifecycle management, gateway policies, and developer portals."),
    ("security-supply-chain-sbom-manager", "Supply Chain SBOM Manager", "Software bill of materials, dependency tracking, and supply chain security."),
    ("cloud-event-driven-microservices", "Event-Driven Cloud Microservices", "Event-driven architecture, streaming, and resilient microservices."),
    ("automation-multi-channel-campaign-manager", "Multi-Channel Campaign Manager", "Cross-channel campaign planning, execution, and optimization."),
    ("ai-sustainable-supply-chain-radar", "Sustainable Supply Chain AI Radar", "AI visibility for sustainability, sourcing, and supply chain risk."),
    ("ai-fintech-fraud-graph", "FinTech Fraud Detection Graph", "Graph-based fraud detection for payments, lending, and compliance."),
    ("security-sbom-supply-chain", "SBOM Supply Chain Security", "SBOM governance, vulnerability management, and secure delivery."),
    ("it-api-gateway-openapi", "API Gateway with OpenAPI", "API gateway with OpenAPI specs, versioning, and access control."),
    ("cloud-hybrid-multicloud-networking", "Hybrid Multicloud Networking", "Secure, low-latency networking across hybrid and multicloud environments."),
    ("it-backup-dr-bc-as-a-service", "Backup DR BC as a Service", "Managed backup, disaster recovery, and business continuity as a service."),
    ("ai-contract-lifecycle-intelligence", "Contract Lifecycle Intelligence", "AI-driven contract review, extraction, and lifecycle management."),
    ("cloud-migration", "Cloud Migration", "Migration strategy, landing zones, and workload modernization."),
    ("cybersecurity", "Cybersecurity", "Security architecture, detection, response, and compliance programs."),
    ("devops-cicd", "DevOps CI/CD", "CI/CD pipelines, automation, and engineering platform practices."),
    ("micro-saas-ai-translation-engine", "AI Translation Engine", "Multilingual translation with domain-specific AI models."),
    ("micro-saas-ai-expense-tracker", "AI Expense Tracker", "Automated expense tracking, categorization, and reporting."),
    ("micro-saas-ai-hr-recruitment", "AI HR Recruitment", "AI-assisted recruiting, screening, and candidate engagement."),
    ("micro-saas-ai-customer-onboarding", "AI Customer Onboarding", "Automated onboarding flows, guidance, and activation."),
    ("micro-saas-ai-social-media-manager", "AI Social Media Manager", "AI scheduling, publishing, and social analytics."),
    ("advanced-ai-enterprise-intelligence-hub", "Enterprise AI Intelligence Hub", "Centralized AI governance, catalog, and enterprise knowledge hub."),
    ("ai-3d-asset-generator", "3D Asset Generator", "AI-generated 3D assets for product, marketing, and simulation."),
    ("ai-accessibility-auditor", "AI Accessibility Auditor", "Automated accessibility audits with remediation guidance."),
    ("ai-accessibility-optimizer", "AI Accessibility Optimizer", "Optimize experiences for assistive technology and inclusive design."),
    ("ai-ad-copy-generator", "AI Ad Copy Generator", "Conversion-focused ad copy generation for paid channels."),
    ("ai-agent-safety-evaluation", "AI Agent Safety Evaluation", "Safety evaluation, red-teaming, and risk controls for AI agents."),
    ("ai-agent-tool-builder", "AI Agent Tool Builder", "Tool-use frameworks and agent builder platforms."),
    ("ai-agentic-workflows", "Agentic AI Workflows", "Autonomous multi-step workflows with human-in-the-loop controls."),
    ("ai-agents-autonomous", "Autonomous AI Agents", "Production autonomous agents for support, operations, and sales."),
    ("ai-aiops-anomaly-detection", "AIOps Anomaly Detection", "ML-powered anomaly detection and incident intelligence."),
    ("ai-api-orchestration-layer", "API Orchestration Layer", "Unified orchestration across internal and external APIs."),
    ("ai-automated-reporting", "Automated AI Reporting", "Natural language reporting with automated insight delivery."),
    ("ai-automation", "AI Automation", "Enterprise AI automation for repetitive, high-volume workflows."),
    ("ai-autonomous-code-deployment", "Autonomous Code Deployment", "Safe automated deployment with canary, rollback, and verification."),
    ("ai-autonomous-qa-engineering", "Autonomous QA Engineering", "AI-generated tests, coverage optimization, and release gating."),
    ("ai-bdr-sdr", "AI BDR/SDR", "AI-assisted pipeline development, prospecting, and outreach."),
    ("ai-bom-procurement", "AI BOM Procurement", "AI-driven bill of materials planning and procurement."),
    ("ai-brand-voice-guardian", "Brand Voice Guardian", "Maintain brand voice consistency across content channels."),
    ("accessibility-compliance", "Accessibility Compliance", "WCAG-aligned remediation and accessibility compliance programs."),
    ("ai-performance-monitoring", "AI Performance Monitoring", "Model performance monitoring, drift detection, and retraining triggers."),
    ("api-gateway-management", "API Gateway Management", "Centralized gateway management, policies, and analytics."),
    ("api-integration", "API Integration", "Third-party and legacy integrations with modern API patterns."),
    ("api-management-gateway", "API Management Gateway", "Enterprise API management with developer experience tooling."),
    ("apm-application-performance", "APM Application Performance", "Application performance monitoring, tracing, and optimization."),
    ("chaos-engineering-svc", "Chaos Engineering", "Resilience testing, fault injection, and reliability engineering."),
    ("cloud-cost-ai-optimizer", "Cloud Cost AI Optimizer", "AI-driven cloud cost optimization and waste reduction."),
    ("cloud-finops-1", "Cloud FinOps", "FinOps practice, showback/chargeback, and cloud budgeting."),
    ("cloud-native-app-dev", "Cloud-Native App Development", "Cloud-native application development with container-first architecture."),
    ("container-security-lifecycle", "Container Security Lifecycle", "Container scanning, signing, and runtime security."),
    ("cyber-threat-intelligence", "Cyber Threat Intelligence", "Threat intelligence, hunting, and adversary emulation."),
    ("data-warehouse-modernization", "Data Warehouse Modernization", "Warehouse modernization, migration, and analytics enablement."),
    ("db-migration-service", "Database Migration Service", "Safe database migrations with compatibility and rollback planning."),
    ("devops-gen-ai-ci-cd", "GenAI DevOps CI/CD", "AI-assisted CI/CD pipeline generation and optimization."),
    ("devsecops-pipeline", "DevSecOps Pipeline", "Security scanning, policy enforcement, and compliance in CI/CD."),
    ("edge-computing-deploy", "Edge Computing Deployment", "Edge deployment patterns, workload placement, and management."),
    ("endpoint-management", "Endpoint Management", "Modern endpoint management, patching, and visibility."),
    ("enterprise-backup-dr", "Enterprise Backup & DR", "Enterprise backup architecture and disaster recovery."),
    ("etl-pipeline-optimization", "ETL Pipeline Optimization", "ETL optimization, performance tuning, and data quality."),
    ("event-driven-architecture", "Event-Driven Architecture", "Event-driven systems, messaging, and stream processing."),
    ("evm-smart-contract-audit", "Smart Contract Audit", "Smart contract security audits and formal verification."),
    ("graphql-federation-platform", "GraphQL Federation Platform", "Federated GraphQL architecture for distributed teams."),
    ("incident-response-retainer", "Incident Response Retainer", "Retainer-based incident response and recovery support."),
    ("it-api-gateway-ai", "AI API Gateway", "AI-enhanced API gateway with policy automation and anomaly response."),
    ("it-api-gateway-management", "API Gateway Management", "Centralized lifecycle management for API gateways."),
    ("it-api-performance-testing", "API Performance Testing", "Load testing, contract testing, and API performance validation."),
    ("it-apisec-testing", "API Security Testing", "API security testing, vulnerability detection, and remediation."),
    ("micro-saas-ai-data-backup", "AI Data Backup", "Intelligent backup scheduling, retention, and recovery."),
]

def gh(method, url, data=None):
    body = data if isinstance(data, bytes) else (json.dumps(data).encode() if data is not None else None)
    req = urllib.request.Request(url, data=body, method=method)
    for k, v in HEADERS.items():
        req.add_header(k, v)
    try:
        r = urllib.request.urlopen(req, timeout=20, context=ctx)
        return r.getcode(), json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())


# Ensure docs/services/index.html exists
Path('docs/services').mkdir(parents=True, exist_ok=True)
if not Path('docs/services/index.html').exists():
    with open('docs/services/index.html', 'r', encoding='utf-8') as f:
        services_index = f.read()
else:
    services_index = '<html><body>Services</body></html>'

# Get latest main commit
c, ref_data = gh("GET", f"{BASE_URL}/git/refs/heads/main")
latest_sha = ref_data["object"]["sha"]
print("latest_main_sha:", latest_sha[:12])

tree_items = []

# Add services/index.html
blob_payload = json.dumps({"content": services_index, "encoding": "utf-8"}).encode()
c, blob = gh("POST", f"{BASE_URL}/git/blobs", blob_payload)
if c in (200, 201):
    tree_items.append({"path": "docs/services/index.html", "mode": "100644", "type": "blob", "sha": blob["sha"]})
    print("Blob docs/services/index.html:", blob["sha"][:12])

# Add each missing service page under docs/services/
for slug, title, desc in SERVICES_ALL:
    html = TEMPLATE.format(title=title, desc=desc, slug=f"/services/{slug}/")
    path = f"docs/services/{slug}/index.html"
    blob_payload = json.dumps({"content": html, "encoding": "utf-8"}).encode()
    c, blob = gh("POST", f"{BASE_URL}/git/blobs", blob_payload)
    if c in (200, 201):
        tree_items.append({"path": path, "mode": "100644", "type": "blob", "sha": blob["sha"]})
        print(f"Blob {path}:", blob["sha"][:12])

# Update _redirects
blob_payload = json.dumps({"content": REDIRECTS, "encoding": "utf-8"}).encode()
c, blob = gh("POST", f"{BASE_URL}/git/blobs", blob_payload)
if c in (200, 201):
    tree_items.append({"path": "_redirects", "mode": "100644", "type": "blob", "sha": blob["sha"]})
    print("Blob _redirects:", blob["sha"][:12])

# Create tree
tree_payload = json.dumps({"base_tree": latest_sha, "tree": tree_items}).encode()
c, tree = gh("POST", f"{BASE_URL}/git/trees", tree_payload)
print("Tree SHA:", tree["sha"][:12])

# Create commit
commit_payload = json.dumps({
    "message": "fix: add missing docs/services pages and service redirects to main",
    "tree": tree["sha"],
    "parents": [latest_sha]
}).encode()
c, commit = gh("POST", f"{BASE_URL}/git/commits", commit_payload)
print("Commit SHA:", commit["sha"][:12])

# Update main ref
ref_payload = json.dumps({"sha": commit["sha"], "force": True}).encode()
c, result = gh("PATCH", f"{BASE_URL}/git/refs/heads/main", ref_payload)
print("Update main:", c, result.get("message", "ok"))

print("Done - added", len(tree_items), "files to main branch")
