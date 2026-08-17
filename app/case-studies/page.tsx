import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Case studies from Zion Tech Group engagements in AI, IT, security, automation, and cloud.',
  openGraph: {
    title: 'Case Studies | Zion Tech Group',
    description: 'Real outcomes and ROI from Zion Tech Group engagements.',
    url: 'https://ziontechgroup.com/case-studies/',
    type: 'website',
  },
  alternates: { canonical: '/case-studies/' },
};

export default function CaseStudiesPage() {
  return (
    <StandardPage
      title="Case Studies"
      subtitle="Measurable outcomes from real engagements: support automation, cloud efficiency, AI adoption, and compliance delivery."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Support automation</h3>
          <p className="text-slate-400 text-sm">Ticket deflection and knowledge-base assistants at scale.</p>
          <Link href="/services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Cloud efficiency</h3>
          <p className="text-slate-400 text-sm">Observability and cost optimization without reliability risk.</p>
          <Link href="/services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">AI adoption</h3>
          <p className="text-slate-400 text-sm">Production AI roadmaps with measurable ROI and governance.</p>
          <Link href="/services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Compliance automation</h3>
          <p className="text-slate-400 text-sm">Policy, evidence, and controls for regulated environments.</p>
          <Link href="/services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Incident response</h3>
          <p className="text-slate-400 text-sm">Retainer-based readiness and faster MTTR.</p>
          <Link href="/services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Data & analytics</h3>
          <p className="text-slate-400 text-sm">Pipelines, forecasting, and decision-ready dashboards.</p>
          <Link href="/services/" className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</Link>
        </div>
      </div>

      <section className="mt-16 border-t border-slate-800/60 pt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">Want similar results?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Tell us your goal and we’ll return a short list of best-fit services with estimated ROI and timeline.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact/" className="btn-primary text-lg px-10 py-4">Talk to an Engineer</Link>
          <Link href="/services/" className="btn-secondary text-lg px-10 py-4">Explore Services</Link>
        </div>
      </section>
    </StandardPage>
  );
}
