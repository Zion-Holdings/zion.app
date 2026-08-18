import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Security & Compliance Solutions | Zion Tech Group',
  description: 'Security operations, compliance, and risk-management solutions for regulated environments.',
  openGraph: {
    title: 'Security & Compliance Solutions | Zion Tech Group',
    description: 'Security and compliance solutions with measurable outcomes.',
    url: 'https://ziontechgroup.com/solutions/security-compliance/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Security & Compliance Solutions | Zion Tech Group',
    description: 'Security and compliance solutions with measurable outcomes.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/solutions/security-compliance/' },
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
    </StandardPage>
  );
}
