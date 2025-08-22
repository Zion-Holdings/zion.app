import React from 'react';
import Head from 'next/head';

export default function TransportationLogisticsSolutionsPage() {
	return (
		<>
			<Head>
				<title>Transportation & Logistics Solutions | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/transportation-logistics-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Transportation & Logistics</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Route optimization, demand forecasting, and real‑time visibility for fleets and logistics networks.</p>
				<ul className="list-disc list-inside text-gray-300 space-y-2">
					<li>Routing & dispatch optimization</li>
					<li>Warehouse and inventory analytics</li>
					<li>Real‑time tracking and ETA prediction</li>
				</ul>
				<p className="text-gray-400 mt-6">Contact: <a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a> • <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
			</div>
		</>
	);
}