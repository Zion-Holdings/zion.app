import React from 'react';
import Link from 'next/link';

export default function ITAssetDiscoveryAgent() {
	return (
		<div className="relative isolate">
			<section className="px-6 lg:px-10 py-16 lg:py-24">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">IT Asset Discovery Agent</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">Agentless network and cloud discovery across endpoints, servers, SaaS, and shadow IT with CMDB-ready exports, change tracking, and vulnerability context. Designed for ITAM, compliance, and incident readiness.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Agentless & Hybrid', desc: 'SNMP, WMI/WinRM, SSH, Cloud APIs (AWS, Azure, GCP), Jamf/Intune, and optional lightweight agent for offline assets.' },
							{ title: 'Deep Fingerprinting', desc: 'Open ports, software inventory, running services, firmware, EOL status, CVE mapping, and exposure signals.' },
							{ title: 'CMDB Sync', desc: 'Native exports for ServiceNow, Jira Assets, Freshservice, and open CSV/JSON schema with webhooks.' },
							{ title: 'Scheduling & SLOs', desc: 'Incremental scans, change detection, and SLO dashboards with alerting via Slack, MS Teams, Email.' },
							{ title: 'Zero Trust Ready', desc: 'Least-privilege discovery, audit trails, vaulted credentials, and role-based access controls.' },
							{ title: 'API-first', desc: 'GraphQL/REST APIs, signed webhooks, and export to data lakes for analytics.' },
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
								<p className="mt-2 text-gray-300">Up to 500 assets, agentless scans, CSV/JSON exports.</p>
								<p className="mt-4 text-3xl font-bold">$149<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-fuchsia-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">Up to 5,000 assets, CMDB sync, change tracking.</p>
								<p className="mt-4 text-3xl font-bold">$590<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Unlimited sites, RBAC, vault, and priority support.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.lansweeper.com/pricing/" target="_blank" rel="noreferrer">Lansweeper</a>, <a className="underline hover:text-cyan-300" href="https://www.device42.com/pricing/" target="_blank" rel="noreferrer">Device42</a>, <a className="underline hover:text-cyan-300" href="https://www.manageengine.com/products/asset-explorer/" target="_blank" rel="noreferrer">ManageEngine</a>.</p>
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

