import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function ProgrammaticSEOPageGeneratorPage() {
	return (
		<UltraFuturisticBackground variant="cyberpunk" intensity="high">
			<Head>
				<title>Programmatic SEO Page Generator | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/programmatic-seo-page-generator" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">Programmatic SEO Page Generator</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Generate programmatic pages from templates and data sources with deduping, canonicalization, and safety guardrails.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}