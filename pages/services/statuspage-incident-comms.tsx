import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function StatuspageIncidentCommsPage() {
	return (
		<UltraFuturisticBackground variant="space" intensity="high">
			<Head>
				<title>Status Page & Incident Comms | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/statuspage-incident-comms" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">Status Page & Incident Comms</h1>
				<p className="text-gray-300 max-w-3xl mb-8">Hosted status page with SLOs, uptime checks, and incident communication workflows. Simple setup and easy embeds.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}