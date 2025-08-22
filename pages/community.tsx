import React from 'react';
import Head from 'next/head';

export default function CommunityPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Community | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/community" />
				<meta name="description" content="Join the Zion Tech Group community and stay updated." />
			</Head>
			<div className="max-w-4xl mx-auto space-y-6 text-slate-200">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</h1>
				<ul className="list-disc list-inside space-y-2">
					<li><a className="text-cyan-400 underline" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
					<li><a className="text-cyan-400 underline" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</a></li>
					<li><a className="text-cyan-400 underline" href="/resources">Resources</a></li>
				</ul>
				<div className="flex gap-3 pt-2">
					<a href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Join a webinar</a>
					<a href="tel:+13024640950" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Call +1 302 464 0950</a>
				</div>
			</div>
		</div>
	);
}