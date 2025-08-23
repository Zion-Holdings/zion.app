import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function DocumentationLanding() {
	return (
		<UltraFuturisticBackground variant="docs" intensity="high">
			<Head>
				<title>Documentation & Resources | Zion Tech Group</title>
				<meta name="description" content="Comprehensive technical documentation, API references, and implementation guides for all Zion Tech Group services and platforms." />
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-slate-400 to-zinc-400 bg-clip-text text-transparent">Documentation & Resources</h1>
				<p className="text-gray-300 max-w-3xl">Access comprehensive technical documentation, API references, implementation guides, and best practices for all our services. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/ai-services">AI Services Documentation</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/quantum-computing">Quantum Computing Guides</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/cybersecurity">Security Implementation</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/cloud-platform">Cloud Platform APIs</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/devops-automation">DevOps Guides</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/data-analytics">Analytics Integration</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/micro-saas">Micro-SaaS Setup</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/space-tech">Space Technology APIs</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-gray-500/50" href="/training">Training Resources</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}