import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function BrowserAutomationCloudPage() {
	const title = 'Browser Automation Cloud — Zion Tech Group';
	const description = 'Record, run, and scale headless browser flows for QA, monitoring, and RPA. Built-in recorder, scheduling, and assertions.';

	return (
		<>
			<SEO title={title} description={description} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Browser Automation Cloud</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Scale headless browser workflows for testing and automation. CI integrations, alerting, rich dashboards, and secure secrets support.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Book a Call</Link>
						<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">All Services</Link>
					</div>
				</div>
			</section>
		</>
	);
}