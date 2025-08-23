import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function RAGEvaluationLabPage() {
	const title = 'RAG Evaluation Lab — Zion Tech Group';
	const description = 'Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates.';

	return (
		<>
			<SEO title={title} description={description} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">RAG Evaluation Lab</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Production-ready evaluations for retrieval-augmented generation. Track accuracy, hallucination rate, latency, and cost. Integrate with CI to prevent regressions.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Contact Sales</Link>
						<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Explore Services</Link>
					</div>
				</div>
			</section>
		</>
	);
}