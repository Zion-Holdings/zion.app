import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const rows = [
	{ category: 'AI Assistants & RAG', range: '$49 – $299 / mo', refs: [
		{ name: 'OpenAI pricing', url: 'https://openai.com/pricing' },
		{ name: 'Cohere pricing', url: 'https://cohere.com/pricing' }
	] },
	{ category: 'Website Analytics (SMB)', range: '$9 – $39 / mo', refs: [
		{ name: 'Plausible', url: 'https://plausible.io/#pricing' },
		{ name: 'Fathom', url: 'https://usefathom.com/pricing' }
	] },
	{ category: 'Status & Uptime', range: '$9 – $99 / mo', refs: [
		{ name: 'Better Stack', url: 'https://betterstack.com/status/pricing' },
		{ name: 'UptimeRobot', url: 'https://uptimerobot.com/pricing' }
	] },
	{ category: 'Email Sequencing', range: '$19 – $129 / mo', refs: [
		{ name: 'Mailerlite', url: 'https://www.mailerlite.com/pricing' },
		{ name: 'Lemlist', url: 'https://www.lemlist.com/pricing' }
	] },
	{ category: 'Affiliate Tracking', range: '$29 – $399 / mo', refs: [
		{ name: 'Refersion', url: 'https://www.refersion.com/pricing' },
		{ name: 'LeadDyno', url: 'https://www.leaddyno.com/pricing' }
	] },
	{ category: 'Returns Management', range: '$29 – $299 / mo', refs: [
		{ name: 'Loop Returns', url: 'https://www.loopreturns.com/pricing' }
	] },
	{ category: 'MSP Helpdesk', range: '$19 – $129 / agent / mo', refs: [
		{ name: 'Freshservice', url: 'https://freshservice.com/pricing' },
		{ name: 'Zendesk', url: 'https://www.zendesk.com/pricing/' }
	] },
];

export default function MarketPricingPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Market Pricing | Zion Tech Group</title>
				<meta name="description" content="Average market price ranges with links to public pricing pages across key SaaS and IT categories." />
				<link rel="canonical" href="https://ziontechgroup.com/market-pricing" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">Average Market Pricing</h1>
				<p className="text-gray-300 mb-10 max-w-3xl">Transparent reference ranges to help budgeting and ROI analysis. We tailor proposals to your exact scope.</p>
				<div className="overflow-x-auto">
					<table className="min-w-full text-left border border-gray-700/60">
						<thead className="bg-black/60">
							<tr>
								<th className="px-4 py-3 border-b border-gray-700/60">Category</th>
								<th className="px-4 py-3 border-b border-gray-700/60">Typical Range</th>
								<th className="px-4 py-3 border-b border-gray-700/60">Public References</th>
							</tr>
						</thead>
						<tbody>
							{rows.map((r) => (
								<tr key={r.category} className="odd:bg-black/30 even:bg-black/10">
									<td className="px-4 py-3">{r.category}</td>
									<td className="px-4 py-3">{r.range}</td>
									<td className="px-4 py-3 space-x-3">
										{r.refs.map((ref) => (
											<a key={ref.url} href={ref.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200 underline">{ref.name}</a>
										))}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}