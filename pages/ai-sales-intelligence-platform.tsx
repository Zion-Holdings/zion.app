import React from 'react';
import Link from 'next/link';

export default function AISalesIntelligencePlatform() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">AI Sales Intelligence Platform</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Prioritize the right accounts, generate talking points, and automate follow-ups. Bring CRM, intent, and product telemetry together with AI coaching.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Account Scoring', desc: 'Fit + intent + usage scoring with explainability and next-best-actions.' },
							{ title: 'AI Coaching', desc: 'Call/email analysis for objections, topics, sentiment, and coaching moments.' },
							{ title: 'Pipeline Intelligence', desc: 'Deal risk flags, velocity insights, and forecast accuracy dashboards.' },
							{ title: 'Personalization', desc: 'Auto-drafted emails with product usage insights; one-click review.' },
							{ title: 'Integrations', desc: 'Salesforce, HubSpot, Gong, Outreach, Salesloft, Apollo.' },
							{ title: 'Revenue Analytics', desc: 'Win/loss analysis and territory performance.' }
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
							<div className="rounded-2xl border border-amber-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 10 users, account scores, basic coaching.</p>
								<p className="mt-4 text-3xl font-bold">$290<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 50 users, coaching + forecast, Salesforce/HubSpot.</p>
								<p className="mt-4 text-3xl font-bold">$990<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">SSO/SCIM, custom models, revops data lake export.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.gong.io/pricing/" target="_blank" rel="noreferrer">Gong</a>, <a className="underline hover:text-cyan-300" href="https://www.apollo.io/pricing" target="_blank" rel="noreferrer">Apollo</a>, <a className="underline hover:text-cyan-300" href="https://www.salesloft.com/pricing/" target="_blank" rel="noreferrer">Salesloft</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-amber-400 text-black font-semibold">Supercharge Sales</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}