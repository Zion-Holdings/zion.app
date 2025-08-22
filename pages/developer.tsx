import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

export default function DeveloperHub() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Developer Hub | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/developer" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Developer Hub</h1>
				<p className="text-gray-300 mb-10 max-w-3xl">Start building with our APIs and reference implementations. Explore docs, SDKs, and code samples.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Link href="/docs" className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50">Docs</Link>
					<Link href="/api-documentation" className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-purple-500/50">API Reference</Link>
					<Link href="/resources" className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-pink-500/50">Resources</Link>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}