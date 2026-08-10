import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Status Page',
  description: 'Operational status for Zion Tech Group services and monitoring dashboards.',
  alternates: { canonical: '/status-page/' },
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
      <section className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
<h2 className="text-xl font-bold text-white mb-2">Why it matters</h2>
<p className="text-slate-300">This page is part of Zion Tech Group's core catalog. It connects visitors to the right service, tool, or workflow without leaving the site.</p>
<ul className="list-disc pl-6 text-slate-300 space-y-1">
<li>Clear next steps aligned to the current page topic</li>
<li>Direct paths to contact, proposal, or demo flows</li>
<li>Consistent navigation and footer on every route</li>
</ul>
</section>
</main>
      <Footer />
    </div>
  );
}
