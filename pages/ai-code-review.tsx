import React from 'react';
import Link from 'next/link';

export default function AICodeReview() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">AI Code Review</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Automated PR reviews for style, security, and performance with actionable suggestions and auto-fixes across languages and frameworks.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Style & Lint', desc: 'Enforce conventions and consistency; autofix common issues.' },
							{ title: 'Security', desc: 'Detect vulnerabilities and secrets with remediation steps.' },
							{ title: 'Performance', desc: 'Highlight inefficient queries and hot paths.' },
							{ title: 'Test Gaps', desc: 'Suggest tests and coverage areas.' },
							{ title: 'Integrations', desc: 'GitHub/GitLab/Bitbucket, Jira, Slack.' },
							{ title: 'Policy', desc: 'Branch protection checks and compliance enforcements.' }
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
							<div className="rounded-2xl border border-violet-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 5 repos, 200 PRs/mo.</p>
								<p className="mt-4 text-3xl font-bold">$49<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 20 repos, 1k PRs/mo, auto-fix.</p>
								<p className="mt-4 text-3xl font-bold">$199<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Unlimited repos, SSO, on-prem runners.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.sonarsource.com/plans-and-pricing/" target="_blank" rel="noreferrer">SonarCloud</a>, <a className="underline hover:text-cyan-300" href="https://www.codacy.com/pricing" target="_blank" rel="noreferrer">Codacy</a>, <a className="underline hover:text-cyan-300" href="https://aws.amazon.com/codeguru/pricing/" target="_blank" rel="noreferrer">Amazon CodeGuru</a>.</p>
					</div>

					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-violet-400 text-black font-semibold">Review My Code</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</div>
	);
}

