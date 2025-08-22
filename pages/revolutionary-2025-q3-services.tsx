import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Link from 'next/link';
import { real2025Q3Additions } from '../data/real-2025-q3-additions';

export default function Revolutionary2025Q3Services() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Q3 2025 Service Additions | Zion Tech Group</title>
				<meta name="description" content="New real micro SaaS, IT, and AI services added in Q3 2025 with transparent pricing and direct links." />
				<link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-q3-services" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white space-y-10">
				<div className="text-center max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Q3 2025 Additions</h1>
					<p className="text-gray-300">Fresh, market-backed services with simple pricing and fast onboarding. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{real2025Q3Additions.map((s) => (
						<Card key={s.id} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
							<div className="text-sm text-gray-400 mb-1">{s.category}</div>
							<h3 className="text-white text-xl font-semibold mb-2">{s.name}</h3>
							<p className="text-gray-300/90 line-clamp-3 mb-3">{s.tagline || s.description}</p>
							<div className="text-gray-100 font-bold mb-4">{s.price}<span className="text-sm text-gray-400 font-medium">{s.period}</span></div>
							<ul className="text-sm text-gray-300 space-y-1 mb-4">
								{s.features.slice(0, 4).map((f) => (<li key={f}>• {f}</li>))}
							</ul>
							<div className="flex gap-3">
								<Link href={s.link} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">Learn More</Link>
								<Link href={`/services/${s.id}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200">View Details</Link>
							</div>
						</Card>
					))}
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}