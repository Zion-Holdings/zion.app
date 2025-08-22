import React from 'react';
import Link from 'next/link';

export default function APIPerformanceTesting() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">API Performance Testing</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Load test REST and GraphQL APIs with realistic traffic models, SLAs, and SLOs. Identify bottlenecks, regressions, and optimize latency with actionable insights.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Scenarios & Models', desc: 'RPS, concurrency, soak, spike, and step patterns.' },
							{ title: 'Distributed Load', desc: 'Multi-region generators with coordinated control.' },
							{ title: 'Tracing & Metrics', desc: 'OpenTelemetry tracing, percentiles, error budgets.' },
							{ title: 'CI Integration', desc: 'Quality gates in CI with regression detection.' },
							{ title: 'Report & Compare', desc: 'Version-to-version comparisons and baselines.' },
							{ title: 'SDKs & CLI', desc: 'Node/Python SDKs and CLI for automation.' }
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
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 50k VUs/mo, 3 projects.</p>
								<p className="mt-4 text-3xl font-bold">$99<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 500k VUs/mo, OTel traces.</p>
								<p className="mt-4 text-3xl font-bold">$399<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-blue-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Dedicated regions, SLAs, private agents.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://locust.io" target="_blank" rel="noreferrer">Locust</a>, <a className="underline hover:text-cyan-300" href="https://artillery.io" target="_blank" rel="noreferrer">Artillery</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-fuchsia-400 text-black font-semibold">Test My APIs</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}