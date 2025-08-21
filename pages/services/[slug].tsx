import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// Simplified service interface
interface SimpleService {
  id: string;
  name: string;
  description: string;
  tagline?: string;
  price?: string;
  period?: string;
  features?: string[];
  useCases?: string[];
  integrations?: string[];
  competitors?: string[];
  marketPosition?: string;
  roi?: string;
  trialDays?: number;
  setupTime?: string;
  link?: string;
}

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

// Mock service data for now to avoid build issues
const mockService: SimpleService = {
  id: 'example-service',
  name: 'Example Service',
  description: 'This is an example service description. Please contact us for more information about our real services.',
  tagline: 'Example service tagline',
  price: '$99',
  period: '/month',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  useCases: ['Use case 1', 'Use case 2'],
  integrations: ['Integration 1', 'Integration 2'],
  competitors: ['Competitor 1', 'Competitor 2'],
  marketPosition: 'Leading position in the market',
  roi: '300% ROI within 6 months',
  trialDays: 14,
  setupTime: 'Fast',
  link: 'https://ziontechgroup.com'
};

export async function getStaticPaths() {
	// For now, return a simple path to avoid build issues
	return {
		paths: [{ params: { slug: 'example-service' } }],
		fallback: 'blocking'
	};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	// For now, return mock data to avoid build issues
	return {
		props: { 
			service: mockService,
			slug: params?.slug || 'example-service'
		}
	};
}

export default function ServiceDetailPage({ service, slug }: { service: SimpleService; slug: string }) {
	return (
		<Layout>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.tagline || service.description} />
				<link rel="canonical" href={service.link || `https://ziontechgroup.com/services/${slug}`} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org",
								"@type": "Service",
								name: service.name,
								description: service.tagline || service.description,
								url: service.link || `https://ziontechgroup.com/services/${slug}`,
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
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{service.description}</p>
						</div>

						{service.features && service.features.length > 0 && (
							<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
								<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
								<ul className="space-y-2 text-gray-300">
									{service.features.slice(0, 12).map((f: string) => (
										<li key={f} className="flex items-start gap-2">
											<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
											<span>{f}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Use Cases & Integrations */}
						{(service.useCases || service.integrations) && (
							<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
								<h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
									{service.useCases && service.useCases.length > 0 && (
										<div>
											<div className="text-sm text-gray-400 mb-2">Use Cases</div>
											<ul className="list-disc list-inside space-y-1">
												{service.useCases.slice(0, 8).map((u: string) => (
													<li key={u}>{u}</li>
												))}
											</ul>
										</div>
									)}
									{service.integrations && service.integrations.length > 0 && (
										<div>
											<div className="text-sm text-gray-400 mb-2">Integrations</div>
											<div className="flex flex-wrap gap-2">
												{service.integrations.slice(0, 10).map((i: string) => (
													<span key={i} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">{i}</span>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						)}
					</div>

					<div className="space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white text-base font-medium text-gray-400">{service.price || 'Contact Us'}<span >{service.period || ''}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'}</div>
							{service.competitors && service.competitors.length > 0 && (
								<div className="text-sm text-gray-400 mt-1">Competitors: {service.competitors.slice(0,3).join(', ')}</div>
							)}
							<div className="mt-6 flex gap-3">
								<a href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">Contact Sales</a>
								<a href={service.link || '/services'} className="flex-1 border border-gray-600 text-gray-200 px-6 py-3 rounded-lg text-center font-medium hover:border-gray-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 w-4 h-4"><ExternalLink /> Learn More</a>
							</div>
						</div>

						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400 w-4 h-4 hover:underline"><Phone /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} >{contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400 w-4 h-4 hover:underline"><Mail /><a href={`mailto:${contactInfo.email}`} >{contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400 w-4 h-4 text-xs hover:underline"><MapPin /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" >{contactInfo.address}</a></div>
							</div>
						</div>

						{/* Market Position & ROI */}
						{(service.marketPosition || service.roi) && (
							<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
								<h3 className="text-white font-semibold mb-3">Market & ROI</h3>
								<div className="space-y-3 text-sm text-gray-300">
									{service.marketPosition && <p className="leading-relaxed text-gray-400"><span >Position:</span> {service.marketPosition}</p>}
									{service.roi && <p className="leading-relaxed text-gray-400"><span >ROI:</span> {service.roi}</p>}
									<a href="/contact" className="inline-block mt-2 text-cyan-300 hover:text-cyan-200">Contact us for pricing →</a>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}