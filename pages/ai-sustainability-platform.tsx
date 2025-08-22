import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function AISustainabilityPlatform() {
	return (
		<>
			<SEO title="AI Sustainability Platform" description="Measure, reduce, and report emissions with AI-driven insights and automated disclosures." canonical="https://ziontechgroup.com/ai-sustainability-platform/" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Sustainability Platform</h1>
						<p className="mt-6 text-lg text-gray-300">Automated data collection, emissions calculations, and audit-ready reporting with reduction recommendations.</p>
						<ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
							<li className="p-4 bg-white/5 rounded-lg">Scope 1–3 estimation and tracking</li>
							<li className="p-4 bg-white/5 rounded-lg">Data ingestion from ERPs and IoT</li>
							<li className="p-4 bg-white/5 rounded-lg">Audit logs and attestations</li>
							<li className="p-4 bg-white/5 rounded-lg">Disclosure automation (e.g., CDP, CSRD)</li>
						</ul>

						<div className="mt-10">
							<h2 className="text-2xl font-bold">Pricing (Market Range)</h2>
							<ul className="mt-3 space-y-2 text-gray-300">
								<li>Starter: $999–$2,999/mo — baselines, dashboards</li>
								<li>Growth: $3,000–$9,000/mo — integrations, attestations</li>
								<li>Enterprise: $12,000+/mo — multi-entity, audit support</li>
							</ul>
							<p className="mt-3 text-xs text-gray-500">References: <a className="text-cyan-300" href="https://sustainability.google/solutions/" target="_blank" rel="noreferrer">Google Sustainability</a>, <a className="text-cyan-300" href="https://www.salesforce.com/products/net-zero-cloud/overview/" target="_blank" rel="noreferrer">Net Zero Cloud</a></p>
						</div>

						<div className="mt-8 flex gap-3">
							<Link href="/contact" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200">Get Started</Link>
							<Link href="/pricing" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10">View Pricing</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}