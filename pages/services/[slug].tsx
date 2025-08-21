import React from 'react';
import Head from 'next/head';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'test-service' } }
		],
		fallback: false
	};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	// Mock service data for now
	const service = {
		id: 'test-service',
		name: 'Test Service',
		description: 'This is a test service for debugging purposes.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		pricing: {
			starter: { price: 99, period: 'month' },
			professional: { price: 199, period: 'month' },
			enterprise: { price: 399, period: 'month' }
		},
		category: 'Test',
		website: 'https://ziontechgroup.com'
	};

	return {
		props: {
			service
		}
	};
}

export default function ServicePage({ service }: { service: any }) {
	return (
		<>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.description} />
			</Head>
			
			<div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white">
				<div className="container mx-auto px-6 py-12">
					<div className="max-w-4xl mx-auto">
						<header className="mb-12 text-center">
							<h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
								{service.name}
							</h1>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								{service.description}
							</p>
						</header>
						
						<div className="grid md:grid-cols-2 gap-8 mb-12">
							<div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
								<h3 className="text-2xl font-semibold mb-4 text-cyan-400">Features</h3>
								<ul className="space-y-3">
									{service.features.map((feature: string, index: number) => (
										<li key={index} className="flex items-center space-x-3">
											<Check className="w-5 h-5 text-green-400 flex-shrink-0" />
											<span className="text-gray-300">{feature}</span>
										</li>
									))}
								</ul>
							</div>
							
							<div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
								<h3 className="text-2xl font-semibold mb-4 text-blue-400">Pricing</h3>
								<div className="space-y-4">
									{Object.entries(service.pricing).map(([plan, details]: [string, any]) => (
										<div key={plan} className="border border-gray-700/50 rounded-xl p-4">
											<h4 className="text-lg font-semibold text-white capitalize mb-2">{plan}</h4>
											<p className="text-3xl font-bold text-cyan-400">
												${details.price}
												<span className="text-lg text-gray-400">/{details.period}</span>
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
						
						<div className="text-center">
							<a
								href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
								className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
							>
								<Mail className="w-5 h-5" />
								<span>Get Started</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}