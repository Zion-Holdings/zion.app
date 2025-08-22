import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

export default function PricingPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="medium">
			<Head>
				<title>Pricing | Zion Tech Group</title>
				<meta name="description" content="Transparent pricing for micro SaaS, AI, and IT services. View plans and market pricing references." />
				<link rel="canonical" href="https://ziontechgroup.com/pricing" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-10">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Pricing</h1>
					<p className="text-gray-300">We align to vendor-verifiable, transparent pricing. See our <Link className="text-cyan-400 underline" href="/market-pricing">Market Pricing</Link> for references.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
						<h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
						<p className="text-gray-300 mb-4">Great for prototypes and small teams</p>
						<div className="text-3xl font-bold">$49<span className="text-base text-gray-400">/mo</span></div>
					</div>
					<div className="p-6 bg-black/40 border border-cyan-500/50 rounded-xl">
						<h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
						<p className="text-gray-300 mb-4">Best for growing teams</p>
						<div className="text-3xl font-bold">$149<span className="text-base text-gray-400">/mo</span></div>
					</div>
					<div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
						<h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
						<p className="text-gray-300 mb-4">For complex, custom needs</p>
						<div className="text-3xl font-bold">Custom</div>
					</div>
				</div>
				<div className="text-center text-sm text-gray-400">Contact: +1 302 464 0950 • kleber@ziontechgroup.com • 364 E Main St STE 1008 Middletown DE 19709</div>
			</div>
		</UltraFuturisticBackground>
	);
}