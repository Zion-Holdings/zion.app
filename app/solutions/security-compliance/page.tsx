import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Security & Compliance Solutions | Zion Tech Group',
  description: 'Security operations, compliance automation, and governance solutions from Zion Tech Group.',
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
<>
    <StandardPage
      title="Security & Compliance"
      subtitle="Threat detection, governance, identity, incident response, and compliance automation."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Security & Compliance' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse security services', href: '/services/?category=security', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Threat Detection</h3>
          <p className="text-slate-400 text-sm">Monitoring, alerting, and incident response for modern stacks.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Governance & Policy</h3>
          <p className="text-slate-400 text-sm">Access control, audit trails, and compliance automation.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Incident Response</h3>
          <p className="text-slate-400 text-sm">Runbooks, on-call coverage, and post-incident review cycles.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">What you can expect</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Threat models mapped to your environment and data flows.</li>
          <li>Automated compliance checks and evidence packages.</li>
          <li>Identity, access, and segmentation controls with audit-ready reporting.</li>
          <li>Incident response playbooks and tabletop exercises.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Talk to an engineer</Link>
          <Link href="/services/?category=security" className="btn-secondary text-center">Browse security services</Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/tools/ssl-checker/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">SSL Checker</h3>
            <p className="text-slate-400 text-xs mb-3">Verify certificate health and configuration quickly.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Check SSL →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Security architecture, compliance, and governance guidance.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}