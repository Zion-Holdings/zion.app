import React from 'react';
import Head from 'next/head';

export default function FinancialSolutionsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
			<Head>
				<title>Financial Services Solutions | Zion Tech Group</title>
				<meta name="description" content="Quantum-enhanced trading, AI risk assessment, and financial analytics solutions." />
				<link rel="canonical" href="https://ziontechgroup.com/financial-solutions" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Financial Services Solutions</h1>
				<ul className="list-disc list-inside text-slate-300 space-y-1">
					<li>Quantum trading simulators and backtesting</li>
					<li>AI credit risk and fraud detection</li>
					<li>Customer lifetime value and churn analytics</li>
					<li>Compliance automation and reporting</li>
				</ul>
			</div>
		</div>
	);
}