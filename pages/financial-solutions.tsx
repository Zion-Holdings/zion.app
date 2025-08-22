import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function FinancialSolutions() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Financial Services Solutions | Zion Tech Group</title>
				<meta name="description" content="AI financial planning, risk analytics, and fraud detection solutions." />
				<link rel="canonical" href="https://ziontechgroup.com/financial-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Financial Services</h1>
				<p className="text-gray-300 max-w-3xl">Deliver wealth intelligence, risk management, and compliance automation. Contact +1 302 464 0950 • kleber@ziontechgroup.com.</p>
			</div>
		</UltraFuturisticBackground>
	);
}