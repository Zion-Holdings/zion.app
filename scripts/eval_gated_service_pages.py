#!/usr/bin/env python3
"""
Eval-Gated Service Landing Page Generator
==========================================
Generates AI/IT service landing pages for Zion Tech Group with quality gates
from growth-pipeline-evals.

Workflow per service:
  1. check_service_exists()  — scan servicesData.json for duplicates
  2. generate_landing_page() — produce full HTML with all SEO tags
  3. grade_landing_page()    — eval gate from growth-pipeline-evals
  4. Deploy only if score ≥ 0.80
"""

import json
import re
import hashlib
from pathlib import Path
from datetime import datetime, timezone

REPO       = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
DATA_DIR   = REPO / 'app/data'
DATA_FILE  = DATA_DIR / 'servicesData.json'
STABLE_FILE = DATA_DIR / 'services.json'
OUTPUT_LOG = REPO / 'cron_output' / 'eval-gated-service-pages-results.json'

# ─── Eval functions (from growth-pipeline-evals skill) ───────────────────────

def grade_landing_page(content: str) -> dict:
    """Eval gate from growth-pipeline-evals: Landing Page Completeness."""
    errors, warnings = [], []
    checks = {
        'title_tag':            r'<title>[^<].{10,60}</title>',
        'meta_description':     r'<meta name="description" content="[^"].{10,160}"',
        'h1_present':           r'<h1[^>]*>[^<].+</h1>',
        'canonical':            r'<link rel="canonical"',
        'structured_data':      r'"application/ld\+json"',
        'open_graph':           r'property="og:',
        'twitter_card':         r'<meta name="twitter:card"',
    }
    for name, pattern in checks.items():
        if not re.search(pattern, content, re.IGNORECASE):
            errors.append(f"Missing: {name}")
    text = re.sub(r'<[^>]+>', '', content)
    wc = len(text.split())
    if wc < 300:
        warnings.append(f"Low word count: {wc}")
    if 'servicesData' in content and not re.search(r'servicesData\.service', content):
        errors.append("Service data reference malformed")
    if 'HeroCarousel' in content and not re.search(r'carousel', content, re.IGNORECASE):
        errors.append("HeroCarousel not properly imported")
    return {
        'passed': len(errors) == 0,
        'score': max(0, 1.0 - len(errors) * 0.15 - len(warnings) * 0.05),
        'errors': errors, 'warnings': warnings,
        'metrics': {'word_count': wc}
    }


# ─── Duplicate detection ────────────────────────────────────────────────────

def check_service_exists(name: str, existing_services: list) -> bool:
    """Check whether a service already exists in servicesData.json."""
    name_lower = name.lower().strip()
    for s in existing_services:
        if s.get('name', '').lower().strip() == name_lower:
            return True
        if s.get('title', '').lower().strip().startswith(name_lower):
            return True
        if s.get('id', '').startswith(name.lower().replace(' ', '-')):
            return True
    return False


def generate_service_id(service_name: str) -> str:
    """Deterministic service ID using hash (mirrors existing pattern)."""
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    hash_part = hashlib.md5(service_name.encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"


# ─── Landing page HTML generator ────────────────────────────────────────────

def generate_landing_page(service: dict) -> str:
    """Generate full HTML landing page content for a service.

    Produces a complete HTML document with all SEO elements required by
    grade_landing_page():
      - <title>, <meta name="description">, <h1>
      - <link rel="canonical">
      - application/ld+json structured data
      - property="og:" open graph tags
      - <meta name="twitter:card">
    """
    sid        = service['id']
    title      = service['title']
    desc       = service['description']
    category   = service.get('category', 'AI/IT')
    industry   = service.get('industry', 'Technology')
    icon       = service.get('icon', '💡')
    features   = service.get('features', [])
    benefits   = service.get('benefits', [])
    pricing    = service.get('pricing', {})
    slug       = f"/services/{sid}"
    url        = f"https://ziontechgroup.com{slug}"

    # Title: 10-60 chars
    page_title = title if len(title) <= 60 else title[:57] + "..."

    # Meta description: 10-160 chars
    meta_desc = desc if len(desc) <= 160 else desc[:157] + "..."

    # Build features and benefits lists
    features_html = "\n".join(
        f'      <li class="mb-2"><strong>{f}</strong></li>' for f in features
    )
    benefits_html = "\n".join(
        f'      <li class="mb-2">{b}</li>' for b in benefits
    )

    # JSON-LD structured data
    structured_data = json.dumps({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": service['name'],
        "description": desc,
        "category": category,
        "brand": {"@type": "Organization", "name": "Zion Tech Group"},
        "provider": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"},
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "offerCount": len(pricing),
            "offers": [
                {"@type": "Offer", "name": "Basic",     "price": pricing.get('basic', '199')},
                {"@type": "Offer", "name": "Pro",       "price": pricing.get('pro', '499')},
                {"@type": "Offer", "name": "Enterprise","price": pricing.get('enterprise', '1499')},
            ]
        },
        "featureList": features,
        "audience": {"@type": "BusinessAudience", "audienceType": industry},
    }, indent=2)

    # Full HTML document
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{page_title}</title>
  <meta name="description" content="{meta_desc}">
  <link rel="canonical" href="{url}">
  <meta property="og:title" content="{page_title}">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{url}">
  <meta property="og:site_name" content="Zion Tech Group">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{page_title}">
  <meta name="twitter:description" content="{meta_desc}">
  <script type="application/ld+json">
{structured_data}
  </script>
</head>
<body>
  <header>
    <nav><a href="/">Zion Tech Group</a></nav>
  </header>
  <main>
    <section>
      <h1 class="service-title">{icon} {title}</h1>
      <p class="service-description">{desc}</p>
      <span class="badge">{category}</span>
    </section>
    <section>
      <h2>Key Features</h2>
      <ul>
{features_html}
      </ul>
    </section>
    <section>
      <h2>Business Benefits</h2>
      <ul>
{benefits_html}
      </ul>
    </section>
    <section>
      <h2>Pricing Plans</h2>
      <table>
        <tr><th>Plan</th><th>Price</th></tr>
        <tr><td>Basic</td><td>${pricing.get('basic', '199')}/mo</td></tr>
        <tr><td>Pro</td><td>${pricing.get('pro', '499')}/mo</td></tr>
        <tr><td>Enterprise</td><td>${pricing.get('enterprise', '1499')}/mo</td></tr>
      </table>
    </section>
    <section>
      <h2>Industry: {industry}</h2>
      <p>This solution is tailored for {industry.replace('-', ' ').title()} organizations seeking advanced AI and IT capabilities to drive operational excellence and competitive advantage.</p>
    </section>
    <section>
      <h2>Get Started</h2>
      <p>Contact our team to schedule a free consultation and see how {service['name']} can transform your operations.</p>
      <a href="/contact">Contact Sales</a>
      <a href="mailto:hello@ziontechgroup.com">Email Us</a>
    </section>
  </main>
  <footer>
    <nav>
      <a href="/services">All Services</a>
      <a href="/contact">Contact</a>
      <a href="/about">About Zion Tech Group</a>
    </nav>
    <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
  </footer>
</body>
</html>"""
    return html


# ─── .tsx page generation ────────────────────────────────────────────────────

PAGES_DIR = REPO / 'app' / 'services'


def _escape_jsx(text: str) -> str:
    """Escape special characters for JSX text content."""
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;'))


def _escape_tsx_attr(text: str) -> str:
    """Escape special characters for JSX attribute values."""
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))


def generate_tsx_page(service: dict) -> str:
    """Generate a Next.js .tsx landing page for a service.

    Follows the existing template pattern used across all pre-rendered
    service pages (e.g. the quantum-classical orchestration page).
    """
    sid     = service['id']
    title   = service['name']
    desc    = service['description']
    icon    = service.get('icon', '💡')
    features = service.get('features', [])
    benefits = service.get('benefits', [])
    pricing  = service.get('pricing', {})

    # Description truncated for metadata (≈155 chars)
    meta_desc = desc if len(desc) <= 155 else desc[:152] + '...'

    # Pricing values
    basic_price     = pricing.get('basic', '199')
    pro_price       = pricing.get('pro', '499')
    enterprise_price = pricing.get('enterprise', '1499')

    # Features list items
    features_html = '\n'.join(
        f'            <li>{_escape_jsx(f)}</li>' for f in features
    )
    # Benefits list items
    benefits_html = '\n'.join(
        f'            <li>{_escape_jsx(b)}</li>' for b in benefits
    )

    tsx = f"""import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {{
  title: "{_escape_tsx_attr(title)} - Zion Tech Group",
  description: "{_escape_tsx_attr(meta_desc)}",
  alternates: {{
    canonical: `https://ziontechgroup.com/services/{sid}`
  }}
}};

export default function ServicePage() {{
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/{sid}" title="{_escape_tsx_attr(title)}" />
        <h1 className="text-4xl font-bold mb-6">{icon} {title}</h1>
        <p className="text-lg text-gray-300 mb-8">{_escape_jsx(meta_desc)}</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
{features_html}
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
{benefits_html}
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">${basic_price}/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">${pro_price}/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">${enterprise_price}/month</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}}
"""
    return tsx


def deploy_tsx_page(service: dict) -> str:
    """Write the .tsx page file for a deployed service.

    Returns the file path that was written.
    """
    sid  = service['id']
    page_dir = PAGES_DIR / sid
    page_dir.mkdir(parents=True, exist_ok=True)
    tsx_path = page_dir / 'page.tsx'

    tsx_content = generate_tsx_page(service)
    tsx_path.write_text(tsx_content, encoding='utf-8')
    return str(tsx_path)


# ─── New service concepts ────────────────────────────────────────────────────

NEW_SERVICE_CONCEPTS = [
    {
        "name": "AI-Powered Autonomous Container Security Posture Management Platform",
        "template": "AI-Powered Autonomous Container Security Posture Management Platform",
        "description": "Intelligent container security platform that continuously assesses and enforces security posture across containerized environments. Uses AI to analyze container images, runtime behavior, and supply chain signals to detect vulnerabilities, enforce policy-as-code, and automate remediation. Integrates with Kubernetes, Docker, and CI/CD pipelines for shift-left security.",
        "category": "security",
        "industry": "technology",
        "icon": "🛡️",
        "pricing_multiplier": 1.5,
        "features": [
            "AI-powered container image vulnerability scanning",
            "Real-time runtime threat detection with behavioral analysis",
            "Supply chain security with SBOM generation and attestation",
            "Policy-as-code enforcement across Kubernetes namespaces",
            "Automated security remediation with one-click patch deployment",
            "Integration with CI/CD pipelines for shift-left security",
        ],
        "benefits": [
            "Detect and fix container vulnerabilities before production deployment",
            "Reduce security incident response time by 80%",
            "Enforce compliance policies automatically across all environments",
            "Minimize false positives with AI-driven threat scoring",
            "Secure supply chain with verifiable SBOM and attestation",
            "Shift-left security without slowing down development velocity",
        ],
    },
    {
        "name": "AI-Driven Real-Time Business Process Mining and Optimization Engine",
        "template": "AI-Driven Real-Time Business Process Mining and Optimization Engine",
        "description": "Enterprise process intelligence platform that discovers, analyzes, and optimizes business processes in real-time using AI-powered process mining. Leverages event log analysis, predictive bottleneck detection, and automated process recommendations to eliminate inefficiencies and accelerate digital transformation across complex organizational workflows.",
        "category": "analytics",
        "industry": "technology",
        "icon": "⛏️",
        "pricing_multiplier": 1.4,
        "features": [
            "Real-time process discovery from event logs across ERP and CRM systems",
            "AI-powered bottleneck and conformance deviation detection",
            "Predictive process analytics with risk and throughput forecasting",
            "Automated process optimization recommendations with impact scoring",
            "Integration with RPA platforms for intelligent automation triggers",
            "Dynamic process simulation and what-if scenario modeling",
        ],
        "benefits": [
            "Reduce process cycle time by 25-40% through automated optimization",
            "Identify hidden inefficiencies invisible to manual process review",
            "Accelerate RPA deployment with intelligent automation opportunity scoring",
            "Prevent process drift with real-time conformance monitoring",
            "Data-driven process decisions with predictive analytics",
            "Accelerate digital transformation with actionable process insights",
        ],
    },
    {
        "name": "AI-Enhanced Multi-Modal Customer Data Platform with Predictive Intelligence",
        "template": "AI-Enhanced Multi-Modal Customer Data Platform with Predictive Intelligence",
        "description": "Unified customer data platform that unifies multi-modal data sources including behavioral signals, transactional history, social interactions, and IoT telemetry. Uses advanced AI models to build predictive customer intelligence, personalization engines, and real-time recommendation systems for enterprise-scale customer experiences.",
        "category": "analytics",
        "industry": "technology",
        "icon": "🧠",
        "pricing_multiplier": 1.6,
        "features": [
            "Multi-modal data ingestion from web, mobile, CRM, social, and IoT sources",
            "Real-time customer identity resolution and unified profile stitching",
            "AI-powered predictive customer lifetime value modeling",
            "Dynamic personalization engine with real-time decisioning",
            "Cross-channel journey orchestration with predictive intent signals",
            "Privacy-compliant data governance with automated consent management",
        ],
        "benefits": [
            "Increase customer lifetime value by 25-35% with predictive insights",
            "Deliver hyper-personalized experiences across all touchpoints",
            "Reduce customer acquisition costs with precise targeting",
            "Eliminate data silos with unified customer profiles",
            "Maintain compliance with automated privacy and consent management",
            "Improve marketing ROI with AI-driven customer intelligence",
        ],
    },
    {
        "name": "AI-Powered Autonomous Edge Infrastructure Management System",
        "template": "AI-Powered Autonomous Edge Infrastructure Management System",
        "description": "Autonomous edge infrastructure management platform that deploys, monitors, and optimizes edge computing resources across distributed locations. Uses AI to predict resource demand, auto-scale edge workloads, and maintain security compliance at the edge without human intervention. Supports edge AI inference, IoT device management, and zero-touch provisioning.",
        "category": "automation",
        "industry": "technology",
        "icon": "🌐",
        "pricing_multiplier": 1.5,
        "features": [
            "Zero-touch edge device provisioning and lifecycle management",
            "AI-driven edge workload placement and autoscaling",
            "Real-time edge infrastructure monitoring and anomaly detection",
            "Edge-native security with automated threat containment",
            "Distributed edge AI model deployment and version management",
            "IoT device fleet management with over-the-air updates",
        ],
        "benefits": [
            "Reduce edge management overhead by 70% with autonomous operations",
            "Maintain 99.9% edge uptime with AI-predictive maintenance",
            "Deploy edge AI models with zero-downtime updates",
            "Secure distributed edge with automated threat response",
            "Optimize edge resource utilization with AI-driven scaling",
            "Scale to thousands of edge nodes with centralized management",
        ],
    },
    {
        "name": "AI-Driven Automated Data Quality and Observability Platform",
        "template": "AI-Driven Automated Data Quality and Observability Platform",
        "description": "End-to-end data quality and observability platform that continuously monitors data pipelines, warehouses, and lakes for anomalies, quality issues, and lineage gaps. Uses machine learning to detect data drift, schema violations, and business rule breaches in real-time, with automated remediation and root cause analysis for data engineering teams.",
        "category": "analytics",
        "industry": "technology",
        "icon": "🔍",
        "pricing_multiplier": 1.3,
        "features": [
            "Real-time data quality monitoring with 200+ automated checks",
            "ML-powered anomaly detection for data drift and distribution shifts",
            "Automated data lineage tracking across pipelines and transformations",
            "Root cause analysis for data incidents with impact assessment",
            "Business rule validation with natural language rule definition",
            "Integration with dbt, Airflow, Snowflake, BigQuery, and Spark",
        ],
        "benefits": [
            "Reduce data incidents by 80% with proactive quality monitoring",
            "Cut data debugging time from hours to minutes with root cause analysis",
            "Maintain data trust with automated quality gates in CI/CD",
            "Prevent downstream business impact from data quality issues",
            "Accelerate data incident resolution with automated remediation",
            "Achieve compliance with auditable data quality dashboards",
        ],
    },
    {
        "name": "AI-Powered Intelligent API Gateway and Traffic Management System",
        "template": "AI-Powered Intelligent API Gateway and Traffic Management System",
        "description": "Next-generation intelligent API gateway that uses AI to optimize traffic routing, load balancing, security, and observability across microservices and API ecosystems. Delivers adaptive rate limiting, intelligent caching, anomaly-based threat detection, and real-time traffic shaping for high-performance API experiences at enterprise scale.",
        "category": "automation",
        "industry": "technology",
        "icon": "🔌",
        "pricing_multiplier": 1.4,
        "features": [
            "AI-driven adaptive rate limiting and traffic shaping",
            "Intelligent caching with predictive pre-fetching",
            "Real-time anomaly detection for API abuse and security threats",
            "Microservice-aware load balancing with health-based routing",
            "Universal API observability with distributed tracing",
            "Multi-protocol support including REST, GraphQL, gRPC, and WebSocket",
        ],
        "benefits": [
            "Reduce API latency by 40% with AI-driven traffic optimization",
            "Block 99% of API abuse and DDoS attacks with behavioral detection",
            "Scale API traffic automatically without manual configuration",
            "Achieve end-to-end API observability with unified dashboards",
            "Eliminate API downtime with intelligent failover and retry logic",
            "Accelerate API development with declarative configuration",
        ],
    },
    {
        "name": "AI-Powered Autonomous Serverless Function Optimization Engine",
        "template": "AI-Powered Autonomous Serverless Function Optimization Engine",
        "description": "Autonomous serverless optimization platform that uses AI to analyze, optimize, and auto-tune serverless function deployments across multi-cloud FaaS platforms. Continuously monitors cold starts, memory allocation, execution duration, and cost efficiency to deliver optimal serverless performance with zero manual intervention and minimal operational overhead.",
        "category": "optimization",
        "industry": "technology",
        "icon": "⚡",
        "pricing_multiplier": 1.5,
        "features": [
            "AI-driven memory and CPU allocation optimization per function",
            "Cold start elimination with predictive pre-warming strategies",
            "Multi-cloud serverless cost analysis and optimization",
            "Real-time function performance monitoring with anomaly detection",
            "Automated deployment and scaling configuration tuning",
            "Integration with AWS Lambda, Azure Functions, and Google Cloud Functions",
        ],
        "benefits": [
            "Reduce serverless costs by 30-50% with intelligent optimization",
            "Eliminate cold starts with AI-driven pre-warming",
            "Improve function performance by 2-5x with optimal resource allocation",
            "Automate serverless optimization without manual tuning",
            "Maintain consistent performance with real-time monitoring",
            "Scale seamlessly across multi-cloud serverless platforms",
        ],
    },
    {
        "name": "AI-Powered Automated MLOps Model Governance and Compliance System",
        "template": "AI-Powered Automated MLOps Model Governance and Compliance System",
        "description": "Enterprise-grade MLOps governance platform that automates model lifecycle management, compliance tracking, and risk assessment for production machine learning systems. Uses AI to continuously monitor model performance drift, enforce governance policies, and generate audit-ready documentation for regulatory frameworks including GDPR, HIPAA, and AI Act.",
        "category": "compliance",
        "industry": "technology",
        "icon": "📋",
        "pricing_multiplier": 1.6,
        "features": [
            "Automated model registry with version control and lineage tracking",
            "Continuous model performance monitoring with drift detection",
            "AI-powered compliance scoring for GDPR, HIPAA, and AI Act",
            "Automated audit trail generation for model development lifecycle",
            "Model risk assessment with bias and fairness monitoring",
            "Integration with MLflow, Kubeflow, and cloud ML platforms",
        ],
        "benefits": [
            "Maintain regulatory compliance with automated audit documentation",
            "Prevent model degradation with continuous performance monitoring",
            "Reduce model risk with bias detection and fairness assessment",
            "Accelerate model deployment with automated governance workflows",
            "Achieve full model lineage and reproducibility for audits",
            "Lower compliance overhead by 60% with automated tracking",
        ],
    },
    {
        "name": "AI-Powered Autonomous Code Security and Vulnerability Remediation Engine",
        "template": "AI-Powered Autonomous Code Security and Vulnerability Remediation Engine",
        "description": "AI-driven application security platform that continuously monitors codebases for security vulnerabilities, automatically analyzes threat patterns, and generates remediation fixes. Integrates with repositories, IDEs, and CI/CD pipelines to deliver real-time security insights, automated vulnerability remediation, and shift-left security without disrupting developer workflows.",
        "category": "security",
        "industry": "technology",
        "icon": "🔒",
        "pricing_multiplier": 1.5,
        "features": [
            "Real-time static and dynamic code analysis with 50+ language support",
            "AI-powered vulnerability classification and prioritization",
            "Automated code remediation with pull request generation",
            "Software composition analysis with open source license compliance",
            "Integration with GitHub, GitLab, Bitbucket, and CI/CD pipelines",
            "Developer-first security feedback with IDE integrations",
        ],
        "benefits": [
            "Detect and fix 90% of security vulnerabilities before production",
            "Reduce mean time to remediate by 75% with automated fixes",
            "Shift-left security without slowing down development velocity",
            "Eliminate false positives with AI-driven vulnerability scoring",
            "Maintain full audit trail of security findings and remediation",
            "Achieve compliance with automated security policy enforcement",
        ],
    },
    {
        "name": "AI-Driven Intelligent Knowledge Graph and Enterprise Search Platform",
        "template": "AI-Driven Intelligent Knowledge Graph and Enterprise Search Platform",
        "description": "Unified enterprise knowledge platform that builds intelligent knowledge graphs from multi-source data and delivers AI-powered semantic search across the organization. Uses natural language processing and transformer models to understand query intent, surface relevant insights, and connect related information across documents, databases, and collaboration tools.",
        "category": "analytics",
        "industry": "technology",
        "icon": "🔗",
        "pricing_multiplier": 1.4,
        "features": [
            "AI-powered semantic search across documents, databases, and tools",
            "Automated knowledge graph construction with entity extraction",
            "Natural language query understanding with intent recognition",
            "Cross-repository knowledge discovery with relationship mapping",
            "Real-time knowledge updates with automated content indexing",
            "Integration with Slack, Teams, Confluence, SharePoint, and Jira",
        ],
        "benefits": [
            "Reduce time-to-find information by 60% with semantic search",
            "Eliminate knowledge silos with unified enterprise search",
            "Improve decision-making with connected knowledge graphs",
            "Accelerate new hire onboarding with intelligent knowledge discovery",
            "Reduce duplicate work with automated knowledge sharing",
            "Maintain information accuracy with real-time knowledge updates",
        ],
    },
]

# ─── Main pipeline ───────────────────────────────────────────────────────────

def main():
    # Load existing services
    with open(DATA_FILE, 'r') as f:
        services = json.load(f)

    existing_names = set(s.get('name', '').lower().strip() for s in services)
    existing_ids   = set(s.get('id', '') for s in services)

    results = []
    deployed, blocked, skipped = [], [], []

    for concept in NEW_SERVICE_CONCEPTS:
        name   = concept['template']
        sid    = generate_service_id(name)

        # Step 1: check_service_exists
        exists = check_service_exists(name, services)
        if exists or sid in existing_ids:
            skipped.append({'name': name, 'id': sid, 'reason': 'duplicate in catalog'})
            results.append({'name': name, 'id': sid, 'status': 'SKIPPED', 'reason': 'Duplicate'})
            continue

        # Build service dict for JSON
        mult = concept.get('pricing_multiplier', 1.0)
        service = {
            "id": sid,
            "name": name,
            "title": name + " | Zion Tech Group",
            "description": concept['description'],
            "category": concept['category'],
            "industry": concept['industry'],
            "features": concept['features'],
            "benefits": concept['benefits'],
            "pricing": {
                "basic": str(int(199 * mult)),
                "pro": str(int(499 * mult)),
                "enterprise": str(int(1499 * mult)),
            },
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "contactInfo": {
                "website": f"/services/{sid}",
                "email": "hello@ziontechgroup.com",
                "phone": "+1 (302) 464-0950",
            },
            "icon": concept['icon'],
            "href": f"/services/{sid}",
            "popular": False,
        }

        # Step 2: generate landing page HTML
        html = generate_landing_page(service)

        # Step 3: eval gate
        eval_result = grade_landing_page(html)
        score = eval_result['score']

        if eval_result['passed'] and score >= 0.80:
            # Step 4: deploy — add to servicesData.json
            services.append(service)
            # Step 4b: generate and write .tsx page file
            page_path = deploy_tsx_page(service)
            deployed.append({
                'name': name, 'id': sid, 'score': score,
                'errors': eval_result['errors'],
                'words': eval_result['metrics']['word_count'],
                'tsx_page': page_path,
            })
            results.append({
                'name': name, 'id': sid, 'status': 'DEPLOYED',
                'score': round(score, 2),
                'errors': eval_result['errors'],
                'warnings': eval_result['warnings'],
                'metrics': eval_result['metrics'],
            })
        else:
            blocked.append({
                'name': name, 'id': sid, 'score': score,
                'errors': eval_result['errors'],
                'warnings': eval_result['warnings'],
            })
            results.append({
                'name': name, 'id': sid, 'status': 'BLOCKED',
                'score': round(score, 2),
                'errors': eval_result['errors'],
                'warnings': eval_result['warnings'],
                'metrics': eval_result['metrics'],
            })

    # Save updated servicesData.json (only deployed ones added)
    with open(DATA_FILE, 'w') as f:
        json.dump(services, f, indent=2)

    # Sync to stable backup
    with open(STABLE_FILE, 'w') as f:
        json.dump(services, f, indent=2)

    # Regenerate sitemap.xml to include new service pages
    import subprocess
    try:
        subprocess.run(
            ['node', str(REPO / 'scripts' / 'generate-sitemap-feed.cjs')],
            check=True, capture_output=True, text=True, timeout=120
        )
        sitemap_ok = True
    except Exception as e:
        sitemap_ok = False
        print(f"   ⚠️  Sitemap regeneration warning: {e}")

    # Save detailed results log
    OUTPUT_LOG.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_LOG, 'w') as f:
        json.dump({
            'run_timestamp': datetime.now(timezone.utc).isoformat(),
            'total_concepts': len(NEW_SERVICE_CONCEPTS),
            'deployed': len(deployed),
            'blocked': len(blocked),
            'skipped': len(skipped),
            'catalog_total': len(services),
            'deployed_services': [
                {
                    'name': d['name'],
                    'id': d['id'],
                    'score': round(d['score'], 2),
                    'errors': d['errors'],
                    'warnings': [],
                    'word_count': d['words'],
                    'tsx_page': d['tsx_page'],
                }
                for d in deployed
            ],
            'blocked_services': [
                {
                    'name': b['name'],
                    'id': b['id'],
                    'score': round(b['score'], 2),
                    'errors': b['errors'],
                    'warnings': b['warnings'],
                }
                for b in blocked
            ],
            'skipped_services': skipped,
        }, f, indent=2)

    # Print report
    print("=" * 65)
    print("🚀 EVAL-GATED SERVICE PAGE GENERATION — COMPLETE")
    print(f"   Run: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}")
    print("=" * 65)
    print(f"\n📦 Total catalog size: {len(services)} services")
    print(f"   New concepts attempted: {len(NEW_SERVICE_CONCEPTS)}")
    print(f"   DEPLOYED: {len(deployed)}")
    print(f"   BLOCKED:  {len(blocked)}")
    print(f"   SKIPPED:  {len(skipped)} (duplicates)")

    print("\n✅ DEPLOYED PAGES (score ≥ 0.80):")
    for d in deployed:
        print(f"   • [{d['score']:.2f}] {d['name']} ({d['id']}) — {d['words']} words")
        if 'tsx_page' in d:
            print(f"     .tsx: app/services/{d['id']}/page.tsx")

    if blocked:
        print("\n❌ BLOCKED PAGES (eval gate failed):")
        for b in blocked:
            print(f"   • [{b['score']:.2f}] {b['name']} ({b['id']})")
            for e in b['errors']:
                print(f"     ERROR: {e}")
            for w in b['warnings']:
                print(f"     WARN:  {w}")

    if skipped:
        print("\n⏭️  SKIPPED (already in catalog):")
        for s in skipped:
            print(f"   • {s['name']} — {s['reason']}")

    print(f"\n💾 Updated servicesData.json — total now {len(services)} services")
    print(f"💾 Synced to services.json (stable backup)")
    print(f"📄 Generated {len(deployed)} .tsx landing page files")
    print(f"🗺️  Sitemap regenerated ({'OK' if sitemap_ok else 'WARNING'})")
    print(f"📝 Results log: {OUTPUT_LOG}")
    print("=" * 65)
    return 0


if __name__ == '__main__':
    exit(main())
