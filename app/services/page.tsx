import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'AI, IT, and Micro-SaaS services for enterprise automation, managed AI, cloud, security, data, and DevOps.',
  openGraph: {
    title: 'Services | Zion Tech Group',
    description: 'Explore Zion Tech Group services across AI, IT, cloud, security, data, and automation.',
    url: 'https://ziontechgroup.com/services/',
    type: 'website',
  },
  alternates: { canonical: '/services/' },
};

const CATEGORIES = [
  { key: 'ai', label: 'AI & Machine Learning', desc: 'Managed AI, LLM platforms, predictive systems, and autonomous workflows.' },
  { key: 'it', label: 'IT & Infrastructure', desc: 'Cloud, DevOps, endpoint management, observability, and enterprise operations.' },
  { key: 'security', label: 'Security & Compliance', desc: 'Threat detection, governance, identity, incident response, and compliance automation.' },
  { key: 'data', label: 'Data & Analytics', desc: 'Pipelines, governance, forecasting, dashboards, and warehouse modernization.' },
  { key: 'automation', label: 'Automation', desc: 'Workflow automation, RPA, support automation, and integration orchestration.' },
  { key: 'micro-saas', label: 'Micro-SaaS', desc: 'Repeatable monetizable tools built on proven infrastructure and delivery patterns.' },
];

export default function ServicesPage() {
  return (
    <StandardPage
      title="Services"
      subtitle="Enterprise-grade services across AI, IT, security, data, and automation. Choose a category to see use cases and delivery patterns."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Case studies', href: '/case-studies/', style: 'secondary' },
      ]}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link key={category.key} href={`/services?category=${category.key}`} className="glass-card">
              <h3 className="font-semibold text-white mb-2">{category.label}</h3>
              <p className="text-slate-400 text-sm">{category.desc}</p>
              <span className="text-purple-400 text-xs mt-3 inline-block">Browse services →</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Delivery principles</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            We start from one measurable outcome, add ownership and observability, then expand after stable operation. This reduces risk and shortens time-to-value.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="text-white font-semibold mb-1">Outcome-first</h3>
              <p className="text-slate-400 text-xs">Scope, success metrics, and rollback criteria before implementation.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Operational readiness</h3>
              <p className="text-slate-400 text-xs">Monitoring, on-call coverage, and incident response built in from day one.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Evidence-based expansion</h3>
              <p className="text-slate-400 text-xs">Scale only after validated adoption, stable operations, and clear ownership.</p>
            </div>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
