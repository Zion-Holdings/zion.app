import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Customer success stories, implementation outcomes, and measurable ROI from Zion Tech Group engagements.',
  alternates: { canonical: '/case-studies/' },

  openGraph: {
    title: 'Case Studies',
    description: 'Customer success stories, implementation outcomes, and measurable ROI from Zion Tech Group engagements.',
    url: 'https://ziontechgroup.com/case-studies/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

const CASES = [
  {
    title: 'Reducing Cloud Spend by 40% in 90 Days',
    summary: 'How a mid-market company cut AWS waste with rightsizing, reserved planning, and FinOps guardrails.',
    href: '/case-studies/cloud-cost-optimization/',
  },
  {
    title: 'From Incident Chaos to 99.99% Uptime',
    summary: 'SOC-as-a-service and runbook automation transformed response times and SLA performance.',
    href: '/case-studies/soc-and-incident-response/',
  },
  {
    title: 'AI Support Deflection Pilot',
    summary: 'Implemented an AI triage layer that reduced ticket volume by 32% while improving customer satisfaction.',
    href: '/case-studies/ai-support-automation/',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">

    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Case Studies", description: "Customer success stories, implementation outcomes, and measurable ROI from Zion Tech Group engagements.", url: "https://ziontechgroup.com/case-studies/"}} />
      <div className="container-page">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Real implementations with real outcomes. Explore how we help teams lower cost, reduce risk, and ship faster.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <Link key={c.href} href={c.href} className="glass-card group hover:border-purple-500/40 transition-colors block">
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">{c.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{c.summary}</p>
              <span className="text-purple-400 text-sm inline-flex items-center gap-1">
                Read case study <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
