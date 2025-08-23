import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function SecretsRotationAutomationPage() {
	const title = 'Secrets Rotation Automation — Zion Tech Group';
	const description = 'Automated key rotation, scheduled rollovers, drift detection, and blast-radius controls for safe secrets hygiene.';

	return (
		<>
			<SEO title={title} description={description} />
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
		</>
	);
}