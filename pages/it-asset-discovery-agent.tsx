import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink, Network, Radar, Shield } from 'lucide-react';

export default function ITAssetDiscoveryAgentPage() {
	const title = 'IT Asset Discovery Agent — Zion Tech Group';
	const description = 'Agentless network and cloud discovery for hardware, software, and SaaS. Unify inventories, detect drift, and export to CMDB.';
	const features = [
		'Agentless network scans with authenticated probes',
		'Cloud discovery for AWS/Azure/GCP across accounts',
		'SaaS discovery via OAuth and SSO logs',
		'Software inventory, CVE enrichment, and EOL tracking',
		'Change detection and configuration drift alerts',
		'Exports: ServiceNow, Jira, CMDBs, CSV/JSON',
		'Role-based access and audit logs',
		'API-first with webhooks for events'
	];

	const pricingNotes = [
		'Starter: $99–$299/mo (up to 250 assets)',
		'Growth: $300–$1,499/mo (2,500–10,000 assets)',
		'Enterprise: Custom (SSO/SCIM, HA, multi-org)'
	];

	const references = [
		{ name: 'runZero pricing', url: 'https://www.runzero.com/pricing/' },
		{ name: 'Lansweeper pricing', url: 'https://www.lansweeper.com/pricing/' },
		{ name: 'Nmap', url: 'https://nmap.org/' }
	];

	return (
		<>
			<SEO data={{
			pageTitle: title,
			pageDescription: description,
			pageKeywords: ["IT asset discovery", "IT management", "asset tracking", "Zion Tech Group"]
		}} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">IT Asset Discovery Agent</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">{description}</p>
					<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
						<span className="inline-flex items-center gap-1"><Network className="w-4 h-4 text-emerald-400" /> Agentless</span>
						<span className="inline-flex items-center gap-1"><Radar className="w-4 h-4 text-cyan-400" /> Drift alerts</span>
						<span className="inline-flex items-center gap-1"><Shield className="w-4 h-4 text-purple-400" /> Secure exports</span>
					</div>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Get a Quote</Link>
						<Link href="/market-pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Market Pricing</Link>
					</div>
				</div>
			</section>

			<main id="main" className="container mx-auto px-4 pb-24">
				<section className="max-w-5xl mx-auto">
					<div className="mt-4 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>

					<div className="mt-10">
						<h2 className="text-2xl font-semibold text-white">Pricing</h2>
						<ul className="mt-4 grid sm:grid-cols-3 gap-4">
							{pricingNotes.map((p) => (
								<li key={p} className="rounded-xl border border-cyan-400/30 bg-black/30 p-4 text-gray-200">{p}</li>
							))}
						</ul>
						<p className="mt-3 text-sm text-gray-400">Asset-based tiers with discounts for annual commitments.</p>
					</div>

					<div className="mt-10">
						<h2 className="text-2xl font-semibold text-white">References</h2>
						<div className="mt-4 flex flex-wrap gap-4">
							{references.map((r) => (
								<a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
									<ExternalLink className="w-4 h-4" /> {r.name}
								</a>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

