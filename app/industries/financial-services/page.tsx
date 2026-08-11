import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Services Solutions | Zion Tech Group',
  description: 'Fraud detection, compliance automation, and low-latency trading infrastructure for financial services.',
  alternates: { canonical: '/industries/financial-services/' },
};

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Financial Services Solutions</h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-10">
          High-performance AI, compliance automation, and secure infrastructure for financial institutions.
        </p>
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">What we deliver</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Real-time fraud detection</li>
            <li>Regulatory compliance automation</li>
            <li>Low-latency trading infrastructure</li>
            <li>Secure cloud architecture for finance</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
