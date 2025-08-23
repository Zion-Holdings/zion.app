import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025 } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';
import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { real2029Q2Additions } from '../../data/real-2029-q2-additions';
import { real2029Q3Additions } from '../../data/real-2029-q3-additions';
import { real2030Q1Additions } from '../../data/real-2030-q1-additions';
import { real2031MicroSaasAdditions } from '../../data/real-2031-micro-saas-additions';
import { real2031ITServicesAdditions } from '../../data/real-2031-it-services-additions';
import { real2031AIServicesAdditions } from '../../data/real-2031-ai-services-additions';
import { real2030Q2Additions } from '../../data/real-2030-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { professionalServices } from '../../data/professional-services';
import { real2032ServiceExpansions } from '../../data/real-2032-service-expansions';
import { real2035Q1Additions } from '../../data/real-2035-q1-additions';
import { real2035Q2AdditionsExtra } from '../../data/real-2035-q2-additions-extra';
import { real2025ExtraServices } from '../../data/real-2025-extra-services';
import { real2026Q4ExpansionsV2 } from '../../data/real-2026-q4-expansions-v2';
import { real2036ServiceExpansions } from '../../data/real-2036-service-expansions';
import { real2026Q4ExpansionsV3 } from '../../data/real-2026-q4-expansions-v3';
import { innovative2025MicroSaasBatch } from '../../data/innovative-2025-micro-saas-batch';
import { innovative2025ITEnterpriseBatch } from '../../data/innovative-2025-it-enterprise-batch';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      realMarketServicesExtended as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realQ4Services2025 as unknown[],
      real2025Q4Additions as unknown[],
      real2026Q1Additions as unknown[],
      added2026Q2Services as unknown[],
      real2026Q3Additions as unknown[],
      real2026Q4Additions as unknown[],
      real2026Q4NewServices as unknown[],
      real2027Q1Additions as unknown[],
      real2027Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      real2028ServiceExpansions as unknown[],
      real2029Q1Additions as unknown[],
      real2029Q2Additions as unknown[],
      real2029Q3Additions as unknown[],
      real2030Q1Additions as unknown[],
      real2030Q2Additions as unknown[],
      real2031MicroSaasAdditions as unknown[],
      real2031ITServicesAdditions as unknown[],
      real2031AIServicesAdditions as unknown[],
      professionalServices as unknown[],
      real2032ServiceExpansions as unknown[],
      real2035Q1Additions as unknown[],
      real2035Q2AdditionsExtra as unknown[],
      real2025ExtraServices as unknown[],
      real2026Q4ExpansionsV2 as unknown[],
      real2026Q4ExpansionsV3 as unknown[]
    )
    .concat(real2036ServiceExpansions as unknown[])
    .concat(innovative2025MicroSaasBatch as unknown[])
    .concat(innovative2025ITEnterpriseBatch as unknown[]);
  const byCategory: Record<string, unknown[]> = {};
  for (const c of categories) byCategory[c] = [];
  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {
    'AI & Data': 'AI & Data',
    'AI & Machine Learning': 'AI & Data',
    'GenAI': 'AI & Data',
    'Cloud & FinOps': 'Cloud & FinOps',
    'Cloud & Data': 'Cloud & FinOps',
    'Platform Engineering': 'Cloud & FinOps',
    'Observability': 'Observability',
    'Observability & Telemetry': 'Observability',
    'Quality & Monitoring': 'Quality & Monitoring',
    'Security & Reliability': 'Quality & Monitoring',
    'Security & Compliance': 'Quality & Monitoring',
    'Developer Tools': 'Developer Tools',
    'Growth & Marketing': 'Developer Tools'
  };
  for (const s of all) {
    const service = s as { category?: string };
    const rawCat = (service.category || '').trim();
    const mapped = categoryAliases[rawCat] || (categories.includes(rawCat) ? rawCat : 'Developer Tools');
    byCategory[mapped].push(s);
  }

  const anchorMap: Record<string, string> = {
    'AI & Data': 'ai',
    'Developer Tools': 'developer-tools',
    'Cloud & FinOps': 'cloud',
    'Observability': 'observability',
    'Quality & Monitoring': 'quality',
  };

  const [shownCounts, setShownCounts] = React.useState<Record<string, number>>(() => Object.fromEntries(categories.map(c => [c, 12])));
  const [searchQuery, setSearchQuery] = React.useState('');

  const normalized = (value: unknown) => {
    const obj = value as { id?: string; name?: string; tagline?: string; description?: string };
    return `${obj.id || ''} ${obj.name || ''} ${obj.tagline || ''} ${obj.description || ''}`.toLowerCase();
  };

  const filteredAll = searchQuery.trim().length
    ? all.filter((s) => normalized(s).includes(searchQuery.toLowerCase()))
    : all;

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO title="Services | Zion Tech Group" description="Browse 350+ real micro SaaS, IT, and AI services with transparent pricing and fast onboarding." canonical="https://ziontechgroup.com/services/" />

      <div className="container mx-auto px-4 py-16 space-y-12 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">All Services</h1>
          <p className="text-gray-300 text-lg">Productized solutions across AI, cloud, DevOps, observability, and more. Average market prices linked in <a href="/market-pricing" className="text-cyan-400 underline">Market Pricing</a>. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
          <p className="mt-3 text-gray-400 text-sm">Prefer a tailored bundle? See <a href="/pricing" className="text-cyan-400 underline">Pricing</a> or <a href="/contact" className="text-cyan-400 underline">Contact Sales</a> for custom quotes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a href="#ai" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">AI & Data</a>
            <a href="#developer-tools" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Developer Tools</a>
            <a href="#cloud" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Cloud & FinOps</a>
            <a href="#observability" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Observability</a>
            <a href="#quality" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Quality & Monitoring</a>
          </div>
          <div className="mt-6 max-w-3xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services by name, feature, or use case..."
              className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-700/70 focus:border-cyan-500/60 outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {categories.map((cat) => (
          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {
                const service = s as { id?: string; name?: string; link?: string; category?: string; tagline?: string; description?: string; price?: string; period?: string };
                const slug = service.link ? (() => { try { const u = new URL(service.link); const p = u.pathname.replace(/^\/+|\/+$/g, ''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || ''); } catch { return toSlug(service.id || service.name || ''); } })() : toSlug(service.id || service.name || '');
                return (
                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline || service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={service.link || `/services/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link || `/services/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                );
              })}
            </div>
            {byCategory[cat].length > (shownCounts[cat] ?? 12) && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShownCounts(prev => ({ ...prev, [cat]: (prev[cat] ?? 12) + 12 }))}
                  className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50"
                >
                  Show more
                </button>
              </div>
            )}
          </section>
        ))}
      </div>
    </UltraFuturisticBackground>
  );
}