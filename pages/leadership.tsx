import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function Leadership() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Leadership | Zion Tech Group</title>
				<meta name="description" content="Meet the leadership team driving Zion Tech Group's vision and execution." />
				<link rel="canonical" href="https://ziontechgroup.com/leadership" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Leadership</h1>
				<p className="text-gray-300 max-w-3xl">Profiles are coming soon. For press or partnership inquiries, contact +1 302 464 0950 • kleber@ziontechgroup.com.</p>
			</div>
		</UltraFuturisticBackground>
	);
}