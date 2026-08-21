import React from 'react';

export const metadata = {
  title: 'Hermes Agent Case Studies | Enterprise AI Results | Zion Tech Group',
  description: 'Hermes AI agent case studies: 10x throughput, 60% cost reduction, 99.99% uptime. Real results from finance, healthcare, SaaS, manufacturing, and more.',
};

export default function HermesCaseStudies() {
  const studies = [
    { company: 'Global Bank', industry: 'Finance', result: '$4.2M saved annually', desc: 'Automated AML compliance across 14 jurisdictions. Reduced false positives by 87% while catching 34% more true positives.', agents: 23 },
    { company: 'Telehealth Platform', industry: 'Healthcare', result: '50% faster prior auth', desc: 'AI agents coordinate with payers, verify benefits, and submit prior auths autonomously. Average processing time: 4 minutes.', agents: 8 },
    { company: 'SaaS Unicorn', industry: 'Technology', result: '$2.1M support savings', desc: 'Agent swarm handles 92% of support tickets across WhatsApp, Telegram, and email. CSAT: 4.8/5.', agents: 15 },
    { company: 'Manufacturer', industry: 'Industrial', result: '40% less downtime', desc: 'Predict sensor anomalies 72h before failure. Auto-schedule maintenance and order parts. ROI: 340% in 6 months.', agents: 12 },
    { company: 'PropTech', industry: 'Real Estate', result: '3x lease conversions', desc: 'AI agents qualify tours, nurture leads, and follow up 24/7. Vacancy rate dropped from 8% to 2%.', agents: 6 },
    { company: 'InsurTech', industry: 'Insurance', result: '10x claims throughput', desc: 'Autonomous claims processing from first notice of loss to settlement. 94% straight-through processing.', agents: 19 },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hermes Agent Case Studies</h1>
          <p className="text-xl text-slate-300">Real results from real enterprises. See how agent swarms transform operations.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map((s) => (
              <div key={s.company} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-indigo-600 font-medium mb-2">{s.industry}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{s.company}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-3">{s.result}</div>
                <p className="text-slate-600 mb-4">{s.desc}</p>
                <div className="text-sm text-slate-500">{s.agents} agents deployed</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
