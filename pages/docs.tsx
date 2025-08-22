import React from 'react';
import Head from 'next/head';

export default function DocsPage() {
	return (
		<>
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<section className="relative py-16 lg:py-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Documentation</h1>
					<p className="text-gray-300 mb-8 max-w-2xl">Guides and references to integrate our platforms and services.</p>
					<div className="grid md:grid-cols-2 gap-6">
						<a className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10" href="/api-documentation">API Reference</a>
						<a className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10" href="/developer">Developer Portal</a>
						<a className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10" href="/support">Support Center</a>
						<a className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10" href="/resources">Resources</a>
					</div>
				</div>
			</section>
		</>
	);
}