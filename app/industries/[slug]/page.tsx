import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Industry-specific AI and IT implementation guidance.',
  openGraph: { title: 'Industry Solutions', description: 'Vertical delivery patterns.', url: 'https://ziontechgroup.com/industries/', type: 'website' },
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
    <StandardPage title={data.label} subtitle={data.intro} breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries/' }, { label: data.label }]}>
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {data.bullets.map((item) => (
          <a key={item} href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
            <h3 className="text-white font-semibold mb-2">{item}</h3>
            <p className="text-slate-400 text-sm">Explore AI/IT implementation paths for this capability.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View services →</span>
          </a>
        ))}
      </div>
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <a href="/contact/" className="btn-primary text-lg px-10 py-4 inline-block">Talk to an engineer</a>
      </div>
    </StandardPage>
  );
}
