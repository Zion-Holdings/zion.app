import React from 'react';
import Head from 'next/head';

export default function ApiDocumentationPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>API Reference | Zion Tech Group</title>
				<meta name="description" content="API reference and integration guides for Zion Tech Group services" />
				<link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-8">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Reference</h1>
				<p className="text-slate-300">Explore authentication, endpoints, webhooks, and SDKs for integrating with our Micro SAAS, AI, and IT services.</p>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Authentication</h2>
						<p className="text-slate-300">Use HTTPS Bearer tokens. Rotate regularly. For enterprise SSO/SCIM, contact sales.</p>
					</div>
					<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-2">Webhooks</h2>
						<p className="text-slate-300">Secure with shared secrets and signature headers. Retries with exponential backoff.</p>
					</div>
				</div>
				<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
					<h2 className="text-white text-xl font-semibold mb-2">Contact</h2>
					<ul className="text-slate-300 space-y-1">
						<li>Phone: <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a></li>
						<li>Email: <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
						<li>Address: 364 E Main St STE 1008 Middletown DE 19709</li>
					</ul>
				</div>
			</div>
		</div>
	);
}