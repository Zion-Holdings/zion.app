import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function SocialProofAggregatorPage() {
	return (
		<UltraFuturisticBackground variant="cyberpunk" intensity="high">
			<Head>
				<title>Social Proof Aggregator | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/social-proof-aggregator" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-rose-400 to-red-400 bg-clip-text text-transparent mb-4">Social Proof Aggregator</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Aggregate reviews and UGC across platforms with moderation and schema markup. Publish widgets and automate review requests.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-amber-500 to-rose-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}