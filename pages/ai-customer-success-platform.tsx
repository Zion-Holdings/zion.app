import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink, TrendingDown, ThumbsUp, Activity } from 'lucide-react';

export default function AICustomerSuccessPlatformPage() {
	const title = 'AI Customer Success Platform — Zion Tech Group';
	const description = 'Predict churn, boost expansion, and automate health scoring with AI-driven customer success. Integrates with HubSpot, Salesforce, Zendesk, Intercom.';
	const features = [
		'Predictive churn scoring with explainability',
		'Health scores blending product usage, tickets, NPS/CSAT',
		'Lifecycle playbooks: onboarding, renewal, expansion',
		'Risk alerts into Slack/Teams with AI summaries',
		'QBR decks auto-generated from telemetry + CRM',
		'Native integrations: HubSpot, Salesforce, Zendesk, Intercom',
		'CSV and warehouse sync (Snowflake/BigQuery/Redshift)',
		'Role-based permissions and audit trails'
	];

	const pricingNotes = [
		'Growth: $149–$399/mo (up to ~2,000 MAUs, 5 seats)',
		'Pro: $499–$1,499/mo (10k–50k MAUs, 15 seats)',
		'Enterprise: Custom (SSO/SCIM, SOC 2, SLAs)'
	];

	const references = [
		{ name: 'Vitally pricing', url: 'https://www.vitally.io/pricing' },
		{ name: 'Gainsight', url: 'https://www.gainsight.com/platform/customer-success/' },
		{ name: 'HubSpot Service Hub pricing', url: 'https://www.hubspot.com/pricing/service' }
	];

	return (
		<>
			<SEO title={title} description={description} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">AI Customer Success Platform</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						{description}
					</p>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
						<span className="inline-flex items-center gap-1"><TrendingDown className="w-4 h-4 text-emerald-400" /> Reduce churn</span>
						<span className="inline-flex items-center gap-1"><ThumbsUp className="w-4 h-4 text-cyan-400" /> Improve CSAT</span>
						<span className="inline-flex items-center gap-1"><Activity className="w-4 h-4 text-purple-400" /> Usage-driven health</span>
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
						<p className="mt-3 text-sm text-gray-400">Transparent pricing aligned with MAUs and seats. Volume discounts available.</p>
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