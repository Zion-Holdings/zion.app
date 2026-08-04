import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Energy & Utilities | Zion Tech Group',
  description: 'AI and IT solutions for Energy & Utilities: automation, analytics, compliance, and integration services with measurable ROI.',
  keywords: 'grid optimization, predictive maintenance, carbon tracking, renewable forecasting',
  alternates: { canonical: '/industries/energy-utilities' },
};

const SERVICES = [
  {"title": "Intelligent Operations Platform", "slug": "/services/ai-energy-utilities-operations", "description": "Unified AI operations platform for energy & utilities: monitoring, automation, and optimization.", "icon": "\u2699\ufe0f", "roi": "20% energy waste reduction"},
    {"title": "Analytics & Decision Intelligence", "slug": "/services/ai-energy-utilities-analytics", "description": "Decision-grade analytics and forecasting tailored to energy & utilities data models.", "icon": "\ud83d\udcca", "roi": "35% outage prediction improvement"},
    {"title": "Workflow Automation Suite", "slug": "/services/ai-energy-utilities-automation", "description": "End-to-end automation with human-in-the-loop governance for energy & utilities workflows.", "icon": "\ud83e\udd16", "roi": "$8M operational savings"},
    {"title": "Predictive Intelligence", "slug": "/services/ai-energy-utilities-predictive", "description": "Predictive models for demand, risk, and maintenance in energy & utilities environments.", "icon": "\ud83d\udcc8", "roi": "20% waste reduction"},
    {"title": "Compliance & Security Layer", "slug": "/services/ai-energy-utilities-compliance", "description": "Compliance automation, audit logging, and security controls for energy & utilities.", "icon": "\ud83d\udee1\ufe0f", "roi": "95% audit readiness"},
    {"title": "Integration Hub", "slug": "/services/ai-energy-utilities-integration", "description": "Connect ERPs, CRMs, and legacy systems with an AI-ready integration layer.", "icon": "\ud83d\udd17", "roi": "50% faster integration"}
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-6">
              <span className="text-green-400">●</span> ENERGY & UTILITIES AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Energy & Utilities
              </span>
              <span className="text-white"> AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-powered solutions for energy & utilities: automation, analytics, compliance, and integration.
              Built for production, measured by ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Assessment →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[0,1,2].map((i) => (
                <div key={i} className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                  <div className="text-2xl font-bold text-green-400 mb-1">{SERVICES[i]['roi']}</div>
                  <div className="text-sm text-slate-400">Measurable impact</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tailored capabilities for energy & utilities: automation, analytics, compliance, and integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-green-400 font-medium">{service.roi}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-from-green-400 to-to-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all">
              View All Energy & Utilities Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
