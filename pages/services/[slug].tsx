import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025, } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Additions } from '../../data/real-2026-additions';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';

import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { realMarketServices } from '../../data/real-market-services';
import { real2029Q2Additions } from '../../data/real-2029-q2-additions';
import { real2029Q3Additions } from '../../data/real-2029-q3-additions';
import { real2030Q1Additions } from '../../data/real-2030-q1-additions';
import { enterpriseITSolutions } from '../../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions } from '../../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../../data/2034-cutting-edge-ai-services';
import { real2031MicroSaasAdditions } from '../../data/real-2031-micro-saas-additions';
import { real2031ITServicesAdditions } from '../../data/real-2031-it-services-additions';
import { real2031AIServicesAdditions } from '../../data/real-2031-ai-services-additions';
import { real2030Q2Additions } from '../../data/real-2030-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { aiAutonomousEcosystemServices2029 } from '../../data/2029-ai-autonomous-ecosystem';
import { emergingTechBreakthroughServices2029 } from '../../data/2029-emerging-tech-breakthroughs';
import { practicalBusinessSolutionServices2029 } from '../../data/2029-practical-business-solutions';
import { professionalServices } from '../../data/professional-services';
import { real2032ServiceExpansions } from '../../data/real-2032-service-expansions';
import { real2035Q1Additions } from '../../data/real-2035-q1-additions';
import { real2035Q2Additions } from '../../data/real-2035-q2-additions';
import { real2025ExtraServices } from '../../data/real-2025-extra-services';
import { real2026Q4ExpansionsV2 } from '../../data/real-2026-q4-expansions-v2';

type Service = typeof enhancedRealMicroSaasServices[number];

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

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
		.concat(realMarketAugmentations2025 as unknown as Service[])
		.concat(additionalLiveServices2025 as unknown as Service[])
		.concat(real2025Q2Additions as unknown as Service[])
		.concat(augmentedServicesBatch3 as unknown as Service[])
		.concat(realServicesQ22025 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[])
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		.concat(realMarketServicesExtended as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[])
		.concat(real2026Additions as unknown as Service[])
		.concat(added2026Q2Services as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
		.concat(real2027Q2Additions as unknown as Service[])
		.concat(real2028ServiceExpansions as unknown as Service[])
		.concat(real2029Q1Additions as unknown as Service[])
		.concat(realMarketServices as unknown as Service[])
		.concat(real2029Q2Additions as unknown as Service[])
		.concat(real2029Q3Additions as unknown as Service[])
		.concat(real2030Q1Additions as unknown as Service[])
		.concat(real2030Q2Additions as unknown as Service[])
		.concat(real2031MicroSaasAdditions as unknown as Service[])
		.concat(real2031ITServicesAdditions as unknown as Service[])
		.concat(real2031AIServicesAdditions as unknown as Service[])
		.concat(real2027Q3Additions as unknown as Service[])
		// 2029 showcase/pricing arrays to ensure matching /services/* pages are generated
		.concat(aiAutonomousEcosystemServices2029 as unknown as Service[])
		.concat(emergingTechBreakthroughServices2029 as unknown as Service[])
		.concat(practicalBusinessSolutionServices2029 as unknown as Service[])
		.concat(professionalServices as unknown as Service[])
		.concat(real2032ServiceExpansions as unknown as Service[])
		.concat(real2035Q1Additions as unknown as Service[])
		.concat(real2035Q2Additions as unknown as Service[])
		.concat(real2025ExtraServices as unknown as Service[])
		.concat(real2026Q4ExpansionsV2 as unknown as Service[]);
}

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractServiceSlugFromLink(link: string): string | null {
	try {
		const url = new URL(link);
		const path = url.pathname.replace(/^\/+|\/+$/g, '');
		if (path.startsWith('services/')) {
			return path.substring('services/'.length);
		}
		return null;
	} catch {
		return null;
	}
}

export async function getStaticPaths() {
	const services = getAllServices();
	const slugs = new Set<string>();

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink) {
			slugs.add(fromLink);
			continue;
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));
	}

	return {
		paths: Array.from(slugs).map((slug) => ({ params: { slug } })),
		fallback: false
	};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const services = getAllServices();
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

	let service: Service | undefined = services.find((s) => {
		if (!s.link) return false;
		const fromLink = extractServiceSlugFromLink(s.link);
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

export default function ServiceDetailPage({ service }: { service: Service }) {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.tagline || service.description} />
				<link rel="canonical" href={service.link || `https://ziontechgroup.com/services/${(service.id || service.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org",
								"@type": "Service",
								name: service.name,
								description: service.tagline || service.description,
								url: service.link,
								provider: {
									"@type": "Organization",
									name: "Zion Tech Group",
									url: "https://ziontechgroup.com"
								},
								offers: {
									"@type": "Offer",
									price: (service.price || '').replace(/[^0-9.]/g, ''),
									priceCurrency: "USD",
									availability: "https://schema.org/InStock"
								}
							},
							null,
							2
							)
						}}
				/>
			</Head>

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{service.name}
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
					<div className="lg:col-span-2 space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{service.description}</p>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{(service.features || []).slice(0, 12).map((f: string) => (
									<li key={f} className="flex items-start gap-2">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
										<span>{f}</span>
									</li>
								))}
							</ul>
						</Card>

						{/* Use Cases & Integrations */}
						<Card className="p-6 bg-black/40 border border-gray-700/50">
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
						</Card>
					</div>

					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">{service.price}<span className="text-base font-medium text-gray-400">{service.period}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'} • Competitors: {(service.competitors || []).slice(0,3).join(', ')}</div>
							<div className="mt-6 flex gap-3">
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href={service.link} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
							</div>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
							</div>
						</Card>

						{/* Market Position & ROI */}
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Market & ROI</h3>
							<div className="space-y-3 text-sm text-gray-300">
								{service.marketPosition && <p className="leading-relaxed"><span className="text-gray-400">Position:</span> {service.marketPosition}</p>}
								{service.roi && <p className="leading-relaxed"><span className="text-gray-400">ROI:</span> {service.roi}</p>}
								{service.competitors?.length ? (
									<p className="leading-relaxed"><span className="text-gray-400">Competitors:</span> {service.competitors.slice(0,6).join(', ')}</p>
								) : null}
								<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover:text-cyan-200">See average market prices →</a>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}