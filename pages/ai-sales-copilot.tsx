import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function AISalesCopilot() {
	return (
		<>
			<SEO title="AI Sales Copilot" description="Prospecting, lead scoring, outreach drafting, and CRM updates—automated by AI with human-in-the-loop." canonical="https://ziontechgroup.com/ai-sales-copilot/" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Sales Copilot</h1>
						<p className="mt-6 text-lg text-gray-300">Automate repetitive sales tasks: research, personalization, outreach sequences, and pipeline hygiene. Integrate with Salesforce/HubSpot.</p>
						<ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
							<li className="p-4 bg-white/5 rounded-lg">Account research and contact enrichment</li>
							<li className="p-4 bg-white/5 rounded-lg">Personalized outreach drafts and sequences</li>
							<li className="p-4 bg-white/5 rounded-lg">Lead scoring and next-best action</li>
							<li className="p-4 bg-white/5 rounded-lg">CRM data sync and meeting notes</li>
						</ul>

						<div className="mt-10">
							<h2 className="text-2xl font-bold">Pricing (Market Range)</h2>
							<ul className="mt-3 space-y-2 text-gray-300">
								<li>Starter: $49–$149/user/mo — essentials, limited sends</li>
								<li>Growth: $150–$399/user/mo — multi-channel, analytics, CRM</li>
								<li>Enterprise: $400+/user/mo — governance, approvals, sandboxes</li>
							</ul>
							<p className="mt-3 text-xs text-gray-500">Benchmarks: <a className="text-cyan-300" href="https://www.salesforce.com/editions-pricing/sales-cloud/" target="_blank" rel="noreferrer">Salesforce Sales Cloud</a>, <a className="text-cyan-300" href="https://www.hubspot.com/pricing/sales" target="_blank" rel="noreferrer">HubSpot Sales</a>, <a className="text-cyan-300" href="https://www.gong.io/pricing/" target="_blank" rel="noreferrer">Gong</a></p>
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