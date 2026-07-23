import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI Supply Chain Optimization | Zion Tech Group',
  description: 'AI-driven supply chain optimization: demand forecasting, inventory intelligence, route optimization, and predictive logistics.',
};

export default function AISupplyChainOptimizationPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
      <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'Supply Chain Optimization', href: '/services/ai-supply-chain-optimization/' }]} className="mb-8" />
      <h1 className="text-4xl font-bold mb-6">AI Supply Chain Optimization</h1>
      <p className="text-lg mb-8 text-slate-300">Apply AI to demand forecasting, inventory, route optimization, and predictive logistics.</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-300">
        <li>Demand forecasting and inventory optimization</li>
        <li>Supplier risk scoring</li>
        <li>Route and load optimization</li>
        <li>Predictive maintenance</li>
      </ul>
      <div className="flex flex-wrap gap-4">
        <a href="/contact/" className="btn-primary">Contact us</a>
        <a href="/services/" className="btn-secondary">All services</a>
      </div>
    </article>
  );
}
