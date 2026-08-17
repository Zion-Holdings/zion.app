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
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <Link key={category.key} href={`/services?category=${category.key}`} className="glass-card">
            <h3 className="font-semibold text-white mb-2">{category.label}</h3>
            <p className="text-slate-400 text-sm">{category.desc}</p>
            <span className="text-purple-400 text-xs mt-3 inline-block">Browse services →</span>
          </Link>
        ))}
      </div>
    </StandardPage>
  );
}
