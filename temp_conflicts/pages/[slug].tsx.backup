import NextHead from 'next/head';
import UltraFuturisticBackgroundComponent from '../components/ui/UltraFuturisticBackground';
import UIButton from '../components/ui/Button';
import UICard from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { curatedMarketServices } from '../data/curated-market-services';
import { new2025Services } from '../data/new-2025-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { moreRealServices2025 } from '../data/more-real-services-2025';
import { verified2025Additions } from '../data/verified-2025-additions';
import { realServicesQ12025 } from '../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { innovative2025Services } from '../data/innovative-2025-services';
import { quantumSpaceServices } from '../data/quantum-space-services';

// Node modules will be required inside getStaticPaths to avoid client bundling

type Service = typeof enhancedRealMicroSaasServices[number];

function getAllServices(): Service[] {
  return enhancedRealMicroSaasServices
    .concat(extraServices as Service[], additionalEnhancedServices as Service[])
    .concat(newlyAddedServices as unknown as Service[])
    .concat(curatedMarketServices as Service[])
    .concat(new2025Services as unknown as Service[])
    .concat(marketValidatedServices as unknown as Service[])
    .concat(moreRealServices2025 as unknown as Service[])
    .concat(verified2025Additions as unknown as Service[])
    .concat(realServicesQ12025 as unknown as Service[])
    .concat(realEnterpriseServices2025 as unknown as Service[])
    .concat(verifiedRealServices2025Batch2 as unknown as Service[])
    .concat(innovativeAIServices as unknown as Service[])
    .concat(innovative2025Services as unknown as Service[])
    .concat(quantumSpaceServices as unknown as Service[]);
}

function toSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractSlugFromLink(link: string): string | null {
  try {
    const url = new URL(link);
    const path = url.pathname.replace(/^\/+|\/+$/g, '');
    if (!path) return null;
    const parts = path.split('/');
    return parts[parts.length - 1] || null;
  } catch {
    return null;
  }
}

export async function getStaticPaths() {
  const services = getAllServices();
  const slugs = new Set<string>();

  for (const s of services) {
    if (s.link) {
      const fromLink = extractSlugFromLink(s.link);
      if (fromLink) {
        slugs.add(fromLink);
        continue;
      }
    }
    if (s.id) slugs.add(toSlug(s.id));
    else if (s.name) slugs.add(toSlug(s.name));
  }

  // Exclude any slugs that already have explicit pages under /pages
  const fs = require('fs');
  const path = require('path');
  const pagesDir = path.join(process.cwd(), 'pages');
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
  const existing = new Set<string>();
  for (const entry of entries) {
    // skip internals and folders we don't want to shadow
    if (entry.name.startsWith('_')) continue;
    if (['api', 'reports', 'services'].includes(entry.name)) continue;
    if (entry.isDirectory()) {
      existing.add(entry.name);
      continue;
    }
    if (entry.isFile()) {
      const m = entry.name.match(/^(.*)\.(tsx|ts|jsx|js)$/);
      if (m) {
        const base = m[1];
        if (!['index', '[slug]'].includes(base)) existing.add(base);
      }
    }
  }

  const filtered = Array.from(slugs).filter((slug) => !existing.has(slug));

  return {
    paths: filtered.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const services = getAllServices();
  const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

  let service: Service | undefined = services.find((s) => {
    if (!s.link) return false;
    const fromLink = extractSlugFromLink(s.link);
    return fromLink === incomingSlug;
  });

  if (!service) {
    service = services.find((s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug);
  }

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service }
  };
}

export default function ServiceDetailTopLevelPage({ service }: { service: Service }) {
  const contactInfo = service.contactInfo || {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticBackgroundComponent variant="quantum" intensity="high">
      <NextHead>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.tagline || service.description} />
        {service.link ? <link rel="canonical" href={service.link} /> : null}
      </NextHead>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </UICard>

            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {(service.features || []).slice(0, 12).map((f: string) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </UICard>

            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Use Cases</div>
                  <ul className="list-disc list-inside space-y-1">
                    {(service.useCases || []).slice(0, 8).map((u: string) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Integrations</div>
                  <div className="flex flex-wrap gap-2">
                    {(service.integrations || []).slice(0, 10).map((i: string) => (
                      <span key={i} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </UICard>
          </div>

          <div className="space-y-6">
            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white">{service.price}<span className="text-base font-medium text-gray-400">{service.period}</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'} • Competitors: {(service.competitors || []).slice(0,3).join(', ')}</div>
              <div className="mt-6 flex gap-3">
                <UIButton href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</UIButton>
                {service.link ? (
                  <UIButton href={service.link} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</UIButton>
                ) : null}
              </div>
            </UICard>

            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
                <div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
                <div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
              </div>
            </UICard>

            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white font-semibold mb-3">Market & ROI</h3>
              <div className="space-y-3 text-sm text-gray-300">
                {service.marketPosition && <p className="leading-relaxed"><span className="text-gray-400">Position:</span> {service.marketPosition}</p>}
                {service.roi && <p className="leading-relaxed"><span className="text-gray-400">ROI:</span> {service.roi}</p>}
                {service.competitors?.length ? (
                  <p className="leading-relaxed"><span className="text-gray-400">Competitors:</span> {service.competitors.slice(0,6).join(', ')}</p>
                ) : null}
                <a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover:text-cyan-200">See average market prices →</a>
              </div>
            </UICard>
          </div>
        </div>
      </div>
    </UltraFuturisticBackgroundComponent>
  );
}