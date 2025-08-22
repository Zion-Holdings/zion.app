import React from 'react';
import Head from 'next/head';

export default function ApiDocs() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>API Docs | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/api-docs" />
			</Head>
			<div className="max-w-3xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-5xl font-bold text-white">API Docs</h1>
				<p className="text-slate-300">See the <a className="text-cyan-400 underline" href="/api-documentation">API Reference</a> for full details. This page exists to support existing links.</p>
			</div>
		</div>
	);
}