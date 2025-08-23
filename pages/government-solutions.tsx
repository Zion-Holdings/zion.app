import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function GovernmentSolutionsLanding() {
	return (
		<UltraFuturisticBackground variant="government" intensity="high">
			<Head>
				<title>Government Solutions | Zion Tech Group</title>
				<meta name="description" content="Secure, compliant, and innovative technology solutions designed specifically for government agencies and public sector organizations." />
				<link rel="canonical" href="https://ziontechgroup.com/government-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Government Solutions</h1>
				<p className="text-gray-300 max-w-3xl">Secure, compliant, and innovative technology solutions designed specifically for government agencies and public sector organizations. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/cybersecurity">Cybersecurity</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/zero-trust-security">Zero Trust Security</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/soc2-compliance-automation">SOC2 Compliance</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/privacy-compliance-automation">Privacy Compliance</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/vulnerability-assessment-penetration-testing">Security Testing</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/it-services">IT Infrastructure</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/cloud-platform">Cloud Platform</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/data-analytics">Data Analytics</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/ai-services">AI Services</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}