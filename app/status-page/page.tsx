import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Status Page',
  description: 'Operational status for Zion Tech Group services and monitoring dashboards.',
  alternates: { canonical: '/status-page/' },

  openGraph: {
    title: 'Status Page',
    description: 'Operational status for Zion Tech Group services and monitoring dashboards.',
    url: 'https://ziontechgroup.com/status-page/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function StatusPage() {
  const services = [
    { name: 'Website', status: 'Operational' },
    { name: 'Support Inbox', status: 'Operational' },
    { name: 'Monitoring', status: 'Operational' },
    { name: 'API Integrations', status: 'Operational' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Status Page", description: "Operational status for Zion Tech Group services and monitoring dashboards.", url: "https://ziontechgroup.com/status-page/"}} />
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Status Page</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Current operational status for core Zion Tech Group services.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.name} className="glass-card p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{s.name}</h3>
                </div>
                <span className="text-green-400 text-sm font-medium">{s.status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
