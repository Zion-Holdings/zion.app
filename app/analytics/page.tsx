import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics & BI',
  description: 'Executive BI dashboards, predictive forecasting, embedded analytics, and self-serve analytics platforms.',
  alternates: { canonical: '/analytics' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Data Analytics & Business Intelligence</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-6xl mb-4 block">{'📊'}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Analytics & Business Intelligence</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">Data analytics, BI dashboards, predictive insights, and AI-powered reporting.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[<span key="BI Dashboards" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">BI Dashboards</span>,<span key="Predictive Analytics" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">Predictive Analytics</span>,<span key="Data Viz" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">Data Viz</span>,<span key="AI Insights" className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">AI Insights</span>].map(tag => tag)}
          </div>
          <Link href="/configurator/" className="btn-primary text-lg px-10 py-4 inline-block">⚡ Get Your Custom Proposal →</Link>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[<div className="glass-card"><span className="text-3xl block mb-3">📈</span><h3 className="text-lg font-semibold text-white mb-2">BI Dashboards</h3><p className="text-slate-400 text-sm">Executive dashboards with real-time KPIs, drill-down analytics, and role-based access.</p></div>,<div className="glass-card"><span className="text-3xl block mb-3">🔮</span><h3 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h3><p className="text-slate-400 text-sm">Forecasting models for demand, revenue, churn, and operational risk.</p></div>,<div className="glass-card"><span className="text-3xl block mb-3">🧠</span><h3 className="text-lg font-semibold text-white mb-2">AI Insights</h3><p className="text-slate-400 text-sm">Automated anomaly detection, natural language queries, and insight recommendations.</p></div>].map((item, i) => <div key={i}>{item}</div>)}
          </div>
        </div>

        {/* Why Zion Tech Group */}
        <div className="mb-16 glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why Zion Tech Group</h2>
          <ul className="space-y-3">
            {[<li className="flex items-start gap-3 text-slate-300"><span className="text-purple-400 mt-1 shrink-0">✓</span><span className="text-sm">Proven analytics implementations across finance, retail, and healthcare</span></li>,<li className="flex items-start gap-3 text-slate-300"><span className="text-purple-400 mt-1 shrink-0">✓</span><span className="text-sm">Embedded analytics and white-label BI solutions</span></li>,<li className="flex items-start gap-3 text-slate-300"><span className="text-purple-400 mt-1 shrink-0">✓</span><span className="text-sm">From dashboard design to data pipeline and ML model deployment</span></li>].map((item, i) => <div key={i}>{item}</div>)}
          </ul>
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Industries We Serve</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-6">
            We have deployed these solutions across organisations in Finance, Retail & E-commerce, Healthcare, Manufacturing, Energy.
          </p>
        </div>

        {/* CTA */}
        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build This Together</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need a scoped proof-of-concept or a full enterprise engagement, we will tailor a plan that fits your timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">⚡ Get Custom Proposal</Link>
            <Link href="/contact/" className="btn-secondary text-lg px-10 py-4">Talk to an Expert</Link>
          </div>
        </section>
      </div>
    </main>
  
      <Footer />
    </div>);
}
