import React from 'react';
import Head from 'next/head';

export default function ApiDocsPage() {
	return (
		<>
			<Head>
				<title>API Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
			</Head>
			<section className="relative py-16 lg:py-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">API Documentation</h1>
					<p className="text-gray-300 mb-8 max-w-2xl">REST and webhook endpoints for integrating our services.</p>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
							<h3 className="text-white font-semibold mb-2">Authentication</h3>
							<p className="text-gray-300 text-sm">API keys via Authorization header. Contact us for sandbox access.</p>
						</div>
						<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
							<h3 className="text-white font-semibold mb-2">Webhooks</h3>
							<p className="text-gray-300 text-sm">Receive event callbacks. Validate signatures and retries included.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}