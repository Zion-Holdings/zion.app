import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Customer success stories, implementation outcomes, and measurable ROI from Zion Tech Group engagements.',
  alternates: { canonical: '/case-studies/' },
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
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Real implementations with real outcomes. Explore how we help teams lower cost, reduce risk, and ship faster.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['Cloud','Security','AI','SLA'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">{tag}</span>
              ))}
            </div>
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
      <Footer />
    </div>
  );
}
