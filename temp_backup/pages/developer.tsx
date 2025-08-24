import React from 'react';
import Head from 'next/head';

export default function DeveloperPage() {
	return (
		<>
			<Head>
				<title>Developer | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/developer" />
			</Head>
			<section className="relative py-16 lg:py-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Developer Portal</h1>
					<p className="text-gray-300 mb-8 max-w-2xl">Start building with our APIs and micro SaaS services.</p>
					<ol className="list-decimal list-inside space-y-3 text-gray-300">
						<li>Explore the <a className="text-cyan-400" href="/api-documentation">API Reference</a>.</li>
						<li>Request a sandbox from <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</li>
						<li>Review SDKs and examples in <a className="text-cyan-400" href="/resources">Resources</a>.</li>
					</ol>
				</div>
			</section>
		</>
	);
}