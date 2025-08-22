import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SmartCRMSuite() {
	return (
		<>
			<Head>
				<title>Smart CRM Intelligence Suite | Zion Tech Group</title>
				<meta name="description" content="AI-enhanced CRM insights, automation, and personalization." />
				<link rel="canonical" href="https://ziontechgroup.com/smart-crm-intelligence-suite" />
			</Head>
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Smart CRM Intelligence Suite</h1>
					<p className="text-gray-300 text-lg max-w-3xl mb-6">Transform CRM operations with AI-driven lead scoring, opportunity insights, and automated playbooks.</p>
					<div className="flex gap-3">
						<Link href="/services/smart-crm-intelligence-suite" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white">View Full Service</Link>
						<a href="tel:+13024640950" className="px-6 py-3 border border-white/20 rounded-lg text-white/90">Call +1 302 464 0950</a>
						<a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 border border-white/20 rounded-lg text-white/90">Email Us</a>
					</div>
				</div>
			</section>
		</>
	);
}