import React from 'react';
import Link from 'next/link';

export default function APIPerformanceTesting() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">API Performance Testing</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Load, latency, reliability and regression testing for APIs with synthetic traffic generation, SLO tracking, distributed load injectors, and CI/CD integration. Benchmark providers, catch performance drift, and ship with confidence.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Distributed Load', desc: 'Run tests from multiple regions with coordinated ramp-up and soak phases.' },
							{ title: 'SLO Dashboards', desc: 'Track p50/p95/p99 latency, error budgets, and throughput trends over time.' },
							{ title: 'Protocol Coverage', desc: 'HTTP/REST, GraphQL, gRPC, WebSocket, and streaming APIs.' },
							{ title: 'Regression Gates', desc: 'Fail builds when latency regresses beyond thresholds or budgets are exhausted.' },
							{ title: 'Realistic Traffic', desc: 'Custom scenarios, auth flows, test data seeding, and user think time.' },
							{ title: 'Reports & Export', desc: 'Beautiful HTML/CSV exports, signed artifacts, and webhook notifications.' },
						].map((f) => (
							<div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
								<h3 className="text-lg font-semibold text-white">{f.title}</h3>
								<p className="mt-2 text-sm text-gray-300">{f.desc}</p>
							</div>
						))}
					</div>

					<div className="mt-14">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 250 RPS, 1 region, CI integration.</p>
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 2k RPS, 3 regions, regression gates.</p>
								<p className="mt-4 text-3xl font-bold">$590<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Unlimited scale, private agents, SSO, and SRE support.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://k6.io/pricing/" target="_blank" rel="noreferrer">Grafana k6</a>, <a className="underline hover:text-cyan-300" href="https://www.loadmill.com/pricing" target="_blank" rel="noreferrer">Loadmill</a>, <a className="underline hover:text-cyan-300" href="https://www.blazemeter.com/pricing" target="_blank" rel="noreferrer">BlazeMeter</a>.</p>
					</div>

					<div className="mt-14 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold">Talk to Sales</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}