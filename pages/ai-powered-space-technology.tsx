import React from 'react';
import Head from 'next/head';

export default function AIPoweredSpaceTechnologyWrapper() {
	return (
		<>
			<Head>
				<title>AI-Powered Space Technology | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/ai-powered-space-technology" />
				<meta name="robots" content="index,follow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<div className="max-w-2xl text-center space-y-4">
					<h1 className="text-3xl md:text-5xl font-bold">AI-Powered Space Technology</h1>
					<p className="text-gray-300">Explore our space AI platform with mission planning and satellite operations.</p>
					<a href="/space-technology-ai-platform" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">View Details</a>
				</div>
			</div>
		</>
	);
}