import { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'Financial Services AI Solutions | Zion Tech Group',
  description:
    'AI solutions for financial services include fraud detection, risk analytics, process automation, and regulatory compliance.',
  openGraph: {
    title: 'Financial Services AI Solutions',
    description: 'Fraud detection, risk analytics, process automation, and compliance for financial services.',
    url: 'https://ziontechgroup.com/industries/financial-services',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/industries/financial-services' },
};

export default function FinancialServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-24 space-y-10">
      <SiteBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: 'Financial Services', href: '/industries/financial-services' },
        ]}
      />
      <header className="text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Financial Services AI Solutions
          </span>
        </h1>
        <p className="text-slate-300 text-xl leading-relaxed mb-8">AI solutions for financial services include fraud detection, risk analytics, process automation, and regulatory compliance.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/contact/" className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-semibold">Request Demo</a>
          <a href="/services/?category=security" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Security Services</a>
          <a href="/case-studies/" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Case Studies</a>
        </div>
      </header>

      <section className="mt-24 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-white font-semibold mb-2">Fraud detection</h2>
          <p className="text-slate-300 text-sm">Real-time anomaly detection across transactions, claims, and access patterns.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-white font-semibold mb-2">Risk analytics</h2>
          <p className="text-slate-300 text-sm">Portfolio, credit, and operational risk models with explainable outputs.</p>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Modernize financial operations</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">We deliver production-ready AI systems with compliance and governance built in.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/contact/" className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-semibold">Contact Us</a>
          <a href="/pricing/" className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:border-white/40 transition-colors">Pricing</a>
        </div>
      </section>

      <footer className="mt-28 border-t border-slate-800 pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <div>
          <a className="font-semibold text-white" href="/">Zion Tech Group</a>
          <span className="ml-2 text-slate-500">AI & IT services for modern teams</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a consultation</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/services" className="hover:text-white transition-colors">Services</a>
        </div>
      </footer>
    </main>
  );
}
