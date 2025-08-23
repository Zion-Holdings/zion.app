import React from 'react';
import SEO from '../components/SEO';

const ext = (url: string) => (
	<a className="text-cyan-400 underline" href={`/out?u=${encodeURIComponent(url)}`} target="_blank" rel="nofollow noopener noreferrer">{url.replace('https://', '')}</a>
);

export default function ServicesAdvertisingPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<SEO title="Services Advertising | Zion Tech Group" description="Features, benefits, and market references for Zion Tech Group services" url="https://ziontechgroup.com/services-advertising/" />
			<div className="max-w-6xl mx-auto space-y-10">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services Advertising</h1>

				{/* Quick contact */}
				<div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-black/30 border border-gray-800">
					<a href="tel:+13024640950" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Call +1 302 464 0950</a>
					<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">Email kleber@ziontechgroup.com</a>
					<a href="/pricing" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">View Pricing</a>
					<div className="text-slate-400 text-sm">
						<span className="block md:inline">Address: 364 E Main St STE 1008 Middletown DE 19709</span>
						<span className="hidden md:inline mx-2">·</span>
						<a className="text-cyan-400 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">ziontechgroup.com</a>
					</div>
				</div>

				<section id="ai-evaluation-orchestrator" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Evaluation Orchestrator</h2>
					<p className="text-slate-300">Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$400/mo + API usage</li>
						<li>References: {ext('https://openai.com/pricing')}, {ext('https://www.anthropic.com/pricing')}, {ext('https://openrouter.ai/models')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Vector Search Starter</h2>
					<p className="text-slate-300">Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$1,000/mo</li>
						<li>References: {ext('https://www.pinecone.io/pricing/')}, {ext('https://console.weaviate.cloud/pricing')}, {ext('https://www.elastic.co/pricing')}</li>
					</ul>
				</section>

				<section id="managed-postgres-ha" className="space-y-6">
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
						<li>References: {ext('https://platform.openai.com/docs/guides/safety-best-practices')}, {ext('https://github.com/guardrails-ai/guardrails')}</li>
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
				
				{/* New additions */}
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Status Page & SLO Monitor</h2>
					<p className="text-slate-300">Public status pages, incident comms, and SLO/error budget tracking.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $20–$200/mo</li>
						<li>References: {ext('https://www.atlassian.com/software/statuspage/pricing')}, {ext('https://www.checklyhq.com/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">TLS Certificate Monitor</h2>
					<p className="text-slate-300">Expiry alerts, issuance auditing, and auto-renew guidance.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $5–$50/mo</li>
						<li>References: {ext('https://letsencrypt.org/')} , {ext('https://www.ssllabs.com/ssltest/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Domain & DNS Monitor</h2>
					<p className="text-slate-300">WHOIS, nameserver, and DNS record drift detection with alerts.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $5–$40/mo</li>
						<li>References: {ext('https://www.cloudflare.com/plans/')}, {ext('https://www.digicert.com/tools')}</li>
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
					<h2 className="text-2xl font-semibold text-white">API Security Scanner</h2>
					<p className="text-slate-300">Continuously discover APIs and detect OWASP API Top 10 risks with CI gating.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $100–$2,000/mo</li>
						<li>References: {ext('https://www.cloudflare.com/plans/')}, {ext('https://www.fastly.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Podcast Transcription & Insights</h2>
					<p className="text-slate-300">Transcripts, chapters, show notes, and SEO-ready blog pages with exports.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $10–$60/mo + usage</li>
						<li>References: {ext('https://platform.openai.com/pricing')}, {ext('https://www.descript.com/pricing')}, {ext('https://otter.ai/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Edge Feature Flags</h2>
					<p className="text-slate-300">Audience and geo-targeted flags at the edge with gradual rollouts and fallbacks.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$500/mo</li>
						<li>References: {ext('https://vercel.com/pricing')}, {ext('https://www.cloudflare.com/plans/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Micro CRM for Local Business</h2>
					<p className="text-slate-300">Contacts, deals, appointments, and reminders without enterprise complexity.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $15–$60/mo</li>
						<li>References: {ext('https://www.hubspot.com/pricing')}, {ext('https://www.zoho.com/crm/pricing.html')}</li>
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

export default ServicesAdvertising;
