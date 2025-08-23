import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function QuantumComputingLanding() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Quantum Computing Services | Zion Tech Group</title>
				<meta name="description" content="Explore our revolutionary quantum computing platforms and solutions including quantum neural networks, cybersecurity, and bio-computing." />
				<link rel="canonical" href="https://ziontechgroup.com/quantum-computing" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Quantum Computing Services</h1>
				<p className="text-gray-300 max-w-3xl">Next-generation quantum computing solutions: neural ecosystems, cybersecurity, bio-computing, and quantum cloud infrastructure. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-neural-ecosystem">Quantum Neural Ecosystem</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-cybersecurity">Quantum Cybersecurity</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-bio-computing-platform">Quantum Bio-Computing</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-cloud-infrastructure">Quantum Cloud Infrastructure</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-financial-trading">Quantum Financial Trading</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-supply-chain-optimizer">Quantum Supply Chain Optimizer</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-materials-discovery">Quantum Materials Discovery</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-storage-solutions">Quantum Storage Solutions</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-blue-500/50" href="/quantum-workload-orchestration">Quantum Workload Orchestration</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}