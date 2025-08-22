import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6 text-slate-200">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>
				<p>Read customer success highlights and measurable results. Full library is being published.</p>
				<ul className="list-disc list-inside space-y-2">
					<li>Reduced cloud spend 28% in 60 days using FinOps accelerator</li>
					<li>Cut support response times 65% with AI Email Responder</li>
					<li>Improved conversion 12% using personalization and analytics</li>
				</ul>
				<div className="flex gap-3 pt-2">
					<a href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Get a similar outcome</a>
					<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Email kleber@ziontechgroup.com</a>
				</div>
			</div>
		</div>
	);
}