import os, re, json
from pathlib import Path
from datetime import datetime, timezone

REPO = Path('/Users/klebergarciaalcatrao/zion-techgroup')
BASE = REPO / 'app' / 'ai-services'
SEO_BASE = REPO / 'app' / 'seo'
LEAD_DIR = REPO / 'lead-crm'

def write_page(path: Path, component: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(component)
    print('wrote', path)

# Candidate AI/IT service concepts with SEO titles
SERVICES = [
    {
        'slug': 'ai-contact-center-intelligence',
        'title': 'AI Contact Center Intelligence',
        'summary': 'AI-driven contact center analytics, QA automation, and workforce optimization for support and sales teams.',
        'keywords': ['contact center AI', 'conversation intelligence', 'call center analytics', 'QA automation', 'workforce optimization', 'speech analytics']
    },
    {
        'slug': 'ai-email-reply-intelligence',
        'title': 'AI Email Reply Intelligence',
        'summary': 'Automated email response drafting, triage, and intent detection for revenue and support teams.',
        'keywords': ['email AI', 'reply intelligence', 'support triage', 'automated responses', 'enterprise email automation']
    },
    {
        'slug': 'ai-document-intelligence',
        'title': 'AI Document Intelligence',
        'summary': 'Extract insights from contracts, invoices, and operational documents with AI parsing and validation.',
        'keywords': ['document AI', 'contract extraction', 'invoice parsing', 'OCR automation', 'enterprise document processing']
    },
    {
        'slug': 'ai-security-operations-assistant',
        'title': 'AI Security Operations Assistant',
        'summary': 'AI-assisted alert triage, incident summarization, and playbook recommendation for security teams.',
        'keywords': ['security AI', 'SOAR assistant', 'incident response', 'alert triage', 'AI SOC']
    }
]

PAGE_TMPL = """export default function Page() {
  const serviceSlug = "{slug}";
  const title = "{title}";
  const summary = "{summary}";
  const keywords = {keywords};
  return (
    <>
      <main className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
          <div className="container-page relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">AI + IT services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">{title}</h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-8">{summary}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Schedule Free Consultation</a>
              <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Visit ziontechgroup.com</a>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
          <div className="container-page">
            <h2 className="text-3xl font-bold text-white mb-4">Why Zion Tech Group</h2>
            <p className="text-slate-400 max-w-2xl mb-6">We combine AI specialization with IT operations experience to ship measurable outcomes.</p>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
              <li>Proven AI/IT delivery playbooks</li>
              <li>Free tools and services to get started</li>
              <li>Outcome-focused engagement models</li>
              <li>Executive sponsorship with CEO-level accountability</li>
            </ul>
            <div className="mt-10">
              <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
          <div className="container-page text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to move forward?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">Contact our team: +1 302 464 0950 | kleber@ziontechgroup.com</p>
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Schedule Free Consultation</a>
          </div>
        </section>
      </main>
    </>
  );
}
"""

SEO_TMPL = """export const metadata = {{
  title: '{title} | Zion Tech Group',
  description: '{desc}',
  alternates: {{ canonical: '/{slug}' }}
}};

export default function Page() {{
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">{title}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">{desc}</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">Contact Us</a>
            <a href="https://ziontechgroup.com" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">Visit ziontechgroup.com</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">How we can help</h2>
          <p className="text-slate-400 max-w-2xl mb-6">AI and IT services built for operators, not just pilots. We focus on adoption, training, and measurable outcomes.</p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300 list-disc pl-6">
            <li>AI strategy and implementation</li>
            <li>Automation that reduces manual work</li>
            <li>Data, security, and operational readiness</li>
            <li>Continuous improvement after launch</li>
          </ul>
          <div className="mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Book a Meeting</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to see more?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Explore our services, free tools, and AI resources at https://ziontechgroup.com</p>
          <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Visit ziontechgroup.com</a>
        </div>
      </section>
    </main>
  );
}}
"""

SEO_PAGES = [
    {
        'slug': 'ai-contact-center-automation',
        'title': 'AI Contact Center Automation',
        'desc': 'Explore AI contact center automation, QA automation, workforce optimization, and conversation intelligence use cases for modern support teams.'
    },
    {
        'slug': 'ai-email-automation-business',
        'title': 'AI Email Automation for Business',
        'desc': 'Learn how AI email automation, reply intelligence, and intent detection can improve support, sales, and operational response workflows.'
    },
    {
        'slug': 'ai-copilot-for-enterprise-it',
        'title': 'AI Copilot for Enterprise IT',
        'desc': 'How enterprise IT teams use AI copilots, automation, and IT service assistants to reduce ticket resolution time and improve reliability.'
    },
    {
        'slug': 'ai-security-operations-automation',
        'title': 'AI Security Operations Automation',
        'desc': 'Practical AI security operations automation for alert triage, incident response, SOC workflow optimization, and responsible AI governance.'
    },
    {
        'slug': 'ai-document-automation-enterprise',
        'title': 'AI Document Automation Enterprise',
        'desc': 'Enterprise AI document automation, extraction, parsing, validation, and document intelligence use cases for contracts, invoices, and records.'
    },
    {
        'slug': 'ai-free-tools-enterprise',
        'title': 'AI Free Tools and Services for Enterprises',
        'desc': 'Zion Tech Group offers free AI tools, services, and resources to help enterprises evaluate automation and accelerate adoption without cost barriers.'
    }
]

for svc in SERVICES:
    slug = svc['slug']
    page = BASE / slug / 'page.tsx'
    write_page(page, PAGE_TMPL.replace('{slug}', slug).replace('{title}', svc['title']).replace('{summary}', svc['summary']).replace('{keywords}', json.dumps(svc['keywords'])))

for seo in SEO_PAGES:
    page = SEO_BASE / seo['slug'] / 'page.tsx'
    write_page(page, SEO_TMPL.replace('{slug}', seo['slug']).replace('{title}', seo['title']).replace('{desc}', seo['desc']))

print('created_services', len(SERVICES))
print('created_seo_pages', len(SEO_PAGES))
