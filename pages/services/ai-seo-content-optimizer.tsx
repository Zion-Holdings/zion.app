import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function AISEOContentOptimizerPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>AI SEO Content Optimizer | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/ai-seo-content-optimizer" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">AI SEO Content Optimizer</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Generate SEO briefs, outlines, and entity-optimized content. Analyze top SERPs, extract entities, build internal links, and track on-page scores.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}