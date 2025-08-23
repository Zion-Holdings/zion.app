import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function ZeroDowntimeMigration() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>Zero-Downtime Migration | Zion Tech Group</title>
				<meta name="description" content="Live traffic replication, blue/green cutovers, and rollback-safe migrations for databases and services." />
				<link rel="canonical" href="https://ziontechgroup.com/zero-downtime-migration" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Zero-Downtime Migration</h1>
					<p className="mt-4 text-lg text-slate-300">Plan, rehearse, and execute zero-downtime migrations for databases, services, and platforms.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Approach</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Dual-write and CDC replication strategies</li>
								<li>Blue/green and canary cutovers</li>
								<li>Automated validation and rollback plans</li>
								<li>Runbooks and stress testing</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Project: $3,000–$25,000 one-time</li>
								<li>References: <a className="text-cyan-400 underline" href="https://aws.amazon.com/dms/pricing/" target="_blank" rel="noreferrer">aws.amazon.com/dms/pricing</a>, <a className="text-cyan-400 underline" href="https://cloud.google.com/database-migration/pricing" target="_blank" rel="noreferrer">GCP Database Migration</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Targets</h3>
							<p className="text-slate-300">Postgres, MySQL, MongoDB, Redis, Kafka, and service-to-service refactors.</p>
						</div>
					</div>
					<div className="mt-10 flex flex-wrap gap-3">
						<a href="/pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">View Pricing</a>
						<a href="/services-advertising" className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300">Features & Links</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}