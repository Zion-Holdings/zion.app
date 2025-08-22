import React from 'react';
import Head from 'next/head';

export default function CaseStudies() {
	return (
		<>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<meta name="description" content="Selected outcomes across AI, cloud, and security initiatives." />
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
			</Head>
			<div className="min-h-screen pt-28 px-4">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-bold mb-4">Case Studies</h1>
					<p className="text-gray-300 mb-8">Curated wins in AI automation, FinOps, observability, and enterprise security.</p>
					<ul className="space-y-3 list-disc list-inside">
						<li className="text-gray-200">Cut LLM cost 42% with gateway + prompt caching</li>
						<li className="text-gray-200">Improved INP 38% via RUM diagnostics & fixes</li>
						<li className="text-gray-200">Reduced cloud spend 27% in 30 days with FinOps guardrails</li>
						<li className="text-gray-200">Achieved SOC 2 readiness in 8 weeks with evidence automation</li>
					</ul>
					<div className="mt-10">
						<a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 text-white">Discuss your project</a>
					</div>
				</div>
			</div>
		</>
	);
}