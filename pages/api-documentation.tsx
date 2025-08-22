import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function APIDocsPage() {
	return (
		<UltraFuturisticBackground>
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name="description" content="API reference, authentication, rate limits, and examples." />
				<link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>
				<p className="text-gray-300">Find references and examples. Need help? Call +1 302 464 0950 or email kleber@ziontechgroup.com.</p>
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<li className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50"><a href="/docs">Getting Started</a></li>
					<li className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50"><a href="/support">Support</a></li>
					<li className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50"><a href="/market-pricing">Market Pricing</a></li>
				</ul>
			</div>
		</UltraFuturisticBackground>
	);
}