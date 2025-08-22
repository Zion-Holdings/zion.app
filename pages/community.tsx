import React from 'react';
import Head from 'next/head';

export default function CommunityPage() {
	return (
		<>
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name="description" content="Join our community channels and stay updated." />
				<link rel="canonical" href="https://ziontechgroup.com/community" />
			</Head>
			<section className="min-h-screen pt-24 pb-20 bg-black text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
				<div className="relative z-10 max-w-5xl mx-auto px-4">
					<header className="text-center mb-10">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Community</h1>
						<p className="text-gray-300 mt-3">Connect, learn, and collaborate with peers.</p>
					</header>

					<div className="grid sm:grid-cols-2 gap-6">
						<a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-800/70 hover:border-cyan-500/40">LinkedIn</a>
						<a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-800/70 hover:border-cyan-500/40">Twitter/X</a>
						<a href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-800/70 hover:border-cyan-500/40">Instagram</a>
						<a href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-800/70 hover:border-cyan-500/40">YouTube</a>
						<a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-800/70 hover:border-cyan-500/40">GitHub</a>
					</div>

					<div className="mt-10 text-center text-gray-300">
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