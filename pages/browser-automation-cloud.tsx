import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink } from 'lucide-react';

export default function BrowserAutomationCloudPage() {
	const title = 'Browser Automation Cloud — Zion Tech Group';
	const description = 'Record, run, and scale headless browser flows for QA, monitoring, and RPA. Built-in recorder, scheduling, and assertions.';
	const features = [
		'Parallel Playwright/Puppeteer execution',
		'Queued jobs with retries and rate limits',
		'Artifacts: HAR, traces, screenshots, videos',
		'Rotating proxies and geo targeting',
		'Webhook callbacks and REST API'
	];

	return (
		<>
			<SEO title={title} description={description} />
			<main id="main" className="container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Browser Automation Cloud</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Scale headless browser workflows for testing and automation. CI integrations, alerting, rich dashboards, and secure secrets support.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Book a Call</Link>
						<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">All Services</Link>
					</div>

					<div className="mt-10 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>

					<div className="mt-8 flex flex-wrap items-center gap-4">
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