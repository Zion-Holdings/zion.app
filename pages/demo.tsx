import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function DemoPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Book a Demo | Zion Tech Group</title>
				<meta name="description" content="Schedule a live demo with our team." />
				<link rel="canonical" href="https://ziontechgroup.com/demo" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Book a Demo</h1>
				<p className="text-gray-300 max-w-2xl">Contact <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 underline">kleber@ziontechgroup.com</a> to schedule a demo.</p>
			</div>
		</UltraFuturisticBackground>
	);
}