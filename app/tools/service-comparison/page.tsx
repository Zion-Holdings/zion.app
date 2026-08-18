import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Comparison | Zion Tech Group',
  description: 'Compare AI, IT, and automation service models by scope, fit, and speed.',
  openGraph: {
    title: 'Service Comparison',
    description: 'Side-by-side service fit comparison.',
    url: 'https://ziontechgroup.com/tools/service-comparison/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Comparison',
    description: 'Side-by-side service fit comparison.',
  },
  alternates: { canonical: '/tools/service-comparison/' },
};

const FACTORS = [
  'Implementation speed',
  'Ongoing staffing',
  'Data dependency',
  'Compliance scope',
  'Automation depth',
  'Support model',
];

const MODELS = [
  {
    title: 'Managed AI',
    fit: 'Best when you need outcomes faster than hiring cycles allow.',
    strengths: 'Delivery ownership, SLA coverage, embedded operators, and faster productionization.',
  },
  {
    title: 'Co-development',
    fit: 'Best when you already have internal delivery capacity.',
    strengths: 'Knowledge transfer, joint roadmap, shared ownership, and team capability building.',
  },
  {
    title: 'Automation-first',
    fit: 'Best for repeatable workflows with measurable targets.',
    strengths: 'Scalable patterns, measurable ROI, runbook-first delivery, and repeatable integrations.',
  },
  {
    title: 'Advisory',
    fit: 'Best for evaluation, selection, and policy decisions.',
    strengths: 'Architecture review, vendor evaluation, compliance alignment, and roadmap clarity.',
  },
];


export default function ServiceComparisonPage() {
  return (
<>
    <StandardPage
      title="Service Comparison"
      subtitle="Use this comparison to route a project faster and reduce evaluation overhead."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'Service Comparison' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        {MODELS.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm mb-3">{item.fit}</p>
            <p className="text-slate-300 text-sm">{item.strengths}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-xl font-bold text-white mb-2">Comparison factors</h2>
        <p className="text-slate-300 text-sm mb-3">Use these factors to score options against your environment.</p>
        <div className="flex flex-wrap gap-2">
          {FACTORS.map((factor) => (
            <span key={factor} className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300">
              {factor}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
        <h2 className="text-xl font-bold text-white mb-2">Want a scoped recommendation?</h2>
        <p className="text-slate-300 text-sm mb-4">
          Tell us your goal and constraints and we will return a short list of best-fit services with estimated ROI and timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-3">Related offerings</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Enterprise Services</h3>
            <p className="text-slate-400 text-xs mb-2">AI, IT, security, and data programs with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/solutions/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Industry Solutions</h3>
            <p className="text-slate-400 text-xs mb-2">Purpose-built AI and IT solutions by industry.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View solutions →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-2">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}