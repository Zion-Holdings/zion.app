import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function PrivacyComplianceAutomation() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>Privacy Compliance Automation | Zion Tech Group</title>
				<meta name="description" content="Automate DSAR/CPRA/GDPR workflows, data mapping, consent logs, and PII detection with evidence trails." />
				<link rel="canonical" href="https://ziontechgroup.com/privacy-compliance-automation" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Privacy Compliance Automation</h1>
					<p className="mt-4 text-lg text-slate-300">End-to-end privacy ops: DSAR intake, identity verification, data mapping, redaction, and attestation.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">What you get</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>DSAR portal, SLA tracking, and templated responses</li>
								<li>System-of-record data mapping and connectors</li>
								<li>Automated redaction and safe export packages</li>
								<li>Evidence logs for audits</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>SMB: $200–$1,500/mo</li>
								<li>Enterprise: $1,500–$5,000/mo</li>
								<li>References: <a className="text-cyan-400 underline" href="https://transcend.io/pricing" target="_blank" rel="noreferrer">transcend.io/pricing</a>, <a className="text-cyan-400 underline" href="https://onetrust.com/pricing" target="_blank" rel="noreferrer">onetrust.com</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
							<p className="text-slate-300">GDPR, CPRA, HIPAA mappings, audit pack, policy registry and change control.</p>
						</div>
					</div>
					<div className="mt-10 flex flex-wrap gap-3">
						<a href="/pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">View Pricing</a>
						<a href="/market-pricing" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Market Pricing</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}