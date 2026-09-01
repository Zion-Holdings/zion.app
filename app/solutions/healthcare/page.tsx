import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Healthcare Solutions | Zion Tech Group',
  description: 'AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.',
  openGraph: {
    title: 'Healthcare Solutions | Zion Tech Group',
    description: 'AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.',
    url: 'https://ziontechgroup.com/solutions/healthcare/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Solutions | Zion Tech Group',
    description: 'AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.',
  },
  alternates: { canonical: '/solutions/healthcare/' },
};

export default function HealthcarePage() {
  return (
    <StandardPage
      title="Healthcare Solutions"
      subtitle="Modernize healthcare delivery with governed AI and secure cloud infrastructure."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Healthcare' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">AI & Automation</h3>
          <p className="text-slate-400 text-sm">Deploy AI triage, knowledge-base assistants, and workflow automation.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=cloud" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
          <p className="text-slate-400 text-sm">Migrate workloads, tighten observability, and reduce cloud spend.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Cybersecurity</h3>
          <p className="text-slate-400 text-sm">Penetration testing, identity flows, and incident-response playbooks.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">What you can expect</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Secure clinical communications and collaboration.</li>
          <li>Data interoperability and analytics with governed access.</li>
          <li>Compliance automation and audit-ready evidence packages.</li>
          <li>Operational resilience and incident response playbooks.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Talk to an engineer</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
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
            <p className="text-slate-400 text-xs mb-3">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
