import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization | Zion Tech Group',
  description: 'Cloud cost optimization, FinOps automation, and efficiency guardrails to reduce spend without sacrificing reliability.',
};

export default function CloudCostOptimizationServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'Cloud Cost Optimization', href: '/services/cloud-cost-optimization-service/' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">Cloud Cost Optimization</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">Cut waste, enforce budgets, and get executive-ready cloud cost reporting with guided optimization guardrails.</p>
        <ul className="mt-6 list-disc pl-6 text-slate-300 space-y-1 max-w-3xl">
          <li>Spend visibility across clouds and accounts</li>
          <li>Automated idle-resource cleanup</li>
          <li>Rightsizing recommendations</li>
          <li>Budget alerts and anomaly detection</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Start a review</a>
          <a href="/services/" className="btn-secondary">All services</a>
          <a href="/tools/" className="btn-secondary">Tools</a>
        </div>
      </div>
    </main>
  );
}
