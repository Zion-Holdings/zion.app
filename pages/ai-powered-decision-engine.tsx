import React from 'react';
import Link from 'next/link';

export default function AIPoweredDecisionEngine() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">AI-Powered Decision Engine</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Operationalize decisions with explainable models, policy rules, and real-time data. Deploy across risk, pricing, approvals, and operations.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Hybrid Models', desc: 'Rules + ML + LLM reasoning with guardrails and fallback.' },
							{ title: 'Explainability', desc: 'SHAP/feature attribution, decision reasons, and audit trails.' },
							{ title: 'Real-time', desc: 'Low-latency serving with canary + A/B testing.' },
							{ title: 'Governance', desc: 'Versioned policies, approvals, and access controls.' },
							{ title: 'Integrations', desc: 'Kafka, Pub/Sub, webhooks, data warehouse sync.' },
							{ title: 'Monitoring', desc: 'Drift, bias, and performance monitoring with alerts.' }
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
							<div className="rounded-2xl border border-indigo-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 100 decisions/sec, basic monitoring.</p>
								<p className="mt-4 text-3xl font-bold">$490<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 2k decisions/sec, A/B + drift/bias.</p>
								<p className="mt-4 text-3xl font-bold">$1,490<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Global scale, custom SLAs, compliance.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.pega.com/" target="_blank" rel="noreferrer">Pega</a>, <a className="underline hover:text-cyan-300" href="https://www.datarobot.com/platform/ai-accelerator" target="_blank" rel="noreferrer">DataRobot</a>, <a className="underline hover:text-cyan-300" href="https://h2o.ai/" target="_blank" rel="noreferrer">H2O.ai</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-indigo-400 text-black font-semibold">Operationalize Decisions</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}