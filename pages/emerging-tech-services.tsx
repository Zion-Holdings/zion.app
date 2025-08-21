import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Link from 'next/link';
import { emergingTechnologyServices } from '../data/emerging-technology-services';

function toSlug(value: string) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function EmergingTechServicesPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Emerging Technology Services | Zion Tech Group</title>
				<meta name="description" content="Blockchain, IoT, 5G, metaverse and more. Explore our emerging tech portfolio with pricing and fast onboarding." />
				<link rel="canonical" href="https://ziontechgroup.com/emerging-tech-services" />
			</Head>
			<div className="container mx-auto px-4 py-16 space-y-8 text-white">
				<header className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Emerging Technology</h1>
					<p className="text-gray-300 text-lg">Productized blockchain, IoT, 5G, AR/VR, and metaverse services.</p>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{emergingTechnologyServices.slice(0, 30).map((s: any) => {
						const slug = s.link ? (() => { try { const u = new URL(s.link); const p = u.pathname.replace(/^\/+/g, '').replace(/\/+$/g, ''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(s.id || s.name || ''); } catch { return toSlug(s.id || s.name || ''); } })() : toSlug(s.id || s.name || '');
						return (
							<Card key={s.id || s.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors">
								<div className="text-sm text-gray-400 mb-1">{s.category || 'Service'}</div>
								<h3 className="text-white text-xl font-semibold mb-2">{s.name}</h3>
								<p className="text-gray-300/90 line-clamp-3 mb-3">{s.tagline || s.description}</p>
								<div className="text-gray-100 font-bold mb-4">{s.price}<span className="text-sm text-gray-400 font-medium">{s.period}</span></div>
								<div className="flex gap-3">
									<Link href={`/services/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
									<Link href={s.link || `/services/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70">Learn</Link>
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}

