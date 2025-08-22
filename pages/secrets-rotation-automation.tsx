import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';
import { Check, ExternalLink } from 'lucide-react';

export default function SecretsRotationAutomationPage() {
	const features = [
		'Policy-driven key rotation',
		'KMS and Vault integrations',
		'Zero-downtime secret rollover',
		'Audit trails and notifications'
	];

	return (
		<>
			<SEO title="Secrets Rotation Automation" description="Automate secrets rotation with KMS/Vault, policies, and zero-downtime rollovers." />
			<main id="main" className="container mx-auto px-4 py-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Secrets Rotation Automation</h1>
					<p className="mt-4 text-lg text-gray-300">Automate secrets rotation across environments with policy enforcement and detailed audit logs.</p>
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">Talk to Security</Link>
						<Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Pricing</Link>
						<a href="https://developer.hashicorp.com/vault" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs
						</a>
						<a href="https://cloud.google.com/kms" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Google KMS
						</a>
					</div>
				</section>
			</main>
		</>
	);
}