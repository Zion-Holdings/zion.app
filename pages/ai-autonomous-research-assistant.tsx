import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AIAutonomousResearchAssistantPage() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Autonomous Research Assistant | Zion Tech Group</title>
				<meta name="description" content="Continuous research agent for literature reviews, competitor tracking, and insights generation with citations and memos." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-research-assistant" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-10">
					<header className="space-y-3">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Autonomous Research Assistant</h1>
						<p className="text-slate-300 max-w-3xl">Automate literature reviews, patent scans, competitive analysis, and weekly memos. Export citations and source packs.</p>
					</header>

					<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-3">Features</h2>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Scheduled topic trackers and alerts</li>
								<li>Competitor web and social monitoring</li>
								<li>PDF/HTML ingestion, citation extraction</li>
								<li>Weekly digest and executive summary</li>
								<li>Notion/Google Docs export</li>
							</ul>
						</div>
						<div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-3">Pricing</h2>
							<p className="text-slate-300">Starter $600/month; Growth $1,500–$4,000/month; Enterprise custom. See <a className="text-cyan-400 underline" href="/market-pricing">market references</a>.</p>
						</div>
					</section>

					<section className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
						<h3 className="text-xl font-semibold mb-2">References</h3>
						<ul className="list-disc list-inside text-slate-300 space-y-1">
							<li>arXiv: <a className="text-cyan-400 underline" href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">arxiv.org</a></li>
							<li>Semantic Scholar: <a className="text-cyan-400 underline" href="https://www.semanticscholar.org/" target="_blank" rel="noopener noreferrer">semanticscholar.org</a></li>
							<li>Google Scholar: <a className="text-cyan-400 underline" href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">scholar.google.com</a></li>
						</ul>
					</section>

					<section className="flex flex-wrap gap-3 pt-2">
						<a href="/contact" className="px-5 py-3 rounded-xl bg-cyan-600/20 border border-cyan-500/40 hover:bg-cyan-600/30 transition">Get Quote</a>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 transition">Email Us</a>
						<a href="tel:+13024640950" className="px-5 py-3 rounded-xl bg-pink-600/20 border border-pink-500/40 hover:bg-pink-600/30 transition">+1 302 464 0950</a>
					</section>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}