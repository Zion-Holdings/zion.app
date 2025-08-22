import React from 'react';
import Link from 'next/link';

export default function AIHRAnalyticsPlatform() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">AI HR Analytics Platform</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Understand workforce trends, reduce attrition, and plan headcount intelligently. Unified HRIS, ATS, survey, and performance data with AI insights.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Attrition Risk', desc: 'Team- and role-level churn forecasting with drivers and interventions.' },
							{ title: 'Workforce Planning', desc: 'Capacity planning, hiring plans, and budgeting alignment.' },
							{ title: 'DEI & Engagement', desc: 'Pulse analysis and inclusion metrics with action suggestions.' },
							{ title: 'Talent Intelligence', desc: 'Role skill graphs, learning paths, and mobility recommendations.' },
							{ title: 'Compliance', desc: 'Audit trails and secure data handling.' },
							{ title: 'Integrations', desc: 'Workday, BambooHR, Greenhouse, Lever, 15Five.' }
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
							<div className="rounded-2xl border border-pink-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 250 employees, core dashboards.</p>
								<p className="mt-4 text-3xl font-bold">$190<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 2,000 employees, ATS/HRIS integrations.</p>
								<p className="mt-4 text-3xl font-bold">$590<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-purple-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Advanced privacy, SSO, custom models.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.visier.com/plans-and-pricing/" target="_blank" rel="noreferrer">Visier</a>, <a className="underline hover:text-cyan-300" href="https://charthop.com/pricing/" target="_blank" rel="noreferrer">ChartHop</a>, <a className="underline hover:text-cyan-300" href="https://www.deel.com/pricing" target="_blank" rel="noreferrer">Deel</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-pink-400 text-black font-semibold">See Workforce Insights</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}