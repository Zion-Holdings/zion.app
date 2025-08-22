import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

export default function APIDocumentationPage() {
	return (
		<UltraFuturisticBackground variant="holographic" intensity="high">
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name="description" content="Authentication, endpoints, and examples for Zion Tech Group APIs." />
				<link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">API Documentation</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-lg font-semibold mb-3">Getting Started</h2>
						<ol className="list-decimal list-inside text-gray-300 space-y-2 text-sm">
							<li>Request API access: <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
							<li>Authenticate with API key via Authorization: Bearer</li>
							<li>Use REST/GraphQL endpoints documented here (coming soon)</li>
						</ol>
					</Card>
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-lg font-semibold mb-3">SDKs</h2>
						<ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
							<li>JavaScript/TypeScript SDK (beta)</li>
							<li>Python SDK (planned)</li>
						</ul>
					</Card>
				</div>
				<div className="mt-8 text-sm text-gray-400">Questions? Call +1 302 464 0950.</div>
			</div>
		</UltraFuturisticBackground>
	);
}