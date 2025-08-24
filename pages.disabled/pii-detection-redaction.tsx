import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function PIIDetectionRedaction() {
	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>PII Detection & Redaction | Zion Tech Group</title>
				<meta name="description" content="Scan documents and data streams for sensitive PII/PHI and apply policy-based redaction and tokenization." />
				<link rel="canonical" href="https://ziontechgroup.com/pii-detection-redaction" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-slate-200">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">PII Detection & Redaction</h1>
					<p className="mt-4 text-lg text-slate-300">Protect sensitive information across tickets, logs, archives, and analytics pipelines.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Capabilities</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>Regex + ML detectors (names, SSN, CCN, addresses, etc.)</li>
								<li>Redaction, masking, and tokenization policies</li>
								<li>Streaming and batch processors, webhooks</li>
								<li>Evidence logs and policy audit</li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Pricing (market)</h3>
							<ul className="list-disc list-inside text-slate-300 space-y-1">
								<li>$50–$500/mo + usage</li>
								<li>References: <a className="text-cyan-400 underline" href="https://cloud.google.com/dlp/pricing" target="_blank" rel="noreferrer">GCP DLP</a>, <a className="text-cyan-400 underline" href="https://aws.amazon.com/macie/pricing/" target="_blank" rel="noreferrer">AWS Macie</a></li>
							</ul>
						</div>
						<div className="p-6 rounded-2xl bg-black/50 border border-gray-800">
							<h3 className="text-xl font-semibold text-white mb-2">Integrations</h3>
							<p className="text-slate-300">S3/GCS/Azure, Kafka, BigQuery/Snowflake, Elastic, and helpdesks.</p>
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