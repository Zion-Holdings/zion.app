import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function EnterpriseSolutionsLanding() {
	return (
		<UltraFuturisticBackground variant="enterprise" intensity="high">
			<Head>
				<title>Enterprise Solutions | Zion Tech Group</title>
				<meta name="description" content="Transform your enterprise with our comprehensive IT infrastructure, cloud solutions, cybersecurity, and digital transformation services." />
				<link rel="canonical" href="https://ziontechgroup.com/enterprise-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 bg-clip-text text-transparent">Enterprise Solutions</h1>
				<p className="text-gray-300 max-w-3xl">Empower your enterprise with scalable, secure, and innovative technology solutions designed for large-scale operations. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/it-services">IT Infrastructure</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/cloud-platform">Cloud Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/cybersecurity">Cybersecurity</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/data-analytics">Data Analytics</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/devops-automation">DevOps Automation</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/ai-services">AI Services</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/quantum-computing">Quantum Computing</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/space-tech">Space Technology</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-slate-500/50" href="/zero-trust-security">Zero Trust Security</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}