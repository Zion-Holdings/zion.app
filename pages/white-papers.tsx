import React from 'react';
import Head from 'next/head';

export default function WhitePapersPage() {
	return (
		<>
			<Head>
				<title>White Papers | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/white-papers" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl font-bold mb-4">White Papers</h1>
				<p className="text-gray-300">Download in-depth research and technical guidance. Contact us at <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
			</div>
		</>
	);
}