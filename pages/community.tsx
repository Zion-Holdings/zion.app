import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function CommunityPage() {
	return (
		<UltraFuturisticBackground>
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name="description" content="Join our community: follow updates, engage with peers, and get support." />
				<link rel="canonical" href="https://ziontechgroup.com/community" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>
				<p className="text-gray-300">Follow us and get help. Call +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<li className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50"><a href="/social/twitter">Twitter/X</a></li>
					<li className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50"><a href="/social/linkedin">LinkedIn</a></li>
					<li className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50"><a href="/support">Support</a></li>
				</ul>
			</div>
		</UltraFuturisticBackground>
	);
}