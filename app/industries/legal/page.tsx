import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Legal | Zion Tech Group',
  description: 'Legal IT solutions: e-discovery support, contract analytics, compliance automation, and secure infrastructure for legal operations.',
  alternates: { canonical: '/industries/legal/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legal</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Legal IT solutions: e-discovery support, contract analytics, compliance automation, and secure infrastructure for legal operations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Contract analytics</h3>
              <p className="text-slate-400 text-sm">AI-assisted review, clause extraction, and risk scoring for faster deal cycles.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Compliance automation</h3>
              <p className="text-slate-400 text-sm">Policy monitoring, evidence collection, and audit-ready reporting.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Secure collaboration</h3>
              <p className="text-slate-400 text-sm">Encrypted document management, redaction, and matter-centric access controls.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">E-discovery support</h3>
              <p className="text-slate-400 text-sm">Scalable data collection, processing, and review workflows for litigation readiness.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
