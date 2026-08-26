import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Managed IT Solutions | Zion Tech Group',
  description: 'Managed IT, endpoint management, support automation, and operations from Zion Tech Group.',
  openGraph: {
    title: 'Managed IT Solutions | Zion Tech Group',
    description: 'Managed IT solutions with measurable outcomes.',
    url: 'https://ziontechgroup.com/solutions/managed-it/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT Solutions | Zion Tech Group',
    description: 'Managed IT solutions with measurable outcomes.',
  },
  alternates: { canonical: '/solutions/managed-it/' },
};


export default function ManagedItSolutionsPage() {
  return (
<>
    <StandardPage
      title="Managed IT"
      subtitle="Support automation, endpoint management, and operational excellence for modern teams."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Managed IT' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse IT services', href: '/services/?category=it', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services/?category=it" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Endpoint Management</h3>
          <p className="text-slate-400 text-sm">Device lifecycle, patching, and user support at scale.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Support Automation</h3>
          <p className="text-slate-400 text-sm">Triage, routing, knowledge assistants, and ticket deflection.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=cloud" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Operations Excellence</h3>
          <p className="text-slate-400 text-sm">Monitoring, capacity planning, and continuous improvement.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">What you can expect</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Clear ownership models with defined response and resolution targets.</li>
          <li>Automated onboarding, offboarding, and access lifecycle.</li>
          <li>Dashboards for ticket volume, MTTR, and user satisfaction.</li>
          <li>Continuous improvement from operational metrics and feedback loops.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Talk to an engineer</Link>
          <Link href="/services/?category=it" className="btn-secondary text-center">Browse IT services</Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/tools/health-check/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Health Check</h3>
            <p className="text-slate-400 text-xs mb-3">Quick reliability and security review for your stack.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Run health check →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">IT operations, support, and automation guidance.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}