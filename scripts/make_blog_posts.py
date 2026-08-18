from pathlib import Path

root = Path('app/blog')
existing = {p.parent.name for p in root.glob('*/page.tsx')}
slugs = [
    'ai-security-roadmap-2026',
    'observability-platform-checklist',
    'managed-ai-operations-playbook',
    'incident-response-automation-2026',
    'ai-data-governance-starter',
    'devops-platform-roi-model',
    'synthetic-monitoring-deployment',
    'ai-contract-review-automation',
    'hybrid-ai-deployment-patterns',
    'zero-trust-network-access-guide',
]

for slug in slugs:
    if slug in existing:
        print('SKIP exists', slug)
        continue
    d = root / slug
    d.mkdir(exist_ok=True)
    title = ' '.join(slug.replace('-', ' ').title().split())
    content = """import type { Metadata } from 'next';\nimport Link from 'next/link';\nimport StandardPage from '@/components/StandardPage';\n\nexport const metadata: Metadata = {\n  title: 'TITLE_PLACEHOLDER | Zion Tech Group',\n  description: 'Implementation patterns, risks, and next steps for TOPIC_PLACEHOLDER.',\n  openGraph: {\n    title: 'TITLE_PLACEHOLDER | Zion Tech Group',\n    description: 'Practical guidance for TOPIC_PLACEHOLDER.',\n    url: 'https://ziontechgroup.com/blog/SLUG_PLACEHOLDER/',\n    type: 'article',\n  },\n  alternates: { canonical: '/blog/SLUG_PLACEHOLDER/' },\n};\n\nexport default function PostPage() {\n  return (\n    <StandardPage\n      title=\"TITLE_DISPLAY_PLACEHOLDER\"\n      subtitle=\"Practical guidance for implementation, governance, and delivery.\"\n      breadcrumbItems={[\n        { label: 'Home', href: '/' },\n        { label: 'Blog', href: '/blog/' },\n        { label: 'TITLE_DISPLAY_PLACEHOLDER' },\n      ]}\n      actions={[\n        { label: 'Browse services', href: '/services/', style: 'primary' },\n        { label: 'Start a project', href: '/contact/', style: 'secondary' },\n      ]}\n    >\n      <div className=\"max-w-5xl mx-auto grid gap-6\">\n        <div className=\"rounded-2xl border border-slate-800 bg-slate-900/60 p-6\">\n          <h2 className=\"text-xl font-bold text-white mb-2\">Why this matters</h2>\n          <p className=\"text-slate-300 text-sm leading-relaxed\">\n            Organizations often start with tooling before aligning ownership, metrics, and review cycles. This guide focuses on measurable outcomes, compliance fit, and operational handoff.\n          </p>\n        </div>\n        <div className=\"rounded-2xl border border-slate-800 bg-slate-900/60 p-6\">\n          <h2 className=\"text-xl font-bold text-white mb-2\">Implementation checklist</h2>\n          <div className=\"grid gap-3\">\n            <div>\n              <h3 className=\"text-white text-sm font-semibold mb-1\">Outcome clarity</h3>\n              <p className=\"text-slate-400 text-xs\">Define the business result first, then choose the minimum viable capability to achieve it.</p>\n            </div>\n            <div>\n              <h3 className=\"text-white text-sm font-semibold mb-1\">Compliance fit</h3>\n              <p className=\"text-slate-400 text-xs\">Map regulations, data residency, and audit requirements before selecting vendors or models.</p>\n            </div>\n            <div>\n              <h3 className=\"text-white text-sm font-semibold mb-1\">Operational handoff</h3>\n              <p className=\"text-slate-400 text-xs\">Build runbooks, ownership, and review cycles before scaling beyond pilot.</p>\n            </div>\n            <div>\n              <h3 className=\"text-white text-sm font-semibold mb-1\">Observability</h3>\n              <p className=\"text-slate-400 text-xs\">Instrument latency, errors, and cost before declaring production-ready.</p>\n            </div>\n          </div>\n        </div>\n        <div className=\"grid gap-4 md:grid-cols-2\">\n          <Link href=\"/services/\" className=\"rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40\">\n            <h3 className=\"text-white font-semibold mb-1\">Browse services</h3>\n            <p className=\"text-slate-400 text-xs\">See delivery patterns for AI, cloud, security, and data programs.</p>\n            <span className=\"text-purple-300 text-xs font-semibold mt-2 inline-block\">View services →</span>\n          </Link>\n          <Link href=\"/contact/\" className=\"rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40\">\n            <h3 className=\"text-white font-semibold mb-1\">Talk to an engineer</h3>\n            <p className=\"text-slate-400 text-xs\">Share your timeline and constraints for a short list of recommended next steps.</p>\n            <span className=\"text-purple-300 text-xs font-semibold mt-2 inline-block\">Contact us →</span>\n          </Link>\n        </div>\n      </div>\n    </StandardPage>\n  );\n}\n"""
    content = content.replace('TITLE_PLACEHOLDER', title)
    content = content.replace('TOPIC_PLACEHOLDER', title.lower())
    content = content.replace('SLUG_PLACEHOLDER', slug)
    content = content.replace('TITLE_DISPLAY_PLACEHOLDER', title)
    (d / 'page.tsx').write_text(content)
    print('CREATED', slug)
