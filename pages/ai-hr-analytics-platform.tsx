import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Check, ExternalLink, Users, BarChart3, Smile } from 'lucide-react';

export default function AIHRAnalyticsPlatformPage() {
	const title = 'AI HR Analytics Platform — Zion Tech Group';
	const description = 'People analytics for talent, engagement, and retention. Unified HRIS + survey + performance data with explainable insights.';
	const features = [
		'Attrition risk models and retention drivers',
		'Comp and pay equity analysis with cohorts',
		'Headcount, hiring funnel, and time-to-fill analytics',
		'Engagement surveys with AI theme detection',
		'DEI dashboards and cohort comparisons',
		'Integrations: Workday, BambooHR, Greenhouse, Lever',
		'RBAC, anonymization, and privacy safeguards',
		'Exports to BI tools and data warehouses'
	];

	const pricingNotes = [
		'Starter: $299–$999/mo (up to 250 employees)',
		'Growth: $1,000–$3,999/mo (up to 2,500 employees)',
		'Enterprise: Custom (SSO/SCIM, SLAs, privacy add-ons)'
	];

	const references = [
		{ name: 'ChartHop pricing', url: 'https://www.charthop.com/pricing' },
		{ name: 'Lattice pricing', url: 'https://lattice.com/pricing' },
		{ name: 'Culture Amp pricing', url: 'https://www.cultureamp.com/pricing' }
	];

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">AI HR Analytics Platform</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">{description}</p>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
						<span className="inline-flex items-center gap-1"><Users className="w-4 h-4 text-emerald-400" /> People insights</span>
						<span className="inline-flex items-center gap-1"><BarChart3 className="w-4 h-4 text-cyan-400" /> Cohorts</span>
						<span className="inline-flex items-center gap-1"><Smile className="w-4 h-4 text-purple-400" /> Engagement</span>
					</div>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Request Demo</Link>
						<Link href="/market-pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Market Pricing</Link>
					</div>
				</div>
			</section>

			<main id="main" className="container mx-auto px-4 pb-24">
				<section className="max-w-5xl mx-auto">
					<div className="mt-4 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>

					<div className="mt-10">
						<h2 className="text-2xl font-semibold text-white">Pricing</h2>
						<ul className="mt-4 grid sm:grid-cols-3 gap-4">
							{pricingNotes.map((p) => (
								<li key={p} className="rounded-xl border border-cyan-400/30 bg-black/30 p-4 text-gray-200">{p}</li>
							))}
						</ul>
						<p className="mt-3 text-sm text-gray-400">Tiers scale by employee count, integrations, and data retention.</p>
					</div>

					<div className="mt-10">
						<h2 className="text-2xl font-semibold text-white">References</h2>
						<div className="mt-4 flex flex-wrap gap-4">
							{references.map((r) => (
								<a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
									<ExternalLink className="w-4 h-4" /> {r.name}
								</a>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}