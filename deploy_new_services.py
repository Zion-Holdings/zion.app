#!/usr/bin/env python3
"""
Deploy Ultra-Fast Growth Engine v1.0 results.
Generates landing pages + 5 outreach email variants per service for the last 8 services.
"""
import json
import os
from pathlib import Path

REPO = Path('/Users/klebergarciaalcatrao/zion-support.github.io')
SERVICES_FILE = REPO / 'app' / 'data' / 'servicesData.json'
SERVICES_DIR = REPO / 'app' / 'services'
EMAIL_DIR = REPO / 'email_drafts'
PROGRESS_FILE = REPO / 'outreach_monitor' / 'processed' / 'last_service_count.txt'

INDUSTRY_ICONS = {
    "real-estate": "🏠", "telecom": "📡", "gaming": "🎮",
    "healthcare": "🏥", "finance": "💰", "manufacturing": "🏭",
    "retail": "🛍️", "logistics": "🚚"
}

def escape_js_string(s):
    if not s: return ''
    return s.replace('\\','\\\\').replace('"','\\"').replace("'", "\\'").replace('\n','\\n').replace('\r','\\r').replace('\t','\\t')

def escape_html(s):
    if not s: return ''
    return (s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
             .replace('"','&quot;').replace("'","&#39;"))

def generate_features_list(features):
    if not features:
        return '            <li>No features listed</li>'
    items = []
    for f in features[:5]:
        items.append(f'            <li>{escape_html(str(f))}</li>')
    return '\n'.join(items)

def generate_benefits_list(benefits):
    if not benefits:
        return '            <li>No benefits listed</li>'
    items = []
    for b in benefits[:5]:
        items.append(f'            <li>{escape_html(str(b))}</li>')
    return '\n'.join(items)

def format_price(val):
    if not val or val == 'N/A': return 'N/A'
    val_str = str(val)
    if val_str.startswith('$'): return val_str[1:]
    return val_str

def build_landing_page(svc):
    sid = svc.get('id', 'unknown')
    name = svc.get('name') or svc.get('title', 'Service')
    desc = svc.get('description', '')
    features = svc.get('features', [])
    benefits = svc.get('benefits', [])
    pricing = svc.get('pricing', {})

    safe_name = escape_js_string(name)
    safe_desc = escape_js_string(desc[:160])
    safe_features = generate_features_list(features)
    safe_benefits = generate_benefits_list(benefits)
    basic = format_price(pricing.get('basic', 'N/A'))
    pro = format_price(pricing.get('pro', 'N/A'))
    ent = format_price(pricing.get('enterprise', 'N/A'))

    page = f'''import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {{
  title: "{safe_name} - Zion Tech Group",
  description: "{safe_desc}",
  alternates: {{
    canonical: `https://ziontechgroup.com/services/{sid}`
  }}
}};

export default function ServicePage() {{
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/{sid}" title="{escape_html(name)}" />
        <h1 className="text-4xl font-bold mb-6">{escape_html(name)}</h1>
        <p className="text-lg text-gray-300 mb-8">{escape_html(desc)}</p>

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
              <p className="text-2xl font-bold mb-2">${basic}/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">${pro}/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">${ent}/month</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center mt-8">
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
    return page


def build_email(svc, variant_idx):
    """Generate 5 personalized outreach email variants per service."""
    sid = svc.get('id', 'unknown')
    name = svc.get('name') or svc.get('title', 'Service')
    desc = svc.get('description', '')
    industry = svc.get('industry', 'Business')
    benefits = svc.get('benefits', [])[:3]
    icon = INDUSTRY_ICONS.get(industry, '🚀')
    pricing = svc.get('pricing', {})
    basic = format_price(pricing.get('basic', 'N/A'))
    pro = format_price(pricing.get('pro', 'N/A'))
    ent = format_price(pricing.get('enterprise', 'N/A'))

    # 5 different subject lines + body approaches per variant
    subjects = [
        f"Transform Your {industry.replace('-', ' ').title()} Operations with {name}",
        f"{icon} {name} — AI Solution for {industry.replace('-', ' ').title()} Teams",
        f"Reduce {industry.replace('-', ' ').title()} Costs with Our {name}",
        f"How {name} Can Save Your {industry.replace('-', ' ').title()} Business 30%+",
        f"{name} — {industry.replace('-', ' ').title()}-Specific AI That Works Today",
    ]

    intros = [
        f"I'm Kleber from Zion Tech Group, and I wanted to introduce you to our groundbreaking {name}.",
        f"We've built {name} — a specialized AI solution designed specifically for the {industry.replace('-', ' ').title()} industry.",
        f"At Zion Tech Group, we developed {name} to solve the biggest challenges facing {industry.replace('-', ' ').title()} companies today.",
        f"{name} is our latest AI innovation, purpose-built for {industry.replace('-', ' ').title()} workflows and challenges.",
        f"After working with dozens of {industry.replace('-', ' ').title()} companies, we built {name} to address your specific pain points.",
    ]

    benefits_text = '\n'.join([f"- {b}" for b in benefits]) if benefits else "- High-quality solution"

    subject = subjects[variant_idx]
    intro = intros[variant_idx]

    email = f"""Subject: {subject}

Hi there,

{intro}

{desc}

{benefits_text}

Pricing:
- Basic: ${basic}/month
- Pro: ${pro}/month
- Enterprise: ${ent}/month

Book a free consultation: https://calendly.com/kleber-ziontechgroup/consultation

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
ziontechgroup.com

---
AI/IT Solutions for the Future"""
    return email


def main():
    with open(SERVICES_FILE, 'r') as f:
        data = json.load(f)
    services = data if isinstance(data, list) else data.get('services', [])

    # Process the last 8 services (the newly discovered ones)
    new_services = services[-8:]
    print(f"🚀 Processing {len(new_services)} new services for landing pages + outreach emails")

    pages_generated = 0
    emails_generated = 0
    SERVICES_DIR.mkdir(parents=True, exist_ok=True)
    EMAIL_DIR.mkdir(parents=True, exist_ok=True)

    for svc in new_services:
        sid = svc.get('id', 'unknown')
        name = svc.get('name', 'Service')
        industry = svc.get('industry', 'business')

        # --- Landing Page ---
        page_path = SERVICES_DIR / sid / 'page.tsx'
        page_path.parent.mkdir(parents=True, exist_ok=True)
        if not page_path.exists():
            page_content = build_landing_page(svc)
            with open(page_path, 'w') as f:
                f.write(page_content)
            pages_generated += 1
            print(f"  [📄] Landing page: {sid}")
        else:
            print(f"  [⏭]  Page exists: {sid}")

        # --- Outreach Emails (5 variants per service) ---
        for i in range(5):
            email_filename = f"{sid}_outreach_v{i+1}.txt"
            email_path = EMAIL_DIR / email_filename
            email_content = build_email(svc, i)
            with open(email_path, 'w') as f:
                f.write(email_content)
            emails_generated += 1
            print(f"  [📧] Email v{i+1}: {sid}")

    # --- Update progress tracker ---
    with open(PROGRESS_FILE, 'w') as f:
        f.write(str(len(services)))

    print(f"\n✅ Done: {pages_generated} landing pages, {emails_generated} outreach emails ({len(new_services)} services × 5 variants)")
    return pages_generated, emails_generated

if __name__ == '__main__':
    main()
