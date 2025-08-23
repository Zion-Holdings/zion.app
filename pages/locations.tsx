import React from 'react';
import Head from 'next/head';

export default function LocationsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Locations | Zion Tech Group</title>
				<meta name="description" content="Our office locations and contact information." />
				<link rel="canonical" href="https://ziontechgroup.com/locations" />
			</Head>
			<div className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Locations</h1>
				<div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/20">
					<h2 className="text-white text-xl font-semibold mb-2">Middletown, DE (HQ)</h2>
					<p className="text-slate-300">364 E Main St STE 1008 Middletown DE 19709</p>
				</div>
				<p className="text-slate-300">Call <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a> or email <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
			</div>
		</div>
	);
}