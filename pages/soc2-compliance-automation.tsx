import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function SOC2ComplianceAutomationPage() {
	return (
		<>
			<SEO title="SOC 2 Compliance Automation" description="Automate SOC 2 evidence collection, control verification, and reporting." />
			<div className="container mx-auto px-4 py-16">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">SOC 2 Compliance Automation</h1>
					<p className="mt-4 text-lg text-gray-300">Streamline SOC 2 readiness with automated evidence collection, control mapping, and auditor-friendly exports.</p>
					<div className="mt-12 flex flex-wrap items-center gap-4">
						<Link href="/contact" className="px-5 py-3 rounded-lg bg-pink-400 text-black font-semibold">Automate SOC 2</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-white/20">Email: kleber@ziontechgroup.com</a>
						<span className="text-gray-400">Call: +1 302 464 0950</span>
					</div>

					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Get a Demo</Link>
						<Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">View Pricing</Link>
					</div>
				</section>
			</div>
		</>
	);
}