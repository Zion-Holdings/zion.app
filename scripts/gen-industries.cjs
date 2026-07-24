const fs = require('fs');
const path = require('path');

const root = path.join('/data/data/com.termux/files/home/zion-support.github.io/app');
const industriesDir = path.join(root, 'industries');

const indMeta = [
  { key: 'technology-&-saas', label: 'Technology & SaaS', emoji: '🏭', sample: 'AI analytics, DevOps, and platform engineering' },
  { key: 'media-&-entertainment', label: 'Media & Entertainment', emoji: '🎬', sample: 'Content search, recommendation engines, and knowledge management' },
  { key: 'legal-&-compliance', label: 'Legal & Compliance', emoji: '⚖️', sample: 'Document intelligence, contract analysis, and compliance automation' },
  { key: 'energy-&-utilities', label: 'Energy & Utilities', emoji: '⚡', sample: 'Demand forecasting, IoT telemetry, and asset monitoring' },
  { key: 'retail-&-e-commerce', label: 'Retail & E-Commerce', emoji: '🛒', sample: 'Personalization, forecasting, and checkout optimization' },
  { key: 'logistics-&-supply-chain', label: 'Logistics & Supply Chain', emoji: '🚚', sample: 'Routing, visibility, and warehouse automation' },
  { key: 'manufacturing-&-industrial', label: 'Manufacturing & Industrial', emoji: '🏗️', sample: 'Vision inspection, predictive maintenance, and quality control' },
  { key: 'financial-services-&-fintech', label: 'Financial Services & FinTech', emoji: '💳', sample: 'Credit intelligence, fraud detection, and payments automation' },
  { key: 'education-&-research', label: 'Education & Research', emoji: '🎓', sample: 'Learning platforms, adaptive tutoring, and research analytics' },
  { key: 'healthcare-&-life-sciences', label: 'Healthcare & Life Sciences', emoji: '🏥', sample: 'Claims automation, clinical workflow, and molecular analytics' },
];

const indMap = {
  'technology-&-saas': ['it','cloud','devops','automation','data'],
  'media-&-entertainment': ['ai','data','automation'],
  'legal-&-compliance': ['ai','security','automation'],
  'energy-&-utilities': ['ai','iot','data'],
  'retail-&-e-commerce': ['ai','data','automation'],
  'logistics-&-supply-chain': ['ai','iot','data'],
  'manufacturing-&-industrial': ['ai','iot','data','automation'],
  'financial-services-&-fintech': ['ai','security','data'],
  'education-&-research': ['ai','data','automation','cloud'],
  'healthcare-&-life-sciences': ['ai','data','automation'],
};

const services = JSON.parse(fs.readFileSync(path.join(root, 'data/servicesData.json'), 'utf8'));
const catCounts = {};
for (const s of services) { const c = s.category || 'ai'; catCounts[c] = (catCounts[c]||0)+1; }

const esc = (v) => JSON.stringify(v);
const label = (c) => catCounts[c]||0;

for (const meta of indMeta) {
  const key = meta.key;
  const cats = indMap[key];
  const matched = services.filter(s => cats.includes(s.category)).slice(0,20);
  const sample = matched.slice(0,6);

  const catsJson = JSON.stringify(cats);
  const metaJson = JSON.stringify(meta);
  const sampleRows = JSON.stringify(sample.map(s => {
    const tier = Object.entries(s.pricing || {})[0];
    const price = tier ? '$' + tier[1] + '/mo' : 'Contact for quote';
    return { title: s.title, category: s.category, price };
  }));
  const catBadges = cats.map(c => c + ' (' + label(c) + ')').join(' · ');
  const catLinks = cats.map(c => `<Link key="${c}" href="/services/?category=${c}" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">${c}</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>`).join('\n              ');

  let rows = '';
  for (const s of sample) {
    const tier = Object.entries(s.pricing || {})[0];
    const price = tier ? '$' + tier[1] + '/mo' : 'Contact for quote';
    rows += `<tr key="${String(s.title).replace(/"/g,'')}" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">${s.title}</td><td className="py-3 pr-4 capitalize">${s.category}</td><td className="py-3 text-purple-300">${price}</td></tr>\n                  `;
  }

  const content = `'use client';

import Link from 'next/link';

export const metadata = {
  title: ${esc(meta.label + ' AI & IT Services | Zion Tech Group')},
  description: ${esc(meta.sample + ' for ' + meta.label + '. Explore matched services, use cases, and implementation options.')},
  alternates: { canonical: '/industries/${key}' }
};

export default function Page() {
  const rows = ${sampleRows};
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">${meta.emoji}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">${meta.label}</h1>
          </div>
          <p className="text-slate-300 mb-8 max-w-2xl">
            ${meta.sample} — curated from our full catalog for ${meta.label} teams.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            <Link href="/industries/" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">← All industries</Link>
            <Link href="/services" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors">Full catalog</Link>
            <Link href="/configurator" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">Get custom proposal</Link>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Relevant categories</h2>
            <p className="text-slate-400 text-sm mb-6">Core domains for ${meta.label}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${catLinks}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Sample services</h2>
            <p className="text-slate-400 text-sm mb-6">Top matches from the catalog</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400 border-b border-slate-800">
                    <th className="py-2 pr-4">Service</th>
                    <th className="py-2 pr-4">Category</th>
                    <th className="py-2">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  ${rows}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <Link href="/services" className="btn-primary">Browse all services →</Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Why teams choose us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {[
                { title: 'Outcome-first design', desc: 'Services mapped to measurable outcomes, not just technology.' },
                { title: 'Fast onboarding', desc: 'Many engagements can start within days, not weeks.' },
                { title: 'US-based delivery', desc: 'Local team with clear communication and ownership.' }
              ].map(item => (
                <div key={item.title} className="glass-card p-5 hover:border-purple-500/40">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a tailored proposal for your industry, teams, and roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">Get Your Custom Proposal →</Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">☎ +1 302 464 0950</a>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              Categories: ${catBadges}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
`;

  fs.mkdirSync(path.join(industriesDir, key), { recursive: true });
  fs.writeFileSync(path.join(industriesDir, key, 'page.tsx'), content);
}

const hub = `'use client';

import Link from 'next/link';

const INDUSTRIES = [
  { key: 'technology-&-saas', label: 'Technology & SaaS', emoji: '🏭', count: 145, sample: 'AI Analytics & BI' },
  { key: 'media-&-entertainment', label: 'Media & Entertainment', emoji: '🎬', count: 95, sample: 'AI Knowledge Management' },
  { key: 'legal-&-compliance', label: 'Legal & Compliance', emoji: '⚖️', count: 77, sample: 'Contract Lifecycle Intelligence' },
  { key: 'energy-&-utilities', label: 'Energy & Utilities', emoji: '⚡', count: 69, sample: 'Grid Demand Forecaster' },
  { key: 'retail-&-e-commerce', label: 'Retail & E-Commerce', emoji: '🛒', count: 57, sample: 'Product Recommendations' },
  { key: 'logistics-&-supply-chain', label: 'Logistics & Supply Chain', emoji: '🚚', count: 57, sample: 'Sustainable Supply Chain Radar' },
  { key: 'manufacturing-&-industrial', label: 'Manufacturing & Industrial', emoji: '🏗️', count: 25, sample: 'Vision Quality Inspection' },
  { key: 'financial-services-&-fintech', label: 'Financial Services & FinTech', emoji: '💳', count: 23, sample: 'Commerce Flow Orchestrator' },
  { key: 'education-&-research', label: 'Education & Research', emoji: '🎓', count: 15, sample: 'Learning Optimisation' },
  { key: 'healthcare-&-life-sciences', label: 'Healthcare & Life Sciences', emoji: '🏥', count: 12, sample: 'AI Drug Discovery' },
];

export const metadata = {
  title: 'Industries We Serve | Zion Tech Group',
  description: 'Explore AI & IT services by industry — from healthcare and fintech to manufacturing and retail.',
  alternates: { canonical: '/industries/' }
};

export default function IndustriesHub() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Industries We Serve</h1>
          <p className="text-slate-300 mb-10 max-w-2xl">
            Choose your industry to see curated AI, IT, cloud, security, and automation recommendations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.key}
                href={\`/industries/\${ind.key}\`}
                className="group block rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/30 p-5 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{ind.emoji}</span>
                  <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">{ind.count}+</span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">{ind.label}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{ind.sample}</p>
              </Link>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Browse all services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/services" className="glass-card p-5 hover:border-purple-500/40">
                <div className="text-white font-semibold">Complete service catalog</div>
                <div className="text-slate-400 text-sm mt-1">All categories and services</div>
              </Link>
              <Link href="/ai-services" className="glass-card p-5 hover:border-purple-500/40">
                <div className="text-white font-semibold">AI services</div>
                <div className="text-slate-400 text-sm mt-1">Machine learning and applied AI</div>
              </Link>
              <Link href="/configurator" className="glass-card p-5 hover:border-purple-500/40">
                <div className="text-white font-semibold">Custom proposal</div>
                <div className="text-slate-400 text-sm mt-1">Tailored recommendations</div>
              </Link>
            </div>
          </section>

          <section className="cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Start with a free AI readiness assessment or book a short consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">Get Your Custom Proposal →</Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">☎ +1 302 464 0950</a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync(path.join(industriesDir, 'page.tsx'), hub);
console.log(`created hub + ${indMeta.length} industry pages`);
