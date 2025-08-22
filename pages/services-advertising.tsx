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

				{/* Quick contact */}
				<div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-black/30 border border-gray-800">
					<a href="tel:+13024640950" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Call +1 302 464 0950</a>
					<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">Email kleber@ziontechgroup.com</a>
					<a href="/pricing" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">View Pricing</a>
				</div>

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
						<li>References: {ext('https://www.cloudflare.com/plans/')}, {ext('https://www.digicert.com/tls-ssl/ssl-tools')}</li>
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
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.descript.com/pricing')}, {ext('https://otter.ai/pricing')}</li>
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
				
				<div className="pt-4 text-slate-400 text-sm">See also: <a className="text-cyan-400 underline" href="/market-pricing">Market Pricing</a> for a broader list of benchmarks and links.</div>

				<section id="ai-email-responder" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI Email Responder</h2>
					<p className="text-slate-300">Autonomous replies, prioritization, and sentiment analysis integrated with your CRM.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $20–$50/user/mo</li>
						<li>References: {ext('https://workspace.google.com/pricing')}, {ext('https://www.microsoft.com/microsoft-365/business/compare-all-microsoft-365-business-products')}</li>
					</ul>
				</section>

				<section id="mobile-first-survey-tool" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Mobile-first Survey Tool</h2>
					<p className="text-slate-300">Adaptive surveys with conditional logic and real-time dashboards.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $30–$70/mo</li>
						<li>References: {ext('https://www.typeform.com/pricing/')}, {ext('https://www.surveymonkey.com/pricing/')}</li>
					</ul>
				</section>

				<section id="event-management-dashboard" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Event Management Dashboard</h2>
					<p className="text-slate-300">Ticketing, registration, scheduling, and post-event insights.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$100/mo (+ fees per ticket)</li>
						<li>References: {ext('https://www.eventbrite.com/organizer/pricing/')}, {ext('https://ti.to/pricing')}</li>
					</ul>
				</section>

				<section id="affiliate-tracking-hub" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Affiliate Tracking Hub</h2>
					<p className="text-slate-300">Cross-device attribution, fraud prevention, and automated payouts.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $40–$80/mo</li>
						<li>References: {ext('https://partnerstack.com/')}, {ext('https://impact.com/pricing/')}</li>
					</ul>
				</section>

				<section id="smb-website-analytics" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">SMB Website Analytics</h2>
					<p className="text-slate-300">Privacy-first dashboards with goals, funnels, and UTM insights.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $9–$50/mo</li>
						<li>References: {ext('https://plausible.io/pricing')}, {ext('https://usefathom.com/pricing')}</li>
					</ul>
				</section>

				<section id="it-helpdesk-suite" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">IT Helpdesk Suite</h2>
					<p className="text-slate-300">Ticketing, SLAs, KB, and self-service portal for IT teams and MSPs.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $30–$70/agent/mo</li>
						<li>References: {ext('https://www.zendesk.com/pricing/')}, {ext('https://www.freshworks.com/freshdesk/pricing/')}</li>
					</ul>
				</section>

				<section id="ecommerce-returns-center" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">E‑commerce Returns Center</h2>
					<p className="text-slate-300">Self-service returns, labels, and exchanges with analytics.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $30–$60/mo</li>
						<li>References: {ext('https://www.loopreturns.com/pricing/')}, {ext('https://www.returnsgo.com/pricing')}</li>
					</ul>
				</section>

				<section id="ai-seo-optimizer" className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">AI SEO Content Optimizer</h2>
					<p className="text-slate-300">AI guidance for keywords, structure, and readability with brief exports.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $30–$100/mo</li>
						<li>References: {ext('https://www.surferseo.com/pricing/')}, {ext('https://www.semrush.com/prices/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">API Contract Testing Suite</h2>
					<p className="text-slate-300">Automated OpenAPI/GraphQL contract tests with CI gates, schema diffs, and rollback guidance.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $20–$100/mo</li>
						<li>References: {ext('https://www.postman.com/pricing/')}, {ext('https://www.optic.dev/')}, {ext('https://stoplight.io/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Data Quality & ETL Monitor</h2>
					<p className="text-slate-300">Freshness SLAs, schema drift detection, and anomaly alerts for your warehouse and lakes.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $100–$500/mo</li>
						<li>References: {ext('https://www.montecarlodata.com/')}, {ext('https://www.bigeye.com/pricing')}, {ext('https://soda.io/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Cloud Cost Optimization Accelerator</h2>
					<p className="text-slate-300">Rightsizing, SP/RI planning, and anomaly alerts with actionable FinOps guardrails.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $99–$500/mo</li>
						<li>References: {ext('https://www.kubecost.com/pricing')}, {ext('https://www.cloudzero.com/pricing')}, {ext('https://www.finout.io/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Backup & DR Runbook Hub</h2>
					<p className="text-slate-300">Automated backup policies, restore rehearsal, and audit-ready evidence.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$200/mo</li>
						<li>References: {ext('https://velero.io/')}, {ext('https://aws.amazon.com/backup/')}, {ext('https://www.veeam.com/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">PII Data Vault & Tokenization</h2>
					<p className="text-slate-300">Vault PII and tokenize sensitive fields with KMS-backed encryption and audit logs.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $200–$800/mo</li>
						<li>References: {ext('https://www.skyflow.com/pricing')}, {ext('https://www.verygoodsecurity.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Edge Feature Flag Proxy</h2>
					<p className="text-slate-300">Serve flags from the edge with geo targeting, kill switches, and provider compatibility.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $30–$150/mo</li>
						<li>References: {ext('https://launchdarkly.com/pricing/')}, {ext('https://www.flagsmith.com/pricing')}, {ext('https://www.split.io/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Managed Kubernetes HA</h2>
					<p className="text-slate-300">HA control plane, backups, GitOps, observability, cost guardrails.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB/Scaleup budget: $1,000–$5,000/mo</li>
						<li>References: {ext('https://cloud.google.com/kubernetes-engine/pricing')}, {ext('https://aws.amazon.com/eks/pricing/')}, {ext('https://azure.microsoft.com/pricing/details/kubernetes-service/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">SRE On-Call Automation</h2>
					<p className="text-slate-300">SLI/SLOs, error budgets, and auto-remediation to cut MTTR.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $500–$3,000/mo</li>
						<li>References: {ext('https://sre.google/workbook/')}, {ext('https://www.pagerduty.com/pricing/')}, {ext('https://www.atlassian.com/incident-management')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Zero Trust Access (ZTNA)</h2>
					<p className="text-slate-300">Identity- and device-aware access with SSO and short-lived creds.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $300–$2,000/mo</li>
						<li>References: {ext('https://www.cloudflare.com/plans/zero-trust/')}, {ext('https://workos.com/pricing')}, {ext('https://www.okta.com/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">LLM Evaluation Orchestrator</h2>
					<p className="text-slate-300">Regression tests, red-teaming, and dashboards across providers.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$400/mo + API usage</li>
						<li>References: {ext('https://openrouter.ai/models')}, {ext('https://openai.com/api/pricing')}, {ext('https://www.anthropic.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Hybrid RAG Starter</h2>
					<p className="text-slate-300">Hybrid retrieval (BM25 + vectors), eval harness, caching, tracing.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $50–$1,000/mo</li>
						<li>References: {ext('https://www.pinecone.io/pricing/')}, {ext('https://weaviate.io/pricing')}, {ext('https://www.elastic.co/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">API Security Scanner</h2>
					<p className="text-slate-300">Shadow API discovery and OWASP API Top 10 detection with CI gates.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $100–$2,000/mo</li>
						<li>References: {ext('https://owasp.org/www-project-api-security/')}, {ext('https://www.cloudflare.com/plans/')}, {ext('https://www.fastly.com/pricing')}</li>
					</ul>
				</section>

				{/* Final contact */}
				<div className="mt-10 p-4 rounded-xl bg-black/30 border border-gray-800">
					<div className="text-slate-300">Questions or need a quote? Reach us at:</div>
					<div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-2">
						<a href="tel:+13024640950" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">+1 302 464 0950</a>
						<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">kleber@ziontechgroup.com</a>
						<span className="text-slate-400">364 E Main St STE 1008 Middletown DE 19709</span>
					</div>
				</div>
			</div>
		</div>
	);
}