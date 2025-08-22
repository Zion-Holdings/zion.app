import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

export default function DeveloperPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Developer Portal | Zion Tech Group</title>
				<meta name="description" content="SDKs, API docs, and developer resources for building with Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/developer" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Developer Portal</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Jumpstart your integration with our APIs and templates.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-800"><a href="/docs" className="text-cyan-300 hover:text-cyan-200 underline">Read the Docs →</a></Card>
					<Card className="p-6 bg-black/40 border border-gray-800"><a href="/api-documentation" className="text-cyan-300 hover:text-cyan-200 underline">API Documentation →</a></Card>
					<Card className="p-6 bg-black/40 border border-gray-800"><a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline">GitHub →</a></Card>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}