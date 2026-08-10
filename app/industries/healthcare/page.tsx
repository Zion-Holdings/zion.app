import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Healthcare | Zion Tech Group',
  description: 'Healthcare IT solutions: compliance-ready infrastructure, secure patient data platforms, and clinical workflow automation.',
  alternates: { canonical: '/industries/healthcare/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Healthcare</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Compliance-ready IT infrastructure, secure patient data platforms, and clinical workflow automation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">HIPAA-aligned architecture</h3>
              <p className="text-slate-400 text-sm">Secure cloud and on-prem patterns built for protected health information workflows.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Clinical workflow automation</h3>
              <p className="text-slate-400 text-sm">Reduce manual steps in scheduling, documentation, and patient handoff.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Data interoperability</h3>
              <p className="text-slate-400 text-sm">EHR-friendly integrations and normalized data pipelines.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Security & audit readiness</h3>
              <p className="text-slate-400 text-sm">Monitoring, access controls, and audit logging for healthcare operations.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
