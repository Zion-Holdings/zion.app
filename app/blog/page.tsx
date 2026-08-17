import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Guides, playbooks, and implementation notes on AI, IT, automation, and security.',
  openGraph: { title: 'Blog | Zion Tech Group', description: 'Technical and strategy notes from Zion.', url: 'https://ziontechgroup.com/blog/', type: 'website' },
  alternates: { canonical: '/blog/' },
};

const POSTS = [
  { title: '5G Solutions Overview', href: '/blog/5g-solutions-2026/', desc: 'Architecture, ROI, and operations patterns.' },
  { title: 'Accessibility Compliance', href: '/blog/accessibility-compliance-2026/', desc: 'Policy, automation, and evaluation playbooks.' },
  { title: 'AI 3D Asset Generator', href: '/blog/ai-3d-asset-generator-2026/', desc: 'Capabilities, limits, and production patterns.' },
  { title: 'AI Customer Support', href: '/blog/ai-customer-support-pro-2026/', desc: 'Routing, escalation, and cost modeling.' },
  { title: 'Micro-SaaS AI Build', href: '/blog/microsaas-ai-expense-tracker-2026/', desc: 'Validation, growth loops, and hosting.' },
];

export default function BlogPage() {
  return (
    <StandardPage title="Blog" subtitle="Implementation-focused notes and patterns from Zion engagements." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {POSTS.map((post) => (
          <a key={post.href} href={post.href} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
            <h3 className="text-white font-semibold mb-2">{post.title}</h3>
            <p className="text-slate-400 text-sm">{post.desc}</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Read →</span>
          </a>
        ))}
      </div>
    </StandardPage>
  );
}
