import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function MultiCloudDisasterRecovery() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>Multi-Cloud Disaster Recovery | Zion Tech Group</title>
				<meta name="description" content="RPO/RTO design, cross-cloud replication, failover runbooks, and automated drills." />
				<link rel="canonical" href="https://ziontechgroup.com/multi-cloud-disaster-recovery" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Multi-Cloud Disaster Recovery</h1>
					<p className="mt-4 text-lg text-slate-300">Protect business continuity with cross-region and cross-cloud replication, DR drills, and observability.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Components</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>RPO/RTO objectives and DR patterns</li>
								<li>Data and queue replication strategies</li>
								<li>Failover orchestration and runbooks</li>
								<li>Quarterly drills and reporting</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>$1,000–$6,000/mo + infra</li>
								<li>References: <a className="text-cyan-400 underline" href="https://aws.amazon.com/backup/pricing/" target="_blank" rel="noreferrer">AWS Backup</a>, <a className="text-cyan-400 underline" href="https://cloud.google.com/compute/disks#replication" target="_blank" rel="noreferrer">GCP Replication</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Readiness</h3>
							<p className="text-slate-300">Compliance-aligned evidence, alerting on RPO/RTO breaches, and tabletop exercises.</p>
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