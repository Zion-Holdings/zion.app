import React from 'react';
import Head from 'next/head';

export default function GovernmentTechnologySolutionsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
			<Head>
				<title>Government Technology Solutions | Zion Tech Group</title>
				<meta name="description" content="Digital transformation, citizen services, cybersecurity, and AI automation for government." />
				<link rel="canonical" href="https://ziontechgroup.com/government-technology-solutions" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Government Technology Solutions</h1>
				<ul className="list-disc list-inside text-slate-300 space-y-1">
					<li>Citizen service portals and automation</li>
					<li>Data security, privacy, and compliance</li>
					<li>AI assistants for casework and triage</li>
					<li>Open data and analytics platforms</li>
				</ul>
			</div>
		</div>
	);
}