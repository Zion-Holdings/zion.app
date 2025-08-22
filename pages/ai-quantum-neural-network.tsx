import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AIQuantumNeuralNetworkPage() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI + Quantum Neural Network Platform | Zion Tech Group</title>
				<meta name="description" content="Hybrid AI + Quantum workflows for optimization, search, and simulation. Benchmark quantum-inspired methods alongside classical baselines." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-quantum-neural-network" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-10">
					<header className="space-y-3">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI + Quantum Neural Network Platform</h1>
						<p className="text-slate-300 max-w-3xl">Experiment with quantum-inspired and quantum-executable layers for optimization, retrieval, and simulation. Compare latency, cost, and accuracy to pick the right approach.</p>
					</header>

					<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-3">Use cases</h2>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Route optimization and logistics</li>
								<li>Portfolio optimization and risk analysis</li>
								<li>Molecular and material search</li>
								<li>Vector search and reranking</li>
							</ul>
						</div>
						<div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-3">References</h2>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>D-Wave docs: <a className="text-cyan-400 underline" href="https://docs.dwavesys.com/" target="_blank" rel="noopener noreferrer">docs.dwavesys.com</a></li>
								<li>Amazon Braket: <a className="text-cyan-400 underline" href="https://aws.amazon.com/braket/" target="_blank" rel="noopener noreferrer">aws.amazon.com/braket</a></li>
								<li>Qiskit: <a className="text-cyan-400 underline" href="https://qiskit.org/" target="_blank" rel="noopener noreferrer">qiskit.org</a></li>
							</ul>
						</div>
					</section>

					<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
							<h3 className="text-xl font-semibold mb-2">Benchmarks</h3>
							<p className="text-slate-300">A/B compare classical heuristics vs. quantum-inspired methods. Export notebooks and reports.</p>
						</div>
						<div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
							<h3 className="text-xl font-semibold mb-2">Pricing</h3>
							<p className="text-slate-300">From $2,500/month + pay-as-you-go for quantum backends. See <a className="text-cyan-400 underline" href="/market-pricing">market pricing</a>.</p>
						</div>
						<div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6">
							<h3 className="text-xl font-semibold mb-2">Compliance</h3>
							<p className="text-slate-300">Audit logs, data residency options, and enterprise SSO/SCIM support.</p>
						</div>
					</section>

					<section className="flex flex-wrap gap-3 pt-2">
						<a href="/contact" className="px-5 py-3 rounded-xl bg-cyan-600/20 border border-cyan-500/40 hover:bg-cyan-600/30 transition">Get Quote</a>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 transition">Email Us</a>
						<a href="tel:+13024640950" className="px-5 py-3 rounded-xl bg-pink-600/20 border border-pink-500/40 hover:bg-pink-600/30 transition">+1 302 464 0950</a>
					</section>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}