import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function MobileWebSolutionsLanding() {
	return (
		<UltraFuturisticBackground variant="digital" intensity="high">
			<Head>
				<title>Mobile & Web Solutions | Zion Tech Group</title>
				<meta name="description" content="Create exceptional digital experiences with our mobile app development, web applications, and progressive web app solutions." />
				<link rel="canonical" href="https://ziontechgroup.com/mobile-web-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">Mobile & Web Solutions</h1>
				<p className="text-gray-300 max-w-3xl">Build cutting-edge mobile apps, web applications, and progressive web apps with our modern development stack and AI-powered tools. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-content-personalization-engine">AI Content Personalization</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-autonomous-content-factory">AI Content Factory</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-customer-success-platform">Customer Success Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-sales-intelligence">Sales Intelligence Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-financial-intelligence">Financial Intelligence Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-legal-contract-analyzer">Legal Contract Analyzer</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-manufacturing-optimization">Manufacturing Optimization</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-sustainability-platform">Sustainability Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-indigo-500/50" href="/ai-autonomous-vehicle">Autonomous Vehicle Platform</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}