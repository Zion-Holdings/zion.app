import React from 'react';
import SEO from '../components/SEO';

export default function MarketPricingPage() {
	return (
		<>
			<SEO title="Market Pricing Benchmarks" description="Curated benchmark ranges for common AI, cloud, data, and platform solutions." canonical="/market-pricing" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Market Pricing</h1>
					<p className="mt-4 text-gray-300">High-level, vendor-agnostic pricing bands gathered from public references and our experience. For precise quotes, see <a href="/pricing" className="text-cyan-400 underline">Pricing</a> or <a href="/contact" className="text-cyan-400 underline">Contact</a>.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
							<h2 className="text-xl font-semibold text-white">AI & Data</h2>
							<ul className="mt-3 text-gray-300 space-y-2 text-sm">
								<li>LLM Apps: $300–$3,000/mo</li>
								<li>Analytics Suites: $200–$1,500/mo</li>
								<li>ETL & Data Pipelines: $100–$800/mo</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
							<h2 className="text-xl font-semibold text-white">Cloud & FinOps</h2>
							<ul className="mt-3 text-gray-300 space-y-2 text-sm">
								<li>DR & Backups: $500–$6,000/mo + infra</li>
								<li>Zero Trust: $3–$12/user/mo</li>
								<li>CDN & Edge: $20–$400/mo + usage</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
							<h2 className="text-xl font-semibold text-white">Observability</h2>
							<ul className="mt-3 text-gray-300 space-y-2 text-sm">
								<li>APM & Logs: $200–$2,000/mo</li>
								<li>Synthetics: $30–$400/mo</li>
								<li>Status & SLO: $20–$250/mo</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
							<h2 className="text-xl font-semibold text-white">Security & Compliance</h2>
							<ul className="mt-3 text-gray-300 space-y-2 text-sm">
								<li>PII Detection: $150–$1,000/mo</li>
								<li>Privacy Ops: $400–$3,000/mo</li>
								<li>Vuln Scanning: $80–$600/mo</li>
							</ul>
						</div>
					</div>

					<div className="mt-10 flex gap-3">
						<a href="/pricing" className="px-4 py-2 rounded-lg bg-white text-black font-medium">See Pricing</a>
						<a href="/services" className="px-4 py-2 rounded-lg border border-white/10 text-gray-200">Browse Services</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-white/10 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</section>
		</>
	);
}