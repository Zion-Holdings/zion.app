import React from 'react';
import Head from 'next/head';

export default function DocsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
				<meta name="description" content="Documentation for Zion Tech Group platforms and micro SaaS services." />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6 text-slate-200">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Documentation</h1>
				<p>API and product docs are being consolidated. For immediate access, contact sales.</p>
				<div className="flex gap-3 pt-2">
					<a href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Request docs</a>
					<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Email kleber@ziontechgroup.com</a>
				</div>
			</div>
		</div>
	);
}