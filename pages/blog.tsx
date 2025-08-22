import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
	return (
		<>
			<Head>
				<title>Blog & News | Zion Tech Group</title>
				<meta name="description" content="Insights on AI, quantum, micro SaaS, DevOps, and enterprise IT." />
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<section className="min-h-screen pt-24 pb-20 bg-black text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
				<div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
				<div className="relative z-10 max-w-6xl mx-auto px-4">
					<header className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog & News</h1>
						<p className="text-gray-300 mt-4 text-lg">Thought leadership on AI, quantum, micro SAAS, and enterprise IT.</p>
					</header>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[1,2,3,4,5,6].map((i) => (
							<article key={i} className="p-6 rounded-2xl bg-black/50 border border-gray-800/70 hover:border-cyan-500/40 transition-colors">
								<div className="text-sm text-gray-400 mb-2">Coming soon</div>
								<h2 className="text-xl font-semibold mb-2">New article {i}</h2>
								<p className="text-gray-300">We are preparing in-depth content. Meanwhile, contact us for a consultation.</p>
							</article>
						))}
					</div>

					<div className="mt-12 text-center text-gray-300">
						<div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-black/40 border border-gray-800/60 rounded-2xl px-6 py-4">
							<a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
							<a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a>
							<span className="text-pink-400">364 E Main St STE 1008 Middletown DE 19709</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}