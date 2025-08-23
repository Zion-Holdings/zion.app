import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function DataAnalyticsLanding() {
	return (
		<UltraFuturisticBackground variant="data" intensity="high">
			<Head>
				<title>Data Analytics & Business Intelligence | Zion Tech Group</title>
				<meta name="description" content="Transform your business with our advanced data analytics, business intelligence, and AI-powered insights platform." />
				<link rel="canonical" href="https://ziontechgroup.com/data-analytics" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-6 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Data Analytics & Business Intelligence</h1>
				<p className="text-gray-300 max-w-3xl">Unlock the power of your data with our AI-driven analytics platform. Real-time insights, predictive analytics, and automated reporting. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-powered-decision-engine">AI Decision Engine</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-revenue-forecasting-copilot">Revenue Forecasting</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-market-research">AI Market Research</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-financial-intelligence">Financial Intelligence</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-customer-success">Customer Success Analytics</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-sales-intelligence">Sales Intelligence</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-manufacturing-optimization">Manufacturing Analytics</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-sustainability-platform">Sustainability Analytics</a>
					<a className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-green-500/50" href="/ai-autonomous-business-operations">Business Operations Analytics</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}