import React from 'react';
import Link from 'next/link';

export default function QuantumBioComputingPlatform() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Quantum Bio-Computing Platform</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Hybrid quantum-biological compute primitives for simulation, optimization, and discovery. Practical abstractions for workloads exploring quantum-inspired algorithms.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Molecular Simulation', desc: 'Exploratory pipelines for docking and energy estimation.' },
							{ title: 'Combinatorial Optimization', desc: 'QAOA-inspired heuristics with classical fallbacks.' },
							{ title: 'Signal Processing', desc: 'Quantum-inspired transforms for anomaly detection.' },
							{ title: 'Notebooks & SDK', desc: 'Python SDK with templated experiments and datasets.' },
							{ title: 'Integrations', desc: 'AWS Braket, Qiskit, PyTorch, Pandas, JAX.' },
							{ title: 'Governance', desc: 'Reproducibility, lineage, and safety sandboxes.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-purple-400 text-black font-semibold">Book a Demo</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}