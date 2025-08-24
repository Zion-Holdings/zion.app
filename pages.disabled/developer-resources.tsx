import React from 'react';
import Head from 'next/head';

export default function DeveloperResourcesPage() {
	return (
		<>
			<Head>
				<title>Developer Resources | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/developer-resources" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl font-bold mb-4">Developer Resources</h1>
				<p className="text-gray-300 mb-6">SDKs, APIs, and guides for integrating our services.</p>
				<ul className="list-disc list-inside text-gray-300 space-y-2">
					<li><a className="text-cyan-300 underline" href="/api-documentation">API Documentation</a></li>
					<li><a className="text-cyan-300 underline" href="/docs">Technical Docs</a></li>
					<li><a className="text-cyan-300 underline" href="/resources">Resources</a></li>
				</ul>
			</div>
		</>
	);
}