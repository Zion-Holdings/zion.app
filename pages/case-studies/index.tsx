import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

export default function CaseStudiesIndex() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<meta name="description" content="Real results from AI, micro SaaS, and IT solutions." />
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Case Studies</h1>
				<p className="text-gray-300 max-w-2xl">Explore how we deliver measurable outcomes. Contact us for a tailored plan.</p>
			</div>
		</UltraFuturisticBackground>
	);
}