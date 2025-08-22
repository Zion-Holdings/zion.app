import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

export default function BlogIndexPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="low">
			<Head>
				<title>Blog & Insights | Zion Tech Group</title>
				<meta name="description" content="Insights on AI, cloud, security, and micro SaaS from Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-8">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Blog & Insights</h1>
					<p className="text-gray-300">Guides, benchmarks, and playbooks for AI, cloud, security, and micro SaaS.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Link href="/market-pricing" className="p-6 bg-black/40 border border-gray-700/50 rounded-xl hover:border-cyan-500/50">
						<h3 className="text-white text-xl font-semibold mb-2">Market Pricing References</h3>
						<p className="text-gray-300 text-sm">Vendor-verifiable benchmarks for AI, cloud, and security tools.</p>
					</Link>
					<Link href="/resources" className="p-6 bg-black/40 border border-gray-700/50 rounded-xl hover:border-cyan-500/50">
						<h3 className="text-white text-xl font-semibold mb-2">Resources</h3>
						<p className="text-gray-300 text-sm">Reports, docs, and quick-start guides.</p>
					</Link>
					<Link href="/comprehensive-services-showcase-2025" className="p-6 bg-black/40 border border-gray-700/50 rounded-xl hover:border-cyan-500/50">
						<h3 className="text-white text-xl font-semibold mb-2">All Services Showcase</h3>
						<p className="text-gray-300 text-sm">Explore our full portfolio with pricing and use cases.</p>
					</Link>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}

