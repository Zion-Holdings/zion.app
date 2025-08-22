import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function SOC2ComplianceAutomationPage() {
	const title = 'SOC 2 Compliance Automation — Zion Tech Group';
	const description = 'Automate evidence collection, controls mapping, and auditor-ready reports. Reduce audit time and ensure continuous compliance.';

	return (
		<>
			<SEO title={title} description={description} />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">SOC 2 Compliance Automation</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Automate SOC 2 readiness with continuous controls, evidence pipelines, and prebuilt auditor workflows. Integrates with cloud providers and ticketing systems.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Get a Demo</Link>
						<Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">View Pricing</Link>
					</div>
				</div>
			</section>
		</>
	);
}