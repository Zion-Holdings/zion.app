import React from 'react';
import Head from 'next/head';

export default function PartnersPage() {
	return (
		<>
			<Head>
				<title>Partners | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/partners" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Partners</h1>
				<p className="text-gray-300 max-w-3xl mb-8">We partner with leading platforms and vendors to deliver reliable, cost-effective solutions.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 rounded-xl bg-black/40 border border-gray-700/50">
						<h2 className="text-lg font-semibold mb-2">Cloud & Edge</h2>
						<ul className="text-gray-300 space-y-1 list-disc list-inside">
							<li>AWS, Azure, GCP</li>
							<li>Cloudflare, Netlify, Vercel</li>
						</ul>
					</div>
					<div className="p-6 rounded-xl bg-black/40 border border-gray-700/50">
						<h2 className="text-lg font-semibold mb-2">Data & AI</h2>
						<ul className="text-gray-300 space-y-1 list-disc list-inside">
							<li>Snowflake, BigQuery, ClickHouse</li>
							<li>OpenAI, Anthropic, Groq</li>
						</ul>
					</div>
					<div className="p-6 rounded-xl bg-black/40 border border-gray-700/50">
						<h2 className="text-lg font-semibold mb-2">Security & Identity</h2>
						<ul className="text-gray-300 space-y-1 list-disc list-inside">
							<li>Okta, Auth0, WorkOS</li>
							<li>HashiCorp, Wiz, Prisma Cloud</li>
						</ul>
					</div>
				</div>
				<p className="text-gray-400 mt-6">Interested in partnering? Email <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> or call <a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a>.</p>
			</div>
		</>
	);
}