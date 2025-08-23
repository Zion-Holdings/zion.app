import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function HealthcareSolutionsLanding() {
	return (
		<UltraFuturisticBackground variant="healthcare" intensity="high">
			<Head>
				<title>Healthcare Solutions | Zion Tech Group</title>
				<meta name="description" content="Revolutionary AI-powered healthcare technology solutions for medical diagnosis, patient care, and healthcare operations optimization." />
				<link rel="canonical" href="https://ziontechgroup.com/healthcare-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Healthcare Solutions</h1>
				<p className="text-gray-300 max-w-3xl">Transform healthcare delivery with our AI-powered diagnostic tools, patient care optimization, and healthcare operations automation. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-powered-decision-engine">AI Decision Engine</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-predictive-maintenance">Predictive Maintenance</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-content-personalization-engine">Content Personalization</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-autonomous-business-operations">Operations Automation</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-customer-success">Patient Success Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-financial-intelligence">Healthcare Finance</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-market-research">Healthcare Research</a>
					<a className="p-6 rounded-2xl bg-black/500 border border-gray-700/60 hover:border-green-500/50" href="/ai-sustainability-platform">Healthcare Sustainability</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/quantum-bio-computing-platform">Quantum Bio-Computing</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}