import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink } from 'lucide-react';

export default function SecretsRotationAutomationPage() {
	const title = 'Secrets Rotation Automation — Zion Tech Group';
	const description = 'Automated key rotation, scheduled rollovers, drift detection, and blast-radius controls for safe secrets hygiene.';
	const features = [
		'Automated key and secret rotation',
		'JIT credentials with expirations',
		'Policy approvals and audit trails',
		'CI/CD integration (GitHub Actions, CircleCI)',
		'Cloud KMS and Vault support'
	];

	return (
		<>
			<SEO data={{
			pageTitle: title,
			pageDescription: description,
			pageKeywords: ["secrets rotation", "key rotation", "automation", "security", "cybersecurity", "Zion Tech Group"]
		}} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Secrets Rotation Automation</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Policy-driven key rotation across cloud providers, with staging, verification, and automatic rollback. Audit trails and alerts included.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Talk to Security</Link>
						<Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Pricing</Link>
					</div>
				</div>
			</section>

			<main id="main" className="container mx-auto px-4 pb-24">
				<section className="max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold text-white">Capabilities</h2>
					<div className="mt-6 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">Start from $199/mo</a>
						<a href="https://developer.hashicorp.com/vault" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs
							</a>
						<a href="https://cloud.google.com/kms" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Google Cloud KMS
							</a>
					</div>
				</section>
			</main>
		</>
	);
}