import React from 'react';
import Head from 'next/head';

export default function AIPoweredCybersecurityWrapper() {
	return (
		<>
			<Head>
				<title>AI-Powered Cybersecurity | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/ai-powered-cybersecurity" />
				<meta name="robots" content="index,follow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<div className="max-w-2xl text-center space-y-4">
					<h1 className="text-3xl md:text-5xl font-bold">AI-Powered Cybersecurity</h1>
					<p className="text-gray-300">Intelligent threat detection and SOAR automation.</p>
					<a href="/cybersecurity" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">View Details</a>
				</div>
			</div>
		</>
	);
}