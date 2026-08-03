import Link from 'next/link';

export const metadata = {
  title: 'AI Customer Success Platform | Zion Tech Group',
  description: 'Churn prevention, health scoring, and automated customer engagement.',
  alternates: { canonical: '/solutions/ai-customer-success' },
};

export default function Page() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white mb-4">AI Customer Success Platform</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">Churn prevention, health scoring, and automated customer engagement.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div key="ai-customer-success-0" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Health scoring</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="ai-customer-success-1" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Churn prediction</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="ai-customer-success-2" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Playbook automation</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="ai-customer-success-3" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Revenue analytics</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
      </div>
    </div>
  );
}
