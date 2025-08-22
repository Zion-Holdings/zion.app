import React from 'react';
import Head from 'next/head';

export default function DeveloperPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Developer Portal | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/developer" />
				<meta name="description" content="Developer resources, docs, and SDK links for Zion Tech Group services." />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6 text-slate-200">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Developer Portal</h1>
				<ul className="list-disc list-inside space-y-2">
					<li><a className="text-cyan-400 underline" href="/docs">Documentation</a></li>
					<li><a className="text-cyan-400 underline" href="/market-pricing">Pricing references</a></li>
					<li><a className="text-cyan-400 underline" href="/services">All services</a></li>
				</ul>
				<div className="flex gap-3 pt-2">
					<a href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Get API access</a>
					<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Email support</a>
				</div>
			</div>
		</div>
	);
}