import React from 'react';
import Head from 'next/head';

export default function ZeroTrustSecurityPlatformWrapper() {
	return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />
				<meta name="robots" content="index,follow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<div className="max-w-2xl text-center space-y-4">
					<h1 className="text-3xl md:text-5xl font-bold">Zero Trust Security Platform</h1>
					<p className="text-gray-300">Identity-aware access and micro-segmentation.</p>
					<a href="/zero-trust-network-architecture" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">View Details</a>
				</div>
			</div>
		</>
	);
}