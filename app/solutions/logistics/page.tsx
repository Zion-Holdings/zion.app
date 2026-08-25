import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Logistics Solutions | Zion Tech Group',
  description: 'Routing, tracking, and warehouse automation for logistics and supply chain operations.',
  openGraph: {
    title: 'Logistics Solutions | Zion Tech Group',
    description: 'Logistics delivery patterns and AI implementation guidance.',
    url: 'https://ziontechgroup.com/solutions/logistics/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics Solutions | Zion Tech Group',
    description: 'Logistics delivery patterns and AI implementation guidance.',
  },
  alternates: { canonical: '/solutions/logistics/' },
};


export default function LogisticsSolutionsPage() {
  return (
<>
    <StandardPage
      title="Logistics"
      subtitle="Routing, tracking, and warehouse automation with measurable operational improvements."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Logistics' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Route optimization</h3>
          <p className="text-slate-400 text-sm">Lower transit time and cost with demand-aware routing and load balancing.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Tracking workflow</h3>
          <p className="text-slate-400 text-sm">Proactive exception handling and customer-facing tracking automation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Operations visibility</h3>
          <p className="text-slate-400 text-sm">Unified operational dashboards for throughput, delays, and asset utilization.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Warehouse automation</h3>
          <p className="text-slate-400 text-sm">Pick-path optimization, inventory accuracy, and inbound flow automation.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
        <h2 className="text-xl font-bold text-white mb-2">Need logistics automation?</h2>
        <p className="text-slate-300 text-sm mb-4">Tell us your lanes, service levels, and constraints. We will propose an implementation plan.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
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
  </>
  );
}