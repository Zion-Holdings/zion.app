import React from 'react';
import Head from 'next/head';

export default function ApiDocumentationPage() {
	return (
		<>
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<meta name="description" content="Reference for integrating with Zion Tech Group services." />
				<link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
			</Head>
			<section className="min-h-screen pt-24 pb-20 bg-black text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
				<div className="relative z-10 max-w-6xl mx-auto px-4">
					<header className="text-center mb-10">
						<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>
						<p className="text-gray-300 mt-3">SDKs, authentication, and endpoints for select services.</p>
					</header>

					<div className="grid md:grid-cols-2 gap-6">
						<section className="p-6 rounded-2xl bg-black/50 border border-gray-800/70">
							<h2 className="text-xl font-semibold mb-2">Authentication</h2>
							<p className="text-gray-300">Use Bearer tokens. Obtain keys by contacting <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 underline">kleber@ziontechgroup.com</a>.</p>
						</section>
						<section className="p-6 rounded-2xl bg-black/50 border border-gray-800/70">
							<h2 className="text-xl font-semibold mb-2">Webhooks</h2>
							<p className="text-gray-300">Configure retry, signing, and event types. See <a href="/webhook-relay-replay" className="text-cyan-400 underline">Webhook Relay & Replay</a>.</p>
						</section>
						<section className="p-6 rounded-2xl bg-black/50 border border-gray-800/70">
							<h2 className="text-xl font-semibold mb-2">SDKs</h2>
							<p className="text-gray-300">TypeScript and Python SDKs available upon request. Developer resources at <a href="/developer" className="text-cyan-400 underline">/developer</a>.</p>
						</section>
						<section className="p-6 rounded-2xl bg-black/50 border border-gray-800/70">
							<h2 className="text-xl font-semibold mb-2">Rate Limits</h2>
							<p className="text-gray-300">Default: 600 RPM per key, burst-friendly. Enterprise SLAs available.</p>
						</section>
					</div>

					<div className="mt-10 text-center">
						<a href="/support" className="inline-flex items-center px-6 py-3 rounded-xl bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Support Center</a>
					</div>
				</div>
			</section>
		</>
	);
}