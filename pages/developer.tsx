import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function Developer() {
	return (
		<>
			<SEO title="Developer Hub | Zion Tech Group" description="SDKs, APIs, webhooks, and developer resources to build on Zion Tech Group platforms." canonical="https://ziontechgroup.com/developer/" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Developer Hub</h1>
						<p className="mt-6 text-lg text-gray-300">Build production apps with our APIs, webhooks, and SDKs. Explore guides, examples, and best practices.</p>
						<div className="mt-8 flex flex-wrap gap-3 justify-center">
							<Link href="/api-documentation" className="px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200">API Docs</Link>
							<Link href="/docs" className="px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10">Guides</Link>
							<Link href="/community" className="px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10">Community</Link>
						</div>
					</div>

					<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
							<h3 className="text-xl font-semibold">APIs & SDKs</h3>
							<ul className="mt-3 space-y-2 text-gray-300 text-sm">
								<li><a className="text-cyan-300 hover:text-cyan-200" href="https://platform.openai.com/docs" target="_blank" rel="noreferrer">OpenAI Platform Docs</a> for LLM integration</li>
								<li><a className="text-cyan-300 hover:text-cyan-200" href="https://docs.aws.amazon.com/" target="_blank" rel="noreferrer">AWS SDKs</a> for cloud & AI infrastructure</li>
								<li><a className="text-cyan-300 hover:text-cyan-200" href="https://cloud.google.com/docs" target="_blank" rel="noreferrer">Google Cloud APIs</a> for data & ML</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
							<h3 className="text-xl font-semibold">Reference Architectures</h3>
							<ul className="mt-3 space-y-2 text-gray-300 text-sm">
								<li>Agentic RAG with embeddings, vector DB, and tool use</li>
								<li>Serverless event-driven pipelines with retries & DLQs</li>
								<li>Multi-tenant micro SAAS with usage metering & billing</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10">
							<h3 className="text-xl font-semibold">Pricing (Typical)</h3>
							<ul className="mt-3 space-y-2 text-gray-300 text-sm">
								<li>Starter: $0–$199/mo — API access, sandbox, community support</li>
								<li>Growth: $499–$1,999/mo — SLA, higher limits, webhooks</li>
								<li>Enterprise: $4,999+/mo — SSO/SAML, SOC2, private cluster</li>
							</ul>
							<p className="mt-3 text-xs text-gray-500">Benchmarks: <a className="text-cyan-300" href="https://stripe.com/pricing" target="_blank" rel="noreferrer">Stripe</a>, <a className="text-cyan-300" href="https://vercel.com/pricing" target="_blank" rel="noreferrer">Vercel</a>, <a className="text-cyan-300" href="https://openai.com/api/pricing" target="_blank" rel="noreferrer">OpenAI</a></p>
						</div>
					</div>

					<div className="mt-14">
						<h2 className="text-2xl font-bold">Why build on Zion</h2>
						<ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
							<li className="p-4 bg-white/5 rounded-lg">Production-grade reference code and blueprints</li>
							<li className="p-4 bg-white/5 rounded-lg">Telemetry-first SDKs and tracing-enabled clients</li>
							<li className="p-4 bg-white/5 rounded-lg">Security defaults: key management, audit logs, PII controls</li>
							<li className="p-4 bg-white/5 rounded-lg">Templates for micro SAAS billing, trials, and entitlements</li>
						</ul>
						<div className="mt-8 flex gap-3">
							<Link href="/contact" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200">Get Started</Link>
							<Link href="/pricing" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10">View Pricing</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}