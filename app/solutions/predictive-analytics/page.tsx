import Link from 'next/link';

export const metadata = {
  title: 'Predictive Analytics Platform | Zion Tech Group',
  description: 'AI-powered forecasting and anomaly detection for operational intelligence.',
  alternates: { canonical: '/solutions/predictive-analytics' },
};

export default function Page() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Predictive Analytics Platform</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">AI-powered forecasting and anomaly detection for operational intelligence.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div key="predictive-analytics-0" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Demand forecasting</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="predictive-analytics-1" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Anomaly detection</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="predictive-analytics-2" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Predictive scoring</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
        <div key="predictive-analytics-3" className="glass-card">
          <h3 className="font-semibold text-white mb-2">Automated alerts</h3>
          <p className="text-slate-400 text-sm">Production-ready capability for enterprise deployment.</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
      </div>
    </div>
  );
}
