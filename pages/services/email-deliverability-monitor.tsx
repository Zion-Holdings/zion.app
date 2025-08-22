import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';

export default function EmailDeliverabilityMonitorPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Email Deliverability Monitor | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/services/email-deliverability-monitor" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">Email Deliverability Monitor</h1>
				<p className="text-gray-300 max-w-3xl mb-8">DMARC, SPF/DKIM checks, warmup automation, inbox placement tests, and blocklist monitoring with weekly reports.</p>
				<div className="flex gap-3">
					<Button href="/contact" className="bg-gradient-to-r from-sky-500 to-blue-600 text-white">Contact Sales</Button>
					<Button href="/market-pricing" variant="outline" className="border border-gray-600 text-gray-200">See Market Pricing</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}