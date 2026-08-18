import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Industries Overview | Zion Tech Group',
  description: 'Industry-specific AI and IT implementation patterns and outcomes.',
  openGraph: {
    title: 'Industries Overview | Zion Tech Group',
    description: 'Vertical delivery patterns with measurable outcomes by industry.',
    url: 'https://ziontechgroup.com/industries/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries Overview | Zion Tech Group',
    description: 'Vertical delivery patterns with measurable outcomes by industry.',
  },
  alternates: { canonical: '/industries/' },
};

const INDUSTRIES: Record<string, { label: string; intro: string; bullets: string[] }> = {
  healthcare: {
    label: 'Healthcare',
    intro: 'Clinical operations, diagnostics, and patient pathway improvements.',
    bullets: ['AI-assisted scheduling', 'Record workflow automation', 'Operational dashboards'],
  },
  'financial-services': {
    label: 'Financial Services',
    intro: 'Fraud defense, compliance, and payment intelligence.',
    bullets: ['Anomaly detection', 'Document processing', 'Reporting automation'],
  },
  manufacturing: {
    label: 'Manufacturing',
    intro: 'Predictive maintenance, quality assurance, and supply chain ops.',
    bullets: ['Maintenance prediction', 'Quality workflow', 'Inventory automation'],
  },
  retail: {
    label: 'Retail & E-Commerce',
    intro: 'Personalization, demand forecasting, and checkout optimization.',
    bullets: ['Recommendation engine', 'Pricing intelligence', 'Support automation'],
  },
  logistics: {
    label: 'Logistics',
    intro: 'Routing, tracking, and warehouse automation.',
    bullets: ['Route optimization', 'Tracking workflow', 'Operations visibility'],
  },
  education: {
    label: 'Education & Research',
    intro: 'Learning intelligence, assessment automation, and research ops.',
    bullets: ['Adaptive learning', 'Content generation', 'Research workflow'],
  },
  government: {
    label: 'Government',
    intro: 'Secure, compliant AI and infrastructure modernization.',
    bullets: ['Security-first design', 'Compliance automation', 'Workflow digitization'],
  },
};

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}


export default function IndustryPage({ params }: { params: { slug: string } }) {
  const data = INDUSTRIES[params.slug];
  if (!data) return notFound();

  return (
<>
    <StandardPage
      title={data.label}
      subtitle={data.intro}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries/' },
        { label: data.label },
      ]}
      actions={[
        { label: 'Talk to an engineer', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          {data.bullets.map((item) => (
            <Link key={item} href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
              <h3 className="text-white font-semibold mb-2">{item}</h3>
              <p className="text-slate-400 text-sm">Explore AI/IT implementation paths for this capability.</p>
              <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-4">Typical outcomes</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
            <li>Measurable improvement in core operational metrics.</li>
            <li>Faster onboarding and adoption with structured enablement.</li>
            <li>Clear ownership, runbooks, and escalation paths.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-4">Getting started</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="text-white font-semibold mb-1">Week 1-2</h3>
              <p className="text-slate-400 text-xs">Assessment, use-case selection, and scoping.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Week 3-6</h3>
              <p className="text-slate-400 text-xs">Pilot implementation with measurable milestones.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Week 7+</h3>
              <p className="text-slate-400 text-xs">Production rollout with monitoring and review cycles.</p>
            </div>
          </div>
        </div>
      </div>
    </StandardPage>
  </>
  );
}