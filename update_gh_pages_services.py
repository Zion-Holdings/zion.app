import os
import json
import base64
import urllib.request
import urllib.error
import ssl

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
    ("api-development", "API Development", "RESTful and GraphQL API development with OpenAPI documentation."),
    ("aws-serverless-migration", "AWS Serverless Migration", "Serverless migration patterns and AWS Lambda modernization."),
    ("backup-disaster-recovery", "Backup & Disaster Recovery", "Backup strategy, recovery time optimization, and continuity."),
    ("cdn-edge-cache", "CDN & Edge Cache", "CDN strategy, edge caching, and origin protection."),
    ("cloud-ai-mlops-platform", "Cloud AI MLOps Platform", "MLOps pipelines, model registry, and training infrastructure."),
    ("cloud-api-gateway-enterprise", "Enterprise Cloud API Gateway", "Enterprise API gateway with multi-protocol support."),
    ("cloud-blob-intelligent-tiering", "Blob Intelligent Tiering", "Storage tiering for cost optimization and lifecycle automation."),
    ("cloud-bom-visualiser", "Cloud BOM Visualiser", "Visualize cloud asset inventory, costs, and dependencies."),
    ("cloud-chaos-engineering-platform", "Cloud Chaos Engineering", "Managed chaos engineering for cloud-native systems."),
    ("cloud-container-registry-trivy-scan", "Container Registry with Trivy Scan", "Registry scanning, image promotion, and vulnerability management."),
    ("cloud-cost-anomaly-detector", "Cloud Cost Anomaly Detector", "Anomaly detection for cloud spend and billing surprises."),
    ("cloud-cost-anomaly-detector-ml", "ML Cloud Cost Anomaly Detector", "ML-enhanced anomaly detection for cloud billing."),
    ("cloud-cost-optimization-service", "Cloud Cost Optimization Service", "Cloud cost optimization with rightsizing and commitment planning."),
    ("cloud-data-lakehouse-platform", "Cloud Data Lakehouse", "Unified analytics on open table formats in the cloud."),
    ("cloud-disaster-recovery-orchestration", "Cloud Disaster Recovery Orchestration", "Automated failover, recovery orchestration, and testing."),
    ("cloud-edge-ai-deployment-platform", "Edge AI Deployment Platform", "Deploy and manage AI inferencing at the edge."),
    ("cloud-edge-computing-global", "Global Edge Computing", "Global edge compute orchestration and traffic management."),
    ("cloud-event-driven-microservices", "Event-Driven Microservices", "Event-driven microservices with observability and replay."),
    ("cloud-gitops-enterprise-platform", "GitOps Enterprise Platform", "GitOps workflows, drift detection, and policy control."),
    ("cloud-hybrid-multi-cloud-orchestrator", "Hybrid Multicloud Orchestrator", "Orchestrate workloads across hybrid and multicloud estates."),
    ("cloud-hybrid-multicloud-networking", "Hybrid Multicloud Networking", "Secure connectivity across hybrid and multicloud environments."),
    ("cloud-kubernetes-cost-optimizer", "Kubernetes Cost Optimizer", "Kubernetes cost visibility, rightsizing, and autoscaling."),
    ("cloud-kubernetes-gitops-platform", "Kubernetes GitOps Platform", "GitOps-native Kubernetes delivery and configuration management."),
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

# Get latest gh-pages commit
c, ref_data = gh("GET", f"{BASE_URL}/git/refs/heads/gh-pages")
latest_sha = ref_data["object"]["sha"]
print("latest_gh_pages_sha:", latest_sha[:12])

tree_items = []

# Add services index.html
with open('docs/services/index.html', 'rb') as f:
    content = f.read()
blob_payload = json.dumps({"content": base64.b64encode(content).decode("ascii"), "encoding": "base64"}).encode()
c, blob = gh("POST", f"{BASE_URL}/git/blobs", blob_payload)
if c in (200, 201):
    tree_items.append({"path": "services/index.html", "mode": "100644", "type": "blob", "sha": blob["sha"]})
    print("Blob services/index.html:", blob["sha"][:12])

# Add each missing service page at ROOT level
for slug, title, desc in SERVICES:
    html = TEMPLATE.format(title=title, desc=desc, slug=f"/services/{slug}/")
    path = f"services/{slug}/index.html"
    blob_payload = json.dumps({"content": base64.b64encode(html.encode("utf-8")).decode("ascii"), "encoding": "base64"}).encode()
    c, blob = gh("POST", f"{BASE_URL}/git/blobs", blob_payload)
    if c in (200, 201):
        tree_items.append({"path": path, "mode": "100644", "type": "blob", "sha": blob["sha"]})
        print(f"Blob {path}:", blob["sha"][:12])

# Create tree
tree_payload = json.dumps({"base_tree": latest_sha, "tree": tree_items}).encode()
c, tree = gh("POST", f"{BASE_URL}/git/trees", tree_payload)
print("Tree SHA:", tree["sha"][:12])

# Create commit
commit_payload = json.dumps({
    "message": "fix: add root-level missing services pages to gh-pages",
    "tree": tree["sha"],
    "parents": [latest_sha]
}).encode()
c, commit = gh("POST", f"{BASE_URL}/git/commits", commit_payload)
print("Commit SHA:", commit["sha"][:12])

# Update gh-pages ref
ref_payload = json.dumps({"sha": commit["sha"], "force": True}).encode()
c, result = gh("PATCH", f"{BASE_URL}/git/refs/heads/gh-pages", ref_payload)
print("Update gh-pages:", c, result.get("message", "ok"))
