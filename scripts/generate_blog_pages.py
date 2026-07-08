from pathlib import Path
import json
import sys

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
BLOG_DIR = REPO / 'app' / 'blog'
DEFAULT_ITEMS = [
    {
      'slug': 'ai-first-security-operations-and-soc-automation-in-2026',
      'title': 'AI-First Security Operations and SOC Automation in 2026',
      'description': 'Practical AI methods for SOC automation: alert reduction, enrichment, and faster response workflows.',
      'h1': 'AI-First Security Operations and SOC Automation in 2026',
      'lead': 'Practical AI methods for SOC automation: alert reduction, enrichment, and faster response workflows.',
      'content': '<p>Security AI patterns that reduce noise and improve analyst effectiveness.</p><ul><li>Alert clustering and prioritization</li><li>Automated enrichment and playbook triage</li><li>Free readiness tools at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/">all services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>'
    },
    {
      'slug': 'ai-first-vulnerability-management-and-patch-intelligence-in-2026',
      'title': 'AI-First Vulnerability Management and Patch Intelligence in 2026',
      'description': 'AI-assisted vulnerability management and patch intelligence for faster remediation and risk reduction.',
      'h1': 'AI-First Vulnerability Management and Patch Intelligence in 2026',
      'lead': 'Practical AI methods for vulnerability triage, patch intelligence, and risk reduction.',
      'content': '<p>Vulnerability AI patterns that improve remediation speed and reduce exposure.</p><ul><li>Risk-based prioritization</li><li>Patch success prediction</li><li>Review options at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/">all services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>'
    },
    {
      'slug': 'ai-first-data-center-operations-and-hybrid-infrastructure-in-2026',
      'title': 'AI-First Data Center Operations and Hybrid Infrastructure in 2026',
      'description': 'AI-assisted data center operations for capacity, power, cooling, and hybrid infrastructure optimization.',
      'h1': 'AI-First Data Center Operations and Hybrid Infrastructure in 2026',
      'lead': 'Practical AI methods for data center efficiency and hybrid infrastructure planning.',
      'content': '<p>Data center AI patterns that improve utilization and reduce cost.</p><ul><li>Capacity forecasting and anomaly alerts</li><li>Power/cooling optimization</li><li>Explore options at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/">all services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>'
    },
    {
      'slug': 'ai-first-end-user-computing-and-modern-workplace-in-2026',
      'title': 'AI-First End-User Computing and Modern Workplace in 2026',
      'description': 'AI-assisted end-user computing and modern workplace enablement for productivity and support automation.',
      'h1': 'AI-First End-User Computing and Modern Workplace in 2026',
      'lead': 'Practical AI methods for EUC, device support, and modern workplace productivity.',
      'content': '<p>Modern workplace AI patterns that reduce ticket volume and improve user experience.</p><ul><li>Self-healing device support</li><li>Intelligent knowledge delivery</li><li>Review models at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/">all services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>'
    },
    {
      'slug': 'ai-first-channel-partner-and-reseller-enablement-in-2026',
      'title': 'AI-First Channel Partner and Reseller Enablement in 2026',
      'description': 'AI-assisted partner enablement, co-selling, and reseller operations for faster revenue growth.',
      'h1': 'AI-First Channel Partner and Reseller Enablement in 2026',
      'lead': 'Practical AI methods for partner onboarding, co-selling, and enablement automation.',
      'content': '<p>Channel AI patterns that improve partner velocity and deal quality.</p><ul><li>Automated onboarding and certification paths</li><li>Co-selling intelligence and lead routing</li><li>Explore partnership options at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/">all services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>'
    },
]

TEMPLATE = '''import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: '{title}',
  description: '{description}',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-purple-400 transition">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{h1}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{h1}</h1>
        <p className="text-slate-300 leading-relaxed mb-8">{lead}</p>
        <div className="glass-card prose prose-invert max-w-none">
          {content}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
'''

def generate(items_path=None):
    items = DEFAULT_ITEMS
    if items_path:
        p = Path(items_path)
        if p.exists():
            try:
                data = json.loads(p.read_text(encoding='utf-8'))
                if isinstance(data, list) and data:
                    items = data
            except Exception:
                items = DEFAULT_ITEMS
    created = []
    for item in items:
        slug = item.get('slug')
        if not slug:
            continue
        txt = TEMPLATE.replace('{title}', item['title']).replace('{description}', item['description']).replace('{h1}', item['h1']).replace('{lead}', item['lead']).replace('{content}', item['content'])
        out = BLOG_DIR / slug / 'page.tsx'
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(txt, encoding='utf-8')
        created.append(str(out.relative_to(REPO)))
    print(json.dumps({'created': len(created), 'paths': created}, ensure_ascii=False))

if __name__ == '__main__':
    items_path = sys.argv[1] if len(sys.argv) > 1 else None
    generate(items_path)
