import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

const ext = (url: string, label?: string) => (
	<a className="text-cyan-300 hover:text-cyan-200 underline" href={url} target="_blank" rel="noopener noreferrer">{label || url.replace('https://','')}</a>
);

export default function MarketPricingPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Market Pricing | Zion Tech Group</title>
				<meta name="description" content="Average market prices and credible references for AI, cloud, IT, and micro SaaS services." />
				<link rel="canonical" href="https://ziontechgroup.com/market-pricing" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Market Pricing</h1>
				<p className="text-gray-300 max-w-3xl mb-10">Benchmarks to guide budgeting and ROI. Prices are indicative; see vendor pages for current rates.</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-xl font-semibold mb-2">AI Model APIs</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li>OpenAI: {ext('https://openai.com/api/pricing','openai.com/api/pricing')}</li>
							<li>Anthropic: {ext('https://www.anthropic.com/pricing','anthropic.com/pricing')}</li>
							<li>OpenRouter: {ext('https://openrouter.ai/models','openrouter.ai/models')}</li>
						</ul>
					</Card>

					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-xl font-semibold mb-2">Vector Databases</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li>Pinecone: {ext('https://www.pinecone.io/pricing/')}</li>
							<li>Weaviate: {ext('https://weaviate.io/pricing')}</li>
							<li>Elastic: {ext('https://www.elastic.co/pricing')}</li>
						</ul>
					</Card>

					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-xl font-semibold mb-2">Cloud Databases</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li>Google Cloud SQL (Postgres): {ext('https://cloud.google.com/sql/pricing')}</li>
							<li>AWS RDS (Postgres): {ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>
						</ul>
					</Card>

					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-xl font-semibold mb-2">Identity & SSO/SCIM</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li>Auth0: {ext('https://auth0.com/pricing')}</li>
							<li>WorkOS: {ext('https://workos.com/pricing')}</li>
							<li>Okta: {ext('https://www.okta.com/pricing/')}</li>
						</ul>
					</Card>

					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-xl font-semibold mb-2">Status & Synthetic Monitoring</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li>Atlassian Statuspage: {ext('https://www.atlassian.com/software/statuspage/pricing')}</li>
							<li>Checkly: {ext('https://www.checklyhq.com/pricing/')}</li>
						</ul>
					</Card>

					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-xl font-semibold mb-2">Edge/Platform</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li>Vercel: {ext('https://vercel.com/pricing')}</li>
							<li>Cloudflare: {ext('https://www.cloudflare.com/plans/')}</li>
							<li>Fastly: {ext('https://www.fastly.com/pricing')}</li>
						</ul>
					</Card>

					<Card className="p-6 bg-black/40 border border-gray-800">
						<h2 className="text-xl font-semibold mb-2">Privacy Analytics</h2>
						<ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
							<li>Plausible: {ext('https://plausible.io/pricing')}</li>
							<li>Fathom: {ext('https://usefathom.com/pricing')}</li>
						</ul>
					</Card>
				</div>

				<div className="mt-10 text-sm text-gray-400">Need a quote? <a href="/contact" className="text-cyan-300 underline">Contact sales</a> or call +1 302 464 0950.</div>
			</div>
		</UltraFuturisticBackground>
	);
}