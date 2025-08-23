import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

export default function CommunityIndex() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Community | Zion Tech Group</title>
				<meta name="description" content="Join the community and stay updated." />
				<link rel="canonical" href="https://ziontechgroup.com/community" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Community</h1>
				<p className="text-gray-300 max-w-2xl">Forums and discussions coming soon. For support, visit <a href="/support" className="text-cyan-400 underline">Support</a>.</p>
			</div>
		</UltraFuturisticBackground>
	);
}