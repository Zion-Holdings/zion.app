import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function ChurnPredictionPlaybooksPage() {
	return (
		<UltraFuturisticBackground variant="holographic" intensity="high">
			<Head>
				<title>Churn Prediction & Playbooks | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/churn-prediction-playbooks" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Churn Prediction & Playbooks</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Predict churn from product and billing signals, then trigger retention playbooks and CRM/email automations.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}