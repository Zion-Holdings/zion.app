import React from 'react';
import SEO from '../components/SEO';

export default function MLOpsStarterPage() {
	return (
		<>
			<SEO title="MLOps Starter" description="Templates and pipelines to ship ML faster with best practices." canonical="/mlops-starter" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-3xl">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">MLOps Starter</h1>
					<p className="mt-4 text-gray-300">Opinionated pipelines, evaluations, and observability to productionize ML quickly.</p>
					<div className="mt-8 flex gap-3">
						<a href="/services" className="px-4 py-2 rounded-lg bg-white text-black font-medium">Explore Services</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-white/10 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</section>
		</>
	);
}