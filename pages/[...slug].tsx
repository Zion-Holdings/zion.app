import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CatchAllPage() {
	return (
		<>
			<Head>
				<title>Page Coming Soon | Zion Tech Group</title>
				<meta name="robots" content="index, follow" />
			</Head>
			<div className="min-h-screen pt-28 px-4">
				<div className="max-w-3xl mx-auto text-white space-y-6">
					<h1 className="text-4xl font-bold">This page is coming soon</h1>
					<p className="text-gray-300">We're preparing high‑quality content for this route. In the meantime, explore these resources:</p>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li><Link href="/comprehensive-services-showcase-2025" className="text-cyan-400 underline">All Services</Link></li>
						<li><Link href="/market-pricing" className="text-cyan-400 underline">Market Pricing</Link></li>
						<li><Link href="/services-advertising" className="text-cyan-400 underline">Services Advertising</Link></li>
						<li><Link href="/contact" className="text-cyan-400 underline">Contact Us</Link></li>
					</ul>
				</div>
			</div>
		</>
	);
}