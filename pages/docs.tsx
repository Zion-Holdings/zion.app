import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Link from 'next/link';

export default function DocsPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="medium">
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<meta name="description" content="Developer documentation, API reference, and implementation guides for Zion Tech Group services." />
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<div className="container mx-auto px-4 py-16 space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Documentation</h1>
				<p className="text-gray-300 max-w-3xl">Find quickstart guides, API references, SDKs, and integration examples to build with our platforms.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-700/50">
						<h3 className="text-white text-lg font-semibold mb-2">API Reference</h3>
						<p className="text-gray-300 mb-3">Endpoints, authentication, pagination, and examples.</p>
						<Link href="/api-documentation" className="text-cyan-400 hover:text-cyan-300">Open API Docs →</Link>
					</Card>
					<Card className="p-6 bg-black/40 border border-gray-700/50">
						<h3 className="text-white text-lg font-semibold mb-2">Developer Portal</h3>
						<p className="text-gray-300 mb-3">SDKs, tutorials, and sample apps.</p>
						<Link href="/developer" className="text-cyan-400 hover:text-cyan-300">Go to Developer →</Link>
					</Card>
					<Card className="p-6 bg-black/40 border border-gray-700/50">
						<h3 className="text-white text-lg font-semibold mb-2">Support Center</h3>
						<p className="text-gray-300 mb-3">FAQ, contact, status, and training resources.</p>
						<Link href="/support" className="text-cyan-400 hover:text-cyan-300">Visit Support →</Link>
					</Card>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}