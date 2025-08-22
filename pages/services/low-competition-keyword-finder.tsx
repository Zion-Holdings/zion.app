import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function LowCompetitionKeywordFinderPage() {
	return (
		<UltraFuturisticBackground variant="holographic" intensity="high">
			<Head>
				<title>Low-Competition Keyword Finder | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/low-competition-keyword-finder" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Low-Competition Keyword Finder</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Discover long-tail keywords with difficulty and intent scoring. Cluster questions and export to briefs.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}