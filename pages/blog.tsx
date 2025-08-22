import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Blog & Insights | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
				<meta name="description" content="Insights on AI, micro SaaS, IT, and quantum innovation." />
			</Head>
			<div className="max-w-4xl mx-auto space-y-6 text-slate-200">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog & Insights</h1>
				<p>Our editorial content is coming soon. Meanwhile, explore <a className="text-cyan-400 underline" href="/resources">resources</a> or <a className="text-cyan-400 underline" href="/services">services</a>.</p>
				<div className="flex gap-3 pt-2">
					<a href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</a>
					<a href="tel:+13024640950" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Call +1 302 464 0950</a>
				</div>
			</div>
		</div>
	);
}