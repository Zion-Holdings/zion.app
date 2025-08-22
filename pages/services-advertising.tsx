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

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Affiliate Attribution & Payouts Hub</h2>
					<p className="text-slate-300">Cross-device attribution with first-party identity stitching and automated payouts.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $100–$300/mo</li>
						<li>References: {ext('https://stripe.com/pricing')}, {ext('https://pay.google.com/about/business/')}, {ext('https://partnerstack.com/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Podcast Transcription & Insights</h2>
					<p className="text-slate-300">Transcripts, chapters, show notes, and SEO-ready blog pages with exports.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $10–$60/mo + usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.descript.com/pricing')}, {ext('https://otter.ai/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Micro CRM for Local Business</h2>
					<p className="text-slate-300">Contacts, deals, appointments, and reminders without enterprise complexity.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $15–$60/mo</li>
						<li>References: {ext('https://www.hubspot.com/pricing/starter')}, {ext('https://www.zoho.com/crm/pricing.html')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Employee Scheduling Suite</h2>
					<p className="text-slate-300">Shift planning with availability, time-off, swap requests, and notifications.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $30–$100/mo</li>
						<li>References: {ext('https://joinhomebase.com/pricing/')}, {ext('https://wheniwork.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">LMS Starter</h2>
					<p className="text-slate-300">Courses, quizzes, certificates, and progress tracking in days.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $30–$150/mo</li>
						<li>References: {ext('https://teachable.com/pricing')}, {ext('https://www.thinkific.com/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">SMB Website Analytics</h2>
					<p className="text-slate-300">Privacy-friendly dashboards with goals and funnels. Cookie-less.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $9–$50/mo</li>
						<li>References: {ext('https://plausible.io/pricing')}, {ext('https://usefathom.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Automated Email Follow-ups</h2>
					<p className="text-slate-300">Time and event sequences with A/B tests and performance analytics.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $20–$100/mo</li>
						<li>References: {ext('https://mailshake.com/pricing')}, {ext('https://www.gmass.co/pricing')}</li>
					</ul>
				</section>
			</div>
		</div>
	);
}