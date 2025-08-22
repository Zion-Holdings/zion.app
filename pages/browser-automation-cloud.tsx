import React from 'react';
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';

export default function BrowserAutomationCloudPage() {
	const features = [
		'Parallel Playwright/Puppeteer execution',
		'Queued jobs with retries and rate limits',
		'Artifacts: HAR, traces, screenshots, videos',
		'Rotating proxies and geo targeting',
		'Webhook callbacks and REST API'
	];

	return (
		<>
			<SEO title="Browser Automation Cloud" description="Parallel Playwright/Puppeteer automation at scale with queues, storage, and proxies." />
			<main id="main" className="container mx-auto px-4 py-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-extrabold tracking-tight">Browser Automation Cloud</h1>
					<p className="mt-4 text-lg text-gray-300">Scale Playwright/Puppeteer tasks for testing, scraping, and robotic process automation with enterprise-grade reliability.</p>
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/#contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">Start from $99/mo</a>
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Playwright
							</a>
						<a href="https://pptr.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Puppeteer
							</a>
					</div>
				</section>
			</main>
		</>
	);
}