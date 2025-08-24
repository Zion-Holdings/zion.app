import React from 'react';
import Link from 'next/link';

export default function IntelligentSupplyChainOptimization() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Intelligent Supply Chain Optimization</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Forecast demand, optimize inventory, and cut logistics costs with probabilistic forecasting, network flow optimization, and AI-driven exception management.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Demand Forecasting', desc: 'Hierarchical time series with promotions and seasonality, MAPE dashboards.' },
							{ title: 'Inventory Optimization', desc: 'Multi-echelon safety stock, reorder points, and service levels.' },
							{ title: 'Network Optimization', desc: 'Facility location, route planning, and carrier selection with constraints.' },
							{ title: 'Anomaly Detection', desc: 'Supplier risk, late shipments, and fraud detection with alerts.' },
							{ title: 'What-if Simulations', desc: 'Scenario testing for lead time, MOQ, demand spikes, and costs.' },
							{ title: 'Integrations', desc: 'ERP/WMS/TMS connectors and data lake exports.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-12">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Single region, up to 50k SKUs.</p>
								<p className="mt-4 text-3xl font-bold">$690<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-purple-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Multi-region, advanced optimization.</p>
								<p className="mt-4 text-3xl font-bold">$1,490<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-pink-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Custom constraints, on-prem deployment.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.o9solutions.com/" target="_blank" rel="noreferrer">o9 Solutions</a>, <a className="underline hover:text-cyan-300" href="https://www.kinaxis.com/en/products/rapidresponse" target="_blank" rel="noreferrer">Kinaxis</a>, <a className="underline hover:text-cyan-300" href="https://www.arkieva.com/" target="_blank" rel="noreferrer">Arkieva</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold">Optimize My Network</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}