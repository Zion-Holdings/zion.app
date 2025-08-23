import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

export default function DeveloperIndex() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Developer | Zion Tech Group</title>
				<meta name="description" content="Developer resources, SDKs, and integration guides." />
				<link rel="canonical" href="https://ziontechgroup.com/developer" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Developer</h1>
				<p className="text-gray-300 max-w-2xl">Explore SDKs and integration examples. See <a href="/api-documentation" className="text-cyan-400 underline">API Docs</a>.</p>
			</div>
		</UltraFuturisticBackground>
	);
}