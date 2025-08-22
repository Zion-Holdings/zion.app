import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function AICustomerService() {
	return (
		<>
			<SEO title="AI Customer Service | Zion Tech Group" description="Omnichannel AI agents for support: email, chat, and voice with human handoff and analytics." canonical="https://ziontechgroup.com/ai-customer-service/" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Customer Service</h1>
						<p className="mt-6 text-lg text-gray-300">Deploy agentic support across chat, email, and phone. Includes knowledge base grounding, retrieval, secure PII handling, and CRM integration.</p>
						<ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
							<li className="p-4 bg-white/5 rounded-lg">Omnichannel support: chat, email, voice</li>
							<li className="p-4 bg-white/5 rounded-lg">Secure redaction, audit logs, fallback guardrails</li>
							<li className="p-4 bg-white/5 rounded-lg">Self-serve workflows and human handoff</li>
							<li className="p-4 bg-white/5 rounded-lg">CRM/Helpdesk integration: Zendesk, Intercom, HubSpot</li>
						</ul>

						<div className="mt-10">
							<h2 className="text-2xl font-bold">Pricing (Market Range)</h2>
							<ul className="mt-3 space-y-2 text-gray-300">
								<li>Starter: $499–$1,999/mo — 1 channel, 10k messages, analytics</li>
								<li>Growth: $2,000–$6,000/mo — 3 channels, 100k messages, SSO</li>
								<li>Enterprise: $10,000+/mo — custom SLAs, data residency, private models</li>
							</ul>
							<p className="mt-3 text-xs text-gray-500">References: <a className="text-cyan-300" href="https://www.intercom.com/pricing" target="_blank" rel="noreferrer">Intercom</a>, <a className="text-cyan-300" href="https://www.zendesk.com/pricing/" target="_blank" rel="noreferrer">Zendesk</a>, <a className="text-cyan-300" href="https://www.hubspot.com/pricing/service" target="_blank" rel="noreferrer">HubSpot Service</a></p>
						</div>

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

