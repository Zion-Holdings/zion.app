import React from 'react';
import Head from 'next/head';

export default function BiotechAIResearchPlatformPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
			<Head>
				<title>Biotech AI Research Platform | Zion Tech Group</title>
				<meta name="description" content="Accelerate drug discovery and biotech research with AI modeling and lab automation." />
				<link rel="canonical" href="https://ziontechgroup.com/biotech-ai-research-platform" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Biotech AI Research Platform</h1>
				<ul className="list-disc list-inside text-slate-300 space-y-1">
					<li>Molecular property prediction</li>
					<li>Protein structure and docking models</li>
					<li>Automated lab experiment planning</li>
					<li>Data pipelines and compliance</li>
				</ul>
			</div>
		</div>
	);
}

