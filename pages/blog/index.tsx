import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

export default function BlogIndex() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Blog & News | Zion Tech Group</title>
				<meta name="description" content="Insights on AI, micro SaaS, cloud, observability, and emerging tech." />
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Blog & News</h1>
				<p className="text-gray-300 max-w-2xl">Product updates, engineering guides, and industry analysis. For case studies, visit <a href="/case-studies" className="text-cyan-400 underline">Case Studies</a>.</p>
			</div>
		</UltraFuturisticBackground>
	);
}

