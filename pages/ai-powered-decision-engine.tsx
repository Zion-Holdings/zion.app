import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink, Settings, GitBranch, Shield } from 'lucide-react';

export default function AIPoweredDecisionEnginePage() {
	const title = 'AI-Powered Decision Engine — Zion Tech Group';
	const description = 'Operational decisioning platform combining rules, policies, and ML. Ship auditable, explainable decisions with low latency and governance.';
	const features = [
		'Hybrid rules + ML strategies with A/B and multi-armed bandits',
		'OPA/Rego policy checks and audit trails',
		'Feature store integration and real-time features',
		'Canary, shadow, and fail-open behaviors',
		'Latency under 50ms with edge deployment options',
		'Explainability reports and decision logs',
		'Integrations: Kafka, Kinesis, Postgres, Redis',
		'SDKs for Node, Python, Go'
	];

	const pricingNotes = [
		'Starter: $299–$899/mo (up to 10M decisions/mo)',
		'Growth: $900–$3,999/mo (50M decisions/mo, HA)',
		'Enterprise: Custom (BYOK, on-prem, compliance)'
	];

	const references = [
		{ name: 'DecisionRules pricing', url: 'https://decisionrules.io/pricing' },
		{ name: 'Camunda pricing', url: 'https://camunda.com/pricing/' },
		{ name: 'Open Policy Agent', url: 'https://www.openpolicyagent.org/' }
	];

	return (
		<>
			<SEO 
          title={title}
          description={description}
          keywords={["AI decision engine", "decision technology", "AI platform", "Zion Tech Group"]}
        />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">AI-Powered Decision Engine</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">{description}</p>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
						<span className="inline-flex items-center gap-1"><Settings className="w-4 h-4 text-emerald-400" /> Rules + ML</span>
						<span className="inline-flex items-center gap-1"><GitBranch className="w-4 h-4 text-cyan-400" /> Canary/shadow</span>
						<span className="inline-flex items-center gap-1"><Shield className="w-4 h-4 text-purple-400" /> Governance</span>
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
						<p className="mt-3 text-sm text-gray-400">Usage-based tiers by monthly decisions and latency SLAs.</p>
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