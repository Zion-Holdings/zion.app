import React, { useMemo } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { newRealServices } from '../data/new-real-services';
import { marketReadyServices } from '../data/market-ready-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { marketValidatedServices } from '../data/market-validated-services';
import { newRealInnovations } from '../data/new-real-innovations';
import { realMarketServices } from '../data/real-market-services';
import { new2025Services } from '../data/new-2025-services';
import { curatedMarketServices } from '../data/curated-market-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { industryRealServices } from '../data/industry-real-services';
import { professionalServices } from '../data/professional-services';
import { realEnterpriseServices2025 } from '../data/real-enterprise-services-2025';
import { augmentedServicesBatch3 } from '../data/real-augmented-services-2025-batch3';
import { real2025Q3Additions } from '../data/real-2025-q3-additions';
import { realQ4Services2025 } from '../data/real-2025-q4-additions';
import { real2026Q1Additions } from '../data/real-2026-q1-additions';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';

export default function DynamicServicePage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  const service = useMemo(() => {
    if (!slug) return undefined;
    const all: any[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any,
        extraServices as any,
        additionalEnhancedServices as any,
        innovativeAIServices as any,
        quantumSpaceServices as any,
        enterpriseITServices as any,
        newRealServices as any,
        marketReadyServices as any,
        realMarketServices as any,
        new2025Services as any,
        newRealInnovations as any,
        emergingTechnologyServices as any,
        comprehensiveITSolutions as any,
        marketValidatedServices as any,
        curatedMarketServices as any,
        cuttingEdgeITServices as any,
        nextGenerationAIServices as any,
        nextGenAIServices as any,
        industryRealServices as any,
        professionalServices as any,
        realEnterpriseServices2025 as any,
        augmentedServicesBatch3 as any,
        real2025Q3Additions as any,
        realQ4Services2025 as any,
        real2026Q1Additions as any,
        ultimateFuturisticServices2025 as any
      );
    const byLink = all.find(s => {
      try {
        const url = new URL(s.link);
        return url.pathname.replace(/^\/+|\/+$/g, '') === slug.replace(/^\/+|\/+$/g, '');
      } catch {
        return false;
      }
    });
    if (byLink) return byLink;
    const byId = enhancedRealMicroSaasServices.find(s => s.id === slug);
    if (byId) return byId;
    return undefined;
  }, [slug]);

  if (!service) {
    return (
      <UltraAdvancedFuturisticBackground>
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Service not found</h1>
            <p className="text-gray-300 mb-8">We couldn't find the service you were looking for. Explore all services below.</p>
            <Button href="/services" variant="quantum" size="lg">Browse Services</Button>
          </div>
        </div>
      </UltraAdvancedFuturisticBackground>
    );
  }

  const canonicalUrl = `https://ziontechgroup.com/${slug}`;

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <span className="text-5xl" aria-hidden>{service.icon}</span>{service.name}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 16).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400"><Star className="w-4 h-4 mr-1" />{service.rating?.toFixed ? service.rating.toFixed(1) : service.rating}</div>
              </div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Start Free Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

// Static export support: generate root-level pages for service slugs
type Svc = typeof enhancedRealMicroSaasServices[number];

function collectAllServices(): Svc[] {
  return enhancedRealMicroSaasServices
    .concat(
      extraServices as Svc[],
      additionalEnhancedServices as Svc[],
      innovativeAIServices as Svc[],
      quantumSpaceServices as Svc[],
      enterpriseITServices as Svc[],
      newRealServices as Svc[],
      marketReadyServices as Svc[],
      nextGenerationAIServices as Svc[],
      emergingTechnologyServices as unknown as Svc[],
      comprehensiveITSolutions as Svc[],
      marketValidatedServices as Svc[],
      curatedMarketServices as Svc[],
      cuttingEdgeITServices as Svc[],
      nextGenerationAIServices as Svc[],
      nextGenAIServices as Svc[],
      industryRealServices as Svc[],
      professionalServices as Svc[],
      realEnterpriseServices2025 as Svc[],
      augmentedServicesBatch3 as Svc[],
      real2025Q3Additions as Svc[],
      realQ4Services2025 as Svc[],
      real2026Q1Additions as Svc[],
      ultimateFuturisticServices2025 as unknown as Svc[]
    );
}

function normalizeSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractRootSlugFromLink(link?: string): string | null {
  if (!link) return null;
  try {
    const url = new URL(link);
    const p = url.pathname.replace(/^\/+|\/+$/g, '');
    if (p && !p.includes('/')) return p;
    return null;
  } catch {
    return null;
  }
}

function getExistingRootPageSlugs(): Set<string> {
  const pagesDir = path.join(process.cwd(), 'pages');
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
  const slugs = new Set<string>();
  for (const entry of entries) {
    if (entry.isFile()) {
      const m = entry.name.match(/^(?!_|\[).+\.(tsx|ts|jsx|js)$/);
      if (m) {
        const base = entry.name.replace(/\.(tsx|ts|jsx|js)$/, '');
        if (base !== 'index' && base !== '404' && base !== '500') {
          slugs.add(base);
        }
      }
    }
  }
  return slugs;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = collectAllServices();
  const candidateSlugs = new Set<string>();

  // Exclude any slugs that already have an explicit top-level page or folder under /pages
  const pagesDir = path.join(process.cwd(), 'pages');
  const existingRoutes = new Set<string>();
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
  for (const entry of entries) {
    // Skip private and special files
    if (entry.name.startsWith('_')) continue;
    if (entry.name === 'api') continue;
    if (entry.name === 'reports') continue;
    if (entry.name === 'services') continue;
    if (entry.name === '[slug].tsx' || entry.name === 'index.tsx') continue;

    if (entry.isDirectory()) {
      existingRoutes.add(entry.name);
      continue;
    }
    if (entry.isFile()) {
      const match = entry.name.match(/^(.*)\.(tsx|ts|js|jsx)$/);
      if (match) {
        existingRoutes.add(match[1]);
      }
    }
  }

  for (const s of services) {
    const fromLink = extractRootSlugFromLink((s as any).link);
    if (fromLink) {
      candidateSlugs.add(fromLink);
    } else if (s.id) {
      candidateSlugs.add(normalizeSlug(s.id));
    } else if (s.name) {
      candidateSlugs.add(normalizeSlug(s.name));
    }
  }

  const existingRootPages = getExistingRootPageSlugs();
  const filtered = Array.from(candidateSlugs).filter((slug) => !existingRootPages.has(slug));

  return {
    paths: filtered.map((slug) => ({ params: { slug } })),
    fallback: true
  };
};

export default function DynamicPage({ title, slug, description }: PageProps) {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
	const canonical = `${baseUrl.replace(/\/$/, '')}/${slug}/`;
	
	return (
		<>
			<SEO 
				title={`${title} | Zion Tech Group`} 
				description={description} 
				url={canonical}
				section={title}
				tags={[title, 'Services', 'Technology']}
			/>
			<div className="container mx-auto px-4 py-16">
				<nav className="text-sm text-gray-400 mb-6">
					<Link href="/" className="hover:text-white">Home</Link>
					<span className="mx-2">/</span>
					<span className="text-gray-300">{title}</span>
				</nav>
				<h1 className="text-4xl font-bold mb-4">{title}</h1>
				<p className="text-gray-300 mb-8">{description}</p>
				<div className="flex gap-4">
					<Link href="/services" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Browse Services</Link>
					<Link href="/pricing" className="px-6 py-3 rounded-lg border border-cyan-500/40 text-cyan-300">View Pricing</Link>
					<Link href="/contact" className="px-6 py-3 rounded-lg border border-gray-700 text-gray-200">Contact Sales</Link>
				</div>
				<div className="mt-12 text-sm text-gray-500">Auto-generated route: /{slug}</div>
			</div>
		</>
	);
}
