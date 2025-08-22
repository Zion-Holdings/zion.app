import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function AIInternalLinkingAssistantPage() {
	return (
		<UltraFuturisticBackground variant="neural" intensity="high">
			<Head>
				<title>AI Internal Linking Assistant | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/ai-internal-linking-assistant" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">AI Internal Linking Assistant</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Automate internal links with context-aware anchors, avoid cannibalization, and export changes to your CMS.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}