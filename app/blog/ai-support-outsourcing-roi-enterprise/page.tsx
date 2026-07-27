import { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import ArticleStructuredData from '@/components/ArticleStructuredData';

export const metadata = {
  title: 'AI Support Outsourcing ROI Calculator for Enterprise | Zion Tech Group',
  description:
    'Estimate AI support outsourcing ROI in minutes. Compare agent-assisted deflection, cost per ticket, and CSAT lift with Zion Tech Group numbers.',
  openGraph: {
    title: 'AI Support Outsourcing ROI Calculator for Enterprise',
    description:
      'Estimate cost savings, deflection, and quality lift for AI-assisted support operations.',
    url: 'https://ziontechgroup.com/blog/ai-support-outsourcing-roi-enterprise',
    type: 'article',
  },
  alternates: { canonical: 'https://ziontechgroup.com/blog/ai-support-outsourcing-roi-enterprise' },
};

export default function AiSupportOutsourcingRoiPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <ArticleStructuredData
        title={metadata.title as string}
        description={metadata.description as string}
        canonical={metadata.alternates?.canonical as string}
        publishedAt="2026-07-27"
        updatedAt="2026-07-27"
      />
      <SiteBreadcrumbs items={[{ label:'Home',href:'/'},{label:'Blog',href:'/blog'},{label:'AI Support Outsourcing ROI',href:'/blog/ai-support-outsourcing-roi-enterprise'}]} />
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100">AI Support Outsourcing ROI Calculator for Enterprise</h1>
        <p className="text-slate-300 text-lg">Estimate cost savings, deflection, and quality lift for AI-assisted support operations.</p>
      </header>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-100">Why this matters</h2>
        <p className="text-slate-300">Support costs scale with ticket volume. AI-assisted deflection reduces cost per ticket while improving consistency and CSAT.</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1">
          <li>Use current blended cost including staffing, tooling, and management.</li>
          <li>Estimate realistic AI-assisted resolution rates in weeks, not quarters.</li>
          <li>Turn estimates into a sequenced roadmap for triage, knowledge, and automation.</li>
        </ul>
      </section>
    </main>
  );
}
