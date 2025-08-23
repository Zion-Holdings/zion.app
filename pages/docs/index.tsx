import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

export default function DocsIndex() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<meta name="description" content="Developer documentation, SDKs, and API guides." />
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Documentation</h1>
				<p className="text-gray-300 max-w-2xl">Find guides, SDKs, and reference materials. For API reference, see <a href="/api-documentation" className="text-cyan-400 underline">API Documentation</a>.</p>
			</div>
		</UltraFuturisticBackground>
	);
}