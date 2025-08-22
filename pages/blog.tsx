import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function BlogPage() {
	return (
		<UltraFuturisticBackground variant="neural" intensity="medium">
			<Head>
				<title>Blog & News | Zion Tech Group</title>
				<meta name="description" content="Insights on AI, quantum, micro SaaS, and enterprise IT." />
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Blog & News</h1>
				<p className="text-gray-300 max-w-3xl">Thought leadership and practical guides. New articles publish weekly.</p>
				<div className="mt-8 text-sm text-gray-400">Want to contribute? Email <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</div>
			</div>
		</UltraFuturisticBackground>
	);
}