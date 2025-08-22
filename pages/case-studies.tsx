import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
	return (
		<>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<meta name="description" content="Outcomes delivered across AI, quantum, and enterprise IT." />
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
			</Head>
			<section className="min-h-screen pt-24 pb-20 bg-black text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
				<div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(56,189,248,0.15), transparent 45%), radial-gradient(circle at 70% 80%, rgba(168,85,247,0.12), transparent 45%)' }} />
				<div className="relative z-10 max-w-6xl mx-auto px-4">
					<header className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Case Studies</h1>
						<p className="text-gray-300 mt-4 text-lg">Measured impact with micro SAAS, AI, and IT modernization.</p>
					</header>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Customer Support Automation', result: '38% ↓ resolution time', sector: 'SaaS' },
							{ title: 'Quantum-Secure Infra', result: 'NIST-aligned rollouts in 6 weeks', sector: 'Financial Services' },
							{ title: 'Cost Optimization', result: '27% ↓ cloud spend', sector: 'E-commerce' },
							{ title: 'Predictive Maintenance', result: '21% ↓ downtime', sector: 'Manufacturing' },
							{ title: 'SEO Automation', result: '3.2x ↑ organic traffic', sector: 'Media' },
							{ title: 'SOC2 Automation', result: '50% faster evidence', sector: 'Fintech' },
						].map((c) => (
							<div key={c.title} className="p-6 rounded-2xl bg-black/50 border border-gray-800/70">
								<div className="text-sm text-gray-400">{c.sector}</div>
								<h2 className="text-xl font-semibold mt-1 mb-2">{c.title}</h2>
								<p className="text-gray-300">Outcome: {c.result}</p>
							</div>
						))}
					</div>

					<div className="mt-12 text-center">
						<a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Start your project</a>
					</div>
				</div>
			</section>
		</>
	);
}