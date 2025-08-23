import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

export default function ApiDocsIndex() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name="description" content="API reference and endpoints." />
				<link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">API Documentation</h1>
				<p className="text-gray-300 max-w-2xl">SDKs and REST endpoints. Contact us for enterprise access.</p>
			</div>
		</UltraFuturisticBackground>
	);
}