import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function InventoryDemandForecastingPage() {
	return (
		<UltraFuturisticBackground variant="neural" intensity="high">
			<Head>
				<title>Inventory Demand Forecasting | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/inventory-demand-forecasting" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">Inventory Demand Forecasting</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Forecast SKU demand, optimize reorder points, and reduce stockouts using time-series and causal signals.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}