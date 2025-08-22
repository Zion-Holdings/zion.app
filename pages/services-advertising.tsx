import React from 'react';
import Head from 'next/head';

const ext = (url: string) => (
	<a className="text-cyan-400 underline" href={url} target="_blank" rel="noopener noreferrer">{url.replace('https://', '')}</a>
);

export default function ServicesAdvertisingPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Services Advertising | Zion Tech Group</title>
				<meta name="description" content="Features, benefits, and market references for Zion Tech Group services" />
				<link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
			</Head>
			<div className="max-w-6xl mx-auto space-y-10">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services Advertising</h1>

				{/* Original sections */}
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Evaluation Orchestrator</h2>
					<p className="text-slate-300">Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$400/mo + API usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.anthropic.com/pricing')}, {ext('https://openrouter.ai/models')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Vector Search Starter</h2>
					<p className="text-slate-300">Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$1,000/mo</li>
						<li>References: {ext('https://www.pinecone.io/pricing/')}, {ext('https://weaviate.io/pricing')}, {ext('https://www.elastic.co/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Managed Postgres HA</h2>
					<p className="text-slate-300">SRE-backed high availability Postgres with PITR backups, failover, and tuning.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $1,200–$5,000/mo</li>
						<li>References: {ext('https://cloud.google.com/sql/pricing')}, {ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Guardrails & Safety</h2>
					<p className="text-slate-300">Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $0–$500/mo</li>
						<li>References: {ext('https://openai.com/index/safety/')}, {ext('https://github.com/shreyashankar/gpt-guardrails')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Identity & SSO/SCIM</h2>
					<p className="text-slate-300">Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $100–$1,500/mo</li>
						<li>References: {ext('https://auth0.com/pricing')}, {ext('https://workos.com/pricing')}, {ext('https://www.okta.com/pricing/')}</li>
					</ul>
				</section>

				{/* New sections with average market prices and references */}
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Customer Support & Helpdesk</h2>
					<p className="text-slate-300">Ticketing, live chat, knowledge base, and AI assistants to reduce response times.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $20–$500/mo</li>
						<li>References: {ext('https://www.zendesk.com/pricing/')}, {ext('https://freshdesk.com/pricing')}, {ext('https://www.intercom.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">E‑commerce Returns Management</h2>
					<p className="text-slate-300">Automate RMAs, labels, exchanges, and refunds for a delightful post‑purchase experience.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $29–$299/mo + labels</li>
						<li>References: {ext('https://www.loopreturns.com/pricing')}, {ext('https://www.aftership.com/returns-center/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Podcast Transcription & Notes</h2>
					<p className="text-slate-300">Accurate transcriptions with chapters and show notes drafts for SEO & accessibility.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $10–$100/mo</li>
						<li>References: {ext('https://deepgram.com/pricing')}, {ext('https://www.assemblyai.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Automated Email Follow‑ups</h2>
					<p className="text-slate-300">Lead nurturing sequences triggered by activity with AI‑personalized copy and CRM sync.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $25–$150/mo</li>
						<li>References: {ext('https://mailchimp.com/pricing/')} (automations), {ext('https://customer.io/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Freelancer Portfolio Builder</h2>
					<p className="text-slate-300">Beautiful portfolios with case studies, testimonials, and SEO.
					</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $12–$49/mo</li>
						<li>References: {ext('https://webflow.com/pricing')}, {ext('https://www.squarespace.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Scheduling & Appointments</h2>
					<p className="text-slate-300">Booking pages, reminders, no‑show reduction, and payments.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $10–$200/mo</li>
						<li>References: {ext('https://calendly.com/pricing')}, {ext('https://cal.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Feature Flags & Experiments</h2>
					<p className="text-slate-300">Safe launches and A/B tests with audit trails and targeting.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$800/mo</li>
						<li>References: {ext('https://launchdarkly.com/pricing/')}, {ext('https://www.flagsmith.com/pricing')}</li>
					</ul>
				</section>

				{/* CTA */}
				<div className="pt-6 border-t border-slate-700/50">
					<p className="text-slate-300">Call <a href="tel:+13024640950" className="text-cyan-400">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400">kleber@ziontechgroup.com</a>. Visit us at 364 E Main St STE 1008 Middletown DE 19709.</p>
				</div>
			</div>
		</div>
	);
}