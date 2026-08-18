import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Security & Compliance Solutions | Zion Tech Group',
    description: 'Security operations, compliance, and risk-management solutions for regulated environments.',
    openGraph: {
    title: 'Security & Compliance Solutions | Zion Tech Group',
    description: 'Security and compliance solutions with measurable outcomes.',
    url: 'https://ziontechgroup.com/solutions/security-compliance/',
    type: 'website',
  },
    twitter: {
    card: 'summary_large_image',
    title: 'Security & Compliance Solutions | Zion Tech Group',
    description: 'Security and compliance solutions with measurable outcomes.',
  },
    alternates: { canonical: '/solutions/security-compliance/' },
};

export default function SecurityComplianceSolutionsPage() {
  return (
    <StandardPage
      title="Security & Compliance"
      subtitle="Harden defenses, automate compliance evidence, and reduce incident-response time."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Security & Compliance' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse security services', href: '/services?category=security', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-slate-400 text-sm">Penetration testing, identity, and protection controls.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Compliance Automation</h3>
          <p className="text-slate-400 text-sm">Policy enforcement, evidence collection, and audit-ready reporting.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Risk & Governance</h3>
          <p className="text-slate-400 text-sm">Model governance, red-teaming, and safety controls for production AI.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
      <div className="max-w-3xl mx-auto mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-3">Related resources</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/tools/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Developer Tools</h3>
            <p className="text-slate-400 text-xs">Free utilities for JSON, JWT, regex, QR, and text processing.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Use tools →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
