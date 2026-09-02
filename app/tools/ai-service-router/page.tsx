import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Service Router | Zion Tech Group',
  description: 'Route requests by intent, data sensitivity, and latency target.',
  openGraph: {
    title: 'AI Service Router',
    description: 'Routing helper for AI services.',
    url: 'https://ziontechgroup.com/tools/ai-service-router/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Service Router',
    description: 'Routing helper for AI services.',
  },
  alternates: { canonical: '/tools/ai-service-router/' },
};

const FACTORS = [
  {
    label: 'Support and operations',
    path: '/services/',
    hint: 'Use assistants, knowledge-base retrieval, and ticket routing when volume is high and response time matters.',
  },
  {
    label: 'Analytics and decisioning',
    path: '/services/',
    hint: 'Use structured extraction, forecasting, and dashboard automation when the goal is faster decisions from messy data.',
  },
  {
    label: 'Security and compliance',
    path: '/services/',
    hint: 'Use policy-grounded models and audit-ready logging when data is confidential or regulated.',
  },
  {
    label: 'Low-latency customer experience',
    path: '/services/',
    hint: 'Use small specialized models, caching, and guardrails when users expect sub-second responses.',
  },
];


export default function AiServiceRouterPage() {
  return (
<>
    <StandardPage
      title="AI Service Router"
      subtitle="Match intake requirements to the right AI service path."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'AI Service Router' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">How to route an AI request</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Start with intent, then add constraints: data sensitivity, latency target, compliance scope, and fallback behavior.
            If the request is customer-facing and time-sensitive, prefer smaller, guarded models with caching.
            If the request is internal and analytical, prefer extraction and reasoning models with audit logging.
          </p>
        </div>
        {FACTORS.map((item) => (
          <Link key={item.label} href={item.path} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">{item.label}</h3>
            <p className="text-slate-400 text-sm">{item.hint}</p>
            <span className="text-purple-400 text-xs mt-3 inline-block">See services →</span>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
        <h2 className="text-xl font-bold text-white mb-2">Not sure which path fits?</h2>
        <p className="text-slate-300 text-sm mb-4">
          Tell us your use case and constraints. We will return a short list of best-fit services with estimated ROI and timeline.
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