import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function DeveloperPage() {
	return (
		<UltraFuturisticBackground>
			<Head>
				<title>Developer | Zion Tech Group</title>
				<meta name="description" content="Developer resources: docs, SDKs, API references, and examples." />
				<link rel="canonical" href="https://ziontechgroup.com/developer" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Developer</h1>
				<p className="text-gray-300">Get started with our APIs and SDKs. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/docs">Documentation</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/api-documentation">API Reference</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50" href="/market-pricing">Market Pricing</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}