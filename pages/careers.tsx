import React from 'react';
import Head from 'next/head';

export default function CareersPage() {
	return (
		<>
			<Head>
				<title>Careers | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/careers" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Careers</h1>
				<p className="text-gray-300 max-w-3xl mb-6">Join us to build pragmatic AI, observability, and cloud platforms used by modern teams. We value craftsmanship, reliability, and customer outcomes.</p>
				<div className="p-6 rounded-xl bg-black/40 border border-gray-700/50">
					<h2 className="text-xl font-semibold mb-2">Open roles</h2>
					<ul className="list-disc list-inside text-gray-300 space-y-1">
						<li>Full‑stack Engineer (Next.js/TypeScript)</li>
						<li>Solutions Engineer (AI & Data)</li>
						<li>Customer Success Engineer</li>
					</ul>
					<p className="text-gray-400 mt-4">Email your profile to <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> or call <a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a>.</p>
				</div>
			</div>
		</>
	);
}