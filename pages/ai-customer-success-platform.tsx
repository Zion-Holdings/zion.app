import React from 'react';
import Link from 'next/link';

export default function AICustomerSuccessPlatform() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">AI Customer Success Platform</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Predict churn, prioritize health, and automate playbooks. Unified product telemetry + CRM signals + support history for proactive lifecycle management and revenue expansion.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Health Scores', desc: 'Composite scores using usage, support, NPS/CSAT, contract data with explainability.' },
							{ title: 'Churn Prediction', desc: 'Time-to-churn risk models and alerts with recommended actions.' },
							{ title: 'Playbooks', desc: 'Auto-run adoption, renewal, and expansion sequences integrated with email/Slack/HubSpot/Salesforce.' },
							{ title: '360 Profile', desc: 'Consolidated customer profile and timeline with AI summaries.' },
							{ title: 'Success Planning', desc: 'QBR templates, goal tracking, and executive-ready reports.' },
							{ title: 'Integrations', desc: 'Segment, Snowflake, BigQuery, Zendesk, Intercom, HubSpot, Salesforce, Gainsight export.' }
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
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 5 users, 5k customers tracked, basic playbooks.</p>
								<p className="mt-4 text-3xl font-bold">$290<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 25 users, advanced scores, Salesforce/HubSpot.</p>
								<p className="mt-4 text-3xl font-bold">$890<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">SAML/SCIM, SOC2, custom ML, dedicated success engineer.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.gainsight.com/pricing/" target="_blank" rel="noreferrer">Gainsight</a>, <a className="underline hover:text-cyan-300" href="https://www.planhat.com/pricing" target="_blank" rel="noreferrer">Planhat</a>, <a className="underline hover:text-cyan-300" href="https://www.churnzero.com/pricing" target="_blank" rel="noreferrer">ChurnZero</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-fuchsia-400 text-black font-semibold">Request Demo</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}