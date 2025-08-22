import React from 'react';
import Head from 'next/head';

export default function AIContentMarketingAutomationPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-gray-200">
			<Head>
				<title>AI Content Marketing Automation | Zion Tech Group</title>
				<meta name="description" content="Plan, generate, and distribute content with AI—brand voice, SEO, and analytics built-in." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-content-marketing-automation" />
			</Head>
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Content Marketing Automation</h1>
				<p className="mt-4 text-lg text-slate-300">Plan, generate, and publish content across channels with AI-driven briefs, brand voice controls, SEO optimization, and performance analytics.</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
						<h2 className="text-xl font-semibold text-white">Features</h2>
						<ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
							<li>Briefs and outlines with brand voice</li>
							<li>SEO optimization and internal links</li>
							<li>Multi-channel publish and calendar</li>
							<li>Analytics and content refresh cues</li>
						</ul>
					</div>
					<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
						<h2 className="text-xl font-semibold text-white">Pricing</h2>
						<p className="mt-3 text-slate-300">Typical SMB budget: $49–$299/month</p>
						<p className="text-slate-400 text-sm">References: <a className="text-cyan-400 underline" href="https://jasper.ai/pricing" target="_blank" rel="noopener noreferrer">jasper.ai/pricing</a>, <a className="text-cyan-400 underline" href="https://copy.ai/pricing" target="_blank" rel="noopener noreferrer">copy.ai/pricing</a></p>
					</div>
					<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
						<h2 className="text-xl font-semibold text-white">Get Started</h2>
						<p className="mt-3 text-slate-300">Call <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a> or email <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>. Address: 364 E Main St STE 1008 Middletown DE 19709.</p>
						<div className="mt-4 flex gap-3">
							<a href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</a>
							<a href="/pricing" className="px-4 py-2 rounded-lg border border-gray-700 text-slate-200">View Pricing</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}