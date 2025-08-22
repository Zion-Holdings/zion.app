import React from 'react';
import Link from 'next/link';

export default function AIFinancialPlanningPlatform() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">AI Financial Planning Platform</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Driver-based planning, rolling forecasts, and what-if analysis with AI assistance. Connect ERP, CRM, and data warehouses to operationalize FP&A.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Driver Models', desc: 'Headcount, pipeline, COGS, marketing, and unit economics with scenario trees.' },
							{ title: 'Rolling Forecasts', desc: 'Monthly/weekly re-forecasts, variance analysis, and alerts.' },
							{ title: 'What-if', desc: 'Stress tests for pricing, retention, FX, and macro assumptions.' },
							{ title: 'Consolidation', desc: 'Entity rollups, eliminations, and compliance-ready exports.' },
							{ title: 'Integrations', desc: 'NetSuite, QuickBooks, Salesforce, Snowflake, BigQuery.' },
							{ title: 'AI Narratives', desc: 'Automated board packs with natural language insights.' }
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
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 5 users, core models, board pack.</p>
								<p className="mt-4 text-3xl font-bold">$390<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">25 users, consolidation, Snowflake/NetSuite.</p>
								<p className="mt-4 text-3xl font-bold">$1,290<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-amber-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Advanced governance, custom models, SSO.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.workday.com/en-us/products/analytics-and-reporting/adaptive-planning/enterprise-planning.html" target="_blank" rel="noreferrer">Workday Adaptive</a>, <a className="underline hover:text-cyan-300" href="https://www.anaplan.com/pricing/" target="_blank" rel="noreferrer">Anaplan</a>, <a className="underline hover:text-cyan-300" href="https://pigment.com/pricing" target="_blank" rel="noreferrer">Pigment</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-emerald-400 text-black font-semibold">Plan With AI</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}