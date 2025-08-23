import React from 'react';
import Head from 'next/head';

export default function ResearchDevelopmentPage() {
	return (
		<>
			<Head>
				<title>Research & Development | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/research-development" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl font-bold mb-4">Research & Development</h1>
				<p className="text-gray-300 mb-6">Exploring advanced AI, quantum computing, and emerging technologies.</p>
				<p className="text-gray-400">See our latest <a className="text-cyan-300 underline" href="/news">news</a> and <a className="text-cyan-300 underline" href="/reports">reports</a>.</p>
			</div>
		</>
	);
}