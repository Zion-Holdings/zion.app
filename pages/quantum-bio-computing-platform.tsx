import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function QuantumBioComputingPlatformPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Quantum Bio‑Computing Platform | Zion Tech Group</title>
				<meta name="description" content="Hybrid quantum‑biological computing platform for next‑gen simulation and optimization use cases." />
				<link rel="canonical" href="https://ziontechgroup.com/quantum-bio-computing-platform/" />
			</Head>
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Quantum Bio‑Computing Platform</h1>
				<p className="text-gray-300 text-lg max-w-3xl">Unlock new frontiers in materials, drug discovery, and biological systems using quantum‑enhanced algorithms and bio‑inspired computation.</p>
				<div className="mt-6 flex gap-3">
					<a href="/contact" className="px-5 py-3 rounded-xl bg-cyan-600/20 border border-cyan-500/40 hover:bg-cyan-600/30 transition">Get a Quote</a>
					<a href="/market-pricing" className="px-5 py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 transition">Market Pricing</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}