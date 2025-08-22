import React from 'react';
import Link from 'next/link';

export default function BrowserAutomationCloud() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Browser Automation Cloud</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Scale browser-based automation for QA, scraping, and robotic process automation with multi-region execution, replayable traces, and robust anti-detection techniques.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Playwright/Puppeteer', desc: 'Run at scale with smart retries, stealth, and artifact capture.' },
							{ title: 'Scheduler & Queue', desc: 'Cron, webhooks, and message queues for orchestration.' },
							{ title: 'Proxy Rotation', desc: 'Residential, datacenter, and geo-based proxy support.' },
							{ title: 'Headful/Headless', desc: 'Device profiles, viewport simulation, and network shaping.' },
							{ title: 'Tracing & Replay', desc: 'Screenshots, videos, network traces, and reproducible runs.' },
							{ title: 'API & SDK', desc: 'Programmatic control with Node/Python clients.' }
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-12">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">50k steps/mo, 2 regions, 5 projects.</p>
								<p className="mt-4 text-3xl font-bold">$99<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">500k steps/mo, traces, webhooks.</p>
								<p className="mt-4 text-3xl font-bold">$399<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-blue-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Dedicated regions, private network, SLAs.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://checklyhq.com" target="_blank" rel="noreferrer">Checkly</a>, <a className="underline hover:text-cyan-300" href="https://browserless.io" target="_blank" rel="noreferrer">Browserless</a>, <a className="underline hover:text-cyan-300" href="https://scrapy.org" target="_blank" rel="noreferrer">Scrapy</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-emerald-400 text-black font-semibold">Scale Automation</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}