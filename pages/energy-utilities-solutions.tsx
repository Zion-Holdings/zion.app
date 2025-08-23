import React from 'react';
import Head from 'next/head';

export default function EnergyUtilitiesSolutionsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
			<Head>
				<title>Energy & Utilities Solutions | Zion Tech Group</title>
				<meta name="description" content="AI for grid optimization, predictive maintenance, and renewable integration." />
				<link rel="canonical" href="https://ziontechgroup.com/energy-utilities-solutions" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Energy & Utilities Solutions</h1>
				<ul className="list-disc list-inside text-slate-300 space-y-1">
					<li>Demand forecasting and grid optimization</li>
					<li>Asset health and predictive maintenance</li>
					<li>Renewable integration and storage optimization</li>
					<li>Leak detection and anomaly monitoring</li>
				</ul>
			</div>
		</div>
	);
}