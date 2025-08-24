import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AgenticSalesOutreach() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>Agentic Sales Outreach | Zion Tech Group</title>
				<meta name="description" content="Autonomous multi-channel outreach with warm-up, personalization, sequencing, and CRM sync." />
				<link rel="canonical" href="https://ziontechgroup.com/agentic-sales-outreach" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Agentic Sales Outreach</h1>
					<p className="mt-4 text-lg text-slate-300">AI-driven pipeline: prospect discovery, message generation, inbox management, and meeting booking.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Capabilities</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Prospecting and enrichment</li>
								<li>Personalized multi-step sequences (email/LinkedIn)</li>
								<li>Reply detection and hand-off</li>
								<li>CRM sync (HubSpot/Salesforce)</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>$50–$300/user/mo</li>
								<li>References: <a className="text-cyan-400 underline" href="https://mailshake.com/pricing" target="_blank" rel="noreferrer">mailshake.com/pricing</a>, <a className="text-cyan-400 underline" href="https://reply.io/pricing/" target="_blank" rel="noreferrer">reply.io/pricing</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Outcomes</h3>
							<p className="text-slate-300">More qualified meetings, consistent pipeline, and transparent attribution.</p>
						</div>
					</div>
					<div className="mt-10 flex flex-wrap gap-3">
						<a href="/pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">View Pricing</a>
						<a href="/services-advertising" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Features & Links</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}