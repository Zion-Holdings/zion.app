import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function FinancialSolutionsLanding() {
	return (
		<UltraFuturisticBackground variant="financial" intensity="high">
			<Head>
				<title>Financial Solutions | Zion Tech Group</title>
				<meta name="description" content="Revolutionary fintech solutions including AI-powered trading, risk management, compliance automation, and financial intelligence platforms." />
				<link rel="canonical" href="https://ziontechgroup.com/financial-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">Financial Solutions</h1>
				<p className="text-gray-300 max-w-3xl">Transform your financial operations with our AI-powered trading platforms, risk management systems, and compliance automation solutions. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/ai-financial-intelligence">AI Financial Intelligence</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/quantum-financial-trading">Quantum Financial Trading</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/ai-revenue-forecasting-copilot">Revenue Forecasting</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/ai-powered-decision-engine">AI Decision Engine</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/ai-market-research">Market Research</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/ai-autonomous-business-operations">Business Operations</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/quantum-supply-chain-optimizer">Supply Chain Optimization</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/ai-legal-contract-analyzer">Legal Contract Analysis</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-yellow-500/50" href="/ai-sales-intelligence">Sales Intelligence</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}