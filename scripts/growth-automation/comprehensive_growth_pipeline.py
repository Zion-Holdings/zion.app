#!/usr/bin/env python3
"""
COMPREHENSIVE GROWTH PIPELINE v3.0
Maximum velocity service discovery, landing page generation, and outreach email creation.
"""

import json
import os
import sys
import re
import hashlib
import random
import argparse
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Set

# Setup paths
BASE = Path(os.environ.get('PROJECT_ROOT', '/Users/klebergarciaalcatrao'))
DATA_DIR = BASE / 'app' / 'data'
SERVICES_FILE = DATA_DIR / 'servicesData.json'
SCRIPTS_DIR = Path(os.environ.get('SCRIPTS_ROOT', '/Users/klebergarciaalcatrao/scripts'))
GROWTH_DIR = BASE / 'outreach_monitor' / 'processed'
GROWTH_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR.mkdir(parents=True, exist_ok=True)

# Configure logging
import logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)-7s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(GROWTH_DIR / 'comprehensive_growth_pipeline.log')
    ]
)
logger = logging.getLogger('comprehensive-growth-pipeline')

# AI/IT Service templates for discovery
SERVICE_TEMPLATES = [
    {"template": "AI-Powered {adjective} {domain} Analytics", "category": "analytics", "industry": "technology", "pricing_multiplier": 1.0},
    {"template": "Intelligent {domain} Forecasting Engine", "category": "forecasting", "industry": "technology", "pricing_multiplier": 1.2},
    {"template": "AI-Powered {adjective} Customer Experience Suite", "category": "customer experience", "industry": "technology", "pricing_multiplier": 1.1},
    {"template": "Conversational AI for {domain}", "category": "automation", "industry": "technology", "pricing_multiplier": 0.9},
    {"template": "AI-Driven {adjective} Marketing Automation", "category": "marketing", "industry": "technology", "pricing_multiplier": 1.0},
    {"template": "Predictive Sales Lead Scoring", "category": "sales", "industry": "technology", "pricing_multiplier": 1.1},
    {"template": "AI-Powered {adjective} Code Generation", "category": "development", "industry": "technology", "pricing_multiplier": 1.3},
    {"template": "Intelligent CI/CD Pipeline Automation", "category": "devops", "industry": "technology", "pricing_multiplier": 1.2},
    {"template": "AI-Powered {adjective} Data Processing", "category": "data engineering", "industry": "technology", "pricing_multiplier": 1.0},
    {"template": "Cloud-Native {domain} Optimization", "category": "cloud", "industry": "technology", "pricing_multiplier": 1.1},
    {"template": "AI-Powered {adjective} Threat Detection", "category": "security", "industry": "technology", "pricing_multiplier": 1.4},
    {"template": "Intelligent Compliance Automation", "category": "compliance", "industry": "technology", "pricing_multiplier": 1.3},
    {"template": "AI-Driven {domain} Optimization Suite", "category": "industry solutions", "industry": "technology", "pricing_multiplier": 1.2},
    {"template": "Smart {domain} Workflow Automation", "category": "automation", "industry": "technology", "pricing_multiplier": 1.0},
    {"template": "AI-Powered {adjective} IoT Intelligence", "category": "iot", "industry": "technology", "pricing_multiplier": 1.3},
    {"template": "Machine Learning Model Operations Platform", "category": "mlops", "industry": "technology", "pricing_multiplier": 1.4}
]

ADJECTIVES = [
    "intelligent", "advanced", "automated", "smart", "predictive",
    "autonomous", "next-generation", "real-time", "adaptive", "scalable",
    "cloud-native", "enterprise-grade", "data-driven", "insightful", "proactive"
]

DOMAINS = [
    "financial", "marketing", "sales", "customer", "operational",
    "supply chain", "manufacturing", "healthcare", "retail", "logistics",
    "energy", "telecommunications", "media", "education", "real estate",
    "human resources", "legal", "insurance", "transportation", "agriculture", "gaming"
]

DESCRIPTION_PREFIXES = [
    "AI-driven analytics platform that delivers {adjective} insights into {domain} operations, providing real-time monitoring, predictive modeling, and automated reporting capabilities.",
    "Machine learning-powered forecasting system that predicts {domain} trends, demands, and outcomes with high accuracy.",
    "Next-generation customer experience platform that delivers {adjective} service delivery across all touchpoints.",
    "Natural language processing system that handles {domain} inquiries through intelligent chatbots.",
    "Intelligent marketing platform that creates {adjective} campaigns across channels, optimizing content and targeting.",
    "Machine learning system that scores and prioritizes sales leads based on engagement patterns.",
    "Advanced code generation system that produces {adjective} software solutions from natural language descriptions.",
    "Machine learning-driven continuous integration and deployment system with intelligent rollback capabilities.",
    "Intelligent data processing platform that automates extraction, transformation, and loading of data at scale.",
    "AI-driven cloud optimization platform that automatically manages resource allocation and cost optimization.",
    "Advanced cybersecurity platform that identifies and mitigates {adjective} threats in real-time.",
    "Automated compliance platform that monitors, audits, and enforces regulatory requirements.",
    "Industry-specific AI solution that optimizes {domain} operations and decision-making processes.",
    "Intelligent workflow automation platform that streamlines {domain} processes and eliminates manual tasks.",
    "Edge AI platform that processes IoT sensor data in real-time with {adjective} insights.",
    "MLOps solution that automates model deployment, monitoring, and retraining for production AI systems."
]

FEATURES = [
    ["Real-time monitoring", "Predictive modeling", "Automated reporting", "Custom dashboards"],
    ["Time-series analysis", "Scenario modeling", "Confidence intervals", "Automated alerts"],
    ["Omnichannel support", "Personalization engine", "Sentiment analysis", "Journey mapping"],
    ["Natural language understanding", "Multi-language support", "Context awareness", "Seamless handoff"],
    ["Dynamic content creation", "Audience segmentation", "A/B testing", "Performance analytics"],
    ["Real-time scoring", "Behavioral tracking", "Lead nurturing", "Pipeline optimization"],
    ["Multi-language support", "Code optimization", "Security scanning", "Documentation generation"],
    ["Automated testing", "Smart deployment", "Rollback automation", "Performance monitoring"],
    ["Automated ETL", "Data validation", "Error recovery", "Schema evolution"],
    ["Auto-scaling", "Cost optimization", "Performance tuning", "Resource monitoring"],
    ["Behavioral analysis", "Automated response", "Threat intelligence", "Incident management"],
    ["Regulatory monitoring", "Audit automation", "Violation detection", "Remediation guidance"],
    ["Process optimization", "Decision support", "Performance analytics", "ROI tracking"],
    ["Process mapping", "Task automation", "Workflow optimization", "Exception handling"],
    ["Edge processing", "Real-time analytics", "Automated responses", "Energy efficiency"],
    ["Model deployment", "Performance monitoring", "Automated retraining", "Version control"]
]

BENEFITS = [
    ["Data-driven decision making", "Improved operational efficiency", "Proactive issue detection", "Enhanced KPI tracking"],
    ["Accurate demand planning", "Reduced forecast errors", "Opportunity identification", "Risk mitigation"],
    ["Higher customer satisfaction", "Increased loyalty", "Reduced churn", "Improved CSAT scores"],
    ["24/7 availability", "Instant response times", "Consistent service quality", "Reduced support costs"],
    ["Higher conversion rates", "Improved ROI", "Personalized messaging", "Automated workflows"],
    ["40% increase in conversions", "Higher team productivity", "Better lead quality", "Shortened sales cycles"],
    ["10x faster development", "Reduced bugs", "Improved quality", "Enhanced security"],
    ["Faster releases", "Reduced errors", "Improved reliability", "Continuous delivery"],
    ["Reduced manual work", "Higher data quality", "Faster processing", "Self-healing pipelines"],
    ["Reduced cloud costs", "Better performance", "Automatic scaling", "Optimized resources"],
    ["Proactive protection", "Reduced breaches", "Faster response", "Compliance assurance"],
    ["Full compliance coverage", "Reduced audit burden", "Automated reporting", "Risk mitigation"],
    ["20%+ efficiency gains", "Cost reduction", "Better decisions", "Competitive advantage"],
    ["Faster operations", "Reduced errors", "Improved productivity", "Better resource utilization"],
    ["Reduced latency", "Better insights", "Automated responses", "Energy efficiency"],
    ["Production-ready models", "Continuous improvement", "Reduced downtime", "Better accuracy"]
]


def escape_js_string(s: str) -> str:
    """Escape special characters for JavaScript/TypeScript string literals."""
    if not s:
        return ''
    return s.replace('\\', '\\\\').replace('"', '\\"').replace("'", "\\'").replace('\n', '\\n').replace('\r', '\\r').replace('\t', '\\t')

def escape_html_content(s: str) -> str:
    """Escape HTML content to prevent XSS and malformed HTML."""
    if not s:
        return ''
    return (s
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')
        .replace("'", '&#39;'))

def generate_service_id(service_name: str) -> str:
    """Generate deterministic service ID using hash."""
    base_id = service_name.lower().replace(" ", "-").replace(":", "").replace("'", "")
    base_id = re.sub(r'[^a-z0-9-]', '', base_id)
    hash_part = hashlib.md5(service_name.encode()).hexdigest()[:8]
    return f"{base_id}-{hash_part}"

def get_existing_ids() -> Set[str]:
    """Get existing service IDs and names from JSON file for deduplication."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            services = data
        elif isinstance(data, dict):
            services = data.get('services', [])
        else:
            return set()
        
        ids_and_names = set()
        for s in services:
            if 'id' in s:
                ids_and_names.add(s['id'])
            if 'name' in s:
                ids_and_names.add(s['name'].lower())
            if 'title' in s:
                ids_and_names.add(s['title'].lower())
        
        return ids_and_names
    except FileNotFoundError:
        logger.warning(f"Services file not found: {SERVICES_FILE}")
        return set()
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return set()

def load_services() -> List[Dict]:
    """Load existing services from JSON file."""
    try:
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            return data.get('services', [])
        else:
            return []
    except FileNotFoundError:
        logger.warning(f"Services file not found: {SERVICES_FILE}")
        return []
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return []

def save_services(services: List[Dict]) -> bool:
    """Save services to JSON file."""
    try:
        SERVICES_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(SERVICES_FILE, 'w') as f:
            json.dump(services, f, indent=2)
        return True
    except Exception as e:
        logger.error(f"Error saving services: {e}")
        return False

def generate_new_services(batch_size: int, existing_ids: Set[str]) -> List[Dict]:
    """Generate new services using templates and combinatorial variations."""
    new_services = []
    generated_ids = set()
    
    random.seed(int(datetime.now(timezone.utc).timestamp()))
    
    attempts = 0
    max_attempts = batch_size * 10
    
    while len(new_services) < batch_size and attempts < max_attempts:
        attempts += 1
        
        template_idx = attempts % len(SERVICE_TEMPLATES)
        template = SERVICE_TEMPLATES[template_idx]
        adjective = ADJECTIVES[attempts % len(ADJECTIVES)]
        domain = DOMAINS[(attempts + template_idx) % len(DOMAINS)]
        
        name = template['template'].format(adjective=adjective.title(), domain=domain.title())
        description = DESCRIPTION_PREFIXES[template_idx].format(adjective=adjective, domain=domain)
        features = FEATURES[template_idx]
        benefits = BENEFITS[template_idx]
        
        service_id = generate_service_id(name)
        
        if service_id in existing_ids or service_id in generated_ids:
            continue
        
        multiplier = template.get('pricing_multiplier', 1.0)
        base_basic = 199
        base_pro = 499
        base_enterprise = 1499
        
        new_service = {
            'id': service_id,
            'name': name,
            'description': description,
            'category': template['category'],
            'industry': template['industry'],
            'features': features[:5],
            'benefits': benefits[:5],
            'pricing': {
                'basic': str(int(base_basic * multiplier)),
                'pro': str(int(base_pro * multiplier)),
                'enterprise': str(int(base_enterprise * multiplier))
            },
            'timestamp': datetime.now(timezone.utc).isoformat(),
            'contactInfo': {
                'website': f"/services/{service_id}",
                'email': 'hello@ziontechgroup.com',
                'phone': '+1 (302) 464-0950'
            },
            'icon': '💡',
            'href': f"/services/{service_id}",
            'popular': False
        }
        
        new_services.append(new_service)
        generated_ids.add(service_id)
        
        if len(new_services) % 10 == 0:
            logger.info(f"[➕] Generated {len(new_services)}/{batch_size} services...")
    
    return new_services

def generate_features_list(features: list) -> str:
    """Generate a properly escaped features list."""
    if not features:
        return '            <li>No features listed</li>'
    
    items = []
    for f in features[:5]:
        escaped = escape_html_content(str(f))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)

def generate_benefits_list(benefits: list) -> str:
    """Generate a properly escaped benefits list."""
    if not benefits:
        return '            <li>No benefits listed</li>'
    
    items = []
    for b in benefits[:5]:
        escaped = escape_html_content(str(b))
        items.append(f'            <li>{escaped}</li>')
    
    return '\n'.join(items)

def generate_landing_pages_for_new_services(new_services: List[Dict]) -> int:
    """Generate Next.js landing pages for new services."""
    pages_generated = 0
    services_dir = BASE / 'app' / 'services'
    services_dir.mkdir(parents=True, exist_ok=True)
    
    for service in new_services:
        try:
            service_id = service.get('id', 'unknown-service')
            page_path = services_dir / f"{service_id}" / "page.tsx"
            
            page_path.parent.mkdir(parents=True, exist_ok=True)
            
            service_name = service.get('name') or service.get('title', 'Service')
            service_desc = service.get('description', '')
            service_features = service.get('features', [])
            service_benefits = service.get('benefits', [])
            service_pricing = service.get('pricing', {})
            
            safe_name = escape_js_string(service_name)
            safe_desc = escape_js_string(service_desc[:160])
            safe_features = generate_features_list(service_features)
            safe_benefits = generate_benefits_list(service_benefits)
            
            def format_price(val):
                if not val or val == 'N/A':
                    return 'N/A'
                val_str = str(val)
                if val_str.startswith('$'):
                    return val_str[1:]
                return val_str
            
            basic_price = format_price(service_pricing.get('basic', 'N/A'))
            pro_price = format_price(service_pricing.get('pro', 'N/A'))
            enterprise_price = format_price(service_pricing.get('enterprise', 'N/A'))
            
            page_content = f'''import {{ }} from 'next/navigation';

export const metadata = {{
  title: "{safe_name} - Zion Tech Group",
  description: "{safe_desc}",
  alternates: {{
    canonical: `https://ziontechgroup.com/services/{service_id}`
  }}
}};

export default function ServicePage() {{
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{escape_html_content(service_name)}</h1>
        <p className="text-lg text-gray-300 mb-8">{escape_html_content(service_desc)}</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
{safe_features}
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
{safe_benefits}
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
'''
            
            with open(page_path, 'w') as f:
                f.write(page_content)
            
            logger.info(f"[📄] Generated landing page: {service_id}")
            pages_generated += 1
            
        except Exception as e:
            logger.error(f"[❌] Failed to generate page for {service.get('id', 'unknown')}: {e}")
    
    return pages_generated

def format_price(val):
    """Format price value - strip $ if present, return clean value."""
    if not val or val == 'N/A':
        return 'N/A'
    val_str = str(val)
    if val_str.startswith('$'):
        val_str = val_str[1:]
    val_str = val_str.replace('/month', '').replace('/mo', '').strip()
    return val_str

def generate_outreach_emails(new_services: List[Dict]) -> int:
    """Generate personalized outreach emails for new services."""
    emails_generated = 0
    
    for service in new_services:
        try:
            pricing = service.get('pricing', {})
            basic_price = format_price(pricing.get('basic', 'N/A'))
            pro_price = format_price(pricing.get('pro', 'N/A'))
            enterprise_price = format_price(pricing.get('enterprise', 'N/A'))
            
            benefits = service.get('benefits', [])[:3]
            benefits_text = '\n'.join([f"- {b}" for b in benefits]) if benefits else "- High-quality solution"
            
            service_name = service.get('name') or service.get('title', 'Service')
            
            email_content = f"""Subject: Transform Your {service.get('industry', 'Business')} Operations with {service_name}

Hi there,

I'm Kleber from Zion Tech Group, and I wanted to introduce you to our groundbreaking {service_name}.

{service.get('description', 'A powerful AI/IT solution for your business.')}

**Key Benefits:**
{benefits_text}

**Pricing:**
- Basic: ${basic_price}/month
- Pro: ${pro_price}/month
- Enterprise: ${enterprise_price}/month

**Book a free consultation:** https://calendly.com/kleber-ziontechgroup/consultation

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
ziontechgroup.com

---
AI/IT Solutions for the Future"""
            
            email_dir = BASE / 'email_drafts'
            email_dir.mkdir(parents=True, exist_ok=True)
            
            email_path = email_dir / f"{service.get('id', 'unknown')}_outreach.txt"
            with open(email_path, 'w') as f:
                f.write(email_content)
            
            logger.info(f"[📧] Generated outreach email: {service.get('id', 'unknown')}")
            emails_generated += 1
            
        except Exception as e:
            logger.error(f"[❌] Failed to generate email for {service.get('id', 'unknown')}: {e}")
    
    return emails_generated

def update_sitemap():
    """Update sitemap.xml with new service URLs."""
    try:
        sitemap_path = BASE / 'sitemap.xml'
        
        with open(SERVICES_FILE, 'r') as f:
            data = json.load(f)
        
        if isinstance(data, dict):
            services = data.get('services', [])
        else:
            services = data
        
        today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
        sitemap_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>{today}</lastmod>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
        
        for service in services:
            if 'id' in service:
                service_id = service['id']
                sitemap_content += f'''  <url>
    <loc>https://ziontechgroup.com/services/{service_id}</loc>
    <lastmod>{today}</lastmod>
  </url>
'''
        
        sitemap_content += '</urlset>'
        
        with open(sitemap_path, 'w') as f:
            f.write(sitemap_content)
        
        logger.info(f"[✅] Updated sitemap with {len(services)} service URLs")
        return True
        
    except Exception as e:
        logger.error(f"[❌] Sitemap update failed: {e}")
        return False

def run_pipeline(batch_size: int = 50):
    """Run the comprehensive growth pipeline."""
    logger.info("=" * 60)
    logger.info("🚀 ULTRA-FAST GROWTH ENGINE DEPLOYMENT v3.0")
    logger.info("=" * 60)
    
    # Get existing services
    existing_ids = get_existing_ids()
    services_count = len(load_services())
    logger.info(f"[ℹ️] Existing services: {len(existing_ids) // 2} unique entries in catalog")
    
    # Generate new services
    logger.info(f"[➕] Discovering {batch_size} new AI/IT services...")
    new_services = generate_new_services(batch_size, existing_ids)
    
    if not new_services:
        logger.info("[⚠️] No new services generated - all variations already exist")
        return 0, 0, 0
    
    logger.info(f"[✅] Generated {len(new_services)} new services")
    
    # Load existing services and add new ones
    services = load_services()
    initial_count = len(services)
    
    for service in new_services:
        services.append(service)
        logger.info(f"[✅] Added: {service['name']}")
    
    # Save updated services
    if save_services(services):
        final_count = len(services)
        logger.info(f"[💾] Saved {len(new_services)} new services to catalog")
        logger.info(f"[📊] Total services in catalog: {final_count}")
    else:
        logger.error("[❌] Failed to save services")
        return 0, 0, 0
    
    # Generate landing pages
    logger.info("[📄] Generating landing pages...")
    pages = generate_landing_pages_for_new_services(new_services)
    logger.info(f"[✅] Generated {pages} landing pages")
    
    # Update sitemap
    logger.info("[🗺️] Updating sitemap...")
    update_sitemap()
    
    # Generate outreach emails
    logger.info("[📧] Generating outreach emails...")
    emails = generate_outreach_emails(new_services)
    logger.info(f"[✅] Generated {emails} outreach emails")
    
    total_artifacts = pages + emails + len(new_services)
    logger.info(f"[🏁] Pipeline complete: {pages} pages, {emails} emails, {len(new_services)} services added")
    
    return pages, emails, len(new_services)

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Comprehensive Growth Pipeline for Zion Tech Group')
    parser.add_argument('--once', action='store_true', help='Run single cycle and exit')
    parser.add_argument('--batch-size', type=int, default=50, help='Number of services to discover per cycle (default: 50)')
    args = parser.parse_args()
    
    if args.once:
        pages, emails, services = run_pipeline(args.batch_size)
        total_artifacts = pages + emails + services
        print(json.dumps({
            'status': 'success',
            'services_generated': services,
            'landing_pages': pages,
            'outreach_emails': emails,
            'total_artifacts': total_artifacts,
            'timestamp': datetime.now(timezone.utc).isoformat()
        }, indent=2))
        return 0
    
    return 0

if __name__ == '__main__':
    sys.exit(main())