import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function HealthcareSolutions() {
	return (
		<UltraFuturisticBackground variant="holographic" intensity="high">
			<Head>
				<title>Healthcare Solutions | Zion Tech Group</title>
				<meta name="description" content="AI healthcare analytics, patient intelligence, and clinical decision support." />
				<link rel="canonical" href="https://ziontechgroup.com/healthcare-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Healthcare Solutions</h1>
				<p className="text-gray-300 max-w-3xl">Transform care delivery with AI: patient outcome prediction, population health analytics, and clinical decision support. Contact +1 302 464 0950 • kleber@ziontechgroup.com.</p>
			</div>
		</UltraFuturisticBackground>
	);
}