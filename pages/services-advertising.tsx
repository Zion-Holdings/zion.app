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

				{/* Enriched sections */}
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Churn Prediction for Stripe</h2>
					<p className="text-slate-300">Predict logo and revenue churn with LTV scoring, cohort charts, and playbooks.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $49–$299/mo</li>
						<li>References: {ext('https://www.profitwell.com/pricing')}, {ext('https://www.paddle.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Terraform Drift Detector</h2>
					<p className="text-slate-300">Detect and auto-remediate infra drift with PRs and policy checks.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $59–$399/mo</li>
						<li>References: {ext('https://www.spacelift.io/pricing')}, {ext('https://www.scalr.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Cloud Cost Anomaly Monitor</h2>
					<p className="text-slate-300">Unified anomalies across AWS/GCP/Azure with budgets, alerts, and auto-tagging.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $0–$299/mo</li>
						<li>References: {ext('https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/')}, {ext('https://cloud.google.com/billing/docs/how-to/alerts')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">WAF Rules & Bot Defense</h2>
					<p className="text-slate-300">Managed rulesets, rate limits, and bot scoring for Layer 7 protection.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $20–$200/mo</li>
						<li>References: {ext('https://www.cloudflare.com/plans/')}, {ext('https://aws.amazon.com/waf/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">SEO Technical Auditor</h2>
					<p className="text-slate-300">Crawl budgets, Core Web Vitals, sitemaps, and schema with fix plans.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $29–$199/mo</li>
						<li>References: {ext('https://ahrefs.com/pricing')}, {ext('https://www.semrush.com/prices/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Airflow/DAG Health & SLAs</h2>
					<p className="text-slate-300">Detect late DAGs, retries, and data freshness breaches with root-cause hints.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $49–$299/mo</li>
						<li>References: {ext('https://astronomer.io/pricing/')}, {ext('https://www.prefect.io/pricing/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">LLM Prompt Library & Governance</h2>
					<p className="text-slate-300">Centralize prompts with versioning, A/B tests, evals, and approvals.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $29–$199/mo</li>
						<li>References: {ext('https://openai.com/policies/usage-policies')}, {ext('https://www.promptfoo.dev/')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Email Warmup & Reputation</h2>
					<p className="text-slate-300">Automated warmup, blocklist checks, and domain health dashboards.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $19–$99/mo</li>
						<li>References: {ext('https://postmaster.google.com/')}, {ext('https://mailchimp.com/pricing/')}, {ext('https://postmarkapp.com/pricing')}</li>
					</ul>
				</section>

				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-white">Security Posture Management</h2>
					<p className="text-slate-300">CIS/NIST controls, misconfig scans, and auto-fix playbooks across clouds.</p>
					<ul className="list-disc list-inside text-slate-300 space-y-1">
						<li>Typical SMB budget: $99–$499/mo</li>
						<li>References: {ext('https://www.wiz.io/pricing')}, {ext('https://orca.security/pricing')}</li>
					</ul>
				</section>

				<div className="pt-4 text-slate-400 text-sm">See also: <a className="text-cyan-400 underline" href="/market-pricing">Market Pricing</a> for a broader list of benchmarks and links.</div>
			</div>
		</div>
	);
}