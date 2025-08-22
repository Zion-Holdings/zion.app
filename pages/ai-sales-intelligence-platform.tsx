import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink, TrendingUp, PhoneCall, ChartLine } from 'lucide-react';

export default function AISalesIntelligencePlatformPage() {
	const title = 'AI Sales Intelligence Platform — Zion Tech Group';
	const description = 'Qualify pipeline, prioritize deals, and coach reps with AI. Lead scoring, call insights, forecasting, and next-best-action across your CRM.';
	const features = [
		'Lead and account scoring with explainability',
		'Call transcript summarization and objection handling',
		'Opportunity risk alerts and win-likelihood models',
		'Forecast accuracy dashboards and scenario planning',
		'Email sequencing suggestions and personalization',
		'CRM integrations: Salesforce, HubSpot, Pipedrive',
		'Slack/Teams notifications with actionable insights',
		'API and warehouse sync for custom BI'
	];

	const pricingNotes = [
		'Starter: $99–$299/user/mo (2–10 sellers)',
		'Growth: $79–$149/user/mo (11–100 sellers)',
		'Enterprise: Volume pricing + SSO/SCIM + SLAs'
	];

	const references = [
		{ name: 'Gong pricing overview', url: 'https://www.gong.io/pricing/' },
		{ name: 'Outreach pricing', url: 'https://www.outreach.io/pricing' },
		{ name: 'HubSpot Sales Hub pricing', url: 'https://www.hubspot.com/pricing/sales' }
	];

	return (
		<>
			<SEO title={title} description={description} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">AI Sales Intelligence Platform</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">{description}</p>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
						<span className="inline-flex items-center gap-1"><TrendingUp className="w-4 h-4 text-emerald-400" /> Increase win rates</span>
						<span className="inline-flex items-center gap-1"><PhoneCall className="w-4 h-4 text-cyan-400" /> Call insights</span>
						<span className="inline-flex items-center gap-1"><ChartLine className="w-4 h-4 text-purple-400" /> Forecast accuracy</span>
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
						<p className="mt-3 text-sm text-gray-400">Seat-based pricing aligned with team size. Volume discounts available.</p>
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