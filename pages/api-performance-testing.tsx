import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink } from 'lucide-react';

export default function ApiPerformanceTestingPage() {
	const title = 'API Performance Testing — Zion Tech Group';
	const description = 'Load, latency and regression testing-as-a-service with CI gates, SLO-aware reports, and thresholds.';
	const features = [
		'k6/Gatling-compatible test runner',
		'SLO-aware latency reports',
		'Regression baselines per endpoint',
		'CI checks and PR annotations',
		'Synthetic traffic for staging'
	];

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

			<main id="main" className="container mx-auto px-4 pb-24">
				<section className="max-w-5xl mx-auto">
					<div className="mt-4 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">Start from $129/mo</Link>
						<a href="https://grafana.com/docs/k6/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> k6 Docs
						</a>
						<a href="https://gatling.io/open-source/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Gatling OSS
						</a>
					</div>
				</section>
			</main>
		</>
	);
}