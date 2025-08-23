import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink, Calculator, BarChart3, LineChart } from 'lucide-react';

export default function AIFinancialPlanningPlatformPage() {
	const title = 'AI Financial Planning Platform — Zion Tech Group';
	const description = 'Driver-based forecasting, variance analysis, and scenario planning for FP&A teams. Connects to your ERP/BI and spreadsheets.';
	const features = [
		'Driver-based models with Monte Carlo scenarios',
		'Automated actuals vs. budget variance analysis',
		'Rolling forecasts with anomaly detection',
		'Headcount planning and capacity modeling',
		'Connectors: Netsuite, QuickBooks, Snowflake, BigQuery',
		'Excel/Sheets bidirectional sync and audit trails',
		'Executive dashboards and narrative summaries',
		'APIs for data exports to BI tools'
	];

	const pricingNotes = [
		'Starter: $499–$1,499/mo (1–3 planners)',
		'Growth: $1,500–$4,999/mo (4–15 planners)',
		'Enterprise: Custom (SSO/SCIM, SOC 2, SLAs)'
	];

	const references = [
		{ name: 'Anaplan', url: 'https://www.anaplan.com' },
		{ name: 'Vena pricing', url: 'https://www.venasolutions.com/pricing' },
		{ name: 'Mosaic.tech pricing', url: 'https://www.mosaic.tech/pricing' }
	];

	return (
		<>
			<SEO title={title} description={description} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">AI Financial Planning Platform</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">{description}</p>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
						<span className="inline-flex items-center gap-1"><Calculator className="w-4 h-4 text-emerald-400" /> Driver models</span>
						<span className="inline-flex items-center gap-1"><LineChart className="w-4 h-4 text-cyan-400" /> Rolling forecasts</span>
						<span className="inline-flex items-center gap-1"><BarChart3 className="w-4 h-4 text-purple-400" /> Variances</span>
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
						<p className="mt-3 text-sm text-gray-400">Pricing aligns to planners, entities, and data volumes.</p>
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