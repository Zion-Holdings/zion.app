import React from 'react';
import Head from 'next/head';

export default function EnergyUtilitiesSolutionsPage() {
	return (
		<>
			<Head>
				<title>Energy & Utilities Solutions | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/energy-utilities-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Energy & Utilities</h1>
				<p className="text-gray-300 max-w-3xl mb-8">AI-powered grid optimization, predictive maintenance, and sustainability analytics for utilities and energy providers.</p>
				<ul className="list-disc list-inside text-gray-300 space-y-2">
					<li>Predictive maintenance for critical infrastructure</li>
					<li>Demand forecasting and load balancing</li>
					<li>Carbon tracking and sustainability reporting</li>
				</ul>
				<p className="text-gray-400 mt-6">Contact: <a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a> • <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
			</div>
		</>
	);
}