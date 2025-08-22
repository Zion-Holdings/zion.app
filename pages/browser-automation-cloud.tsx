import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink } from 'lucide-react';

export default function BrowserAutomationCloudPage() {
	const features = [
		'Playwright/Puppeteer compatible flows',
		'Autoscaling workers and storage',
		'Synthetic journey monitors',
		'CI integration and PR annotations'
	];

	return (
		<>
			<SEO title="Browser Automation Cloud" description="Scale headless browser automations for testing and operations with autoscaling and CI integration." />
			<main id="main" className="container mx-auto px-4 py-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Browser Automation Cloud</h1>
					<p className="mt-4 text-lg text-gray-300">Run large-scale headless browser automations for testing, scraping, and workflows with reliable infrastructure.</p>
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">Book a Call</Link>
						<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">All Services</Link>
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Playwright
						</a>
					</div>
				</section>
			</main>
		</>
	);
}