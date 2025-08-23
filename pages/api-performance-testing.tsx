import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function APIPerformanceTestingPage() {
	const title = 'API Performance Testing — Zion Tech Group';
	const description = 'Load, soak, and stress testing with CI quality gates. Metrics, thresholds, and regression detection for APIs.';

	return (
		<>
			<SEO title={title} description={description} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">API Performance Testing</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Test API scalability and reliability with automated scenarios, SLOs, and environment-aware thresholds. Integrates with CI/CD.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Request Assessment</Link>
						<Link href="/market-pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Market Pricing</Link>
					</div>
				</div>
			</section>
		</>
	);
}