import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function QuotePage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Request a Quote | Zion Tech Group</title>
				<meta name="description" content="Request a custom quote for services." />
				<link rel="canonical" href="https://ziontechgroup.com/quote" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Request a Quote</h1>
				<p className="text-gray-300 max-w-2xl">Tell us what you need at <a href="/contact" className="text-cyan-400 underline">Contact</a> and we’ll respond with pricing and options.</p>
			</div>
		</UltraFuturisticBackground>
	);
}