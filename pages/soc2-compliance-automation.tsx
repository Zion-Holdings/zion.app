import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function SOC2ComplianceAutomation() {
	return (
		<>
			<SEO title="SOC 2 Compliance Automation — Zion Tech Group" description="Automate SOC 2 readiness with continuous controls, evidence pipelines, vendor risk, and auditor workflows." />
			<div className="relative isolate">
				<section className="px-6 lg:px-10 py-16 lg:py-24">
					<div className="max-w-6xl mx-auto">
						<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">SOC 2 Compliance Automation</h1>
						<p className="mt-4 text-gray-300 max-w-3xl">Automate SOC 2 readiness with continuous controls monitoring, evidence collection, asset inventory, vendor risk, and audit workspace. Reduce audit time and cost dramatically.</p>

						<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								{ title: 'Controls Library', desc: 'Mapped to SOC 2 Trust Service Criteria with policy templates.' },
								{ title: 'Evidence Automation', desc: 'Pull evidence from cloud, CI, ticketing, security tools.' },
								{ title: 'Vendor Risk', desc: 'Automated questionnaires, tracking, and remediation workflows.' },
								{ title: 'Asset Inventory', desc: 'Infrastructure and device inventory with configuration checks.' },
								{ title: 'Workflow & Tasks', desc: 'Assign remediation tasks, SLAs, and approvals.' },
								{ title: 'Audit Room', desc: 'Share evidence securely with auditors; immutable logs.' }
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
									<p className="mt-2 text-gray-300">SOC 2 readiness, core integrations.</p>
									<p className="mt-4 text-3xl font-bold">$290<span className="text-base font-normal text-gray-300">/mo</span></p>
								</div>
								<div className="rounded-2xl border border-cyan-400/30 p-6">
									<h3 className="text-xl font-bold">Growth</h3>
									<p className="mt-2 text-gray-300">Vendor risk, SSO, SIEM, ticketing.</p>
									<p className="mt-4 text-3xl font-bold">$690<span className="text-base font-normal text-gray-300">/mo</span></p>
								</div>
								<div className="rounded-2xl border border-purple-400/30 p-6">
									<h3 className="text-xl font-bold">Enterprise</h3>
									<p className="mt-2 text-gray-300">Custom controls, private cloud, audit support.</p>
									<p className="mt-4 text-3xl font-bold">Custom</p>
								</div>
							</div>
							<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.vanta.com/" target="_blank" rel="noreferrer">Vanta</a>, <a className="underline hover:text-cyan-300" href="https://drata.com/" target="_blank" rel="noreferrer">Drata</a>, <a className="underline hover:text-cyan-300" href="https://securityscorecard.com/" target="_blank" rel="noreferrer">SecurityScorecard</a>.</p>
						</div>

						<div className="mt-12 flex flex-wrap items-center gap-4">
							<Link href="/contact" className="px-5 py-3 rounded-lg bg-pink-400 text-black font-semibold">Automate SOC 2</Link>
							<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
							<span className="text-gray-400">Call: +1 302 464 0950</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}