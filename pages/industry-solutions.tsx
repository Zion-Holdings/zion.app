import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function IndustrySolutions() {
	return (
		<>
			<SEO title="Industry Solutions | Zion Tech Group" description="Industry-specific AI, micro SAAS, and IT platforms for regulated and high-growth sectors." canonical="https://ziontechgroup.com/industry-solutions/" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Industry Solutions</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">Solutions with compliance, security, data governance, and measurable ROI.</p>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h3 className="text-xl font-semibold">Healthcare</h3>
							<ul className="mt-3 text-sm text-gray-300 space-y-2">
								<li><Link className="text-cyan-300" href="/healthcare-solutions">Healthcare Solutions</Link></li>
								<li>HIPAA-ready analytics, DSAR automation, PHI redaction</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h3 className="text-xl font-semibold">Financial Services</h3>
							<ul className="mt-3 text-sm text-gray-300 space-y-2">
								<li><Link className="text-cyan-300" href="/financial-solutions">Financial Solutions</Link></li>
								<li>Fraud detection, AML, risk engines, RegTech</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h3 className="text-xl font-semibold">Manufacturing</h3>
							<ul className="mt-3 text-sm text-gray-300 space-y-2">
								<li><Link className="text-cyan-300" href="/manufacturing-ai-solutions">Manufacturing AI</Link></li>
								<li>Predictive maintenance, quality control, supply optimization</li>
							</ul>
						</div>
					</div>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h3 className="text-xl font-semibold">Retail</h3>
							<ul className="mt-3 text-sm text-gray-300 space-y-2">
								<li><Link className="text-cyan-300" href="/retail-technology-solutions">Retail Technology</Link></li>
								<li>Personalization, inventory forecasting, customer experience</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h3 className="text-xl font-semibold">Public Sector</h3>
							<ul className="mt-3 text-sm text-gray-300 space-y-2">
								<li><Link className="text-cyan-300" href="/enterprise-solutions-showcase">Government Solutions</Link></li>
								<li>Citizen services, cyber defense, data platforms</li>
							</ul>
						</div>
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h3 className="text-xl font-semibold">Energy & Utilities</h3>
							<ul className="mt-3 text-sm text-gray-300 space-y-2">
								<li><Link className="text-cyan-300" href="/quantum-energy">Energy & Utilities</Link></li>
								<li>Grid intelligence, demand forecasting, anomaly detection</li>
							</ul>
						</div>
					</div>
					<div className="mt-10 flex gap-3">
						<Link href="/contact" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200">Talk to Sales</Link>
						<Link href="/pricing" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10">View Pricing</Link>
					</div>
				</div>
			</section>
		</>
	);
}