import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function RAGEvaluationLabPage() {
	return (
		<>
			<SEO title="RAG Evaluation Lab" description="Measure RAG quality, hallucination rate, latency and cost with configurable datasets and scoring." />
			<div className="container mx-auto px-4 py-16">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">RAG Evaluation Lab</h1>
					<p className="mt-4 text-lg text-gray-300">Evaluate retrieval-augmented generation with robust metrics and dashboards. Optimize prompts, retrieval top-k, and cost.</p>
					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold">Start Evaluating</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
					<p className="mt-8 text-gray-300 max-w-3xl">
						Use golden datasets and human-in-the-loop reviews to continuously improve RAG systems. Track regressions and establish CI gates.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Contact Sales</Link>
						<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Explore Services</Link>
					</div>
				</section>
			</div>
		</>
	);
}