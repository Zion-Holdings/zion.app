import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Financial Services | Zion Tech Group',
  description: 'Financial services IT: secure transaction platforms, risk analytics, compliance automation, and cloud modernization.',
  alternates: { canonical: '/industries/financial-services/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Financial Services</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Secure transaction platforms, risk analytics, compliance automation, and cloud modernization.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Secure transaction systems</h3>
              <p className="text-slate-400 text-sm">High-throughput, audit-ready payment and settlement workflows.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Risk analytics</h3>
              <p className="text-slate-400 text-sm">Real-time fraud detection, exposure monitoring, and model governance.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Compliance automation</h3>
              <p className="text-slate-400 text-sm">SOC2, PCI, and regulatory reporting automation with evidence trails.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">Cloud modernization</h3>
              <p className="text-slate-400 text-sm">Legacy core modernization with resilient cloud architectures.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
