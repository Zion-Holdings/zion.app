import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function TransportationLogisticsSolutions() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Transportation & Logistics Solutions | Zion Tech Group</title>
				<meta name="description" content="AI route optimization, fleet telemetry, demand forecasting, and logistics automation." />
				<link rel="canonical" href="https://ziontechgroup.com/transportation-logistics-solutions" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Transportation & Logistics</h1>
				<p className="text-gray-300 max-w-3xl">Optimize routes, reduce fuel consumption, and improve on-time performance with AI-powered planning and real-time telemetry.</p>
			</div>
		</UltraFuturisticBackground>
	);
}