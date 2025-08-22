import React from 'react';
import Head from 'next/head';

export default function BrowserAutomationCloudPage() {
	return (
		<>
			<Head>
				<title>Browser Automation Cloud | Zion Tech Group</title>
				<meta name="description" content="Scale headless browser flows for testing, scraping, and RPA with queues, concurrency limits, and smart retries." />
				<link rel="canonical" href="https://ziontechgroup.com/browser-automation-cloud" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white bg-black">
				<div className="max-w-5xl mx-auto space-y-8">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Browser Automation Cloud</h1>
					<p className="text-gray-300">Scale Playwright/Puppeteer workloads with managed proxies, CAPTCHA handling, rotating identities, and budget-aware concurrency. Ideal for QA at scale, data collection, and operational RPA.</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="rounded-xl border border-cyan-500/30 p-6">
							<h3 className="text-xl font-bold">Starter</h3>
							<p className="mt-2 text-gray-300">Up to 50k runs/mo, 10 concurrent workers, shared proxies.</p>
							<p className="mt-4 text-3xl font-bold">$199<span className="text-base font-normal text-gray-300">/mo</span></p>
						</div>
						<div className="rounded-xl border border-purple-500/30 p-6">
							<h3 className="text-xl font-bold">Growth</h3>
							<p className="mt-2 text-gray-300">250k runs/mo, 50 workers, dedicated proxy pools, priority queue.</p>
							<p className="mt-4 text-3xl font-bold">$799<span className="text-base font-normal text-gray-300">/mo</span></p>
						</div>
						<div className="rounded-xl border border-emerald-500/30 p-6">
							<h3 className="text-xl font-bold">Enterprise</h3>
							<p className="mt-2 text-gray-300">SAML/SCIM, VPC deploy, dedicated subnets, custom guards & retries.</p>
							<p className="mt-4 text-3xl font-bold">Custom</p>
						</div>
					</div>
					<div className="flex flex-wrap gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500">Contact Sales</a>
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-gray-600">Market Pricing</a>
					</div>
				</div>
			</div>
		</>
	);
}