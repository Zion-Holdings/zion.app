import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

export default function DocsPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="medium">
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<meta name="description" content="Product guides, tutorials, and best practices." />
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Documentation</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-800"><a href="/api-documentation" className="text-cyan-300 underline">API Reference</a></Card>
					<Card className="p-6 bg-black/40 border border-gray-800"><a href="/services" className="text-cyan-300 underline">Services Catalog</a></Card>
					<Card className="p-6 bg-black/40 border border-gray-800"><a href="/pricing" className="text-cyan-300 underline">Pricing</a></Card>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}