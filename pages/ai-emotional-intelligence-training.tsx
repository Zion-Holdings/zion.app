import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AIEmotionalIntelligenceTrainingPage() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Emotional Intelligence Training | Zion Tech Group</title>
				<meta name="description" content="Role-play, coaching, and feedback loops to build emotional intelligence across sales, support, and leadership." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-emotional-intelligence-training" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-10">
					<header className="space-y-3">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Emotional Intelligence Training</h1>
						<p className="text-slate-300 max-w-3xl">Adaptive scenarios, real-time feedback, and longitudinal scoring to improve empathy, listening, and conflict resolution.</p>
					</header>

					<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-3">Modules</h2>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Sales objection handling</li>
								<li>Customer escalation de-escalation</li>
								<li>Leadership coaching</li>
								<li>Inclusive communication</li>
							</ul>
						</div>
						<div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-3">Outcomes</h2>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Higher CSAT and NPS</li>
								<li>Improved win rates</li>
								<li>Faster conflict resolution</li>
								<li>Better retention</li>
							</ul>
						</div>
						<div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6">
							<h2 className="text-2xl font-semibold mb-3">Pricing</h2>
							<p className="text-slate-300">Team $800/month; Department $2,500–$6,000/month; Enterprise custom. See <a className="text-cyan-400 underline" href="/market-pricing">industry benchmarks</a>.</p>
						</div>
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