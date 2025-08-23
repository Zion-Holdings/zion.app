import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AIProductFeedbackInsights() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Product Feedback Insights | Zion Tech Group</title>
				<meta name="description" content="Centralize NPS, reviews, support tickets and social to extract themes, roadmap impact, and churn drivers." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-product-feedback-insights" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Product Feedback Insights</h1>
					<p className="mt-4 text-lg text-slate-300">Multi-source feedback ingestion with topic modeling, sentiment, and revenue attribution.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Sources</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>NPS/CSAT, Intercom/Zendesk tickets</li>
								<li>G2/Capterra/App Store reviews</li>
								<li>Social media and call transcripts</li>
								<li>Feature requests and churn reasons</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>SMB: $100–$600/mo</li>
								<li>Mid/Ent: $600–$3,000/mo</li>
								<li>References: <a className="text-cyan-400 underline" href="https://www.g2.com/products/g2/pricing" target="_blank" rel="noreferrer">G2 pricing</a>, <a className="text-cyan-400 underline" href="https://www.capterra.com/pricing" target="_blank" rel="noreferrer">Capterra</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Outcomes</h3>
							<p className="text-slate-300">Quarterly insights decks, executive dashboard, and prioritized roadmap impact.</p>
						</div>
					</div>
					<div className="mt-10 flex flex-wrap gap-3">
						<a href="/pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">View Pricing</a>
						<a href="/market-pricing" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Market Pricing</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}